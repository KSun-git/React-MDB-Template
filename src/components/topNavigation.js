import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Logo_kpx from '../assets/logo_kpx.png';
import './topNavigation.css';
import LoginModal from './pages/LoginModal';
import JoinModal from './pages/JoinModal';


class TopNavigation extends Component {
    state = {
        collapse: false,
		modal_login: false,
		modal_join: false,
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
	
	toggleModal = modalKey => () =>{
		let modalName = 'modal_' + modalKey
		this.setState({
			[modalName]: !this.state[modalName]
		});
	}
	
	componentDidUpdate(){
		// state 체크용
		console.log('login>>',this.state.modal_login)
		console.log('join>>',this.state.modal_join)
	}

    render() {
		return (
			<>
			<MDBNavbar className="topNavbar-fixed" light expand="md" scrolling>
				<MDBNavbarBrand href="/">
					<img id="topNavLogo" src={Logo_kpx} alt="logo_kpx" />
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick = { this.onClick } />
				<MDBCollapse isOpen = { this.state.collapse } navbar>
					<MDBNavbarNav left>
						<MDBNavItem active>
							<MDBNavLink to="/dashboard">Home</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/profile">Cards</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/tables">Tables</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/maps">Maps</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/404">Err</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
					<MDBNavbarNav right>
						<MDBNavItem>
							<MDBDropdown>
								<MDBDropdownToggle nav caret>
									<MDBIcon icon="user" />
								</MDBDropdownToggle>
								<MDBDropdownMenu right basic>
									<MDBDropdownItem onClick={this.toggleModal("login")}>Login</MDBDropdownItem>
									<MDBDropdownItem onClick={this.toggleModal("join")}>Join</MDBDropdownItem>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
			{ this.state.modal_login && <LoginModal modal_login={this.state.modal_login} toggleModal={this.toggleModal} /> }
			{ this.state.modal_join && <JoinModal modal_join={this.state.modal_join} toggleModal={this.toggleModal} /> }
			</>
		);
	}
}

export default TopNavigation;