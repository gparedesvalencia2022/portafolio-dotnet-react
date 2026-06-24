using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using portafolio_dotnet_react.Server.Services;

namespace portafolio_dotnet_react.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PortfolioController : ControllerBase
    {
        private readonly IPortfolioService _service;

        public PortfolioController(IPortfolioService service)
        {
            _service = service;
        }

       // [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var data = await _service.GetPortfolioAsync();
            return Ok(data);
        }
    }
}