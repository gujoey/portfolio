import React from 'react';
import { Row, Col } from 'reactstrap';


export default class HomePageComponent extends React.Component{
	render(){
		
		return(
			<Row className="[ homepage ]">
				<Col md="6">
					<img className="[ img-fluid ]" src={require("./../../img/photos/gujord2.png")} alt="Øyvind Gujord"/>
				</Col>
				<Col md="6">
					<div className="[ homepage__container ]">
						<div className="[ column-me ]">
							<div className="[ column-me__inner ]"> 
								<h1 className="[ column-me__heading ]">Øyvind Gujord</h1>
								<p>
									Frontend Developer <br/>
									<small><i>Responsive Webdesign, UI/UX design, BEM, HTML, CSS/SCSS, JavaScript, React, Reactstrap/Bootstrap</i></small>
								</p>
								<button className="[ column-me__btn ]" type="button">My Projects</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}