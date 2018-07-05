import React from 'react'

export class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		const { title } = this.props
		const { open } = this.state

		return (
			<li className={"dropdown "+ (open? 'open':'')} onClick={this.handleClick}>
				<a href="javascript:void(0)">{title} <b className="caret"></b></a>
				{this.props.children}
			</li>					
		)
	}
}
