
namespace R2.Halo.CoreEntities.Sample
{
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public virtual Category Category { get; set; }
    }
}