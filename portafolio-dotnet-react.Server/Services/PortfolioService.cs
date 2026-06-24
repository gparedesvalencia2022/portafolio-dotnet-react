using Microsoft.Extensions.Caching.Memory;
using portafolio_dotnet_react.Server.Models;

namespace portafolio_dotnet_react.Server.Services
{
    public class PortfolioService : IPortfolioService
    {

        private readonly IMemoryCache _cache;

        public PortfolioService(IMemoryCache cache)
        {
            _cache = cache;
        }

        public async Task<Portfolio> GetPortfolioAsync()
        {

            if (_cache.TryGetValue("portfolio", out Portfolio? cached))
            {
                return cached!;
            }


            await Task.Delay(2000);  // simulation DB
            //por ahora hardcoded
            var portfolio = new Portfolio
            {
                Header = new Header
                {
                    Title = "Building scalable enterprise solutions with .NET & Cloud",
                    Subtitle = ".NET Developer | Cloud | DevOps"
                },

                Technologies = new List<string>
                {
                    "C# .NET ASP.NET MVC",
                    "JavaScript HTML5 CSS3",
                    "React Angular",
                    "SQL Server Oracle",
                    "Azure Docker Kubernetes",
                    "Git Azure DevOps"
                },

                Projects = new List<Project>
                {
                    new Project
                    {
                        Title = "Enterprise Application (.NET MVC)",
                        Lines = new List<string>
                        {
                            "Development of scalable enterprise applications",
                            "Clean architecture",
                            "SQL Server + APIs"
                        }
                    },
                    new Project
                    {
                        Title = "Microservices (.NET Core)",
                        Lines = new List<string>
                        {
                            "Microservices architecture",
                            "REST APIs",
                            "React / Angular"
                        }
                    },
                    new Project
                    {
                        Title = "Cloud & DevOps",
                        Lines = new List<string>
                        {
                            "CI/CD Azure DevOps",
                            "Docker & Kubernetes",
                            "Cloud deployment"
                        }
                    },
                    new Project
                    {
                        Title = "Full-stack",
                        Lines = new List<string>
                        {
                            "Frontend + Backend",
                            "React / Angular",
                            "End-to-end systems"
                        }
                    }
                },

                AboutEn = new List<string>
                {
                    "Enterprise modernization with .NET",
                    "Learning Azure, DevOps, React",
                    "Open to collaboration",
                    "Ask me about C#, ASP.NET, SQL Server"
                },

                AboutFr = new List<string>
                {
                    "Projets de modernisation .NET",
                    "Apprentissage Azure, DevOps, React",
                    "Collaboration ouverte",
                    "Discutons C#, ASP.NET et SQL Server"
                },

                AboutEs = new List<string>
                {
                    "Modernización con .NET",
                    "Aprendiendo Azure, DevOps, React",
                    "Abierto a colaboración",
                    "Hablemos de C#, ASP.NET, SQL Server"
                }
            };

            
            return (portfolio);
        }
    }
}
