using System;

namespace R2.Disaster.WebFramework.EmbeddedViews
{
    [Serializable]
    public class EmbeddedViewMetadata
    {
        public string Name { get; set; }
        public string AssemblyFullName { get; set; }
    }
}