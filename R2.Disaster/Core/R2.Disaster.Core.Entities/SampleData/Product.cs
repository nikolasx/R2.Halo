
namespace R2.Disaster.CoreEntities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public Category Category { get; set; }
        public int CagetoryId { get; set; }
    }
}