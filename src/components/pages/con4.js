import React, { Component } from 'react';
import { MDBCard,MDBCardBody,MDBBtn,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane } from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody} from "mdbreact";
import { Link } from "mdbreact";
import './con4.css';
import MultiYearSelector from './sections/MultiSelect_Year';

class con4 extends Component {
	state = {
		items: {
			default: "1",
		},
		REC_info_Modal: false,
		REC_contract_Modal: false,
	}

	REC_info_Modal_toggle = () => {
		this.setState({
			REC_info_Modal: !this.state.REC_info_Modal
		});
	}
	
	REC_contract_Modal_toggle = () => {
		this.setState({
			REC_contract_Modal: !this.state.REC_contract_Modal
		});
	}
/*
	constructor(props){
		super(props);
		console.log('constructor');
		const{id} = this.props.match.params;
		console.log(id);
	}
*/

/*	componentDidMount(){
		console.log('didMount');
		const{id} = this.props.match.params;
		console.log(id);
		this.setState({items:{default: id}});
	}
*/
/*
	componentDidUpdate(){
		console.log('didUpdate');
		const{id} = this.props.match.params;
		const{now} = this.state.items.default;
		console.log(id);
		console.log(this.state.items.default);

		//id === now ? null : this.setState({items:{default: id}});
		
		//
	}
*/
	togglePills = (type, tab) => e => {
		e.preventDefault();
		if (this.state.items[type] !== tab) {
			let items = { ...this.state.items };
			items[type] = tab;
			this.setState({
				items
			});
		}
	};
	
