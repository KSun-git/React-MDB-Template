import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon} from "mdbreact"
import { Link } from "react-router-dom";
import excelPng from '../../assets/msExcel.png';
import './Admin_Contract.css';

class Admin_Contract extends Component {
	state= {
        isLoading: true,
		adminREC_Modal: false,
		REC_contract_Modal: false,
		REC_member_Modal: false,
	}

	REC_contract_Modal_toggle = () => {
		this.setState({
			REC_contract_Modal: !this.state.REC_contract_Modal
		});
	}

	REC_member_Modal_toggle = () => {
		this.setState({
			REC_member_Modal: !this.state.REC_member_Modal
		});
	}

    AdminREC_Modal_toggle = () => {
		this.setState({
			adminREC_Modal: !this.state.adminREC_Modal
		});
    }
	
	Confirm_Enroll = () =>{
		let EnrollModal = confirm("일괄등록할 경우 기본정보는 모두 삭제후 등록됩니다.[댓글제외]");
		if(EnrollModal){
			this.AdminREC_Modal_toggle();
		}
	}

	callCon1Data = () =>{
		//데이터를 불러오는 곳

		setTimeout(() => { //로더 확인용 지연함수
			this.setState({isLoading:false});
		}, 1000)
	}
	
	
	componentDidMount(){
		//컴포넌트 마운트 시 수행됨
		this.callCon1Data();
	}

