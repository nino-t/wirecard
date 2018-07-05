export const Panel = props => (
	<div className={"panel "+ props.type}>
		<div className="panel-heading">
			<h3 className="panel-title pull-left">{props.title}</h3>
			<button type="button" className="close pull-right" data-dismiss="alert" aria-hidden="true">&times;</button>
			<div className="clearfix"></div>
		</div>
		<div className="panel-body">
			{props.children}
		</div>
	</div>							
)