import React from 'react'
import HeadHtml from '../components/headHtml'
import { MainLayout } from '../components/layouts'
import jsonData from '../data/api.json'
import {date} from '../lib'
import { 
	WallProfile, Receivable, Payable, 
	ProfitLoss, ForexRate, MostVisit,
	AccountOverview
} from '../src/Scenes/Dashboard/components'

export default class Index extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	customer: {}
	  }
	}

	componentWillMount() {
		this.setState({
			customer: jsonData
		})
	}

	render() {
		const { customer } = this.state
		const receivables = customer.receivables.slice(0, 5)
		const payables = customer.payables.slice(0, 5)
		const forex_rate = customer.forex_rate.slice(0, 5)
		let profit = customer.profit_and_loss.profit
		let loss = customer.profit_and_loss.loss
		const { assets, liabilities } = customer
		return (
			<MainLayout>
				<HeadHtml subTitle="Dashboard" />				
				<div className="container config-page">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6">
							<h3 style={{ margin: '0', padding: '0' }} className="pull-left">Dashboard</h3>
							<small className="pull-left">Last Login: {date.getTimeNow()}</small>					
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6">
							<a href="#" className="pull-right"><i className="fa fa-cog"></i> Customize Dashboard</a>
						</div>						
					</div>
				</div>				
				<div className="wrap-page">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-md-6">
								<WallProfile />						
								<AccountOverview 
									assets={assets}
									liabilities={liabilities} />
								<MostVisit />
								<ForexRate forex_rate={forex_rate} />
							</div>

							<div className="col-xs-12 col-md-6">
								<Receivable receivables={receivables} />
								<Payable payables={payables} />
								<ProfitLoss
									profit={profit}
									loss={loss} />
							</div>
						</div>					
					</div>
				</div>
			</MainLayout>
		)
	}
}
