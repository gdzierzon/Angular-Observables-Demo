using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace BooksPlusServer.Data
{
    [Table("Book")]
    public class Book
    {
        public Book()
        {
            
        }

        public int BookId { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public DateTime PublishDate { get; set; }
        public decimal Price { get; set; }
        public string ISBN { get; set; }

        public Category Category { get; set; }

    }
}