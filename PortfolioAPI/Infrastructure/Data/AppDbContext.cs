using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Domain.Entities;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Skill> Skills { get; set; }
    public DbSet<Experience> Experiences { get; set; }
    public DbSet<AdminUser> AdminUsers { get; set; }
    public DbSet<AboutMe> AboutMeInfo { get; set; }
}