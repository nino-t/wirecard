import { array } from '../../../../lib'
import { Panel } from '../../../../components'
import { BarChart } from '../../../../components/chart'

export const ProfitLoss = props => {
	const { profit, loss } = props
	const labelItemBar = ["Cash In", "Cash Out"]
	const labelBar = array.groupValueByKey(profit, 'month')
	const dataBar = [array.groupValueByKey(profit, 'amount'), array.groupValueByKey(loss, 'amount')]
	const dataConfBar = [
	    {
	      label: 'Cash In',
	      backgroundColor: '#3498db',
	      borderColor: '#3498db',
	      borderWidth: 0,
	      hoverBackgroundColor: '#2980b9',
	      hoverBorderColor: '#2980b9',
	      data: array.groupValueByKey(profit, 'amount')
	    },
	    {
	      label: 'Cash Out',
	      backgroundColor: '#e67e22',
	      borderColor: '#e67e22',
	      borderWidth: 0,
	      hoverBackgroundColor: '#d35400',
	      hoverBorderColor: '#d35400',
	      data: array.groupValueByKey(loss, 'amount')
	    }
	]		

	return(
		<Panel
			title="Profit and Loss"
			type="panel-default">														
				<BarChart
					labelItem={labelItemBar}
					label={labelBar}
					dataConfig={dataConfBar}
					data={dataBar}
					yAxesTitle='In thousands (000)' />

			<div className="panel-control">
				<select className="select-control-panel">
					<option>Financial Report</option>
					<option>Option 1</option>
				</select>
				<a href="#" className="pull-right">View Detail</a>
				<div className="clearfix"></div>
			</div>										
		</Panel>
	)
}