using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applibrary
{
    [FlagsAttribute]
    public enum Footer : short
    {
        None = 0,
        Synchronize = 1,
        Orders = 2
    };
}
