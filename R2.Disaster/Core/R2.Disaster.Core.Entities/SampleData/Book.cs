
namespace R2.Disaster.CoreEntities
{
    public class Book:BaseEntity
    {
        //public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public virtual Category Category { get; set; }
    }
}