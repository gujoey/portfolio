import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';


export default class NavigationComponent extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		
		this.state = {
		  isOpen: false
		};
	}
	
	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	}

	render() {
		let app = this;
		let path = app.props.location;
		
		const home = path === "/" ? "navigation__active " : "";
		const projects = path === "/projects" ? "navigation__active " : "";
		const skills = path === "/skills" ? "navigation__active " : "";
		
		return (
			<Navbar className="[ navigation ]" color="light" light expand="md">
				<NavbarBrand className="[ navigation__navbrand ]" href="#/">Øyvind Gujord</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />

				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="[ ml-auto ]" navbar>
						<NavItem>
							<NavLink  className={home + "[ navigation__navlink ]"} href="#/"><i className="fas fa-home"></i> Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={projects + "[ navigation__navlink ]"} href="#/projects"><i className="fas fa-laptop-code"></i> Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={skills + "[ navigation__navlink ]"} href="#/skills"><i className="fas fa-code"></i> Skills</NavLink>
						</NavItem>
						
						<NavItem>
							<NavLink className={ "[ navigation__navlink ]"} rel="noopener noreferrer" target="_blank" href="https://github.com/gujoey"> <i className="fab fa-github"></i> GitHub</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}


/*
<NavItem>
							<NavLink className={"[ navigation__navlink ]"} href="mailto:oyvind_gujord@hotmail.com" target="_top">E-mail me</NavLink>
						</NavItem>
						*/