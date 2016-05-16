using System;

namespace Applibrary
{
    [FlagsAttribute]
    public enum Footer : short
    {
        None = 0,
        Synchronize = 1,
        Orders = 2
    }
}
