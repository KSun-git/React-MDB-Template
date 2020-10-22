import React, { Component } from 'react';
import { MDBCard,MDBCardBody } from "mdbreact";
import './con6_Member.css';

class con6_Member extends Component {
  
  render() {
    return (
		<div className="Con6_Member div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">사용자 관리</span>
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

export default con6_Member;