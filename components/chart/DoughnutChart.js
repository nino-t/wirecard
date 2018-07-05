import { Doughnut } from 'react-chartjs-2' 
import 'chart.piecelabel.js'
import { number, array } from '../../lib'

function getSum(total, num) {
    return parseInt(total)+parseInt(num)
}

export const DoughnutChart = (props) => {
	const { allData } = props
	const data = {
		labels: props.labels,
		datasets: [{
			data: props.data,
			backgroundColor: props.backgroundColor,
			hoverBackgroundColor: props.backgroundColorHover
		}],
		text: '23%'
	}	
	const options = {
	    legend: {
	        display: false
	    },
		pieceLabel: {
			fontColor: props.fontColor,
			render: 'percentage'
		}	    
	}
	return (
		<div className="row">
			<div className="col-xs-6 col-sm-4 col-md-4" style={{ position: 'relative' }}>
				<Doughnut 			
					height={120}
					width={100}
					data={data}
					options={options} />

					<div className="title-dougnut">
						<p>{props.primaryLabel}</p>
					</div>

					<center>
						<small>As of {props.date}</small>
					</center>
			</div>
			<div className="col-xs-6 col-sm-8 col-md-8">
				<div style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px', marginBottom: '5px' }}>
					{
						props.labels.map((label, index) => (
							<div key={index}>
								<div className="row" style={{ color: props.backgroundColor[index]}}>
									<div className="col-xs-12 col-sm-4 col-md-4">
										<b>{label}</b>
									</div>
									<div className="col-xs-12 col-sm-4 col-md-4">
										{ allData[index].total_account } Accounts
									</div>
									<div className="col-xs-12 col-sm-4 col-md-4">
										<b>{number.moneyFormat(allData[index].amount)}</b>
									</div>												
								</div>
								{
									(allData[index].rincian) &&
										allData[index].rincian.map((item, index) => (
											<div className="row doug-sub-item" key={index}>
												<div className="col-xs-12 col-sm-4 col-md-4" style={{ paddingLeft: '20px' }}>
													<b>{item.name}</b>
												</div>
												<div className="col-xs-12 col-sm-8 col-md-8">
													{item.total_account} Accounts
												</div>
											</div>
										))
								}
							</div>													
						))
					}														
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-4 col-md-4">
						<b>{props.primaryLabel}</b>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						{array.groupValueByKey(props.allData, 'total_account').reduce(getSum)} Accounts
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						<b>{number.moneyFormat(props.data.reduce(getSum))}</b>
					</div>					
				</div>
			</div>
		</div>
	)
}