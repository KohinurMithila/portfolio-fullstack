using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Application.DTOs;
using PortfolioAPI.Application.Services;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _service;

        public AuthController(AuthService service)
        {
            _service = service;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var token = _service.Login(dto);
            return Ok(new { token });
        }

        [HttpPost("register")]
        public IActionResult Register([FromServices] AppDbContext context)
        {
            if (context.AdminUsers.Any()) return BadRequest("User already exists");
            var user = new PortfolioAPI.Domain.Entities.AdminUser 
            { 
                Email = "admin@admin.com", 
                Username = "admin",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin123"),
                Role = "Admin"
            };
            context.AdminUsers.Add(user);
            context.SaveChanges();
            return Ok("Admin user created");
        }

    }
}
