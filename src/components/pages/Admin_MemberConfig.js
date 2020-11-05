import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import './Admin_MemberConfig.css';

class Admin_MemberConfig extends Component {
	state = {
        Config_Modal:false,
        Config_Modal_gubun:"none",
        Enroll_Modal:false,
        Enroll_Modal_gubun:"member",
        Reject_Modal:false,        
	}

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
    }
    
    Config_Modal_toggle = gubun => () =>{
        if(this.state.Config_Modal){
            //모달닫기
            this.setState({
                Config_Modal: !this.state.Config_Modal,
                Config_Modal_gubun: "none"
            })
        }else{
            //모달열기
            this.setState({
                Config_Modal: !this.state.Config_Modal,
                Config_Modal_gubun: gubun
            })
        }
    }
    
    Enroll_Modal_toggle = () =>{
        if(this.state.Enroll_Modal){
            //모달닫기
            this.setState({
                Enroll_Modal: !this.state.Enroll_Modal,
                Enroll_Modal_gubun: "member" //default셋팅
            })
        }else{
            //모달열기
            this.setState({
                Enroll_Modal: !this.state.Enroll_Modal
            })
        }
    }

    Reject_Modal_toggle = () =>{
        this.setState({
            Reject_Modal:!this.state.Reject_Modal
        })
    }

    checked_enroll_gubun = (event) =>{
        this.setState({
            Enroll_Modal_gubun: event.target.value
        })
    }

	render() {
        const {Reject_Modal, Config_Modal, Config_Modal_gubun, Enroll_Modal, Enroll_Modal_gubun} = this.state;
        
		return (
			<div className="Admin_MemberConfig div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">사용자 관리</span>
                        <span id="title_option">
						    <MDBBtn color="elegant" className="btn_REC_enroll" onClick={this.Enroll_Modal_toggle}>사용자 등록</MDBBtn>
                        </span>
					</MDBCardBody>
				</MDBCard>
				
				{/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
						
                        {/* 검색라인 */}
                        <form className="searchFrm form-inline">
                            <div className="form-group ml-2">
                                <input type="text" className="form-control dateLabel" defaultValue="가입일" disabled/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control intputDate" />
                            </div>
                            
                            <span className="ml-2">~</span>
                            
                            <div className="form-group ml-2">
                                <input type="date" className="form-control" />
                            </div>

                            <div className="form-group ml-2">
                                <select className="browser-default custom-select">
                                    <option>구분 전체</option>
                                    <option value="1">회원사</option>
                                    <option value="2">거래소</option>
                                </select>
                            </div>

                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="회원사명/이름/아이디" style={{width:"250px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>

                        {/* 처리요청 버튼 */}
                        <div className="mt-3 d-flex">
							<div className="MemberConfig_commend">
								<MDBBtn color="dark" className="btn_MemberConfig_commend" onClick={this.Reject_Modal_toggle}>반려</MDBBtn>
								<MDBBtn color="dark" className="btn_MemberConfig_commend">승인</MDBBtn>
							</div>
						</div>

                        {/* 사용자관리 리스트 테이블 */}
                        <MDBTable scrollY maxHeight="900px" striped bordered className="text-center mt-2 MemberConfig_table">
							<colgroup>
								<col width="60px"/>
								<col width="20px"/>
								<col width="100px"/>
								<col />
								<col />
								<col />
                                <col />
                                <col />
                                <col />
                                <col width="150px"/>
                                <col width="180px"/>
                            </colgroup>
							<MDBTableHead color="grey">
								<tr>
									<th>번호</th>
									<th>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_checkAll" className="form-control MemberConfig_table_check" />
											<label htmlFor="MemberConfig_table_checkAll"></label>
										</div>
									</th>
									<th>구분</th>
									<th>회원사명</th>
									<th>부서명</th>
									<th>이름</th>
									<th>아이디</th>
									<th>휴대폰번호</th>
									<th>이메일</th>
									<th>상태</th>
									<th>가입/등록일시</th>
								</tr>
							</MDBTableHead>
                            <MDBTableBody>
								<tr>
									<td>100</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" />
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>회원사</td>
                                    <td>회원사1</td>
                                    <td>부서명</td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>Abce1</span></td>
                                    <td>010-1234-5678</td>
                                    <td>a@abc.co.kr</td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="1" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
									<td>99</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" />
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>거래소</td>
                                    <td>거래소명</td>
                                    <td>부서명</td>
                                    <td><span onClick={this.Config_Modal_toggle("거래소")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("거래소")} style={{cursor:"pointer"}}>Abce3</span></td>
                                    <td>010-1234-5676</td>
                                    <td>a2@abc.co.kr</td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="2" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
									<td>98</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" />
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>회원사</td>
                                    <td>회원사1</td>
                                    <td>부서명</td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>Abce1</span></td>
                                    <td>010-1234-5678</td>
                                    <td>a@abc.co.kr</td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="1" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
									<td>97</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" disabled/>
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>회원사</td>
                                    <td>회원사1</td>
                                    <td>부서명</td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>Abce2</span></td>
                                    <td>010-1234-5677</td>
                                    <td>a1@abc.co.kr</td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="3" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
									<td>96</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" disabled/>
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>관리자</td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td><span onClick={this.Config_Modal_toggle("관리자")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("관리자")} style={{cursor:"pointer"}}>Test</span></td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="4" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
									<td>95</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" disabled/>
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>관리자</td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td><span onClick={this.Config_Modal_toggle("관리자")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("관리자")} style={{cursor:"pointer"}}>Test</span></td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="5" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
									<td>94</td>
									<td>
										<div className="d-flex">
											<input type="checkbox" id="MemberConfig_table_check100" className="form-control MemberConfig_table_check" disabled/>
											<label htmlFor="MemberConfig_table_check100"></label>
										</div>
									</td>
                                    <td>회원사</td>
                                    <td>회원사1</td>
                                    <td>부서명</td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>홍길동</span></td>
                                    <td><span onClick={this.Config_Modal_toggle("회원사")} style={{cursor:"pointer"}}>Abce1</span></td>
                                    <td>010-1234-5678</td>
                                    <td>a@abc.co.kr</td>
                                    <td>
                                        <select className="browser-default custom-select member_state" defaultValue="5" style={{width:"120px"}}>
                                            <option>상태</option>
                                            <option value="1">승인대기</option>
                                            <option value="2">승인반려</option>
                                            <option value="3">승인완료</option>
                                            <option value="4">사용중지</option>
                                            <option value="5">사용중</option>
                                        </select>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>89</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>88</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>87</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>86</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>85</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>84</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>83</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>82</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>81</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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

                        
                        {/* 사용자 상세모달 */}
                        <MDBModal isOpen={Config_Modal} toggle={this.Config_Modal_toggle("none")} size="lg" centered>
                            <MDBModalHeader toggle={this.Config_Modal_toggle("none")}>사용자 상세</MDBModalHeader>
                            <MDBModalBody>
                                <MDBTable className="memberConfig_Table1 border mt-2">
                                    <colgroup>
                                        <col width="20%"/>
                                        <col width="30%"/>
                                        <col width="20%"/>
                                        <col width="30%"/>
                                    </colgroup>
                                    <MDBTableBody>
                                        {Config_Modal_gubun==="거래소" && 
                                            <>
                                                <tr>
                                                    <th>구분</th>
                                                    <td colSpan="3">거래소</td>
                                                </tr>
                                                <tr>
                                                    <th>이름</th>
                                                    <td>홍길동</td>
                                                    <th>아이디</th>
                                                    <td>Abcd</td>
                                                </tr>
                                                <tr>
                                                    <th>부서명</th>
                                                    <td colSpan="3">부서명</td>
                                                </tr>
                                                <tr>
                                                    <th>휴대폰번호</th>
                                                    <td>010-1234-1455</td>
                                                    <th>이메일</th>
                                                    <td>aaa@aaa.co.kr</td>
                                                </tr>
                                                <tr>
                                                    <th>권한</th>
                                                    <td colSpan="3">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked1" />
                                                            <label className="custom-control-label" htmlFor="checked1">전체</label>
                                                        </div>
                                                        <br/>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked2" />
                                                            <label className="custom-control-label" htmlFor="checked2">회원사정보</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked3" />
                                                            <label className="custom-control-label" htmlFor="checked3">REC이행내역 검토관리</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked4" />
                                                            <label className="custom-control-label" htmlFor="checked4">정산관리 전체</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked5" />
                                                            <label className="custom-control-label" htmlFor="checked5">정산관리(중간정산승인처리)</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked6" />
                                                            <label className="custom-control-label" htmlFor="checked6">정산관리(연간정산내역조회)</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked7" />
                                                            <label className="custom-control-label" htmlFor="checked7">정산관리(지급관리)</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked8" />
                                                            <label className="custom-control-label" htmlFor="checked8">분석통계</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked9" />
                                                            <label className="custom-control-label" htmlFor="checked9">시스템관리</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>상태</th>
                                                    <td>승인대기</td>
                                                    <th>가입일시</th>
                                                    <td>2020-10-10 11:11:11</td>
                                                </tr>
                                            </>
                                        }
                                        {Config_Modal_gubun==="회원사" && 
                                            <>
                                                <tr>
                                                    <th>구분</th>
                                                    <td colSpan="3">회원사</td>
                                                </tr>
                                                <tr>
                                                    <th>이름</th>
                                                    <td>홍길동</td>
                                                    <th>아이디</th>
                                                    <td>Abcd</td>
                                                </tr>
                                                <tr>
                                                    <th>회원사명</th>
                                                    <td>
                                                        <select className="browser-default custom-select" style={{width:"120px"}}>
                                                            <option>회원사명</option>
                                                            <option value="1">회원사1</option>
                                                            <option value="2">회원사2</option>
                                                            <option value="3">회원사3</option>
                                                        </select>
                                                    </td>
                                                    <th>부서명</th>
                                                    <td>부서명</td>
                                                </tr>
                                                <tr>
                                                    <th>휴대폰번호</th>
                                                    <td>010-1234-1455</td>
                                                    <th>이메일</th>
                                                    <td>aaa@aaa.co.kr</td>
                                                </tr>
                                                <tr>
                                                    <th>권한</th>
                                                    <td colSpan="3">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked1" />
                                                            <label className="custom-control-label" htmlFor="checked1">전체</label>
                                                        </div>
                                                        <br/>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked2" />
                                                            <label className="custom-control-label" htmlFor="checked2">계약정보현황</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked3" />
                                                            <label className="custom-control-label" htmlFor="checked3">자체발전소정보</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked4" />
                                                            <label className="custom-control-label" htmlFor="checked4">REC이행내역</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked5" />
                                                            <label className="custom-control-label" htmlFor="checked5">정산요청</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked6" />
                                                            <label className="custom-control-label" htmlFor="checked6">시스템관리</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>상태</th>
                                                    <td>승인대기</td>
                                                    <th>가입일시</th>
                                                    <td>2020-10-10 11:11:11</td>
                                                </tr>
                                            </>
                                        }
                                        {Config_Modal_gubun==="관리자" && 
                                            <>
                                                <tr>
                                                    <th>구분</th>
                                                    <td>관리자</td>
                                                    <th>이름</th>
                                                    <td>홍길동</td>
                                                </tr>
                                                <tr>
                                                    <th>아이디</th>
                                                    <td>Abcd</td>
                                                    <th>비밀번호</th>
                                                    <td> - </td>
                                                </tr>
                                                <tr>
                                                    <th>상태</th>
                                                    <td>사용중</td>
                                                    <th>가입일시</th>
                                                    <td>2020-10-10 11:11:11</td>
                                                </tr>
                                            </>
                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center">
								<MDBBtn size="md" color="secondary" onClick={this.Config_Modal_toggle("none")} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn size="md" color="cyan" className="btn_modal_commend">반려</MDBBtn>
                                <MDBBtn size="md" color="primary" className="btn_modal_commend">승인</MDBBtn>
							</MDBModalFooter>
                        </MDBModal>

                        {/* 반려처리 모달 */}
                        <MDBModal isOpen={Reject_Modal} toggle={this.Reject_Modal_toggle} size="md" centered>
                            <MDBModalHeader toggle={this.Reject_Modal_toggle}>사용자 상세</MDBModalHeader>
                            <MDBModalBody>
                                <MDBTable className="memberConfig_Table1 border mt-2">
                                    <MDBTableBody>
                                        <tr>
                                            <th>반려사유</th>
                                            <td>
                                                <select className="browser-default custom-select">
                                                    <option>선택</option>
                                                    <option value="1">부서명 확인요청</option>
                                                    <option value="2">휴대폰번호 확인요청</option>
                                                    <option value="3">이메일 확인요청</option>
                                                    <option value="4">기타사유</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center">
                                <MDBBtn size="md" color="secondary" onClick={this.Reject_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
                                <MDBBtn size="md" color="primary" className="btn_modal_commend">확인</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>


                        {/* 사용자 등록모달 */}
                        <MDBModal isOpen={Enroll_Modal} toggle={this.Enroll_Modal_toggle} size="lg" centered>
                            <MDBModalHeader toggle={this.Enroll_Modal_toggle}>사용자 등록</MDBModalHeader>
                            <MDBModalBody>
                                <MDBTable className="memberConfig_Table1 border mt-2">
                                    <colgroup>
                                        <col width="20%"/>
                                        <col width="30%"/>
                                        <col width="20%"/>
                                        <col width="30%"/>
                                    </colgroup>
                                    <MDBTableBody>
                                        <tr>
                                            <th>구분</th>
                                            <td colSpan="3">
                                                <div className="custom-control custom-radio d-inline">
                                                    <input type="radio" name="Enroll_form_gubun" id="enroll_member" className="custom-control-input" value="member" 
                                                        checked={Enroll_Modal_gubun === "member" ? true : false} 
                                                        onChange={this.checked_enroll_gubun} />
                                                    <label className="custom-control-label" htmlFor="enroll_member">거래소</label>
                                                </div>
                                                <div className="custom-control custom-radio d-inline ml-2">
                                                    <input type="radio" name="Enroll_form_gubun" id="enroll_company" className="custom-control-input" value="company" 
                                                        onChange={this.checked_enroll_gubun} />
                                                    <label className="custom-control-label" htmlFor="enroll_company">회원사</label>
                                                </div>
                                                <div className="custom-control custom-radio d-inline ml-2">
                                                    <input type="radio" name="Enroll_form_gubun" id="enroll_admin" className="custom-control-input" value="admin" 
                                                        onChange={this.checked_enroll_gubun} />
                                                    <label className="custom-control-label" htmlFor="enroll_admin">관리자</label>
                                                </div>
                                            </td>
                                        </tr>
                                        {Enroll_Modal_gubun==="member" && 
                                            <>
                                                <tr>
                                                    <th>이름</th>
                                                    <td><input type="text" className="form-control"/></td>
                                                    <th>아이디</th>
                                                    <td><input type="text" className="form-control"/></td>
                                                </tr>
                                                <tr>
                                                    <th>부서명</th>
                                                    <td colSpan="3"><input type="text" className="form-control" style={{width:"208px"}} /></td>
                                                </tr>
                                                <tr>
                                                    <th>휴대폰번호</th>
                                                    <td><input type="text" className="form-control"/></td>
                                                    <th>이메일</th>
                                                    <td><input type="text" className="form-control"/></td>
                                                </tr>
                                                <tr>
                                                    <th>권한</th>
                                                    <td colSpan="3">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked1" />
                                                            <label className="custom-control-label" htmlFor="checked1">전체</label>
                                                        </div>
                                                        <br/>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked2" />
                                                            <label className="custom-control-label" htmlFor="checked2">회원사정보</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked3" />
                                                            <label className="custom-control-label" htmlFor="checked3">REC이행내역 검토관리</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked4" />
                                                            <label className="custom-control-label" htmlFor="checked4">정산관리 전체</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked5" />
                                                            <label className="custom-control-label" htmlFor="checked5">정산관리(중간정산승인처리)</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked6" />
                                                            <label className="custom-control-label" htmlFor="checked6">정산관리(연간정산내역조회)</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked7" />
                                                            <label className="custom-control-label" htmlFor="checked7">정산관리(지급관리)</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked8" />
                                                            <label className="custom-control-label" htmlFor="checked8">분석통계</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="checked9" />
                                                            <label className="custom-control-label" htmlFor="checked9">시스템관리</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                        }
                                        {Enroll_Modal_gubun==="company" && 
                                        <>
                                            <tr>
                                                <th>이름</th>
                                                <td><input type="text" className="form-control"/></td>
                                                <th>아이디</th>
                                                <td><input type="text" className="form-control"/></td>
                                            </tr>
                                            <tr>
                                                <th>회원사명</th>
                                                <td>
                                                    <select className="browser-default custom-select">
                                                        <option>회원사명</option>
                                                        <option value="1">회원사1</option>
                                                        <option value="2">회원사2</option>
                                                        <option value="3">회원사3</option>
                                                    </select>
                                                </td>
                                                <th>부서명</th>
                                                <td><input type="text" className="form-control"/></td>
                                            </tr>
                                            <tr>
                                                <th>휴대폰번호</th>
                                                <td><input type="text" className="form-control"/></td>
                                                <th>이메일</th>
                                                <td><input type="text" className="form-control"/></td>
                                            </tr>
                                            <tr>
                                                <th>권한</th>
                                                <td colSpan="3">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="checked1" />
                                                        <label className="custom-control-label" htmlFor="checked1">전체</label>
                                                    </div>
                                                    <br/>
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="checked2" />
                                                        <label className="custom-control-label" htmlFor="checked2">계약정보현황</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="checked3" />
                                                        <label className="custom-control-label" htmlFor="checked3">자체발전소정보</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="checked4" />
                                                        <label className="custom-control-label" htmlFor="checked4">REC이행내역</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="checked5" />
                                                        <label className="custom-control-label" htmlFor="checked5">정산요청</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="checked6" />
                                                        <label className="custom-control-label" htmlFor="checked6">시스템관리</label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                        }
                                        {Enroll_Modal_gubun==="admin" && 
                                        <>
                                            <tr>
                                                <th>이름</th>
                                                <td><input type="text" className="form-control"/></td>
                                                <th>아이디</th>
                                                <td><input type="text" className="form-control"/></td>
                                            </tr>
                                            <tr>
                                                <th>비밀번호</th>
                                                <td colSpan="3"><input type="text" className="form-control" style={{width:"208px"}} /></td>
                                            </tr>
                                        </>
                                        
                                    }
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center">
								<MDBBtn size="md" color="secondary" onClick={this.Enroll_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
                                <MDBBtn size="md" color="primary" className="btn_modal_commend">저장</MDBBtn>
							</MDBModalFooter>
                        </MDBModal>

					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Admin_MemberConfig;