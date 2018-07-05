import { Panel } from '../../../../components'
export const MostVisit = props => (
	<Panel
		title="Most Visited"
		type="panel-default">									
			<div className="row most-visited">
				<div className="col-xs-6 col-sm-3 col-md-3">
					<center>
						<a href="#">
							<div className="circle-border"><i className="fa fa-user-o" style={{ fontSize: '50px' }}></i></div>
							<div><p>Profile</p></div>
						</a>
					</center>
				</div>
				<div className="col-xs-6 col-sm-3 col-md-3">
					<center>
						<a href="#">
							<div className="circle-border"><i className="fa fa-file-text-o" style={{ fontSize: '50px' }}></i></div>
							<div><p>Account Summary</p></div>
						</a>
					</center>
				</div>

				<div className="col-xs-6 col-sm-3 col-md-3">
					<center>
						<a href="#">
							<div className="circle-border"><i className="fa fa-file-zip-o" style={{ fontSize: '50px' }}></i></div>
							<div><p>Statement</p></div>
						</a>
					</center>
				</div>

				<div className="col-xs-6 col-sm-3 col-md-3">
					<center>
						<a href="#">
							<div className="circle-border"><i className="fa fa-address-card-o" style={{ fontSize: '50px' }}></i></div>
							<div><p>In House Transfer</p></div>
						</a>
					</center>
				</div>										
			</div>
	</Panel>	
)