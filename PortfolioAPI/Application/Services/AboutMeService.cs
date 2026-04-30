using PortfolioAPI.Application.DTOs;
using PortfolioAPI.Application.Interfaces;
using PortfolioAPI.Domain.Entities;

namespace PortfolioAPI.Application.Services
{
    public class AboutMeService
    {
        private readonly IGenericRepository<AboutMe> _repo;

        public AboutMeService(IGenericRepository<AboutMe> repo)
        {
            _repo = repo;
        }

        public async Task<AboutMe> Get()
        {
            var all = await _repo.GetAllAsync();
            return all.FirstOrDefault() ?? new AboutMe();
        }

        public async Task<AboutMe> Save(AboutMeDto dto)
        {
            var all = await _repo.GetAllAsync();
            var about = all.FirstOrDefault();

            if (about == null)
            {
                about = new AboutMe
                {
                    Name = dto.Name,
                    Studies = dto.Studies,
                    ContactDetails = dto.ContactDetails,
                    Whatsapp = dto.Whatsapp,
                    Email = dto.Email,
                    Address = dto.Address,
                    LinkedInUrl = dto.LinkedInUrl,
                    GithubUrl = dto.GithubUrl,
                    ImageUrl = dto.ImageUrl,
                    CvUrl = dto.CvUrl
                };
                await _repo.AddAsync(about);
            }
            else
            {
                about.Name = dto.Name;
                about.Studies = dto.Studies;
                about.ContactDetails = dto.ContactDetails;
                about.Whatsapp = dto.Whatsapp;
                about.Email = dto.Email;
                about.Address = dto.Address;
                about.LinkedInUrl = dto.LinkedInUrl;
                about.GithubUrl = dto.GithubUrl;
                about.ImageUrl = dto.ImageUrl;
                about.CvUrl = dto.CvUrl;
                _repo.Update(about);
            }

            await _repo.SaveAsync();
            return about;
        }
    }
}
