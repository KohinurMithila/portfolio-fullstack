namespace PortfolioAPI.Application.DTOs
{
    public class ExperienceDto
    {
        public string CompanyName { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
