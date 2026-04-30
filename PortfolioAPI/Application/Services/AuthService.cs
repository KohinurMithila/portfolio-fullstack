using PortfolioAPI.Application.DTOs;


namespace PortfolioAPI.Application.Services
{
    public class AuthService
    {
        private readonly AppDbContext _context;
        private readonly JwtHelper _jwt;

        public AuthService(AppDbContext context, JwtHelper jwt)
        {
            _context = context;
            _jwt = jwt;
        }

        public string Login(LoginDto dto)
        {
            var user = _context.AdminUsers.FirstOrDefault(x => x.Email == dto.Email);

            if (user == null)
                throw new Exception("Invalid credentials");

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
                throw new Exception("Invalid credentials");

            return _jwt.GenerateToken(user);
        }
    }
}
