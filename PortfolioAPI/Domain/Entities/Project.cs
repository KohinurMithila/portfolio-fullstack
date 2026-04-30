namespace PortfolioAPI.Domain.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? TechStack { get; set; }
        public string? ImageUrl { get; set; }
        public string? LiveLink { get; set; }
        public string? GithubLink { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
