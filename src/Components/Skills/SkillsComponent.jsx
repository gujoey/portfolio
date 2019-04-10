import React from 'react';
import { Row, Col } from 'reactstrap';
import CircularProgressbar from 'react-circular-progressbar';



export default class SkillsComponent extends React.Component{
	
	render(){
		let app = this;
		return(
			<Col md="6" className="[ d-flex flex-column ]">
				<div className="[ skills-column ]">
					<Row>
						<Col md="7">
							<CircularProgressbar
							  percentage={app.props.rating}
							  text={`${app.props.rating}%`}
							/>
						</Col>
						<Col md="5">
							<div className="[ skills-page__center ]">
								<div className="[ skills-column--vertical-align ]">
									<h2>{app.props.skillName}</h2><br/>
								</div>
							</div>
						</Col>
					</Row><hr/>
				</div>
			</Col>
		);
	}
}