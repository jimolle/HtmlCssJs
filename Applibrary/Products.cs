using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Applibrary
{
    public class Products
    {
        public static List<Product> GetProducts()
        {
            var tempList = new List<Product>()
            {
                new Product() {Name="Polygrip Cobra"},
                new Product() {Name="Vattenpass pocket"},
                new Product() {Name="Skruvdragare"},
                new Product() {Name="Allroundgas"},
                new Product() {Name="Dragblock"},
                new Product() {Name="Räfsa"}
            };

            return tempList;
        }

    }

    public class Product
    {
        public string Name { get; set; }
    }

}