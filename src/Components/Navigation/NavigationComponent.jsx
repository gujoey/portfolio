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
							<NavLink className={home + "[ navigation__navlink ]"} href="#/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={projects + "[ navigation__navlink ]"} href="#/projects">Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={skills + "[ navigation__navlink ]"} href="#/skills">Skills</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}