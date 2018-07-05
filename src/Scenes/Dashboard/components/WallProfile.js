export const WallProfile = props => (
	<div className="well">
		<div className="row">
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<div style={{ padding: '10px' }} className="well-wrap-img">
					<center>
						<img src="/static/img/robot.png" className="img-responsive" />
					</center>
				</div>
			</div>
			<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">										
				<div style={{ marginTop: '-15px' }}>
					<h3>PT.Aprisma Indonesia</h3>
					<h4>Welcome, Jeremy Brown</h4>
					<small>
						Thurday, Febuary 21, 2014
					</small>
					<div className="control-wall">
						<ul className="notic-me">
							<li>
								<a href="">
									<i className="fa fa-envelope-o"></i> 1 New Message
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-tasks"></i> 3 Pending Task
								</a>
							</li>
						</ul>
						<a href="" className="pull-right">View More</a>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	</div>							
)