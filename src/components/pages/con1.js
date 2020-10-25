import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact"
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter} from "mdbreact"
import './con1.css';
import jsonData from '../../jsonSamples/con1Sample';
import excelPng from '../../assets/msExcel.png';

class con1 extends Component {
	state= {
		isLoading: true,
		con1Data: [],
		modal_con1: false,
	}

	con1Modal_toggle = () => {
		this.setState({
			modal_con1: !this.state.modal_con1
		});
	}

	callCon1Data = () =>{
		//데이터를 불러오는 곳 => 서버에서 불러오는 작업을하려면 Axios|Fetch|XMLHttpRequest 를 사용해야함
		const getData = jsonData;  //샘플json파일에서 가져옴
		setTimeout(() => { //로더 확인용 지연함수
			this.setState({con1Data:getData, isLoading:false});
		}, 1500)
	}
	
	
	componentDidMount(){
		this.callCon1Data();
	}

	render() {
		const {isLoading, con1Data} = this.state;
    return (
		<div className="Con1 div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">계약정보 관리</span>
					<span id="title_option">
						<MDBBtn color="elegant" className="btn_con1">계약정보 개별등록</MDBBtn>
						<MDBBtn color="elegant" className="btn_con1" onClick={this.con1Modal_toggle}>계약정보 일괄등록</MDBBtn>
						<MDBModal isOpen={this.state.modal_con1} toggle={this.con1Modal_toggle} centered>
							<MDBModalHeader toggle={this.con1Modal_toggle}>계약정보 일괄등록</MDBModalHeader>
							<MDBModalBody className="pt-1">
								<MDBBtn color="elegant" size="sm" id="btn_downCon1Template">서식 다운로드</MDBBtn>
								<form id="frm_con1Modal">
									<input type="file" id="abcd"/>
								</form>
								<div id="con1Modal_precautions">
									<MDBIcon icon="exclamation-circle" /> 총 0MB 미만의 파일만 업로드 가능합니다.<br/>
									<MDBIcon icon="exclamation-circle" /> 파일명은 영문자, 숫자만 가능하며 최종 [등록] 버튼을 눌러주세요.
								</div>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn size="sm" color="secondary" onClick={this.con1Modal_toggle} className="con1_btn_modal">취소</MDBBtn>
								<MDBBtn size="sm" color="primary" className="con1_btn_modal">확인</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</span>
				</MDBCardBody>
			</MDBCard>
			
			<MDBCard className="mt-2">
				<MDBCardBody className="con1CardBody">
					<form id="con1_searchFrm">
						<div className="searchFrm_div border"><span>계약시작일</span><span>Datepicker1</span></div> ~
						<div className="searchFrm_div border">Datepicker2</div>
						
						<div className="searchFrm_div">
							<select className="browser-default custom-select" id="input_select1">
								<option value="0">계약유형전체</option>
								<option value="1">계약유형1</option>
								<option value="2">계약유형2</option>
								<option value="3">계약유형3</option>
							</select>
						</div>
						
						<div className="searchFrm_div">
							<select className="browser-default custom-select" id="input_select2">
								<option value="0">계약시장전체</option>
								<option value="1">계약시장1</option>
								<option value="2">계약시장2</option>
								<option value="3">계약시장3</option>
							</select>
						</div>
						
						<div className="searchFrm_div">
							<select className="browser-default custom-select" id="input_select3">
								<option value="0">계약형태전체</option>
								<option value="1">계약형태1</option>
								<option value="2">계약형태2</option>
								<option value="3">계약형태3</option>
							</select>
						</div>
						
						<div className="searchFrm_div">
							<input type="text" className="form-control" placeholder="회원사명/계약번호 입력" id="input_keyword"/>
						</div>
						<MDBIcon icon="search" className="ml-2"/>
						
						<MDBBtn color="grey" id="con1_btn_clear">초기화</MDBBtn>
					</form>
					
					{isLoading? (
						<div className="con1_loader">
							<div className="spinner-border" style={{width:"3rem", height:"3rem"}} role="status"></div>
						</div>
					) : (
						<>
							<div className="mt-3">
								<a href="# "><img src={excelPng} width="27px" title="Excel출력" alt="excel"/></a>
							</div>
							
							<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2">
								<MDBTableHead color="grey">
									<tr>
										<th>번호</th>
										<th>회원사명</th>
										<th>계약번호</th>
										<th>계약시작일</th>
										<th>계약종료일</th>
										<th>발전소명</th>
										<th>계약유형</th>
										<th>계약시장</th>
										<th>계약형태</th>
										<th>단위가격</th>
										<th>약정REC</th>
										<th>댓글여부</th>
										<th>등록일시</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									{con1Data.map(data => {
										return(
											<tr key={data.idx}>
												<td>{data.idx}</td>
												<td>{data.col2}</td>
												<td>{data.col3}</td>
												<td>{data.col4}</td>
												<td>{data.col5}</td>
												<td>{data.col6}</td>
												<td>{data.col7}</td>
												<td>{data.col8}</td>
												<td>{data.col9}</td>
												<td>{data.col10}</td>
												<td>{data.col11}</td>
												<td>{data.col12}</td>
												<td>{data.col13}</td>
											</tr>
										)
									})}
								</MDBTableBody>
							</MDBTable>
							
							<MDBRow className="mt-3 float-right">
								<MDBCol>
									<MDBPagination color="dark">
										<MDBPageItem disabled>
										<MDBPageNav className="page-link" aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
											<span className="sr-only">Previous</span>
										</MDBPageNav>
										</MDBPageItem>
										<MDBPageItem active>
											<MDBPageNav className="page-link">
												1 <span className="sr-only">(current)</span>
											</MDBPageNav>
										</MDBPageItem>
										<MDBPageItem>
											<MDBPageNav className="page-link">
												2
											</MDBPageNav>
										</MDBPageItem>
										<MDBPageItem>
											<MDBPageNav className="page-link">
												3
											</MDBPageNav>
										</MDBPageItem>
										<MDBPageItem>
											<MDBPageNav className="page-link">
												4
											</MDBPageNav>
										</MDBPageItem>
										<MDBPageItem>
											<MDBPageNav className="page-link">
												5
											</MDBPageNav>
										</MDBPageItem>
										<MDBPageItem>
											<MDBPageNav className="page-link">
												&raquo;
											</MDBPageNav>
										</MDBPageItem>
									</MDBPagination>
								</MDBCol>
							</MDBRow>
						</>
					)}
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default con1;
