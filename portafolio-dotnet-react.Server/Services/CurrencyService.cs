using System.Text.Json;

namespace portafolio_dotnet_react.Server.Services;

public class CurrencyService : ICurrencyService
{
    private readonly HttpClient _httpClient;
    private readonly ILogger<CurrencyService> _logger;
    // URL de la API pública gratuita
    private const string ExchangeRateApiUrl = "https://open.er-api.com/v6/latest/USD"; // [citation:6]

    public CurrencyService(HttpClient httpClient, ILogger<CurrencyService> logger)
    {
        _httpClient = httpClient;
        _logger = logger;
    }

    public async Task<CurrencyRateResponse?> GetRatesAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync(ExchangeRateApiUrl);
            response.EnsureSuccessStatusCode();

            var jsonResponse = await response.Content.ReadAsStringAsync();
            // Deserializar la respuesta JSON a un objeto C# (definir la clase CurrencyRateResponse)
            var rates = JsonSerializer.Deserialize<CurrencyRateResponse>(jsonResponse);
            return rates;
        }
        catch (HttpRequestException ex)
        {
            _logger.LogError(ex, "Error al obtener tasas de cambio de la API externa.");
            return null;
        }
    }
}

// Clase para mapear la respuesta de la API
public class CurrencyRateResponse
{
    public string result { get; set; }
    public string base_code { get; set; }
    public Dictionary<string, decimal> rates { get; set; }
}
