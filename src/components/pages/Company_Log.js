import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import './Company_Log.css';

class Company_Log extends Component {
	state = {
		
	}

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
		return (
			<div className="Company_Log div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">로그조회</span>
					</MDBCardBody>
				</MDBCard>
				
				{/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
						
                        {/**검색라인 */}
                        <form className="searchFrm form-inline">
                            <div className="form-group ml-2">
                                <input type="text" className="form-control dateLabel" defaultValue="접속일자" disabled/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control intputDate" />
                            </div>
                            <span className="ml-2">~</span>
                            <div className="form-group ml-2">
                                <input type="date" className="form-control" />
                            </div>

                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="제목/내용 입력" style={{width:"200px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>

                        {/**로그 조회 목록 */}
                        <MDBTable scrollY maxHeight="700px" striped bordered className="mt-2 logList_table">
                            <colgroup>
                                <col width="80px"/>
                                <col width="200px"/>
                                <col />
                                <col width="120px"/>
                                <col width="150px"/>
                                <col width="120px"/>
                                <col width="200px"/>
                            </colgroup>
                            <MDBTableHead color="grey">
                                <tr>
                                    <th>번호</th>
                                    <th>접속일시</th>
                                    <th>화면명</th>
                                    <th>액션</th>
                                    <th>IP주소</th>
                                    <th>아이디</th>
                                    <th>접속 URL</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td className="text-center">100</td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>로그인</td>
                                    <td>로그인</td>
                                    <td>11.111.111.111</td>
                                    <td>offeca</td>
                                    <td>http://abc.co.kr</td>
                                </tr>
                                <tr>
                                    <td className="text-center">99</td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>Dashboard</td>
                                    <td>View</td>
                                    <td>11.111.111.111</td>
                                    <td>offeca</td>
                                    <td>http://abc.co.kr/main</td>
                                </tr>
                                <tr>
                                    <td className="text-center">98</td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>로그인 &gt; 비밀번호 오류</td>
                                    <td>로그인</td>
                                    <td>11.111.111.111</td>
                                    <td>offeca</td>
                                    <td>http://abc.co.kr/main</td>
                                </tr>
                                <tr>
                                    <td className="text-center">97</td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>REC이행내역 조회</td>
                                    <td>조회</td>
                                    <td>11.111.111.111</td>
                                    <td>offeca</td>
                                    <td>http://abc.co.kr/main</td>
                                </tr>
                                <tr>
                                    <td className="text-center">96</td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>REC이행내역 조회</td>
                                    <td>검토요청</td>
                                    <td>11.111.111.111</td>
                                    <td>offeca</td>
                                    <td>http://abc.co.kr/main</td>
                                </tr>
                                <tr>
                                    <td className="text-center">95</td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>정산관리 &gt; 중간정산내역 조회</td>
                                    <td>검토요청</td>
                                    <td>11.111.111.111</td>
                                    <td>offeca</td>
                                    <td>http://abc.co.kr/main</td>
                                </tr>
                                <tr><td className="text-center">94</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">93</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">92</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">91</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">90</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">89</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">88</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">87</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">86</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">85</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">84</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">83</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">82</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td className="text-center">81</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
			</div>
		);
	}
}

export default Company_Log;