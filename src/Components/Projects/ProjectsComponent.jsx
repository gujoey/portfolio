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
					
					<Col className="[ column-description ]" md="8">
						<h1>{app.props.name}</h1>
						<p>
							<span>{app.props.description}</span><br/>
							<span>{app.props.madeWith}</span><br/>
							<a target="_blank" href={app.props.website}>Website</a><br/>
							<a target="_blank" href={app.props.repo}>GitHub Repository</a><br/>
						</p>
					</Col>
				</Row>
			</Col>
		);
	}	
}