	render() {
		const {isLoading, adminREC_Modal, REC_contract_Modal, REC_member_Modal} = this.state;
		
    return (
		<div className="Admin_Contract div_content">
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">계약정보 관리 </span><span style={{color:"red"}}>(권한&gt;관리자)</span>
                    <span id="title_option">
						<MDBBtn color="elegant" className="btn_REC_enroll" onClick={this.Confirm_Enroll}>계약정보 등록</MDBBtn>
                        
                        {/* 계약정보 등록 모달 */}
                        <MDBModal isOpen={adminREC_Modal} toggle={this.AdminREC_Modal_toggle} size="lg" centered>
							<MDBModalHeader toggle={this.AdminREC_Modal_toggle}>계약정보 등록</MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>
								<MDBTable responsive bordered className="REC_member_Table1 mt-2">
										<colgroup>
											<col width="150px"/>
											<col width="235px"/>
											<col width="150px"/>
											<col width="233px"/>
										</colgroup>
										<MDBTableBody>
											<tr>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>회원사명</th>
												<td>
													<select className="browser-default custom-select" style={{width:"200px"}}>
														<option>회원사 선택</option>
														<option value="1">회원사1</option>
														<option value="2">회원사2</option>
														<option value="3">회원사3</option>
													</select>
												</td>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>계약번호</th>
												<td><input type="text" className="form-control"style={{width:"200px"}} /></td>
											</tr>
											<tr>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>계약시작일</th>
												<td><input type="text" className="form-control"style={{width:"200px"}} /></td>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>계약종료일</th>
												<td><input type="text" className="form-control"style={{width:"200px"}} /></td>
											</tr>
											<tr>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>발전소명</th>
												<td><input type="text" className="form-control"style={{width:"200px"}} /></td>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>계약유형</th>
												<td style={{verticalAlign:"middle"}}><span style={{fontWeight:"bold"}}>수기계약</span></td>
											</tr>
											<tr>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>계약시장</th>
												<td>
													<select className="browser-default custom-select" style={{width:"200px"}}>
														<option>계약시장 선택</option>
														<option value="1">자체</option>
														<option value="2">예관공</option>
													</select>
												</td>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>계약형태</th>
												<td>
													<select className="browser-default custom-select" style={{width:"200px"}}>
														<option>계약형태 선택</option>
														<option value="1">자체현물구매(고정가)</option>
														<option value="2">자체현물구매(비고정가)</option>
														<option value="3">예관공 선정계약</option>
														<option value="4">예관광</option>
														<option value="5">예관공 소형태양광계약</option>
													</select>
												</td>
											</tr>
											<tr>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>단위가격</th>
												<td><input type="text" className="form-control"style={{width:"200px"}} /></td>
												<th style={{textAlign:"center",verticalAlign:"middle"}}>약정REC</th>
												<td><input type="text" className="form-control"style={{width:"200px"}} /></td>
											</tr>
											<tr>
												<th style={{textAlign:"center",verticalAlign:"middle",height:"48px"}}>계약서 등록</th>
												<td colSpan="3" style={{verticalAlign:"middle"}}><input type="file" id="abcd"/></td>
											</tr>
										</MDBTableBody>
									</MDBTable>
								</form>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn size="sm" color="secondary" onClick={this.AdminREC_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn size="sm" color="primary" className="btn_modal_commend">저장</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
                    </span>
				</MDBCardBody>
			</MDBCard>
			
            {/* 내용 */}
			<MDBCard className="mt-2">
				<MDBCardBody className="contentCardBody">
					
                    {/* 검색라인 */}
                    <form className="searchFrm form-inline">
						<div className="form-group ml-2 mr-2">
							<input type="date" className="form-control" style={{width:"165px"}} />
						</div>~
                        
                        <div className="form-group ml-2">
							<input type="date" className="form-control" style={{width:"165px"}} />
						</div>

						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>계약유형 전체</option>
								<option value="1">수기계약</option>
								<option value="2">전자계약</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>계약시장 전체</option>
								<option value="1">예관공</option>
								<option value="2">자체</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>계약형태 전체</option>
								<option value="1">자체현물구매(고정가)</option>
								<option value="2">자체현물구매(비고정가)</option>
								<option value="3">예관공 선정계약</option>
                                <option value="4">예관광</option>
                                <option value="5">예관공</option>
                                <option value="6">소형태양광계약</option>
							</select>
						</div>
						
						<div className="form-group ml-2">
							<input type="text" className="form-control" placeholder="회원사명/계약번호 입력" style={{width:"220px"}} />
						</div>
						
						<div className="searchFrm_btn">
							<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
							<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
						</div>
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

							<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2 REC_table">
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
                                        <th>등록일시</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									<tr>
										<td>100</td>
										<td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사명1</span></td>
                                        <td><Link to={{pathname: `/Admin/Contract-Info/:123457`}}>123457</Link></td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전1</td>
                                        <td>수기계약</td>
                                        <td>자체</td>
                                        <td>자체현물구매(고정가)</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>99</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사명2</span></td>
										<td><span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123458</span>
										</td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전2</td>
                                        <td>전자계약</td>
                                        <td>자체</td>
                                        <td>자체현물구매(비고정가)</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>98</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사명3</span></td>
										<td>
											<Link to={{pathname: `/Admin/Contract-Info/:123459`}}>123459</Link>
										</td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전3</td>
                                        <td>수기계약</td>
                                        <td>예관공</td>
                                        <td>예관공 선정계약</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>97</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사명4</span></td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123455</span>
										</td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전4</td>
                                        <td>전자계약</td>
                                        <td>예관공</td>
                                        <td>예관광</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>96</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사명5</span></td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123454</span>
										</td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전5</td>
                                        <td>전자계약</td>
                                        <td>예관공</td>
                                        <td>예관공 소형태양광계약</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>89</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>88</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>87</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>86</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>85</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>84</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>83</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>82</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>81</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
								</MDBTableBody>
							</MDBTable>
							
							{/* 페이지네이션 라인 */}
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

							
							{/* 회원사 정보 모달 */}
							<MDBModal isOpen={REC_member_Modal} toggle={this.REC_member_Modal_toggle} size="md" centered>
								<MDBModalHeader toggle={this.REC_member_Modal_toggle}>회원사 정보 상세/수정</MDBModalHeader>
								<MDBModalBody className="pt-1">
									<form>
                                    <MDBTable responsive bordered className="REC_member_Table1 mt-3">
										<MDBTableBody>
											<tr>
												<th>회원사코드</th>
												<td>123445</td>
                                            </tr>
                                            <tr>
												<th>회원사명</th>
												<td><input type="text" defaultValue="회원사1"></input></td>
											</tr>
                                            <tr>
												<th>사업자번호</th>
												<td><input type="text" defaultValue="111-11-11111"></input></td>
											</tr>
                                            <tr>
												<th>정산용 발전기코드</th>
												<td><input type="text" defaultValue="12344"></input></td>
                                            </tr>
											<tr>
												<th>의무 이행비율</th>
												<td><input type="text" defaultValue="10%"></input></td>
                                            </tr>
                                            <tr>
												<th>누적발전량</th>
												<td><input type="text" defaultValue="20,000"></input></td>
											</tr>
											<tr>
												<th>등록일시</th>
												<td>2020-10-01 11:11:11</td>
                                            </tr>
										</MDBTableBody>
									</MDBTable>
                                    </form>
								</MDBModalBody>
                                <MDBModalFooter className="justify-content-center">
								<MDBBtn size="sm" color="secondary" onClick={this.REC_member_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn size="sm" color="primary" className="btn_modal_commend">저장</MDBBtn>
							    </MDBModalFooter>
							</MDBModal>

							{/*계약정보팝업(전자계약)*/}
							<MDBModal isOpen={this.state.REC_contract_Modal} toggle={this.REC_contract_Modal_toggle} size="md" centered>
								<MDBModalHeader toggle={this.REC_contract_Modal_toggle}><span style={{fontWeight:"bold"}}>회원사 정보 상세</span></MDBModalHeader>
								<MDBModalBody className="pt-1 Admin_REC">
									<MDBTable responsive bordered className="REC_member_Table1 text-center mt-2">
										<MDBTableBody>
											<tr>
												<th>회원사코드</th>
												<td>123445</td>
												<th>회원사명</th>
												<td>회원사1</td>
											</tr>
											<tr>
												<th>정산용 발전기코드</th>
												<td>12344</td>
												<th>사업자번호</th>
												<td>111-11-11111</td>
											</tr>
											<tr>
												<th>의무 이행비율</th>
												<td>10%</td>
												<th>누적발전량</th>
												<td>20,000</td>
											</tr>
											<tr>
												<th>등록일시</th>
												<td>2020-10-01 11:11:11</td>
												<th>회원</th>
												<td>5명</td>
											</tr>
										</MDBTableBody>
									</MDBTable>

									<div style={{fontWeight:"bold"}} className="ml-3">회원목록</div>
									<MDBTable responsive bordered className="REC_member_Table2 text-center mt-2">
										<MDBTableHead color="grey">
											<tr>
												<th>회원명</th>
												<th>아이디</th>
												<th>가입일시</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
												<td>홍길동1</td>
												<td>Abced1</td>
												<td>2020-10-01 11:11:11</td>
											</tr>
											<tr>
												<td>홍길동2</td>
												<td>Abced2</td>
												<td>2020-10-01 11:11:11</td>
											</tr>
											<tr>
												<td>홍길동3</td>
												<td>Abced3</td>
												<td>2020-10-01 11:11:11</td>
											</tr>
											<tr>
												<td>홍길동4</td>
												<td>Abced4</td>
												<td>2020-10-01 11:11:11</td>
											</tr>
											<tr>
												<td>홍길동5</td>
												<td>Abced5</td>
												<td>2020-10-01 11:11:11</td>
											</tr>
										</MDBTableBody>
									</MDBTable>
								</MDBModalBody>
							</MDBModal>
						</>
					)}
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default Admin_Contract;
