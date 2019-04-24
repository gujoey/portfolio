import React from 'react';
import HomePageComponent from './../../Components/Home/HomePageComponent'

export default class HomePage extends React.Component{
	constructor(props){
		super(props);
		
		this.handleClickProjects = this.handleClickProjects.bind(this);
		this.handleClickEmail = this.handleClickEmail.bind(this);
	}
	
	handleClickProjects(){
		let app = this;
		app.props.history.push("projects");
	}
	
	handleClickEmail(){
		let email = document.createElement("a");
    	email.href = "mailto:oyvind_gujord@hotmail.com";
    	email.click();
	}
	
	render(){
		let app = this;
		return(
			<HomePageComponent 
				handleClickProjects={app.handleClickProjects}
				handleClickEmail={app.handleClickEmail}
			/>
		);
	}
}