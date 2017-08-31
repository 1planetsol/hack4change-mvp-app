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
                <a href="index.html">
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
        <div class="motto">
            <div class="hidden-sm hidden-xs">
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-statsHeader">Families</p>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-statsHeader">Dollars</p>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-statsHeader">Tonnes CO<sub>2</sub></p>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <div class="row ps-rowpad">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-statsHeader">Powered</p>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-statsHeader">Saved</p>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-statsHeader">Offset</p>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-stats">6</p>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-stats">$<span id="amountSaved"></span></p>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2 ps-center">
                        <p class="ps-stats"><span id="tonnes"></span></p>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
            <div class="visible-sm visible-xs">
                <p class="ps-statsSmall">Families Powered:&nbsp;6</p>
                <p class="ps-statsSmall">Dollars Saved:&nbsp;$<span id="amountSavedSmall"></span></p>
                <p class="ps-statsSmall">Tonnes CO<sub>2</sub>:&nbsp;<span id="tonnesSmall"></span></p>
            </div>
        </div>

        <div class="img-src" style="background-image: url('assets/img/1planet_cover.jpg');"></div>
        <div class='img-src blur' style="background-image: url('assets/img/1planet_cover.jpg')"></div>
    </div>

</div>

<div class="modal fade" id="subscribeModal" tabindex="-1" role="dialog" aria-labelledby="subscribeLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<!--<h4 class="modal-title" id="myModalLabel">Modal title</h4>-->
			</div>
			<div class="modal-body">
				<p class="ps-font-Nunito ps-rowpad">Thank you for your interest in 1PlanetSol, and bringing the benefits of solar to everyone!</p>
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-envelope"></i>
					</span>
					<input type="text" class="form-control"/>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" data-dismiss="modal">Invite me to the Launch!</button>
			</div>
		</div>
	</div>
</div>   
    
<div class="main">
    <div class="container tim-container">
		<div class="space-60"></div>
		<div class="row">
			<div class="col-md-12">
				<div class="tagline">
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
                <button id="subscribe" class="btn btn-default ps-btn text-blk" type="button" data-toggle="modal" data-target="#subscribeModal">Invite me to the launch!</button>
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
                <div class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1">
                    <div id="carousel text-center">
                        <div id="carousel-mobile" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-mobile" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-mobile" data-slide-to="1"></li>
                                <li data-target="#carousel-mobile" data-slide-to="2"></li>
                                <li data-target="#carousel-mobile" data-slide-to="3"></li>
                            </ol>

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                <div class="item active img-carousel">
                                    <img src="assets/img/mobile_splash.png" alt="Spash" class="img-rounded img-responsive img-mobile"/>
                                </div>
                                <div class="item img-carousel">
                                    <img src="assets/img/mobile_stats.png" alt="Stats" />
                                </div>
                                <div class="item img-carousel">
                                    <img src="assets/img/mobile_family.png" alt="Family"/>
                                </div>
                                <div class="item img-carousel">
                                    <img src="assets/img/mobile_list.png" alt="List" />
                                </div>
                            </div>

                        </div>
                    </div> <!-- end carousel -->
                    <!--
                    <div class="text-center">
                        <img src="assets/img/1planetsol_landingpage.png" alt="Mobile App" class="img-rounded img-responsive img-mobile" />
                    </div>
                    -->
                </div>
                <div class="col-md-6 col-sm-12">
                    <h1 class="text-center ps-green ps-font-Nunito">The Mobile App
                                
                    <!--<small class="subtitle">Solar To Go</small>-->

                    </h1>
                    <hr />
                    <p style="color: #FFFFFF; font-family: 'Nunito', sans-serif;">The 1PlanetSol mobile app will be your home for the status of your solar community, membership in the community, and information about the rewards program.</p>
                </div>
            </div>
            
        </div>
  
    </div>
<!-- end container -->

</div>

<script type="text/javascript">

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
            //var solarData = fetchData('', 'http://34.201.150.94/data/getRecent?timePeriod=day');
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
                    $('#amountSavedSmall').html(obj[1]);
                    $('#tonnesSmall').html(obj[2]);
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