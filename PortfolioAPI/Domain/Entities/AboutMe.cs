namespace PortfolioAPI.Domain.Entities
{
    public class AboutMe
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<string> Studies { get; set; } = new List<string>();
        public string ContactDetails { get; set; } = string.Empty;
        public string Whatsapp { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string LinkedInUrl { get; set; } = string.Empty;
        public string GithubUrl { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string CvUrl { get; set; } = string.Empty;
    }
}
