import { Dropdown } from '../../../components'
import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			navResponsiveOpen: false 
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		this.setState({
			navResponsiveOpen: !this.state.navResponsiveOpen
		})
	}	

	render() {
		const { navResponsiveOpen } = this.state
		return (
			<div>
				<nav className="navbar navbar-default nav-primary" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" onClick={this.handleClick}>
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">
								<b style={{ display:'block', marginTop: '-5px' }}>Wirecard</b>
								<small style={{ display:'block', marginTop: '-5px', color: '#bdc3c7', fontSize: '12px'}}>Internet</small>
							</a>
						</div>

						<div className="collapse navbar-collapse hidden-xs">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="#">
										<div style={{ marginTop: '-3px' }}>
											<div style={{ width: '80%', textAlign:'right'}} className="pull-left">
												<span style={{ display:'block', marginTop: '-3px' }}>Jeremy Brown</span>
												<small style={{ display:'block', marginTop: '-5px', color: '#bdc3c7'}}>PT.Aprisma Indonesia</small>
											</div>
											<div style={{ width: '20%' }} className="pull-left">
												<img src="/static/img/me.jpg" width="30" style={{ borderRadius: '50%', marginLeft: '10px'}} />
											</div>
										</div>
									</a>
								</li>
								<li><a href="#"><i className="fa fa-bell-o"></i></a></li>
								<li>
									<a href="#">
										<i className="fa fa-sign-out"></i> Sign Out
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className={"navbar-second " + (navResponsiveOpen? 'open':'')}>
					<div className="container">
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="">
									<i className="fa fa-home hidden-xs" style={{ fontSize: '18px' }}></i>
									<span className="visible-xs">Dashboard</span>
								</a>
							</li>
							<li><a href="">My Task</a></li>
							<Dropdown title="Account">
								<ul className="dropdown-menu">
									<li><a href="#">Profile</a></li>
									<li><a href="#">Settings</a></li>
									<li><a href="#">Logout</a></li>
								</ul>					
							</Dropdown>
							<Dropdown title="Transaction">
								<ul className="dropdown-menu">
									<li><a href="#">Top-Up</a></li>
									<li><a href="#">Withdraw</a></li>
								</ul>					
							</Dropdown>					
							<Dropdown title="Payments">
								<ul className="dropdown-menu">
									<li><a href="#">Tunai</a></li>
									<li><a href="#">Non Tunai</a></li>
								</ul>					
							</Dropdown>										
							<Dropdown title="Liquidity">
								<ul className="dropdown-menu">
									<li><a href="#">Sub 1</a></li>
									<li><a href="#">Sub 2</a></li>
								</ul>					
							</Dropdown>															
						</ul>

						<ul className="nav navbar-nav navbar-right">
							<li><a href="">Utilities</a></li>
							<li><a href="">Help</a></li>
						</ul>				
					</div>
				</div>
			</div>
		)
	}
}