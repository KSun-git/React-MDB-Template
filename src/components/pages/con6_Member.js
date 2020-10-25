import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBIcon,MDBBtn } from "mdbreact";
import './con6_Member.css';

class con6_Member extends Component {
	state= {
		isLoading: true,
		membersData: [],
	}
	
	callMembersData = () =>{
		//데이터를 불러오는 곳 => 서버에서 불러오는 작업을하려면 Axios|Fetch|XMLHttpRequest 를 사용해야함
		setTimeout(() => { //로더 확인용 지연함수
			this.setState({isLoading:false});
		}, 1500)
	}
	
	componentDidMount(){
		this.callMembersData();
	}

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
					<form id="con6Member_searchFrm">
						<div className="searchFrm_div border"><span>가입일</span><span>Datepicker1</span></div> ~
						<div className="searchFrm_div border">Datepicker2</div>
						
						<div className="searchFrm_div">
							<select className="browser-default custom-select" id="input_select1">
								<option value="0">구분 전체</option>
								<option value="1">회원사</option>
								<option value="2">거래소</option>
							</select>
						</div>
						
						<div className="searchFrm_div">
							<input type="text" className="form-control" placeholder="회원사명/이름/아이디" id="input_keyword"/>
						</div>
						<MDBIcon icon="search" className="ml-2"/>
						
						<MDBBtn color="grey" id="con1_btn_clear">초기화</MDBBtn>
					</form>
					
					<div className="d-flex flex-row mt-3">
						<MDBBtn color="deep-purple" size="sm">반려</MDBBtn>
						<MDBBtn color="deep-purple" size="sm">승인</MDBBtn>
					</div>
					
					<div className="d-flex flex-row">
						{this.state.isLoading ? "Loading..." : 
							"showTables withCheckbox!"
						}
					</div>
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default con6_Member;