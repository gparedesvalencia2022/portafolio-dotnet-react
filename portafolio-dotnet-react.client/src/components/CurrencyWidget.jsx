import React, { useState, useEffect } from 'react';
import { getUsdAndCadRates } from '../services/currencyService';

const CurrencyWidget = () => {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getUsdAndCadRates();
                if (data) {
                    setRates(data);
                } else {
                    setError('Could not fetch exchange rates');
                }
            } catch (err) {
                setError(err.message || 'Error loading exchange rates');
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    if (loading) {
        return (
            <div className="currency-widget loading">
                <div className="spinner-border spinner-border-sm text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="currency-widget error">
                <p className="text-danger mb-0">⚠️ {error}</p>
            </div>
        );
    }

    return (
        <div className="currency-widget">
            <div className="card bg-dark text-white border-success">
                <div className="card-header">
                    <h6 className="mb-0 text-center">
                        💰 My full-stack hourly rate: <strong>90 USD</strong>
                        <span className="text-white ms-2 text-center">
                            ≈ ${rates?.cad ? (90 * rates.cad).toFixed(2) : '...'} CAD
                        </span>
                    </h6>
                    <small className="text-white text-center" style={{ fontSize: '0.65rem' }}>
                        💱 Based on current USD/CAD exchange rate
                    </small>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex justify-content-between">
                                <span className="text-white">USD</span>
                                <span className="fw-bold text-success">${rates?.usd?.toFixed(4)}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-between">
                                <span className="text-white">CAD</span>
                                <span className="fw-bold text-success">${rates?.cad?.toFixed(4)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <small className="text-white">
                            Updated: {rates?.timestamp}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyWidget;