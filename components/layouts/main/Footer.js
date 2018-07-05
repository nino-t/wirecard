export default () => (
	<footer>
		<div className="container">
			<div className="footer-navigation">
				<ul className="nav nav-pills pull-left nav-bahasa">
					<li className="active"><a href="#"><span className="hidden-sm">Bahasa</span> Indonesia</a></li>
					<li><a href="#">English</a></li>
				</ul>

				<ul className="nav nav-pills pull-right nav-extra-link">
					<li><a href="#">Rates</a></li>
					<li><a href="#">Terms & Conditions</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
				<div className="clearfix"></div>
			</div>

			<div className="row footer-brand" style={{ marginTop: '20px' }}>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="col-xs-12 col-xs-4">
						<center>
							<img src="/static/img/wirecard-logo.png" width="130" />
						</center>
					</div>
					<div className="col-xs-12 col-md-8">
						<br className="visible-sm" />
						<p>
							One morning, when Gregor Samsa woke from troubled dreams, 
							he found himself transformed in his bed into a horrible vermin.
						</p>									
					</div>
				</div>
			</div>			
		</div>
	</footer>
)