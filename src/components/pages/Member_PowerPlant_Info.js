import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBCard,MDBCardBody,MDBBtn,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane } from "mdbreact";
import './Member_PowerPlant_Info.css';
import MultiSelector_Year from './sections/MultiSelect_Year';

class Member_PowerPlant_Info extends Component {
    state = {
		items: {
			default: "1",
		},
	}
    
    goBack = () =>{
		this.props.history.goBack();
    }
    
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
        const {order} = this.props.match.params

        return (
            <div className="Member_PowerPlant_Info div_content" style={{marginTop:"70px"}}>
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						{order === "info" ? <span id="content_title">자체발전소 정보 상세/수정</span> : <span id="content_title">자체발전소 정보 등록 </span> }
					</MDBCardBody>
				</MDBCard>
				
				<MDBCard className="mt-2 pb-3">
					<MDBCardBody className="contentCardBody">
						<MDBNav className="nav-pills">
							<MDBNavItem className="PowerPlant_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "1"} 
									onClick={this.togglePills("default", "1")} >
									발전소정보
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="PowerPlant_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "2"} 
									onClick={this.togglePills("default", "2")} >
									투자비
								</MDBNavLink>
							</MDBNavItem>
                            <MDBNavItem className="PowerPlant_pills_title" >
								<MDBNavLink link to="#" 
									active={this.state.items["default"] === "3"} 
									onClick={this.togglePills("default", "3")} >
									연간운영정보
								</MDBNavLink>
							</MDBNavItem>
						</MDBNav>
						
						<MDBTabContent activeItem={this.state.items["default"]}>
								<MDBTabPane tabId="1"> 
									{/* 발전소정보 탭 */}
									<MDBTable scrollY maxHeight="600px" bordered className="mt-2 PowerPlant_table">
										<colgroup>
											<col width="200px"/>
											<col />
											<col width="200px"/>
											<col />
										</colgroup>
										<MDBTableHead color="grey">
											<tr>
												<th colSpan="4">발전설비 내역</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
                                                <th style={{verticalAlign:"middle"}}>발전사명</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="한국발전소"/> : <input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>발전소코드</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="123456"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>전원</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="2222"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>사용전 검사완료일</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="2020-10-10"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>상업운전게시일</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="2020-11-11"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>설비용량</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="10,000"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>REC가중치</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="3"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>총 투자비용(백만원)</th>
                                                <td>
                                                    {order === "info" ? <input type="text" className="form-control"style={{width:"300px"}} defaultValue="10,000,000"/>:<input type="text" className="form-control"style={{width:"300px"}} />}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>증빙서류 등록</th>
                                                <td colSpan="3" style={{verticalAlign:"middle"}}><input type="file" /></td>
                                            </tr>
										</MDBTableBody>
									</MDBTable>

                                    <MDBTable scrollY maxHeight="600px" bordered className="mt-2 PowerPlant_table">
										<colgroup>
											<col width="200px"/>
											<col />
											<col width="200px"/>
											<col />
										</colgroup>
										<MDBTableHead color="grey">
											<tr>
												<th colSpan="4">연도별 보증생산량(MWh)</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구분</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>보증생산량</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구분</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>보증생산량</th>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>1년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>11년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>2년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>12년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>3년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>13년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>...</th>
                                                <td>...
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>...</th>
                                                <td>...
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>10년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                                <th style={{verticalAlign:"middle"}}>20년차</th>
                                                <td>
                                                    {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"300px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"300px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle"}}>증빙서류 등록</th>
                                                <td colSpan="3" style={{verticalAlign:"middle"}}><input type="file" /></td>
                                            </tr>
										</MDBTableBody>
                                        </MDBTable>
                                        
                                            <div className="mt-2 d-flex justify-content-center">
                                                <div className="Info_commend">
                                                    <MDBBtn color="mdb-color" className="btn_Info_commend" onClick={this.goBack}>취소</MDBBtn>
                                                    <MDBBtn color="mdb-color" className="btn_Info_commend">저장</MDBBtn>
                                                </div>
                                            </div>
                                        
                                </MDBTabPane>
									

								{/* 투자비 탭 */}
								<MDBTabPane tabId="2">
                                <MDBTable bordered className="mt-2 PowerPlant_table">
										<MDBTableHead color="grey">
											<tr>
												<th colSpan="6"><span style={{fontWeight:"bold"}}>전원별 투자비 내역서</span></th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>구분</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단위</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>금액</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>작성방법</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>요청자료</th>
                                            </tr>
                                            <tr>
                                                <th rowSpan="6" style={{verticalAlign:"middle",textAlign:"center"}}>공사비(백만원)</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>설계비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td rowSpan="6">
                                                    1. 항목별 구분이 안될 경우 공사비 총액을 시공비에 기재<br />
                                                    2. 부가가치세는 제외
                                                </td>
                                                <td rowSpan="6">
                                                    1. 공사비를 확인할 수 있는 서류(예: 공사계약서, 정산내역서 등)
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>모듈</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>인버터</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타재료비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>시공비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>소계</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>토지비</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>매입비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                    1. 신규 부지 매입 시에만 기재(타 발전소 내 부지 및 임대는 제외)
                                                    2. 실제 사용면적에 해당하는 토지매입비용만 기재
                                                </td>
                                                <td>
                                                    1. 토지매매계약서
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>부지면적</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>m<sup>2</sup></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="30,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>1.실제 사용면적만 기재</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>사업주제경비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>1.건설기간 중 공사비 외 보험료, 제세공과금 등 기타경비<br/>2.일반관리비는 타 발전소의 기존비용 외 증분비용만기재</td>
                                                <td>1.회계시스템상의 사업주제경비 자본화 내역</td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>금융비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>1.기업회계 상 차입원가를 자본화한 경우(건설중이자)기재</td>
                                                <td>1.회계시스템상의 금융비용 자본화 내역</td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>합계</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>설비용량</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>kW</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="100,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>1kW당 투자비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>증빙서류 등록</th>
                                                <td colSpan="5" style={{verticalAlign:"middle"}}><input type="file" /></td>
                                            </tr>
										</MDBTableBody>
                                        </MDBTable>
                                        <MDBTable className="PowerPlant_table">
                                            <colgroup>
                                                <col width="20%"/>
                                                <col width="30%"/>
                                                <col width="20%"/>
                                                <col width="30%"/>
                                            </colgroup>
                                            <MDBTableBody>
                                                <tr>
                                                    <th style={{verticalAlign:"middle",textAlign:"center"}}>등록자</th>
                                                    <td><input type="text" className="form-control" defaultValue="홍길동" style={{textAlign:"center"}}/></td>
                                                    <th style={{verticalAlign:"middle",textAlign:"center"}}>최종획득일시</th>
                                                    <td><input type="text" className="form-control" defaultValue="2020-10-01 11:11:11" style={{textAlign:"center"}}/></td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                            <div className="mt-2 d-flex justify-content-center">
                                                <div className="Info_commend">
                                                    <MDBBtn color="mdb-color" className="btn_Info_commend" onClick={this.goBack}>취소</MDBBtn>
                                                    <MDBBtn color="mdb-color" className="btn_Info_commend">저장</MDBBtn>
                                                </div>
                                            </div>
                                        
								</MDBTabPane>
                                
                                {/* 연간운영정보 탭 */}
								<MDBTabPane tabId="3" > 
                                    <div className="mt-2" style={{marginLeft:"-10px"}}>
                                        <MultiSelector_Year />
                                    </div>

                                    <MDBTable bordered className="mt-1 PowerPlant_table">
										<MDBTableHead color="grey">
											<tr>
												<th colSpan="8"><span style={{fontWeight:"bold"}}>설비운영현황</span></th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>비목</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단위</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>2020년 실적</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>연환산금액</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>조정환산금액</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>작성방법</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>요청자료</th>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>2019년 운영일수</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>일</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="5" style={{verticalAlign:"middle",textAlign:"center"}}>발전량</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>발전량(A)</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>MWh</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>소내소비량(B)</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>MWh</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>전력판매량(A-B)</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>MWh</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>전력량 정산금</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>REC 인증량</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>REC</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <th rowSpan="5" style={{verticalAlign:"middle",textAlign:"center"}}>연료소비량</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>LNG</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>CJ</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td rowSpan="5">
                                                    1.단위변경 가능<br/>
                                                    2.LNG우드칩 외 연료명은 <br/>  기타1~3 란에 명칭 변경후 기재
                                                </td>
                                                <td rowSpan="5">
                                                    1.회계시스템상의 재고수불부
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>우드칩</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>ton</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타1</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타2</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타3</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>

                                            <tr>
                                                <th rowSpan="5" style={{verticalAlign:"middle",textAlign:"center"}}>부대수입판매량</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>열(스팀</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>ton</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td rowSpan="5">
                                                    1.단위변경 가능<br/>
                                                    2.열(스팀)외 부대수입은 기타1~3 <br/> 란에 명칭 변경 후 기재
                                                </td>
                                                <td rowSpan="5">
                                                    1.정산내역 등 증빙 가능 자료
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타1</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타2</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>기타3</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>
                                                    <MDBBtn outline color="mdb-color" size="sm">기타추가</MDBBtn>
                                                </th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td><input type="text" className="form-control"style={{width:"150px"}} /></td>
                                                <td><input type="text" className="form-control"style={{width:"150px"}} /></td>
                                                <td><input type="text" className="form-control"style={{width:"150px"}} /></td>
                                            </tr>


                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>증빙서류 등록</th>
                                                <td colSpan="6" style={{verticalAlign:"middle"}}><input type="file" /></td>
                                            </tr>
                                        </MDBTableBody>
                                </MDBTable>

                                <MDBTable bordered className="mt-2 PowerPlant_table">
										<MDBTableHead color="grey">
											<tr>
												<th colSpan="9"><span style={{fontWeight:"bold"}}>운영비용 내역</span></th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
                                            <tr>
                                                <th colSpan="3" style={{verticalAlign:"middle",textAlign:"center"}}>비목</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단위</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>2020년 실적</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>연환산금액</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>조정환산금액</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>작성방법</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>요청자료</th>
                                            </tr>
                                            <tr>
                                                <th rowSpan="11" style={{verticalAlign:"middle",textAlign:"center"}}>연료비</th>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>LNG</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구입비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td rowSpan="11">
                                                    1.실제 사용비용을 기준으로 기재<br/>(구입비용에서 재고자산 차감)
                                                </td>
                                                <td rowSpan="11">
                                                    1.회계시스템상의 재고수불부
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>원/CJ</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>우드칩</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구입비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>원/ton</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타1</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구입비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타2</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구입비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타3</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>구입비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}></td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>연료비 소개</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="6" style={{verticalAlign:"middle",textAlign:"center"}}>유틸리티비용</th>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>용수비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td rowSpan="6">
                                                    1.변동비적 성격의 비용 기재<br/>
                                                </td>
                                                <td rowSpan="6">
                                                    1.회계시스템상의 구분손익 정보<br/>
                                                    2.공통비 원가배부시 계정별 배부기준 기재<br />
                                                    3.기타 유틸리티 비용 계정 기재
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>수전비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>약품비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>폐수처리비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타유틸리티비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>소  계</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="9" style={{verticalAlign:"middle",textAlign:"center"}}>운영비</th>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>외주O&M비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td rowSpan="9">
                                                    1.타 발전소(LNG발전소, 석탄발전소 등)<br/> 의 기존비용 외 증분비용만 기재
                                                </td>
                                                <td rowSpan="9">
                                                    1.회계시스템상의 구분손익 정보<br/>
                                                    2.공통비 원가배부시 배부시 계정별 배부 기준 기재<br />
                                                    3.기타 운영비 비용 계정 기재
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>LTS비용</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>토지임대료</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>보험료</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>제세공과금</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>지금수수료</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>인건비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타운영비</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>소   계</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="3" style={{verticalAlign:"middle",textAlign:"center"}}>합계</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th colSpan="3" style={{verticalAlign:"middle",textAlign:"center"}}>증빙서류 등록</th>
                                                <td colSpan="6" style={{verticalAlign:"middle"}}><input type="file" /></td>
                                            </tr>
                                        </MDBTableBody>
                                </MDBTable>

                                <MDBTable bordered className="mt-2 PowerPlant_table">
										<MDBTableHead color="grey">
											<tr>
												<th colSpan="9"><span style={{fontWeight:"bold"}}>부대수입 내역</span></th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
                                            <tr>
                                                <th colSpan="3" style={{verticalAlign:"middle",textAlign:"center"}}>비목</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단위</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>2018년</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>2019년</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>2020년</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>작성방법</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>요청자료</th>
                                            </tr>
                                            <tr>
                                                <th rowSpan="9" style={{verticalAlign:"middle",textAlign:"center"}}>부대수입</th>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>열(스팀)</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>판매수입</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                                <td rowSpan="9">
                                                    1.회계시스템상의 구분손익정보
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타1</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>판매수입</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타2</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>판매수입</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>기타3</th>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>판매수입</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th style={{verticalAlign:"middle",textAlign:"center"}}>단가</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2" style={{verticalAlign:"middle",textAlign:"center"}}>부대수입 소계</th>
                                                <td style={{verticalAlign:"middle",textAlign:"center"}}>백만원</td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td>
                                                {
                                                        order === "info" ? 
                                                            <input type="text" className="form-control"style={{width:"150px"}} defaultValue="300,000,000"/>
                                                        :
                                                            <input type="text" className="form-control"style={{width:"150px"}} />
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                                
                                            <tr>
                                                <th colSpan="3" style={{verticalAlign:"middle",textAlign:"center"}}>증빙서류 등록</th>
                                                <td colSpan="6" style={{verticalAlign:"middle"}}><input type="file" /></td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>


                                
                                    <div className="mt-2 d-flex justify-content-center">
                                        <div className="Info_commend">
                                            <MDBBtn color="mdb-color" className="btn_Info_commend" onClick={this.goBack}>취소</MDBBtn>
                                            <MDBBtn color="mdb-color" className="btn_Info_commend">저장</MDBBtn>
                                        </div>
                                    </div>
                                

                                </MDBTabPane>
							</MDBTabContent>

                            {/* 댓글영역 */}
							<div className="mt-5 mb-4">
								{/* 댓글작성란 */}
								<form className="memoFrm">
									<div className="form-group">
										<label htmlFor="memoArea" style={{fontWeight:"bold"}}>댓글 메모 작성</label>
										<textarea className="form-control" id="memoArea" rows="5" placeholder="댓글을 입력해주세요. 최대 3000byte"></textarea>
										<div className="d-flex justify-content-center">
											<MDBBtn outline color="indigo" className="btn_memo">취소</MDBBtn>
											<MDBBtn outline color="indigo" className="btn_memo">저장</MDBBtn>
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
					</MDBCardBody>
				</MDBCard>
            </div>
        );
    }

}

export default Member_PowerPlant_Info;