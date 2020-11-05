import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav} from "mdbreact";
import './Admin_Common.css';

class Admin_Common extends Component {
	state = {
		isClick:false,
	}

	click_toggle = () => {
		this.setState({
			isClick: !this.state.isClick
		});
	}
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
		const {isClick} = this.state;

		return (
			<div className="Admin_Common div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">공통코드 관리</span>
					</MDBCardBody>
				</MDBCard>
				
				{/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
                        
                        
                        {/* 개발 진행예정입니다. */}
                        <div className="d-flex flex-wrap align-content-center justify-content-start mt-2" >
                            
							{/* 1.그룹코드 */}
                            <div className="text-center" style={{width:"50%"}}>
								{/*삭제버튼*/}
								<div className="mt-2 d-flex">
									<div className="Commeon_commend">
										<MDBBtn color="dark" className="btn_common_commend"> 삭제 </MDBBtn>
									</div>
								</div>

								<MDBTable responsive maxHeight="700px"bordered className="Common_table text-center mt-2">
									<MDBTableHead color="grey">
                                        <tr>
                                            <th className="text-left" colSpan="11">그룹코드</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
										<tr>
											<th style={{minWidth:"70px"}}>번호</th>
											<th style={{minWidth:"18px"}}>
												<div className="d-flex">
													<input type="checkbox" id="Common_table_checkAll" className="form-control Common_table_check" />
													<label htmlFor="Common_table_checkAll"></label>
												</div>
											</th>
											<th style={{minWidth:"100px"}}>상태</th>
											<th style={{minWidth:"100px"}}>코드구분</th>
											<th style={{minWidth:"100px"}}>그룹코드</th>
											<th style={{minWidth:"100px"}}>그룹코드명</th>
											<th style={{minWidth:"120px"}}>대상 테이블명</th>
											<th style={{minWidth:"120px"}}>대상 칼럼명</th>
											<th style={{minWidth:"100px"}}>메모</th>
											<th style={{minWidth:"100px"}}>최종수정자</th>
											<th style={{minWidth:"150px"}}>최종수정일시</th>
										</tr>
										<tr>
											<td>100</td>
											<td>
												<div className="d-flex">
													<input type="checkbox" id="Common_table_check100" className="form-control Common_table_check"/>
													<label htmlFor="Common_table_check100"></label>
												</div>
											</td>
											<td>사용중</td>
											<td>전체</td>
											<td><span onClick={this.click_toggle} style={{cursor:"pointer"}}>A001011</span></td>
											<td>QA구분</td>
											<td>Abdd</td>
											<td>Ddd</td>
											<td>oo사용</td>
											<td>홍길동</td>
											<td>2020-10-11 11:11:11</td>
										</tr>
										<tr><td>99</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>98</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>97</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
									</MDBTableBody>
								</MDBTable>

								{/* 페이징 */}
								<div className="mt-2 d-flex justify-content-end">
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
								</div>

                            </div>
                            
							{/* 2.공통코드 */}
                            <div className="text-center" style={{width:"50%"}} className="pl-2"> 
								
								{/*삭제버튼*/}
								<div className="mt-2 d-flex">
									<div className="Commeon_commend">
										<MDBBtn color="dark" className="btn_common_commend"> 삭제 </MDBBtn>
									</div>
								</div>

								<MDBTable responsive maxHeight="700px"bordered className="Common_table text-center mt-2">
									<MDBTableHead color="grey">
                                        <tr>
                                            <th className="text-left" colSpan="11">공통코드</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
										<tr>
											<th style={{minWidth:"70px"}}>번호</th>
											<th style={{minWidth:"18px"}}>
												<div className="d-flex">
													<input type="checkbox" id="Common_table_checkAll" className="form-control Common_table_check" />
													<label htmlFor="Common_table_checkAll"></label>
												</div>
											</th>
											<th style={{minWidth:"100px"}}>상태</th>
											<th style={{minWidth:"120px"}}>공통그룹코드</th>
											<th style={{minWidth:"120px"}}>공통코드명</th>
											<th style={{minWidth:"90px"}}>정렬순서</th>
											<th style={{minWidth:"120px"}}>기타참조코드</th>
											<th style={{minWidth:"100px"}}>비고</th>
											<th style={{minWidth:"100px"}}>최종수정자</th>
											<th style={{minWidth:"150px"}}>최종수정일시</th>
										</tr>
										<tr>
											{isClick ? 
												<>
													<td>100</td>
													<td>
														<div className="d-flex">
															<input type="checkbox" id="Common_table_check100" className="form-control Common_table_check"/>
															<label htmlFor="Common_table_check100"></label>
														</div>
													</td>
													<td>사용중</td>
													<td>A001011</td>
													<td>회원가입질문</td>
													<td>1</td>
													<td>Abcd</td>
													<td>메모</td>
													<td>홍길동</td>
													<td>2020-10-11 11:11:11</td>
												</>
											:
												<>
													<td>100</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
												</>
											}
										</tr>
										<tr><td>99</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>98</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>97</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
										<tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
									</MDBTableBody>
								</MDBTable>

								{/* 페이징 */}
								<div className="mt-2 d-flex justify-content-end">
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
								</div>
                            </div>
                        </div>
						
						
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Admin_Common;