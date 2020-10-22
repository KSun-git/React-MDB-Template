import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBBtn } from "mdbreact";
import './con6_Faq.css';

class con6_Faq extends Component {
  
  render() {
    return (
		<div className="Con6_Faq div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">FAQ 관리</span>
					<span id="title_option">
						<MDBBtn color="elegant" className="btn_Faq">FAQ 등록</MDBBtn>
					</span>
				</MDBCardBody>
			</MDBCard>
			
			<MDBCard className="mt-2">
				<MDBCardBody className="contentsCardBody">
					<h3>Main Contents</h3>
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default con6_Faq;