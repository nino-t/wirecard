import {Bar} from 'react-chartjs-2'
import {number} from '../../lib'
export const BarChart = (props) => {
	const data = {
	  labels: props.label,
	  datasets: props.dataConfig,
	}

	const options = {
		maintainAspectRatio: false,
        tooltips: {
	        enabled: true,
	        callbacks: {
	            label: function (tooltipItems, data) {
	                return data.datasets[tooltipItems.datasetIndex].label + ' : ' + tooltipItems.yLabel.toLocaleString();
	            }
	        }
        },
		scales: {
			yAxes: [{
				ticks: {
					callback: function(value, index, values) {
						return value.toLocaleString();
					}
				},
				scaleLabel: {
					display: true,
					labelString: props.yAxesTitle,
					fontColor: "green"
				}				
       		}]
       	},
	    legend: {
	        display: false
	    },
		layout: {
	        padding: {
	            left: 0,
	            right: 0,
	            top: 0,
	            bottom: 0
	        },
	        margin: {
	            left: 0,
	            right: 0,
	            top: 0,
	            bottom: 0
	        }	        
    	}	    
	}
	return (
		<div>
			<div style={{ paddingLeft: '30px'}}>
				<Bar
					data={data}
					width={120}
					height={320}
					options={options} />	
			</div>

			<div style={{ padding: '0 20px', paddingTop: '10px', paddingLeft:'0px', paddingRight: '20px'}}>
				<div className="table-responsive">
					<table className="table table-bordered table-chart">
						<tbody>
							<tr>
								<td style={{ borderLeftColor: '#fff', borderTopColor: '#fff' }}></td>
								{ 
									(props.label) &&
										props.label.map((label, index) => (
											<td key={index}>
												{label}
											</td>
										))
								}
							</tr>
							{ 
								(props.labelItem) &&
									props.labelItem.map((label, index) => (
										<tr key={index}>
											<td style={{ display: 'flex', justifyContent: 'center'}}>
												<div style={{ background: `${props.dataConfig[index].backgroundColor}` , height: '10px', width: '10px', marginTop: '3px'}}></div>
												<div><span style={{ marginLeft: '5px'}}>{label}</span></div>
											</td>
											{ 
												(props.data) &&
													props.data[index].map((data, index) => (
														<td key={index}>{number.moneyFormat(data)}</td>
													))
											}									
										</tr>
									))
							}
						</tbody>
					</table>								
				</div>
			</div>
		</div>
	)
}