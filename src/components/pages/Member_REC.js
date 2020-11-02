import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody} from "mdbreact"
import { Link } from "react-router-dom";
//import RECMultiSelector from './sections/MultiSelect';
import MultiSelect from "@khanacademy/react-multi-select";
import './Member_REC.css';

const options = [
	{ label: "제출자명", value: "제출자명" },
	{ label: "에너지원", value: "에너지원" },
	{ label: "설비코드", value: "설비코드" },
	{ label: "사업구분", value: "사업구분" },
	{ label: "발전소명", value:"발전소명"},
	{ label: "공급의무자설비", value:"공급의무자설비"},
	{ label: "발전년월", value: "발전년월" },
	{ label: "REC코드", value: "REC코드" },
	{ label: "시작번호", value: "시작번호" },
	{ label: "끝번호", value: "끝번호" },
	{ label: "REC발급번호", value: "REC발급번호" },
	{ label: "REC발급일", value: "REC발급일" },
	{ label: "REC만료일", value: "REC만료일" },
	{ label: "REC ID", value:"REC ID"},
	{ label: "REC제출량", value:"REC제출량"},
	{ label: "조달형태", value:"조달형태"},
	{ label: "외부/자체", value:"외부/자체"},
	{ label: "국가REC여부", value:"RPA전환여부"},
	{ label: "제출일자", value:"제출일자"},
	{ label: "제출시간", value:"제출시간"},
	{ label: "거래금액", value:"거래금액"},
	{ label: "매물번호&계약번호", value:"매물번호&계약번호"},
	{ label: "한국형FIT여부", value:"한국형FIT여부"},
	{ label: "ESS여부", value:"ESS여부"},
];

class Member_REC extends Component {
	state= {
		isLoading: true,
		REC_contract_Modal: false,
		selected: [],
	}

	REC_contract_Modal_toggle = () => {
		this.setState({
			REC_contract_Modal: !this.state.REC_contract_Modal
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
		const {isLoading, REC_contract_Modal, selected} = this.state;
		
    return (
		<div className="Member_REC div_content">
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">REC이행내역 </span><span style={{color:"red"}}>(권한&gt;회원사)</span>
				</MDBCardBody>
			</MDBCard>
			
            {/* 내용 */}
			<MDBCard className="mt-2">
				<MDBCardBody className="contentCardBody">
					
                    {/* 검색라인 */}
                    <form className="searchFrm form-inline">
						<div className="form-group ml-2">
							<input type="month" className="form-control" style={{width:"165px"}} />
						</div>
						
						{/* <RECMultiSelector /> */}
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
								<option>에너지원 전체</option>
								<option value="1">에너지원 1</option>
								<option value="2">에너지원 2</option>
								<option value="3">에너지원 3</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>사업구분 전체</option>
								<option value="1">사업 1</option>
								<option value="2">사업 2</option>
								<option value="3">사업 3</option>
							</select>
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
							<input type="text" className="form-control" placeholder="발전소명 입력" style={{width:"150px"}} />
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
							<div className="mt-3 d-flex">
								<div className="REC_commend">
									<MDBBtn color="dark" className="btn_REC_commend">검토요청</MDBBtn>
									<MDBBtn color="dark" className="btn_REC_commend">정산요청</MDBBtn>
								</div>
								<div className="REC_summary">
									<span className="pr-1">전체(<em>100</em>)</span>&#124;
									<span className="pl-1 pr-1">검토완료(<em>20</em>)</span>&#124;
									<span className="pl-1 pr-1">검토요청(<em>5</em>)</span>&#124;
									<span className="pl-1">이행내역취소(<em>5</em>)</span>
								</div>
							</div>
							
							<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2 REC_table">
								<MDBTableHead color="grey">
									<tr>
										<th style={{minWidth:"60px", width:"60px"}}>번호</th>
										<th style={{minWidth:"20px", width:"20px"}}>
											<div className="d-flex">
												<input type="checkbox" id="REC_table_checkAll" className="form-control REC_table_check" />
												<label htmlFor="REC_table_checkAll"></label>
											</div>
										</th>
										<th style={{minWidth:"100px", width:"100px"}}>계약번호</th>
										<th style={{minWidth:"100px", width:"100px"}}>계약시장</th>
										{selected.length === 0 && (<th>항목영역</th>)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<th key={index} style={{minWidth:"100px"}}>{item}</th>
											))}
											</>
										)}
										<th style={{minWidth:"130px", width:"130px"}}>이행검토 상태</th>
										<th style={{minWidth:"130px", width:"100px"}}>정산상태</th>
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
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123457</span>
										</td>
										<td>oooooo</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Member/REC-Info/:123457`,
													state:{
														contract:"123457",
														implement:"검토완료",
														calculate:"정산완료"
													}
												}}>123457항목 영역1</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Member/REC-Info/:123457`,
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
											<div className="d-flex">
												<input type="checkbox" id="REC_table_check99" className="form-control REC_table_check" />
												<label htmlFor="REC_table_check99"></label>
											</div>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123457</span>
										</td>
										<td>oooooo</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Member/REC-Info/:123457`,
													state:{
														contract:"123457",
														implement:"검토요청",
														calculate:"정산대기"
													}
												}}>123457항목 영역2</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Member/REC-Info/:123457`,
													state:{
														contract:"123457",
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
											<div className="d-flex">
												<input type="checkbox" id="REC_table_check98" className="form-control REC_table_check" disabled/>
												<label htmlFor="REC_table_check98"></label>
											</div>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123459</span>
										</td>
										<td>oooooo</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Member/REC-Info/:123459`,
													state:{
														contract:"123459",
														implement:"이행내역취소",
														calculate:"-"
													}
												}}>123459항목 영역1</Link>
											</td>
										)}
										{selected.length !== 0 && (
											<>
											{selected.map((item, index) => (
												<td key={index}>
													<Link to={{
													pathname: `/Member/REC-Info/:123459`,
													state:{
														contract:"123459",
														implement:"이행내역취소",
														calculate:"-"
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
											<div className="d-flex">
												<input type="checkbox" id="REC_table_check97" className="form-control REC_table_check" />
												<label htmlFor="REC_table_check97"></label>
											</div>
										</td>
										<td>
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>123455</span>
										</td>
										<td>oooooo</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Member/REC-Info/:123455`,
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
													pathname: `/Member/REC-Info/:123455`,
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
										<td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>95</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>94</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>93</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>92</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td>91</td>
										{selected.length === 0 && (<td></td>)}
										{selected.length !== 0 && (selected.map((item, index) => (<td key={index}></td>)))}
										<td></td><td></td><td></td><td></td><td></td>
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
						</>
					)}
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default Member_REC;
