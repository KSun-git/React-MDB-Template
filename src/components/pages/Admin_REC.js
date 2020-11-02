import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon} from "mdbreact"
import { Link } from "react-router-dom";
import excelPng from '../../assets/msExcel.png';
import './Admin_REC.css';
//import RECMultiSelector from './sections/MultiSelect';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
	{ label: "제출자명", value: "제출자명" },
	{ label: "에너지원", value: "에너지원" },
	{ label: "설비코드", value: "설비코드" },
	{ label: "사업구분", value: "사업구분" },
	{ label: "발전년월", value: "발전년월" },
	{ label: "REC코드", value: "REC코드" },
	{ label: "시작번호", value: "시작번호" },
	{ label: "끝번호", value: "끝번호" },
	{ label: "REC발급번호", value: "REC발급번호" },
	{ label: "REC발급일", value: "REC발급일" },
	{ label: "REC만료일", value: "REC만료일" },
];

class Admin_REC extends Component {
	state= {
        isLoading: true,
		adminREC_Modal: false,
		REC_contract_Modal: false,
		REC_member_Modal: false,
		selected_option:[],
		selected: [],
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
	
	handleSelected = (selectedList) => () => {
		console.log("handleSelected!");
		const {selected_option} = this.state;
		this.setState({
			selected_option: selected_option.concat({
				...selectedList
			})
		})
		//console.log(selected_option);
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
		const {isLoading, adminREC_Modal, REC_contract_Modal, REC_member_Modal,selected} = this.state;
		
    return (
		<div className="Admin_REC div_content" style={{marginTop:"70px"}}>
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">REC이행내역 관리 </span><span style={{color:"red"}}>(권한&gt;관리자)</span>
                    <span id="title_option">
						<MDBBtn color="elegant" className="btn_REC_enroll" onClick={this.AdminREC_Modal_toggle}>REC이행내역 일괄등록</MDBBtn>
                        
                        {/* 이행내역 일괄등록 모달 */}
                        <MDBModal isOpen={adminREC_Modal} toggle={this.AdminREC_Modal_toggle} centered>
							<MDBModalHeader toggle={this.AdminREC_Modal_toggle}>REC이행내역 일괄등록</MDBModalHeader>
							<MDBModalBody className="pt-1">
								<MDBBtn color="elegant" size="sm" className="btn_download_file">서식 다운로드</MDBBtn>
                                <MDBBtn color="elegant" size="sm" className="btn_download_file">이행내역취소 목록 다운로드</MDBBtn>
								<form className="frm_upload_file">
									<input type="file" id="abcd"/>
								</form>
								<div className="enrollModal_precautions">
									<MDBIcon icon="exclamation-circle" /> 총 0MB 미만의 파일만 업로드 가능합니다.<br/>
									<MDBIcon icon="exclamation-circle" /> 파일명은 영문자, 숫자만 가능하며 최종 [등록] 버튼을 눌러주세요.
								</div>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn size="sm" color="secondary" onClick={this.AdminREC_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn size="sm" color="primary" className="btn_modal_commend">확인</MDBBtn>
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
						<div className="form-group ml-2">
                            <input type="text" className="form-control dateLabel" defaultValue="발전년월" disabled/>
                        </div>
						<div className="form-group">
							<input type="month" className="form-control intputDate"/>
						</div>
						
						{/**<RECMultiSelector handleSelected={this.handleSelected}/> */}
						<div style={{width:"200px", display:"inline-block"}} className="ml-2">
							<MultiSelect
								options={options}
								disableSearch={true}
								hasSelectAll={true}
								selected={selected}
								onSelectedChanged={selected => this.setState({selected})}
								overrideStrings={{
									selectSomeItems: "항목편집",
									allItemsAreSelected: "전체항목",
									selectAll: "전체선택",
									search: "검색",
								}}
							/>
						</div>

						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>이행검토상태 전체</option>
								<option value="1">검토요청</option>
								<option value="2">검토완료</option>
								<option value="3">이행내역취소</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>정산상태 전체</option>
								<option value="1">정산대기</option>
								<option value="2">정산완료</option>
								<option value="3">지급완료</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<input type="text" className="form-control" placeholder="회원사명 입력" style={{width:"150px"}} />
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

							<MDBTable responsive scrollY maxHeight="600px" striped bordered className="text-center mt-2 REC_table">
								<MDBTableHead color="grey">
									<tr>
										<th style={{width:"60px"}}>번호</th>
										<th style={{width:"100px"}}>회원사명</th>
                                        <th style={{width:"100px"}}>계약번호</th>
										{selected.length === 0 && (<th>항목영역</th>)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<th key={index}>{item}</th>
											))}
											</>
										)}
										<th style={{width:"130px"}}>이행검토 상태</th>
										<th style={{width:"100px"}}>정산상태</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									<tr>
										<td>100</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>123455</span>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123457</span>
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123457",
														implement:"검토완료",
														calculate:"정산완료"
													}
												}}>123455항목 영역1</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123457",
														implement:"검토완료",
														calculate:"정산완료"
													}
													}}>oooooooo</Link>
												</td>
											))}
											</>
										)}
										<td>검토완료</td>
										<td>정산완료</td>
									</tr>
									<tr>
										<td>99</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>123455</span>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123458</span>
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123458",
														implement:"검토요청",
														calculate:"정산대기"
													}
												}}>123455항목 영역1</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123458",
														implement:"검토요청",
														calculate:"정산대기"
													}
													}}>oooooooo</Link>
												</td>
											))}
											</>
										)}
										<td>검토요청</td>
										<td>정산대기</td>
									</tr>
									<tr>
										<td>98</td>
                                        <td>
											<span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>123458</span>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123459</span>
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123455",
														implement:"이행내역취소",
														calculate:" - "
													}
												}}>123455항목 영역1</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Member/REC-Info/:123455`,
													state:{
														contract:"123459",
														implement:"이행내역취소",
														calculate:" - "
													}
													}}>oooooooo</Link>
												</td>
											))}
											</>
										)}
										<td>이행내역취소</td>
										<td> - </td>
									</tr>
									<tr>
										<td>97</td>
										<td>
										<span style={{cursor:"pointer"}} onClick={this.REC_member_Modal_toggle}>123459</span>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123455</span>
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123455",
														implement:"검토완료",
														calculate:"지급완료"
													}
												}}>123455항목 영역1</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Admin/REC-Info/:123455`,
													state:{
														contract:"123455",
														implement:"검토완료",
														calculate:"지급완료"
													}
													}}>oooooooo</Link>
												</td>
											))}
											</>
										)}
										<td>검토완료</td>
										<td>지급완료</td>
									</tr>
									<tr>
										<td>96</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>95</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>94</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>93</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>92</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>91</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td>
									</tr>
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

							{/* 계약정보 모달 */}
							<MDBModal isOpen={REC_contract_Modal} toggle={this.REC_contract_Modal_toggle} size="fluid">
								<MDBModalHeader toggle={this.REC_contract_Modal_toggle}>계약정보</MDBModalHeader>
								<MDBModalBody className="pt-1">
									<MDBTable responsive bordered className="REC_contract_Table text-center mt-2">
										<MDBTableHead color="grey">
											<tr>
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
												<td>123457</td>
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
										</MDBTableBody>
									</MDBTable>
									<div className="d-flex flex-wrap align-content-center justify-content-center contractLoad">
										<div> &#8251; 계약서 보여줌 &#8251; </div>
									</div>
								</MDBModalBody>
							</MDBModal>

							{/* 회원사 정보 모달 */}
							<MDBModal isOpen={REC_member_Modal} toggle={this.REC_member_Modal_toggle} size="md" centered>
								<MDBModalHeader toggle={this.REC_member_Modal_toggle}>회원사 정보 상세</MDBModalHeader>
								<MDBModalBody className="pt-1">
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
								</MDBModalBody>
								
								<div style={{fontWeight:"bold"}} className="ml-3">회원목록</div>
								<MDBModalBody className="pt-1">
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

export default Admin_REC;
