import { number } from '../../../../lib'
import { Panel } from '../../../../components'

export const Receivable = props => {
	const { receivables } = props
	return(
		<Panel
			title="Receivables"
			type="panel-default">
			<div className="panel-noted">
				<p className="pull-left">Number of Transaction (20)</p>
				<p className="pull-right">Total Amount (IDR 200,000,000.00)</p>
				<div className="clearfix"></div>
			</div>

			<div className="table-responsive">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Description</th>
							<th>Amount</th>
							<th style={{ textAlign:'right' }}>Due</th>
						</tr>
					</thead>
					<tbody>
						{
							receivables.map((receivable, index) => (
								<tr key={receivable.id}>
									<td>{receivable.description}</td>
									<td>{receivable.currency} {number.moneyFormat(receivable.amount)}</td>
									<td style={{ textAlign:'right' }}>{receivable.due}</td>
								</tr>
							))
						}
					</tbody>
				</table>						
			</div>

			<div className="panel-control">
				<select className="select-control-panel">
					<option>Create Receivable</option>
					<option>Option 1</option>
				</select>
				<a href="#" className="pull-right">View Detail</a>
				<div className="clearfix"></div>
			</div>
		</Panel>
	)
}