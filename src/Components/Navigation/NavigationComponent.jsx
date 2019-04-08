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
		const packages = path === "/packages" ? "navigation__active " : "";
		const contact = path === "/contact" || path === "/contact-success " ? "navigation__active" : "";
		
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
							<NavLink className={packages + "[ navigation__navlink ]"} href="#/packages">Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={contact + "[ navigation__navlink ]"} href="#/contact">Skills</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}