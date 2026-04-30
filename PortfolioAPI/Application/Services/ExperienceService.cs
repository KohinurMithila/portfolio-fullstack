using PortfolioAPI.Application.DTOs;
using PortfolioAPI.Application.Interfaces;
using PortfolioAPI.Domain.Entities;

namespace PortfolioAPI.Application.Services
{
    public class ExperienceService
    {
        private readonly IGenericRepository<Experience> _repo;

        public ExperienceService(IGenericRepository<Experience> repo)
        {
            _repo = repo;
        }

        public async Task<List<Experience>> GetAll()
            => await _repo.GetAllAsync();

        public async Task<Experience> Create(ExperienceDto dto)
        {
            var exp = new Experience
            {
                CompanyName = dto.CompanyName,
                Role = dto.Role,
                Description = dto.Description,
                StartDate = dto.StartDate,
                EndDate = dto.EndDate
            };

            await _repo.AddAsync(exp);
            await _repo.SaveAsync();
            return exp;
        }

        public async Task<Experience> Update(int id, ExperienceDto dto)
        {
            var exp = await _repo.GetByIdAsync(id);
            if (exp == null) throw new Exception("Experience not found");

            exp.CompanyName = dto.CompanyName;
            exp.Role = dto.Role;
            exp.Description = dto.Description;
            exp.StartDate = dto.StartDate;
            exp.EndDate = dto.EndDate;

            _repo.Update(exp);
            await _repo.SaveAsync();

            return exp;
        }

        public async Task Delete(int id)
        {
            var exp = await _repo.GetByIdAsync(id);
            if (exp == null) throw new Exception("Experience not found");

            _repo.Delete(exp);
            await _repo.SaveAsync();
        }
    }
}
