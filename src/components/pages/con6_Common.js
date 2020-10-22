import React, { Component } from 'react';
import { MDBCard,MDBCardBody } from "mdbreact";
import './con6_Common.css';

class con6_Common extends Component {
  
  render() {
    return (
		<div className="Con6_Common div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">공통코드 관리</span>
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

export default con6_Common;