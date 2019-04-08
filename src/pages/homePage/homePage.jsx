import React from 'react';
import HomePageComponent from './../../Components/Home/HomePageComponent'

export default class HomePage extends React.Component{
	constructor(props){
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		let app = this;
		app.props.history.push("projects");
	}
	
	render(){
		let app = this;
		return(
			<HomePageComponent handleClick={app.handleClick}/>
		);
	}
}