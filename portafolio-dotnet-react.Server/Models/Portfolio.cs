namespace portafolio_dotnet_react.Server.Models
{
    public class Portfolio
    {
        public Header Header { get; set; }
        public List<string> Technologies { get; set; }
        public List<Project> Projects { get; set; }
        public List<string> AboutEn { get; set; }
        public List<string> AboutFr { get; set; }
        public List<string> AboutEs { get; set; }
    }

    public class Header
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
    }

    public class Project
    {
        public string Title { get; set; }
        public List<string> Lines { get; set; }
    }
}