using Microsoft.AspNetCore.Mvc;
using portafolio_dotnet_react.Server.Services;

namespace portafolio_dotnet_react.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CurrencyController : ControllerBase
{
    private readonly ICurrencyService _currencyService;

    public CurrencyController(ICurrencyService currencyService)
    {
        _currencyService = currencyService;
    }

    [HttpGet("rates")]
    public async Task<IActionResult> GetRates()
    {
        var rates = await _currencyService.GetRatesAsync();
        if (rates == null)
        {
            return StatusCode(503, "No se pudo obtener la información de cambio de divisas.");
        }
        return Ok(rates);
    }
}
