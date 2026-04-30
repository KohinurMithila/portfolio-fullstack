using PortfolioAPI.Application.DTOs;
using PortfolioAPI.Application.Interfaces;
using PortfolioAPI.Domain.Entities;

namespace PortfolioAPI.Application.Services
{
    public class SkillService
    {
        private readonly IGenericRepository<Skill> _repo;

        public SkillService(IGenericRepository<Skill> repo)
        {
            _repo = repo;
        }

        public async Task<List<Skill>> GetAll()
            => await _repo.GetAllAsync();

        public async Task<Skill> Create(SkillDto dto)
        {
            var skill = new Skill
            {
                Name = dto.Name,
                Level = dto.Level,
                Icon = dto.Icon
            };

            await _repo.AddAsync(skill);
            await _repo.SaveAsync();
            return skill;
        }

        public async Task<Skill> Update(int id, SkillDto dto)
        {
            var skill = await _repo.GetByIdAsync(id);
            if (skill == null) throw new Exception("Skill not found");

            skill.Name = dto.Name;
            skill.Level = dto.Level;
            skill.Icon = dto.Icon;

            _repo.Update(skill);
            await _repo.SaveAsync();

            return skill;
        }

        public async Task Delete(int id)
        {
            var skill = await _repo.GetByIdAsync(id);
            if (skill == null) throw new Exception("Skill not found");

            _repo.Delete(skill);
            await _repo.SaveAsync();
        }
    }
}
