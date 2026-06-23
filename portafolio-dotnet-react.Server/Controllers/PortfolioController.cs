using Microsoft.AspNetCore.Mvc;
using portafolio_dotnet_react.Server.Models;

namespace portafolio_dotnet_react.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PortfolioController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var portfolio = new Portfolio
            {
                Header = new Header
                {
                    Title = "🚀 Building scalable enterprise solutions with .NET & Cloud",
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
                    "🔭 Working on enterprise modernization with .NET",
                    "🌱 Learning Azure, DevOps, React",
                    "👯 Open to collaboration",
                    "💬 Ask me about C#, ASP.NET, SQL Server"
                },

                AboutFr = new List<string>
                {
                    "🔭 Projets de modernisation .NET",
                    "🌱 Apprentissage Azure et DevOps",
                    "👯 Collaboration ouverte",
                    "💬 C#, ASP.NET, SQL Server"
                },

                AboutEs = new List<string>
                {
                    "🔭 Modernización con .NET",
                    "🌱 Aprendiendo Azure y DevOps",
                    "👯 Abierto a colaboración",
                    "💬 C#, ASP.NET, SQL Server"
                }
            };

            return Ok(portfolio);
        }
    }
}