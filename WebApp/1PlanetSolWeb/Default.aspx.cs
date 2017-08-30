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
        private static string[] meterURIs = {
                "http://lg1654.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c",
                "http://lg1236.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c",
                "http://lg1009.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c",
                "http://lg1498.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c",
                "http://lg1499.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c",
                "http://lg1996.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c"
        };

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
                double energy = 0d;

                //string uri2 = "http://lg1996.d.lighthousesolar.com/cgi-bin/egauge-show?a&n=1&S&s=0&c";
                //endpoint.Text = uri2;
                HttpWebRequest httpRequest;
                HttpWebResponse httpResponse;
                //Stream dataStream;
                foreach (string uri in meterURIs)
                {
                    httpRequest = (HttpWebRequest)WebRequest.Create(uri);
                    httpRequest.Credentials = CredentialCache.DefaultCredentials;
                    httpResponse = (HttpWebResponse)httpRequest.GetResponse();

                    //dataStream = httpResponse.GetResponseStream();
                    using (TextFieldParser parser = new TextFieldParser(httpResponse.GetResponseStream()))
                    {
                        string header = parser.ReadLine();
                        parser.Delimiters = new string[] { "," };

                        while (!parser.EndOfData)
                        {
                            //Process row
                            string[] fields = parser.ReadFields();
                            for (int i = 0; i < fields.Length; i++)
                            {
                                if (i == 2)
                                {
                                    energy += Convert.ToDouble(fields[i]);

                                    //solarData.Add(Math.Round((energy), 4));
                                    //solarData.Add(Math.Round((energy * .106), 2));
                                    //solarData.Add(Math.Round((energy * .703), 2));
                                    //solarData.Add(Math.Round((energy * 1.7), 2));
                                    //solarData.Add(Math.Round((energy * .018), 2));
                                    break;
                                }
                            }
                        }
                    }
                }

                solarData.Add(DateTime.Now.ToLongTimeString());
                solarData.Add(Math.Round((energy * .106), 2).ToString());
                solarData.Add(Math.Round((energy * .703), 5).ToString());

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

