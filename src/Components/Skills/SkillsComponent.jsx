import React from 'react';
import { Col } from 'reactstrap';

export default class SkillsComponent extends React.Component{
	
	render(){
		let app = this;
		return(
			<Col md="4">
				<h2>{app.props.skillName}</h2>
				<span>{app.props.rating}</span>
				<p>{app.props.comment}</p>
			</Col>
		);
	}
}