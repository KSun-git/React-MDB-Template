import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import './Admin_Contract_Info.css';

class Admin_Contract_Info extends Component {
	state= {
		isLoading: false,
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
		const {isLoading}= this.state;
    return (
		<div className="Admin_Contract_Info div_content">
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">계약정보 상세/수정 </span><span style={{color:"red"}}>(권한&gt;관리자)</span>
				</MDBCardBody>
			</MDBCard>
			
            {/* 내용 */}
			<MDBCard className="mt-2 pb-3">
				<MDBCardBody className="contentCardBody">
					
					{isLoading? (
						<div className="con1_loader">
							<div className="spinner-border" style={{width:"3rem", height:"3rem"}} role="status"></div>
						</div>
					) : (
						<>
                            <form>
                                <MDBTable bordered className="member_Info_Table1">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <MDBTableBody>
                                        <tr>
                                            <th style={{textAlign:"center",verticalAlign:"middle"}}>회원사명</th>
                                            <td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="회원사1" readOnly/></td>
                                            <th style={{textAlign:"center",verticalAlign:"middle"}}>계약번호</th>
                                            <td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="123457" /></td>
                                        </tr>
                                        <tr>
                                            <th style={{textAlign:"center",verticalAlign:"middle"}}>계약 시작일</th>
                                            <td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="2020-01-01" /></td>
                                            <th style={{textAlign:"center",verticalAlign:"middle"}}>계약 종료일</th>
                                            <td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="2030-12-31" /></td>
                                        </tr>
                                        <tr>
                                            <th style={{textAlign:"center",verticalAlign:"middle"}}>발전소명</th>
                                            <td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="한국발전1" /></td>
                                            <th style={{textAlign:"center",verticalAlign:"middle"}}>계약유형</th>
                                            <td style={{verticalAlign:"middle"}}><span style={{fontWeight:"bold"}}> 수기계약</span></td>
                                        </tr>
                                        <tr>
											<th style={{textAlign:"center",verticalAlign:"middle"}}>계약시장</th>
											<td>
												<select className="browser-default custom-select" style={{width:"300px"}} defaultValue="1">
													<option>계약시장 선택</option>
													<option value="1">자체</option>
													<option value="2">예관공</option>
												</select>
											</td>
											<th style={{textAlign:"center",verticalAlign:"middle"}}>계약형태</th>
											<td>
												<select className="browser-default custom-select" style={{width:"300px"}} defaultValue="1">
													<option>계약형태 선택</option>
													<option value="1">자체현물구매(고정가)</option>
													<option value="2">자체현물구매(비고정가)</option>
													<option value="3">예관공 선정계약</option>
													<option value="4">예관광</option>
													<option value="5">예관공 소형태양광계약</option>
												</select>
											</td>
										</tr>
										<tr>
											<th style={{textAlign:"center",verticalAlign:"middle"}}>단위가격</th>
											<td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="8,000,000" /></td>
											<th style={{textAlign:"center",verticalAlign:"middle"}}>약정REC</th>
											<td><input type="text" className="form-control"style={{width:"300px"}} defaultValue="10,000"/></td>
										</tr>
										<tr>
											<th style={{textAlign:"center",verticalAlign:"middle",height:"48px"}}>계약서 등록</th>
											<td style={{verticalAlign:"middle"}}><input type="file" id="abcd"/></td>
                                            <th style={{textAlign:"center",verticalAlign:"middle",height:"48px"}}>등록일시</th>
                                            <td><span> 2020-10-11 11:11:11</span></td>
										</tr>
                                    </MDBTableBody>
                                </MDBTable>
                                
                                <div className="mt-2 d-flex justify-content-center">
								    <div className="REC_member_commend">
									    <MDBBtn color="mdb-color" className="btn_member_commend" onClick={this.goBack}>취소</MDBBtn>
									    <MDBBtn color="mdb-color" className="btn_member_commend">저장</MDBBtn>
								    </div>
							    </div>
                            </form>
						</>
					)}
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default Admin_Contract_Info;
