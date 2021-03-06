import React from 'react';
import SkillsComponent from './../../Components/Skills/SkillsComponent';
import { Container, Row } from 'reactstrap';

import { skills } from './../../Components/Skills/Skills';


export default class SkillsPage extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			skills: [],
			allSkills: []
		}
	}
	
	componentDidMount(){
		let app = this;
		app.setState({skills: skills});
	}
	
	createSkills(){
		let app = this;
		let allSkills = app.state.skills;
		
		allSkills.forEach((value, key)=>{
			app.state.allSkills.push(
				<SkillsComponent
					skillName={value.skillName}
					icon={value.icon}
					rating={value.rating}
					id={key}
					key={key}
				/>
			);
		});
	}
	
	render(){
		let app = this;
		app.createSkills();
		
		return(
			<Container className="[ skills-page ]">
				<h1 className="[ text-center ]">My skills</h1>
				<Row className="[ row-eq-height ]">{app.state.allSkills}</Row>
			</Container>
		);
	}
}