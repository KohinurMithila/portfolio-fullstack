using PortfolioAPI.Application.DTOs;
using PortfolioAPI.Application.Interfaces;
using PortfolioAPI.Domain.Entities;


namespace PortfolioAPI.Application.Services
{
    public class ProjectService
    {
        private readonly IGenericRepository<Project> _repo;

        public ProjectService(IGenericRepository<Project> repo)
        {
            _repo = repo;
        }

        public async Task<List<Project>> GetAll()
            => await _repo.GetAllAsync();

        public async Task<Project> Create(ProjectDto dto)
        {
            var project = new Project
            {
                Title = dto.Title,
                Description = dto.Description,
                TechStack = dto.TechStack,
                ImageUrl = dto.ImageUrl,
                LiveLink = dto.LiveLink,
                GithubLink = dto.GithubLink,
                CreatedAt = DateTime.UtcNow
            };

            await _repo.AddAsync(project);
            await _repo.SaveAsync();

            return project;
        }

        public async Task<Project> Update(int id, ProjectDto dto)
        {
            var project = await _repo.GetByIdAsync(id);
            if (project == null) throw new Exception("Not found");

            project.Title = dto.Title;
            project.Description = dto.Description;
            project.TechStack = dto.TechStack;
            project.ImageUrl = dto.ImageUrl;
            project.LiveLink = dto.LiveLink;
            project.GithubLink = dto.GithubLink;

            _repo.Update(project);
            await _repo.SaveAsync();

            return project;
        }

        public async Task Delete(int id)
        {
            var project = await _repo.GetByIdAsync(id);
            if (project == null) throw new Exception("Not found");

            _repo.Delete(project);
            await _repo.SaveAsync();
        }
    }
}
