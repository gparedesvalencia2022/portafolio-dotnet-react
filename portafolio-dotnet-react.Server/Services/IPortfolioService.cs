using portafolio_dotnet_react.Server.Models;

namespace portafolio_dotnet_react.Server.Services
{
    public interface IPortfolioService
    {
        Task<Portfolio> GetPortfolioAsync();
    }
}