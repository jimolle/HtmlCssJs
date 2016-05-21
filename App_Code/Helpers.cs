using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Configuration;

// TODO ev. lägga till namespace om jag orkar...

/// <summary>
/// Global helpers for OrderApp.
/// </summary>
public class Helpers
{
    public static string[] ListOrdersOnDisk()
    {
        var path = GetOrdersPath();

        string[] filePaths = Directory.GetFiles(path);

        for (int i = 0; i < filePaths.Length; i++)
        {
            filePaths[i] = Path.GetFileNameWithoutExtension(filePaths[i]);

            filePaths[i] = FormatDateForOutput(filePaths[i]);
        }

        return filePaths; //file names without extension
    }

    private static string FormatDateForOutput(string filePath)
    {
        //var test = "2016-05-17 092728 test Test";

        if (filePath == "  ")
            return "";
        try
        {
            var part1 = filePath.Substring(0, 13);
            var part2 = filePath.Substring(15);

            return part1 + ":" + part2;
        }
        catch (Exception e)
        {
            //Should log
            Debug.WriteLine("Error: " + e.Message);
        }

        return "Korrupt orderfil";
    }

    public static string GetOrdersPath()
    {
        var path = WebConfigurationManager.AppSettings["orderPath"].ToString();

        if (!Directory.Exists(path))
        {
            Directory.CreateDirectory(path);
        }

        return path;
    }

    public static void WriteToOrderFile(string path, string product, string amount, string billingAddress, string shippingAddress)
    {
        using (var file = new System.IO.StreamWriter(path))
        {
            file.WriteLine(product + ": " + amount + " st");
            file.WriteLine();
            file.WriteLine("Fakturaadress:");
            file.WriteLine(billingAddress);
            file.WriteLine("Leveransadress:");
            file.WriteLine(shippingAddress);
        }
    }
}