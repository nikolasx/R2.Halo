namespace R2.Disaster.Core.Infrastructure
{
    public interface IStartupTask 
    {
        void Execute();

        int Order { get; }
    }
}
