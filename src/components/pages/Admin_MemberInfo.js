import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon} from "mdbreact"
import excelPng from '../../assets/msExcel.png';
import './Admin_MemberInfo.css';

class Admin_MemberInfo extends Component {
	state = {
        update_memberInfo_Modal: false,
        enroll_memberInfo_Modal: false,
        enroll_one_memberInfo_Modal: false,
    }
    
    Confirm_Enroll = () =>{
		let EnrollModal = confirm("일괄등록할 경우 기본정보는 모두 삭제후 등록됩니다.[댓글제외]");
		if(EnrollModal){
			this.enroll_Modal_toggle();
		}
	}

    enroll_Modal_toggle = () => {
		this.setState({
			enroll_memberInfo_Modal: !this.state.enroll_memberInfo_Modal
		});
    }
    
    update_Modal_toggle = () => {
		this.setState({
			update_memberInfo_Modal: !this.state.update_memberInfo_Modal
		});
    }

    individual_enroll_Modal_toggle = () => {
		this.setState({
			enroll_one_memberInfo_Modal: !this.state.enroll_one_memberInfo_Modal
		});
    }

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
        const{update_memberInfo_Modal, enroll_memberInfo_Modal, enroll_one_memberInfo_Modal} = this.state;

		return (
			<div className="Admin_MemberInfo div_content">
				
                {/**타이틀 */}
                <MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">회원사정보 관리</span><span style={{color:"red"}}> (권한&gt;관리자)</span>
                        <span id="title_option">
                            <MDBBtn color="elegant" className="btn_AdminInfo_enroll" onClick={this.individual_enroll_Modal_toggle}>회원사정보 개별등록</MDBBtn>
                            <MDBBtn color="elegant" className="btn_AdminInfo_enroll" onClick={this.Confirm_Enroll}>회원사정보 일괄등록</MDBBtn>
                        </span>
					</MDBCardBody>
				</MDBCard>
				
                {/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
						{/**검색라인 */}
                        <form className="searchFrm form-inline">
                            <div className="form-group ml-2">
                                <input type="text" className="form-control dateLabel" defaultValue="등록일자" disabled/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control intputDate" />
                            </div>
                            <span className="ml-2">~</span>
                            <div className="form-group ml-2">
                                <input type="date" className="form-control" />
                            </div>

                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="회원사명/사업자번호 입력" style={{width:"250px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>
						
                        {/**엑셀다운버튼 */}
                        <div className="mt-3">
								<a href="# "><img src={excelPng} width="27px" title="Excel출력" alt="excel"/></a>
						</div>

                        {/**회원사 정보 목록 */}
                        <MDBTable scrollY maxHeight="600px" striped bordered className="mt-2 memberINfo_table text-center">
                            <MDBTableHead color="grey">
                                <tr>
                                    <th>번호</th>
                                    <th>회원사코드</th>
                                    <th>회원사명</th>
                                    <th>정산용 발전기코드</th>
                                    <th>사업자번호</th>
                                    <th>의무 이행비율</th>
                                    <th>누적발전량</th>
                                    <th>등록일시</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>100</td>
                                    <td>
                                        12345
                                    </td>
                                    <td>
                                        <span style={{cursor:"pointer"}} onClick={this.update_Modal_toggle}>회원사1</span>
                                    </td>
                                    <td>123455</td>
                                    <td>111-11-1111</td>
                                    <td className="text-right">40%</td>
                                    <td className="text-right">39,000</td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>99</td>
                                    <td>
                                        12346
                                    </td>
                                    <td>
                                        <span style={{cursor:"pointer"}} onClick={this.update_Modal_toggle}>회원사2</span>
                                    </td>
                                    <td>123455</td>
                                    <td>111-11-1111</td>
                                    <td className="text-right">40%</td>
                                    <td className="text-right">39,000</td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>98</td>
                                    <td>
                                        12347
                                    </td>
                                    <td>
                                        <span style={{cursor:"pointer"}} onClick={this.update_Modal_toggle}>회원사3</span>
                                    </td>
                                    <td>123455</td>
                                    <td>111-11-1111</td>
                                    <td className="text-right">40%</td>
                                    <td className="text-right">39,000</td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                
                                <tr><td>97</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
					</MDBCardBody>
				</MDBCard>

                {/* 회원사 정보 상세,수정 모달 */}
				<MDBModal isOpen={update_memberInfo_Modal} toggle={this.update_Modal_toggle} size="md" centered>
					<MDBModalHeader toggle={this.update_Modal_toggle}>회원사 정보 상세/수정</MDBModalHeader>
					<MDBModalBody className="pt-1">
						<form>
                            <MDBTable responsive bordered className="memberInfo_Table1 mt-3">
                                <MDBTableBody>
                                    <tr>
							    		<th>회원사코드</th>
										<td><input type="text" defaultValue="123445" disabled></input></td>
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
										<td><input type="text" defaultValue="2020-10-01 11:11:11" disabled></input></td>
                                    </tr>
								</MDBTableBody>
							</MDBTable>
                        </form>
					</MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
						<MDBBtn size="sm" color="secondary" onClick={this.update_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
						<MDBBtn size="sm" color="primary" className="btn_modal_commend">저장</MDBBtn>
				    </MDBModalFooter>
				</MDBModal>

                {/* 회원사 개별등록 모달 */}
				<MDBModal isOpen={enroll_one_memberInfo_Modal} toggle={this.individual_enroll_Modal_toggle} size="md" centered>
					<MDBModalHeader toggle={this.individual_enroll_Modal_toggle}>회원사 정보 등록</MDBModalHeader>
					<MDBModalBody className="pt-1">
						<form>
                            <MDBTable responsive bordered className="memberInfo_Table1 mt-3">
                                <MDBTableBody>
                                    <tr>
							    		<th>회원사코드</th>
										<td><input type="text" defaultValue="cf.자동생성" disabled></input></td>
                                    </tr>
                                    <tr>
									    <th>회원사명</th>
										<td><input type="text" /></td>
									</tr>
                                    <tr>
										<th>사업자번호</th>
										<td><input type="text" /></td>
									</tr>
                                    <tr>
										<th>정산용 발전기코드</th>
										<td><input type="text" /></td>
                                    </tr>
									<tr>
										<th>의무 이행비율</th>
										<td><input type="text" /></td>
                                    </tr>
                                    <tr>
										<th>누적발전량</th>
										<td><input type="text" /></td>
									</tr>
									<tr>
										<th>등록일시</th>
										<td><input type="text" defaultValue="2020-10-01 11:11:11" disabled></input></td>
                                    </tr>
								</MDBTableBody>
							</MDBTable>
                        </form>
					</MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
						<MDBBtn size="sm" color="secondary" onClick={this.individual_enroll_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
						<MDBBtn size="sm" color="primary" className="btn_modal_commend">저장</MDBBtn>
				    </MDBModalFooter>
				</MDBModal>

                {/* 일괄등록 모달 */}
                <MDBModal isOpen={enroll_memberInfo_Modal} toggle={this.enroll_Modal_toggle} centered>
					<MDBModalHeader toggle={this.enroll_Modal_toggle}>회원사정보 일괄등록</MDBModalHeader>
					<MDBModalBody className="pt-1">
						<MDBBtn color="elegant" size="sm" className="btn_download_file">서식 다운로드</MDBBtn>
						<form className="frm_upload_file">
							<input type="file" id="abcd"/>
					    </form>
						<div className="enrollModal_precautions">
							<MDBIcon icon="exclamation-circle" /> 총 0MB 미만의 파일만 업로드 가능합니다.<br/>
							<MDBIcon icon="exclamation-circle" /> 파일명은 영문자, 숫자만 가능하며 최종 [등록] 버튼을 눌러주세요.
						</div>
					</MDBModalBody>
					<MDBModalFooter className="justify-content-center">
						<MDBBtn size="sm" color="secondary" onClick={this.enroll_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
						<MDBBtn size="sm" color="primary" className="btn_modal_commend">확인</MDBBtn>
					</MDBModalFooter>
				</MDBModal>

			</div>
		);
	}
}

export default Admin_MemberInfo;