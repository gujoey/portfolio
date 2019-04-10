import React from 'react';
import { Row, Col, UncontrolledTooltip } from 'reactstrap';
import CircularProgressbar from 'react-circular-progressbar';

export default class SkillsComponent extends React.Component{
	
	render(){
		let app = this;
		return(
			<Col md="6" className="[ d-flex flex-column ]">
				<div className="[ skills-column ]">
					<Row>
						<Col lg="7">
							<div id={"tooltip-" + this.props.id}>
								<CircularProgressbar
									percentage={app.props.rating}
									text={`${app.props.rating}%`}
								/>
							</div>
						</Col>
						
						<UncontrolledTooltip placement="top" target={"tooltip-" + this.props.id}>
       						Rating is based on my knowledge and understanding of the tool
     			 		</UncontrolledTooltip>
						
						<Col lg="5">
							<div className="[ skills-page__center ]">
								<div className="[ skills-column--vertical-align ]">
									<h2>{app.props.skillName}</h2>
									<i className={app.props.icon}></i>
								</div>
							</div>
						</Col>
					</Row><hr/>
				</div>
			</Col>
		);
	}
}