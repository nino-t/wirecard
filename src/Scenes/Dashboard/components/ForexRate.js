import { number } from '../../../../lib'
import { Panel } from '../../../../components'

export const ForexRate = props => {
	const { forex_rate } = props
	return (
		<Panel
			title="Forex Rate"
			type="panel-default">		
				<div className="row">
					<div className="col-xs-12 col-sm-7 col-md-7">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Currency</th>
										<th>Buy</th>
										<th>Sell</th>
									</tr>
								</thead>
								<tbody>
									{
										forex_rate.map((forex, index) => (
											<tr key={forex.id}>
												<td>{forex.currency}</td>
												<td>{forex.buy}</td>
												<td>{forex.sell}</td>
											</tr>
										))
									}
								</tbody>
							</table>							
						</div>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-5">
						<ul className="nav nav-forex">
							<li><a href="">View Complete Forex Rate</a></li>
							<li><a href="">View Interest Rate</a></li>
							<li><a href="">My Bank Product info</a></li>
							<li><a href="">ATM & Branch Location</a></li>
						</ul>
					</div>
				</div>
		</Panel>		
	)
}