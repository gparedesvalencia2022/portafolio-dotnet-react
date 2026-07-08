namespace portafolio_dotnet_react.Server.Services
{
    public interface ICurrencyService
    {
        Task<CurrencyRateResponse?> GetRatesAsync();
    }
}
