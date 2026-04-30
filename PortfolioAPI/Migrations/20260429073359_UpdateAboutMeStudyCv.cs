using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAboutMeStudyCv : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Study",
                table: "AboutMeInfo",
                newName: "Studies");

            migrationBuilder.AddColumn<string>(
                name: "CvUrl",
                table: "AboutMeInfo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CvUrl",
                table: "AboutMeInfo");

            migrationBuilder.RenameColumn(
                name: "Studies",
                table: "AboutMeInfo",
                newName: "Study");
        }
    }
}
