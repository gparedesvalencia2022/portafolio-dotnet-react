import { apiFetch } from './baseService'; // Ajusta la ruta según donde tengas apiFetch

// ============================================================
// SERVICIO DE MONEDAS - Usa apiFetch para manejar reintentos
// ============================================================

export const getCurrencyRates = async () => {
    try {
        // ✅ Usa apiFetch para obtener las tasas de cambio
        const data = await apiFetch('/api/currency/rates');

        // Si hay un error en la respuesta del servidor
        if (data?.error) {
            console.error('Error en la API de monedas:', data.status);
            return null;
        }

        // Si la respuesta es válida, la retorna
        return data;
    } catch (error) {
        console.error('Error al obtener las tasas de cambio:', error);
        return null;
    }
};

// ============================================================
// FUNCIÓN PARA OBTENER SOLO USD Y CAD
// ============================================================

export const getUsdAndCadRates = async () => {
    const rates = await getCurrencyRates();

    if (!rates || !rates.rates) {
        console.error('No se pudieron obtener las tasas de cambio');
        return null;
    }

    // ✅ Extrae USD y CAD de la respuesta de la API
    return {
        usd: rates.rates.USD || 1, // USD siempre es 1 si base es USD
        cad: rates.rates.CAD || null,
        base: rates.base_code || 'USD',
        timestamp: new Date().toLocaleString()
    };
};

// ============================================================
// FUNCIÓN PARA OBTENER CON VALOR FIJO DE CAD (Ejemplo)
// ============================================================

export const getCadRateFromUsd = async () => {
    const rates = await getCurrencyRates();

    if (!rates || !rates.rates || !rates.rates.CAD) {
        console.error('No se pudo obtener el valor de CAD');
        return null;
    }

    return {
        usd: 1,
        cad: rates.rates.CAD,
        base: 'USD',
        timestamp: new Date().toLocaleString()
    };
};