	render() {
		//console.log(this.props);
		
		//console.log(this.state.items);

		return (
			<div className="Con4 div_content" style={{marginTop:"70px"}}>
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">정산관리 </span><span style={{color:"red"}}>(권한&gt;관리자)</span>
					</MDBCardBody>
				</MDBCard>
				
				<MDBCard className="mt-2 pb-3">
					<MDBCardBody className="con4CardBody">
						<MDBNav className="nav-pills">
							<MDBNavItem className="con4_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "1"} 
									onClick={this.togglePills("default", "1")} >
									중간정산승인처리
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="con4_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "2"} 
									onClick={this.togglePills("default", "2")} >
									연간정산내역조회
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="con4_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "3"} 
									onClick={this.togglePills("default", "3")} >
									지급관리
								</MDBNavLink>
							</MDBNavItem>
						</MDBNav>
						
						<MDBTabContent activeItem={this.state.items["default"]}>
								<MDBTabPane tabId="1" className="con4_tab1 Company_REC"> {/* Company_REC css분리필요함 */}
									{/* 중간정산 탭 */}
									<form className="searchFrm form-inline">
										<div className="form-group ml-2" >
											<select className="browser-default custom-select" defaultValue="1">
												<option value="1">요청일자</option>
												<option value="2">처리일자</option>
											</select>
										</div>
										<div className="form-group">
											<input type="date" className="form-control" style={{width:"165px"}} />
										</div>

										<div className="form-group ml-2">
											<select className="browser-default custom-select" defaultValue="1">
												<option>정산상태 전체</option>
												<option value="1">정산대기</option>
												<option value="2">정산완료</option>
												<option value="3">지급완료</option>
												<option value="4">정산반려</option>
											</select>
										</div>
										<div className="form-group ml-2">
											<input type="text" className="form-control" placeholder="회원사명 입력" style={{width:"250px"}} />
										</div>
										<div className="searchFrm_btn">
											<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
											<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
										</div>
									</form>

									<div className="mt-3 d-flex">
										<div className="REC_commend">
											<MDBBtn color="dark" className="btn_REC_commend">정산반려</MDBBtn>
											<MDBBtn color="dark" className="btn_REC_commend">정산완료</MDBBtn>
										</div>
									</div>

									<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2 REC_table">
										<colgroup>
											<col width="60"/>
											<col width="20"/>
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
										</colgroup>
										<MDBTableHead color="grey">
											<tr>
												<th>번호</th>
												<th>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_checkAll" className="form-control REC_table_check" />
														<label htmlFor="REC_table_checkAll"></label>
													</div>
												</th>
												<th>회원사명</th>
												<th>계약번호</th>
												<th>REC제출량</th>
												<th>정산단가</th>
												<th>정산금액</th>
												<th>요청자</th>
												<th>요청일시</th>
												<th>정산상태</th>
												<th>최종정산 처리일시</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
												<td>100</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" />
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사1</td>
												<td>123456</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>홍길동</td>
												<td>2020-10-10 11:11:11</td>
												<td>정산대기</td>
												<td> - </td>
											</tr>
											<tr>
												<td>99</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" />
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사1</td>
												<td>123457</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>홍길동</td>
												<td>2020-10-10 11:11:11</td>
												<td>정산대기</td>
												<td> - </td>
											</tr>
											<tr>
												<td>98</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" disabled/>
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사12</td>
												<td>123458</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>홍길동</td>
												<td>2020-10-10 11:11:11</td>
												<td>정산완료</td>
												<td>2020-10-10 11:11:11</td>
											</tr>
											<tr>
												<td>97</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" disabled/>
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사13</td>
												<td>123459</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>홍길동</td>
												<td>2020-10-10 11:11:11</td>
												<td>지급완료</td>
												<td>2020-10-10 11:11:11</td>
											</tr>
											<tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
											<tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
											<tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
								</MDBTabPane>

								{/* 연간정산내역조회 탭 */}
								<MDBTabPane tabId="2" className="con4_tab2 Company_REC"> {/* Company_REC css분리필요함 */}
									<form className="searchFrm form-inline">
										<MultiYearSelector />

										<div className="searchFrm_btn">
											<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
											<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
										</div>
									</form>

									<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-3 REC_table">
										<colgroup>
											<col width="60"/>
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
										</colgroup>
										<MDBTableHead color="grey">
											<tr>
												<th>번호</th>
												<th>Col 1</th>
												<th>Col 2</th>
												<th>Col 3</th>
												<th>Col 4</th>
												<th>Col 5</th>
												<th>Col 6</th>
												<th>Col 7</th>
												<th>Col 8</th>
												<th>Col 9</th>
												<th>Col 10</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
												<td>100</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>99</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>98</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>97</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
											<tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
											<tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
								</MDBTabPane>

								{/* 지급관리 탭 */}
								<MDBTabPane tabId="3" className="con4_tab3 Company_REC"> {/* Company_REC css분리필요함 */}
								<form className="searchFrm form-inline">
										<div className="form-group ml-2" >
											<select className="browser-default custom-select" defaultValue="1">
												<option value="1">요청일자</option>
												<option value="2">처리일자</option>
											</select>
										</div>
										<div className="form-group">
											<input type="date" className="form-control" style={{width:"165px"}} />
										</div>

										<div className="form-group ml-2">
											<select className="browser-default custom-select" defaultValue="1">
												<option>정산상태 전체</option>
												<option value="1">정산완료</option>
												<option value="2">지급완료</option>
											</select>
										</div>
										<div className="form-group ml-2">
											<input type="text" className="form-control" placeholder="회원사명 입력" style={{width:"250px"}} />
										</div>
										<div className="searchFrm_btn">
											<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
											<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
										</div>
									</form>

									<div className="mt-3 d-flex">
										<div className="REC_commend">
											<MDBBtn color="dark" className="btn_REC_commend">지급완료</MDBBtn>
										</div>
									</div>

									<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2 REC_table">
										<colgroup>
											<col width="60"/>
											<col width="20"/>
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
											<col />
										</colgroup>
										<MDBTableHead color="grey">
											<tr>
												<th>번호</th>
												<th>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_checkAll" className="form-control REC_table_check" />
														<label htmlFor="REC_table_checkAll"></label>
													</div>
												</th>
												<th>회원사명</th>
												<th>계약번호</th>
												<th>REC제출량</th>
												<th>정산단가</th>
												<th>정산금액</th>
												<th>요청자</th>
												<th>요청일시</th>
												<th>정산상태</th>
												<th>최종지급 처리일시</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
												<td>100</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" />
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사1</td>
												<td>123456</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>거래소1</td>
												<td>2020-10-10 11:11:11</td>
												<td>정산완료</td>
												<td>2020-10-10 11:11:11</td>
											</tr>
											<tr>
												<td>99</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" />
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사1</td>
												<td>123457</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>거래소1</td>
												<td>2020-10-10 11:11:11</td>
												<td>정산완료</td>
												<td>2020-10-10 11:11:11</td>
											</tr>
											<tr>
												<td>98</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" />
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사12</td>
												<td>123458</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>거래소1</td>
												<td>2020-10-10 11:11:11</td>
												<td>정산완료</td>
												<td>2020-10-10 11:11:11</td>
											</tr>
											<tr>
												<td>97</td>
												<td>
													<div className="d-flex">
														<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" disabled/>
														<label htmlFor="REC_table_check100"></label>
													</div>
												</td>
												<td>회원사13</td>
												<td>123459</td>
												<td>
												<span style={{cursor:"pointer"}} onClick={this.REC_info_Modal_toggle}>300</span>
												</td>
												<td>10,000,000</td>
												<td>3,000,000,000</td>
												<td>거래소1</td>
												<td>2020-10-10 11:11:11</td>
												<td>지급완료</td>
												<td>2020-10-10 11:11:11</td>
											</tr>
											<tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
											<tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
											<tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
								</MDBTabPane>
							</MDBTabContent>
					</MDBCardBody>
				</MDBCard>

				{/*이행내역팝업*/}
				<MDBModal isOpen={this.state.REC_info_Modal} toggle={this.REC_info_Modal_toggle} size="fluid">
					<MDBModalHeader toggle={this.REC_info_Modal_toggle}><span style={{fontWeight:"bold"}}>REC이행내역 상세</span></MDBModalHeader>
					<MDBModalBody className="pt-1 Company_REC_Info">   {/* 추후 클래스명 분리 요함 */}
					<MDBTable bordered className="REC_Info_Table1">
								<colgroup>
									<col width="150"/>
									<col />
									<col width="150"/>
									<col />
								</colgroup>
								<MDBTableBody>
									<tr>
										<th>계약번호</th>
										<td colSpan="3">
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123455</span>
										</td>
									</tr>
									<tr>
										<th>이행검토상태</th>
										<td>검토완료</td>
										<th>정산상태</th>
										<td>정산대기</td>
									</tr>
								</MDBTableBody>
							</MDBTable>
							
							<div className="mt-4" style={{fontWeight:"bold"}}>예공단 REC이행내역</div>
							<MDBTable responsive bordered className="REC_Info_Table2 text-center mt-2">
								<MDBTableHead>
									<tr>
										<th>제출자명</th>
										<th>에너지원</th>
										<th>설비코드</th>
										<th>사업구분</th>
										<th>발전소명</th>
										<th>공급의무자설비</th>
										<th>발전년월</th>
										<th>REC 코드</th>
										<th>시작번호</th>
										<th>끝번호</th>
										<th>REC 발급번호</th>
										<th>REC 발급일</th>
										<th>REC 만료일</th>
										<th>REC ID</th>
										<th>REC 제출량</th>
										<th>조달형태</th>
										<th>외부/자체</th>
										<th>국가REC 여부</th>
										<th>RPA전환여부</th>
										<th>제출일자</th>
										<th>제출시간</th>
										<th>거래금액</th>
										<th>매물번호&amp;계약번호</th>
										<th>한국형FIT여부</th>
										<th>ESS여부</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									<tr>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>oooooooooooooooo</td>
										<td>ooooooooooooo</td>
										<td>ooooooooooooo</td>
									</tr>
								</MDBTableBody>
							</MDBTable>

							<div className="mt-2 d-flex justify-content-center">
								<div className="REC_Info_commend">
									<MDBBtn color="mdb-color" className="btn_REC_Info_commend" onClick={this.REC_info_Modal_toggle}>취소</MDBBtn>
									<MDBBtn color="mdb-color" className="btn_REC_Info_commend">저장</MDBBtn>
								</div>
							</div>
							{/* 댓글영역 */}
							<div className="mt-5 mb-4">
								{/* 댓글작성란 */}
								<form className="memoFrm">
									<div className="form-group">
										<label htmlFor="memoArea" style={{fontWeight:"bold"}}>댓글 메모 작성</label>
										<textarea className="form-control" id="memoArea" rows="5" placeholder="댓글을 입력해주세요. 최대 3000byte"></textarea>
										<div className="d-flex justify-content-center">
											<MDBBtn outline color="indigo" className="btn_REC_memo" onClick={this.REC_info_Modal_toggle}>취소</MDBBtn>
											<MDBBtn outline color="indigo" className="btn_REC_memo">저장</MDBBtn>
										</div>
									</div>
								</form>
								
								{/* 댓글리스트 */}
								<div style={{fontWeight:"bold"}}>댓글 100개</div>
									<MDBTable className="memoList_table mb-0">
										<MDBTableBody>
											<tr className="memo_memberUser">
												<th>
													김영희(회원사 B) <span>2020-01-02 12:12:12</span>
												</th>
											</tr>
											<tr>
												<td>
													안녕하세요. 계약정보 확인 필요합니다. oo 항목이 누락된 것 같으니 재검토 요청드립니다. 수정해주세요.
												</td>
											</tr>
											<tr className="memo_memberUser">
												<th>
													홍길동(회원사 A) <span>2020-01-01 11:11:11</span>
												</th>
											</tr>
											<tr>
												<td>
													안녕하세요. 계약정보 확인 필요합니다. oo 항목이 누락된 것 같으니 재검토 요청드립니다. 수정해주세요.
												</td>
											</tr>
											<tr className="memo_companyUser">
												<th>
													&#x021B3; 홍길순(거래소 A) <span>2020-01-01 12:12:12</span>
												</th>
											</tr>
											<tr>
												<td className="pl-4">
													안녕하세요. 계약정보 삭제 후 재등록 하겠습니다.
												</td>
											</tr>
										</MDBTableBody>
									</MDBTable>

									{/* 댓글리스트 페이징 */}
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
					</MDBModalBody>
				</MDBModal>
				
				{/*계약정보팝업*/}
				<MDBModal isOpen={this.state.REC_contract_Modal} toggle={this.REC_contract_Modal_toggle} size="md" centered>
					<MDBModalHeader toggle={this.REC_contract_Modal_toggle}><span style={{fontWeight:"bold"}}>회원사 정보 상세</span></MDBModalHeader>
					<MDBModalBody className="pt-1 Admin_REC"> {/* css분리 필요 */}
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
			</div>
		);
	}
}

export default con4;