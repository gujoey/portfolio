import React from 'react';
import { Container } from 'reactstrap';
import NavigationComponent from './../Navigation/NavigationComponent';

export default class LayoutComponent extends React.Component{
	render(){
		return(
			<div>
				<NavigationComponent location={this.props.location.pathname}/>
				<Container>
					{this.props.children}
				</Container>
			</div>
		);
	}
}