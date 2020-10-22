import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBBtn } from "mdbreact";
import './con3.css';

class con3 extends Component {
  
  render() {
    return (
		<div className="Con3 div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">REC이행내역 관리</span>
					<span id="title_option">
						<MDBBtn color="elegant" className="btn_con3">REC이행내역 일괄등록</MDBBtn>
					</span>
				</MDBCardBody>
			</MDBCard>
			
			<MDBCard className="mt-2">
				<MDBCardBody className="con3CardBody">
					<h3>Main Contents</h3>
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default con3;