import React from 'react';
import { Container } from 'reactstrap';

export default class LayoutComponent extends React.Component{
	render(){
		return(
			<Container>
				{this.props.children}
			</Container>
		);
	}
}