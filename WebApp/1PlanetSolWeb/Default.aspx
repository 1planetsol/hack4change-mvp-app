<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="_1PlanetSolWeb.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<div id="navbar-full">
    <div class="container">
        <nav class="navbar navbar-ct-blue navbar-transparent navbar-fixed-top" role="navigation">
          
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="Default.aspx">
                     <div class="logo-container">
                        <div class="logo">
							<img src="assets/img/1planet_logo.png" />
                        </div>
                    </div>
                </a>
            </div>
        
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
					<li><a href="mission.html" style="font-size: 20px; font-family: 'Nunito', sans-serif;">Mission</a></li>
					<li><a href="news.html" style="font-size: 20px; font-family: 'Nunito', sans-serif;">News</a></li>
               </ul>
              
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    </div><!--  end container-->
    
    <div class='blurred-container'>
        <div class="row">
            <div class="col-sm-12">
            <div class="motto">
                
                <p class="ps-stats">Families Powered:&nbsp;6</p>
                <p class="ps-stats">Dollars Saved:&nbsp;$<span id="amountSaved"></span></p>
                <p class="ps-stats">Tonnes CO<sub>2</sub>:&nbsp;<span id="tonnes"></span></p>

            </div>
            </div>

		</div>
        <div class="img-src" style="background-image: url('assets/img/1planet_cover.jpg');"></div>
        <div class='img-src blur' style="background-image: url('assets/img/1planet_cover.jpg')"></div>
    </div>
</div>     
    
<div class="main">
    <div class="container tim-container">
		<div class="space-60"></div>
        <div class="tagline">
            <div class="row">
                <div class="col-md-12">
				POWER FOR ALL STARTS WITH YOU
				</div>
            </div>
        </div>
		<div class="space-25"></div>
		<div class="about">
			<div class="row">
				<div class="col-sm-12">
					1PlanetSol is a non-profit bringing the benefits of solar to everyone. Working with Austin Habitat for Humanity and The Texas Energy Poverty Research Institute, we're launching 1AustinSol in 2018 to bring you discounts at local businesses and free solar to low-income families in Austin
				</div>
			</div>
        </div>
        <div class="subscribe">
			<div class="row">
                <button id="subscribe" class="btn btn-default ps-btn text-blue" type="button"><strong>Subscribe</strong></button>
			</div>
		</div>
		<div class="space-60"></div>
    </div>
    <!-- end container -->
</div>

<div class="main">

    <div class="container mobile-container">
        <div id="extras">
            <div class="space-30"></div>
            <div class="row">
                <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1">
                    <div class="text-center">
                        <img src="assets/img/1planetsol_landingpage.png" alt="Mobile App" class="img-rounded img-responsive img-mobile" />
                    </div>
                </div>
                <div class="col-md-5 col-sm-12">
                    <h1 class="text-center text-blue">The Mobile App
                                
                    <!--<small class="subtitle">Solar To Go</small>-->

                    </h1>
                    <hr />
                    <p>
                    The 1PlanetSol mobile app will be your home for the status of your solar community, membership in the community, and information about the rewards program.
                    </p>
                </div>
            </div>
            
        </div>
    <!--     end extras -->    
    </div>
<!-- end container -->

</div>


<!-- end main -->


<script type="text/javascript">
    /*
	$('.carousel').carousel({
      interval: 4000
    });
    */

    var fetchData = function (json, dataURL) {
        return $.ajax({
            data: json,
            dataType: "json",
            //url: 'https://us15.api.mailchimp.com/3.0/lists/a191a6cb8b/members/',
            url: dataURL,
            type: "POST",
            contentType: "application/json;charset=utf-8"
        });
    };

    (function poll() {
        setTimeout(function () {
            var solarData = fetchData('', 'Default.aspx/GetSolarData');
            solarData.done(function (data) {
                //var obj = JSON.parse(data.d);
            });
            solarData.success(function (data) {
                if (data.d) {
                    //alert('data success d: ' + data.d);
                    var obj = JSON.parse(data.d);
                    //alert(obj[0] + ' ' + obj[1] + ' ' + obj[2]);
                    //$('#datetime').html(obj[0]);
                    $('#amountSaved').html(obj[1]);
                    $('#tonnes').html(obj[2]);
                }
                //else
                //    alert('data success but no data');
            });

            solarData.error(function (data) {
                //var obj = JSON.parse(data.d);
                //alert('data error: ' + data.value);
            });
            solarData.fail(function (data) {
                //var obj = JSON.parse(data.d);
                //alert('data fail: ' + data.d);
            });
            solarData.complete(poll);

        }, 2000);
    })();
    /*
	$('#subscribe').click(function (event) {
		var obj = new Object();
		obj.emailAddr = 'matthew.ross@hartehanks.com';
		var dataJson = JSON.stringify(obj);
        var subscribed = fetchData(dataJson, 'Default.aspx/Subscribe');
		subscribed.done(function (data) {
			if (data.d) {
				var obj = JSON.parse(data.d);
				alert('data: ' + data.d);
			}
		})

		//show alert if webservice error
		subscribed.fail(function (jqXHR, textStatus, errorThrown) {
			alert(textStatus + ': ' + errorThrown);
		});

		return false;
	});
    */
</script>

</asp:Content>