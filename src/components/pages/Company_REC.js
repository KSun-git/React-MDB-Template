import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody} from "mdbreact"
import { Link } from "react-router-dom";
import './Company_REC.css';
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

class Company_REC extends Component {
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
		const {isLoading, REC_contract_Modal,selected} = this.state;
		
    return (
		<div className="Company_REC div_content" style={{marginTop:"70px"}}>
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">REC이행내역 검토관리 </span><span style={{color:"red"}}>(권한&gt;거래소)</span>
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
							<input type="month" className="form-control intputDate" />
						</div>
						
						{/**<RECMultiSelector /> */}
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
							<select className="browser-default custom-select" defaultValue="1">
								<option>이행검토상태 전체</option>
								<option value="1">이행검토요청</option>
								<option value="2">이행검토완료</option>
								<option value="3">이행검토취소</option>
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
							<input type="text" className="form-control" placeholder="회원사명 입력" style={{width:"200px"}} />
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
									<MDBBtn color="dark" className="btn_REC_commend">이행검토완료</MDBBtn>
									<MDBBtn color="dark" className="btn_REC_commend">이행검토취소</MDBBtn>
								</div>
							</div>
							
							<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-2 REC_table">
								<MDBTableHead color="grey">
									<tr>
										<th style={{width:"60px"}}>번호</th>
										<th style={{width:"20px"}}>
											<div className="d-flex">
												<input type="checkbox" id="REC_table_checkAll" className="form-control REC_table_check" />
												<label htmlFor="REC_table_checkAll"></label>
											</div>
										</th>
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
											<div className="d-flex">
												<input type="checkbox" id="REC_table_check100" className="form-control REC_table_check" disabled/>
												<label htmlFor="REC_table_check100"></label>
											</div>
										</td>
                                        <td>회원사1</td>
										<td>
											123457
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Company/REC-Info/:123457`,
													state:{
														contract:"123457",
														memberName:"회원사1",
														implement:"검토요청",
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
													pathname: `/Company/REC-Info/:123457`,
													state:{
														contract:"123457",
														memberName:"회원사1",
														implement:"검토요청",
														calculate:"정산완료"
													}
													}}>oooooooo</Link>
												</td>
											))}
											</>
										)}
										<td>검토요청</td>
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
                                        <td>회원사2</td>
										<td>
											123457
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Company/REC-Info/:123457`,
													state:{
														contract:"123457",
														memberName:"회원사2",
														implement:"검토요청",
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
													pathname: `/Company/REC-Info/:123457`,
													state:{
														contract:"123457",
														memberName:"회원사2",
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
                                        <td>회원사12</td>
										<td>
											123459
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Company/REC-Info/:123459`,
													state:{
														contract:"123459",
														memberName:"회원사12",
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
													pathname: `/Company/REC-Info/:123459`,
													state:{
														contract:"123459",
														memberName:"회원사12",
														implement:"검토완료",
														calculate:"정산대기"
													}
													}}>oooooooo</Link>
												</td>
											))}
											</>
										)}
										<td>검토요청</td>
										<td>정산완료</td>
									</tr>
									<tr>
										<td>97</td>
										<td>
											<div className="d-flex">
												<input type="checkbox" id="REC_table_check97" className="form-control REC_table_check" />
												<label htmlFor="REC_table_check97"></label>
											</div>
										</td>
                                        <td>회원사13</td>
										<td>
											123455
										</td>
										{selected.length === 0 && (
											<td>
												<Link to={{
													pathname: `/Company/REC-Info/:123455`,
													state:{
														contract:"123455",
														memberName:"회원사13",
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
													pathname: `/Company/REC-Info/:123455`,
													state:{
														contract:"123455",
														memberName:"회원사13",
														implement:"검토완료",
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

export default Company_REC;
