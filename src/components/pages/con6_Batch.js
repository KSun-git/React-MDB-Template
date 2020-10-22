import React, { Component } from 'react';
import { MDBCard,MDBCardBody } from "mdbreact";
import './con6_Batch.css';

class con6_Batch extends Component {
  
  render() {
    return (
		<div className="Con6_Batch div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">배치 관리</span>
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

export default con6_Batch;