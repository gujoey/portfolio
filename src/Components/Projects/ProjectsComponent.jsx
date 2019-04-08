import React from 'react';
import { Row, Col } from 'reactstrap';


export default class ProjectsComponent extends React.Component{
	render(){
		let app = this;
		return(
			<Col md="12">
				<Row>
					<Col md="4">
						<img className="[ img-fluid ]" src={require("./../../img/photos/iphone/" + app.props.img)} alt={this.props.name + " website"}/>
					</Col>
					
					<Col md="8">
						<div className="[ col-center-container ]">
							<div className="[ column-description ]">
								<h1 className="[ column-description__heading ]">{app.props.name}</h1>
								<p>
									<i>{app.props.description}</i><br/><br/>
									
									<strong>Made with:</strong><br/>
									{app.props.madeWith}<br/><br/>
									
									<strong>Website:</strong><br/>
									<a rel="noopener noreferrer" target="_blank" href={app.props.website}>{app.props.website}</a><br/><br/>
									
									<strong>GitHub repository:</strong><br/>
									<a rel="noopener noreferrer" target="_blank" href={app.props.repo}>{app.props.repo}</a><br/>
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<hr/>
			</Col>
		);
	}	
}