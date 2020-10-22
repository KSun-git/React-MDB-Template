import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane } from "mdbreact";
import './con5.css';

class con5 extends Component {
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
			<div className="Con5 div_content">
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">분석통계</span>
					</MDBCardBody>
				</MDBCard>
				
				<MDBCard className="mt-2">
					<MDBCardBody className="con5CardBody">
						<MDBNav className="nav-pills">
							<MDBNavItem className="con5_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "1"} 
									onClick={this.togglePills("default", "1")} >
									정산가격분석
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="con5_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "2"} 
									onClick={this.togglePills("default", "2")} >
									현물가격분석
								</MDBNavLink>
							</MDBNavItem>
						</MDBNav>
						
						<MDBTabContent activeItem={this.state.items["default"]}>
								<MDBTabPane tabId="1" className="con5_tab1">
									{/* 정산가격분석 탭 */}
									<h3>정산가격분석 Main Contents</h3>
								</MDBTabPane>

								<MDBTabPane tabId="2" className="con5_tab2">
									{/* 현물가격분석 탭 */}
									<h3>현물가격분석 Main Contents</h3>
								</MDBTabPane>
							</MDBTabContent>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default con5;