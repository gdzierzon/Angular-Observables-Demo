using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace BooksPlusServer.Data
{
    public class BooksPlusContext: DbContext
    {
        public BooksPlusContext()
        {
            
        }

        public BooksPlusContext(DbContextOptions<BooksPlusContext> options)
            :base(options)
        {
            
        }
        
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity => { entity.Property(c => c.CategoryName).IsRequired(); });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.HasOne(b => b.Category)
                    .WithMany(c => c.Books)
                    .HasForeignKey(b => b.BookId);
            });
        }
    }
}