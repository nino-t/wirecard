import { number, array, date } from '../../../../lib'
import { Panel } from '../../../../components'
import { DoughnutChart } from '../../../../components/chart'

export const AccountOverview = props => {
	const { assets, liabilities } = props 
	return (
		<Panel
			title="Account Overview"
			type="panel-default">									
				<DoughnutChart
					date={date.getTimeNow()}
					primaryLabel="Assets"
					data={array.groupValueByKey(assets, 'amount')}
					allData={assets}
					labels={array.groupValueByKey(assets, 'name')}
					backgroundColor={['#3498db','#e67e22']}
					backgroundColorHover={['#2980b9','#d35400']}
					fontColor={['white', 'white']} />

				<hr />

				<DoughnutChart
					date={date.getTimeNow()}
					primaryLabel="Liabilities"
					data={array.groupValueByKey(liabilities, 'amount')}
					allData={liabilities}
					labels={array.groupValueByKey(liabilities, 'name')}
					backgroundColor={['#1abc9c','#e67e22']}
					backgroundColorHover={['#16a085','#d35400']}
					fontColor={['white', 'white']} />				
		</Panel>
	)
}