import React, { Component } from 'react';
import { MDBCard,MDBCardBody } from "mdbreact";
import './con6_Log.css';

class con6_Log extends Component {
  
  render() {
    return (
		<div className="Con6_Log div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">로그 조회</span>
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

export default con6_Log;