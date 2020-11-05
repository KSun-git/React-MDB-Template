import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import './Admin_Batch.css';

class Admin_Batch extends Component {
	state = {
		
	}

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
		return (
			<div className="Admin_Batch div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">배치관리</span>
					</MDBCardBody>
				</MDBCard>
				
				{/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
						{/* 개발에서 진행 */}
                        <div className="d-flex flex-wrap align-content-center justify-content-center mt-2" 
                            style={{color:"darkgray",backgroundColor:"#DCDCDC",fontSize:"30px",height:"900px"}}>
                            <div className="text-center"> 
                                &#8251; 개발에서 진행  &#8251;
                                <div className="text-left">
                                    <span style={{fontSize:"25px"}}> &#183; 연동 필요한 항목</span><br/>
                                    <span className="pl-2" style={{fontSize:"20px"}}>1&#41; 계약정보</span><br/> 
                                    <span className="pl-2" style={{fontSize:"20px"}}>2&#41; 자체발전소 - 누적발전량</span><br/> 
                                </div>
                            </div>
                        </div>
                        
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Admin_Batch;