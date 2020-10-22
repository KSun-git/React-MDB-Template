import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBBtn,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane } from "mdbreact";
import './con4.css';

class con4 extends Component {
	state = {
		items: {
			default: "1",
		}
	};

	togglePills = (type, tab) => e => {
		e.preventDefault();
		if (this.state.items[type] !== tab) {
			let items = { ...this.state.items };
			items[type] = tab;
			this.setState({
				items
			});
		}
	};
	
	render() {
		return (
			<div className="Con4 div_content">
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						{this.state.items.default==="1" && 
							(<span id="content_title">중간정산정보 관리</span>)
						}
						{this.state.items.default==="2" && 
							(
							<>
							<span id="content_title">연간정산정보 관리</span>
							<span id="title_option">
								<MDBBtn color="elegant" className="btn_con4">연간정산정보 개별등록</MDBBtn>
								<MDBBtn color="elegant" className="btn_con4">연간정산정보 일괄등록</MDBBtn>
							</span>
							</>
							)
						}
					</MDBCardBody>
				</MDBCard>
				
				<MDBCard className="mt-2">
					<MDBCardBody className="con4CardBody">
						<MDBNav className="nav-pills">
							<MDBNavItem className="con4_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "1"} 
									onClick={this.togglePills("default", "1")} >
									중간정산
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="con4_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "2"} 
									onClick={this.togglePills("default", "2")} >
									연간정산
								</MDBNavLink>
							</MDBNavItem>
						</MDBNav>
						
						<MDBTabContent activeItem={this.state.items["default"]}>
								<MDBTabPane tabId="1" className="con4_tab1">
									{/* 중간정산 탭 */}
									<h3>중간정산 Main Contents</h3>
								</MDBTabPane>

								<MDBTabPane tabId="2" className="con4_tab2">
									{/* 연간정산 탭 */}
									<h3>연간정산 Main Contents</h3>
								</MDBTabPane>
							</MDBTabContent>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default con4;