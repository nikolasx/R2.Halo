
namespace R2.Halo.CoreEntities.Sample
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual Book Book { get; set; }
    }
}