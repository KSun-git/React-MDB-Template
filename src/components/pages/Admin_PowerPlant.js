import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon} from "mdbreact"
import { Link } from "react-router-dom";
import './Admin_PowerPlant.css';
import nbox from '../../assets/n_box_icon.png';

class Admin_PowerPlant extends Component {
	state= {
        isLoading: true,
        REC_member_Modal: false,
	}

    REC_member_Modal_toggle = () => {
		this.setState({
			REC_member_Modal: !this.state.REC_member_Modal
		});
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
		const {isLoading, REC_member_Modal} = this.state;
    return (
		<div className="Admin_PowerPlant div_content">
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">자체발전소 정보 </span>
                    <span style={{color:"red"}}>(권한&gt;관리자)</span>
                    <span id="title_option">
                        <Link to={{pathname: `/Admin/PowerPlant-Info/enroll`}}>
                            <MDBBtn color="elegant" className="btn_PowerPlant_enroll">자체발전소정보 등록</MDBBtn>
                        </Link>
                    </span>
                </MDBCardBody>
            </MDBCard>

             {/* 내용 */}
			<MDBCard className="mt-2">
				<MDBCardBody className="contentCardBody">
					
                    {/* 검색라인 */}
                    <form className="searchFrm form-inline">
                        <div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>회원사 전체</option>
								<option value="1">회원사1</option>
								<option value="2">회원사2</option>
								<option value="3">회원사3</option>
                                <option value="4">회원사4</option>
							</select>
						</div>
                        <div className="form-group ml-2">
                            <input type="text" className="form-control dateLabel" defaultValue="상업운전게시일" disabled/>
                        </div>
                        
                        <div className="form-group mr-2">
							<input type="date" className="form-control intputDate" />
						</div>
                        
						<div className="form-group ml-2">
							<input type="text" className="form-control" placeholder="발전소명 입력" style={{width:"250px"}} />
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
							<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2 PowerPlant_table">
                            <MDBTableHead color="grey">
									<tr>
										<th>번호</th>
                                        <th>회원사명</th>
										<th>발전소명</th>
                                        <th>발전소 코드</th>
                                        <th>전원(kW)</th>
                                        <th>상업운전게시일</th>
										<th>설비용량</th>
										<th>누적발전량(MWh)</th>
										<th>REC가중치</th>
										<th>총투자비용(백만원)</th>
                                        <th>등록자</th>
                                        <th>댓글여부</th>
                                        <th>최종등록일시</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									<tr>
										<td>100</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사1</span></td>
										<td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>발전소1</Link></td>
                                        <td>12341</td>
										<td>100</td>
										<td>2020-01-01</td>
										<td>100,000</td>
                                        <td>100,000</td>
                                        <td>3</td>
                                        <td>10,000,000</td>
                                        <td>홍길동</td>
                                        <td>
											<Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>
												<img src={nbox} alt="new" style={{width:"22px",marginTop:"-20px"}}/><span style={{paddingRight:"20px"}}>3</span>
											</Link>
										</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>99</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사2</span></td>
										<td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>발전소2</Link></td>
                                        <td>12342</td>
										<td>100</td>
										<td>2020-01-01</td>
										<td>100,000</td>
                                        <td>100,000</td>
                                        <td>3</td>
                                        <td>10,000,000</td>
                                        <td>홍길동</td>
                                        <td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>3</Link></td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>98</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사3</span></td>
										<td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>발전소3</Link></td>
                                        <td>12343</td>
										<td>100</td>
										<td>2020-01-01</td>
										<td>100,000</td>
                                        <td>100,000</td>
                                        <td>3</td>
                                        <td>10,000,000</td>
                                        <td>홍길동</td>
                                        <td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>3</Link></td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>97</td>
                                        <td><span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>회원사4</span></td>
										<td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>발전소4</Link></td>
                                        <td>12344</td>
										<td>100</td>
										<td>2020-01-01</td>
										<td>100,000</td>
                                        <td>100,000</td>
                                        <td>3</td>
                                        <td>10,000,000</td>
                                        <td>홍길동</td>
                                        <td><Link to={{pathname: `/Admin/PowerPlant-Info/info`}}>3</Link></td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>89</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>88</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>87</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>86</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>85</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>84</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>83</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>82</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>81</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
                        </>
					)}
				</MDBCardBody>
			</MDBCard>
		</div>  
        );
    }
  }
 
  export default Admin_PowerPlant;