import React from 'react';
import ProjectsComponent from './../../Components/Projects/ProjectsComponent';
import { Row } from 'reactstrap';
import { projects } from './../../Components/Projects/projects';


export default class ProjectPage extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			projects: [],
			allProjects: []
		}
	}
	
	componentDidMount(){
		let app = this;
		app.setState({projects: projects});
	}
	
	createProjects(){
		let app = this;
		let projects = app.state.projects;
		
		projects.forEach((value, key)=>{
			app.state.allProjects.push(
				<ProjectsComponent
					img = {value.img}
					name = {value.name}
					description = {value.description}
					madeWith = {value.madeWith}
					website = {value.website}
					repo = {value.repo}
					key = {key}
				/>
			);
		});
	}
	
	render(){
		let app = this;
		app.createProjects();
		
		return(
			<div className="[ project-page ]">
				<h1 className="[ project-page__header ]">Projects</h1>
				<Row>
					{app.state.allProjects}
				</Row>
			</div>
		);
	}
}