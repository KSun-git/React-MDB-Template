import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBBtn } from "mdbreact";
import './con6_Notice.css';

class con6_Notice extends Component {
  
  render() {
    return (
		<div className="Con6_Notice div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">공지사항 관리</span>
					<span id="title_option">
						<MDBBtn color="elegant" className="btn_Notice">공지사항 등록</MDBBtn>
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

export default con6_Notice;