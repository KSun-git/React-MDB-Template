import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody} from "mdbreact"
import './Member_REC_Info.css';

class Member_REC_Info extends Component {
	state= {
		isLoading: false,
		REC_contract_Modal: false,
	}

	REC_contract_Modal_toggle = () => {
		this.setState({
			REC_contract_Modal: !this.state.REC_contract_Modal
		});
	}

	callCon1Data = () =>{
		setTimeout(() => { //로더 확인용 지연함수
			this.setState({isLoading:false});
		}, 1000)
	}
	
	goBack = () =>{
		this.props.history.goBack();
	}

	componentDidMount(){
		this.callCon1Data();
	}

	render() {
		const{ contract, implement, calculate } = this.props.location.state;
		const {isLoading, REC_contract_Modal} = this.state;
    return (
		<div className="Member_REC_Info div_content">
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">REC이행내역 상세 </span><span style={{color:"red"}}>(권한&gt;회원사)</span>
				</MDBCardBody>
			</MDBCard>
			
            {/* 내용 */}
			<MDBCard className="mt-2">
				<MDBCardBody className="contentCardBody">
					
					{isLoading? (
						<div className="con1_loader">
							<div className="spinner-border" style={{width:"3rem", height:"3rem"}} role="status"></div>
						</div>
					) : (
						<>
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
											<span style={{cursor:"pointer"}} onClick={this.REC_contract_Modal_toggle}>{contract}</span>
										</td>
									</tr>
									<tr>
										<th>이행검토상태</th>
										<td>{implement}</td>
										<th>정산상태</th>
										<td>{calculate}</td>
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
									<MDBBtn color="mdb-color" className="btn_REC_Info_commend" onClick={this.goBack}>취소</MDBBtn>
									<MDBBtn color="mdb-color" className="btn_REC_Info_commend">이행검토요청</MDBBtn>
									<MDBBtn color="mdb-color" className="btn_REC_Info_commend">정산요청</MDBBtn>
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
											<MDBBtn outline color="indigo" className="btn_REC_memo" >취소</MDBBtn>
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

export default Member_REC_Info;
