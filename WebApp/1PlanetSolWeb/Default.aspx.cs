using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.Services;
using System.Text;
using System.Net;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;

namespace _1PlanetSolWeb
{
    public partial class Default : System.Web.UI.Page
    {

        private static JavaScriptSerializer cereal = new JavaScriptSerializer();

        protected void Page_Load(object sender, EventArgs e)
        {
            //getSolarData();
        }

        [WebMethod]
        public static string signUp()
        {
            return "";
        }

        [WebMethod]
        public static string GetSolarData()
        {
            List<string> solarData = new List<string>();
            try
            {
                //button1.Text = "You clicked me";
                //button2.Text = "Click Me!";
                string uri = "http://lg1996.d.lighthousesolar.com/cgi-bin/egauge-show?b&n=30&c";
                string uri2 = "http://lg1996.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c";
                string uri3 = "http://lg1499.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=30&S&s=0&c";
                //endpoint.Text = uri2;
                HttpWebRequest httpRequest = (HttpWebRequest)WebRequest.Create(uri2);
                httpRequest.Credentials = CredentialCache.DefaultCredentials;
                HttpWebResponse httpResponse = (HttpWebResponse)httpRequest.GetResponse();

                Stream dataStream = httpResponse.GetResponseStream();
                using (TextFieldParser parser = new TextFieldParser(dataStream))
                {
                    string header = parser.ReadLine();
                    //parser.TextFieldType = FieldType.Delimited;
                    parser.Delimiters = new string[] { "," };

                    while (!parser.EndOfData)
                    {
                        //Process row
                        string[] fields = parser.ReadFields();
                        for (int i = 0; i < fields.Length; i++)
                        {
                            if (i == 2)
                            {
                                double energy = Convert.ToDouble(fields[i]);

                                //solarData.Add(Math.Round((energy), 4));
                                solarData.Add(DateTime.Now.ToLongTimeString());
                                solarData.Add(Math.Round((energy * .106), 5).ToString());
                                solarData.Add(Math.Round((energy * .106), 5).ToString());
                                //solarData.Add(Math.Round((energy * .703), 2));
                                //solarData.Add(Math.Round((energy * 1.7), 2));
                                //solarData.Add(Math.Round((energy * .018), 2));
                                break;
                            }
                        }
                    }
                }

                //graph_data.Value = "34,43,65,21,5,43,43,32,32,12,31,32,12,32,23,12";

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return cereal.Serialize(solarData);
        }

        [WebMethod]
        public static string Subscribe(string emailAddr)
        {
            bool success = false;


            return cereal.Serialize(success);
        }

    }
}

