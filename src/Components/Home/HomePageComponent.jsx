import React from 'react';
import { Row, Col } from 'reactstrap';


export default class HomePageComponent extends React.Component{
	render(){
		
		return(
			<Row>
				<Col md="6">
					<img className="[ img-fluid ]" src={require("./../../img/photos/gujord.png")} alt="Øyvind Gujord"/>
				</Col>
				<Col md="6">
					<div className="[ column-me-container ]">
						<div className="[ column-me ]">
							<div className="[ column-me__inner ]"> 
								<h1 className="[ column-me__heading ]">Øyvind Gujord</h1>
								<p>Frontend Developer</p>
								<button className="[ column-me__btn ]" type="button">My Work</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}