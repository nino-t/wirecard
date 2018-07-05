import { number } from '../../../../lib'
import { Panel } from '../../../../components'

export const Payable = props => {
	const { payables } = props
	return(
		<Panel
			title="Payables"
			type="panel-default">							
			<div className="panel-noted">
				<p className="pull-left">Number of Transaction (20)</p>
				<p className="pull-right">Total Amount (IDR 800,000,000.00)</p>
				<div className="clearfix"></div>
			</div>	
			<div className="table-responsive">							
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Description</th>
							<th>Amount</th>
							<th>Beneficiary</th>
							<th style={{ textAlign:'right' }}>Due</th>
						</tr>
					</thead>
					<tbody>
						{
							payables.map((payable, index) => (
								<tr key={payable.id}>
									<td>{payable.description}</td>
									<td>{payable.currency} {number.moneyFormat(payable.amount)}</td>
									<td>{payable.beneficiary}</td>
									<td style={{ textAlign:'right' }}>{payable.due}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>

			<div className="panel-control">
				<select className="select-control-panel">
					<option>Create Payable</option>
					<option>Option 1</option>
				</select>
				<a href="#" className="pull-right">View Detail</a>
				<div className="clearfix"></div>
			</div>								
		</Panel>						
	)
}