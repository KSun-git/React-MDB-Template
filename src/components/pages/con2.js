import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBBtn } from "mdbreact";
import './con2.css';

class con2 extends Component {
  
  render() {
    return (
		<div className="Con2 div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">회원사정보 관리</span>
					<span id="title_option">
						<MDBBtn color="elegant" className="btn_con2">회원사정보 개별등록</MDBBtn>
						<MDBBtn color="elegant" className="btn_con2">회원사정보 일괄등록</MDBBtn>
					</span>
				</MDBCardBody>
			</MDBCard>
			
			<MDBCard className="mt-2">
				<MDBCardBody className="con2CardBody">
					<h3>Main Contents</h3>
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default con2;
