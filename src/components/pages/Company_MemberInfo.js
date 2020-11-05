import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon} from "mdbreact"
import './Company_MemberInfo.css';

class Company_MemberInfo extends Component {
	state = {
		memberInfo_Modal: false,
    }
    
    memberInfo_Modal_toggle = () => {
		this.setState({
			memberInfo_Modal: !this.state.memberInfo_Modal
		});
	}

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
        const{memberInfo_Modal} = this.state;

		return (
			<div className="Company_MemberInfo div_content">
				
                {/**타이틀 */}
                <MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">회원사 정보</span><span style={{color:"red"}}>(권한&gt;거래소)</span>
					</MDBCardBody>
				</MDBCard>
				
                {/**내용 */}
				<MDBCard className="mt-2 pb-3">
					<MDBCardBody className="contentCardBody">
						{/**검색라인 */}
                        <form className="searchFrm form-inline">
                            <div className="form-group ml-2">
                                <input type="text" className="form-control dateLabel" defaultValue="등록일자" disabled/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control intputDate" />
                            </div>

                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="회원사명/사업자번호 입력" style={{width:"250px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>
						
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
                                        <span style={{cursor:"pointer"}} onClick={this.memberInfo_Modal_toggle}>12345</span>
                                    </td>
                                    <td>
                                        <span style={{cursor:"pointer"}} onClick={this.memberInfo_Modal_toggle}>회원사1</span>
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
                                        <span style={{cursor:"pointer"}} onClick={this.memberInfo_Modal_toggle}>12346</span>
                                    </td>
                                    <td>
                                        <span style={{cursor:"pointer"}} onClick={this.memberInfo_Modal_toggle}>회원사2</span>
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
                                        <span style={{cursor:"pointer"}} onClick={this.memberInfo_Modal_toggle}>12347</span>
                                    </td>
                                    <td>
                                        <span style={{cursor:"pointer"}} onClick={this.memberInfo_Modal_toggle}>회원사3</span>
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

                {/* 회원사 정보 모달 */}
				<MDBModal isOpen={memberInfo_Modal} toggle={this.memberInfo_Modal_toggle} size="md" centered>
					<MDBModalHeader toggle={this.memberInfo_Modal_toggle}>회원사 정보 상세</MDBModalHeader>
					<MDBModalBody className="pt-1">
						<MDBTable responsive bordered className="memberInfo_Table1 text-center mt-2">
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
					</MDBModalBody>
					
					<div style={{fontWeight:"bold"}} className="ml-3">회원목록</div>
					<MDBModalBody className="pt-1">
						<MDBTable responsive bordered className="memberInfo_Table2 text-center mt-2">
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

                        <div className="d-flex justify-content-center mt-2">
                            <MDBBtn size="sm" color="mdb-color" className="btn_modal_commend" onClick={this.memberInfo_Modal_toggle}>확인</MDBBtn>
                        </div>
					</MDBModalBody>
				</MDBModal>
			</div>
		);
	}
}

export default Company_MemberInfo;