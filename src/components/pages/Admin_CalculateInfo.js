import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBNav, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import './Admin_CalculateInfo.css';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
    { label: "12월", value: "12월" },
    { label: "11월", value: "11월" },
    { label: "10월", value: "10월" },
    { label: "9월", value: "9월" },
    { label: "8월", value: "8월" },
    { label: "7월", value: "7월" },
    { label: "6월", value: "6월" },
    { label: "5월", value: "5월" },
    { label: "4월", value: "4월" },
    { label: "3월", value: "3월" },
    { label: "2월", value: "2월" },
	{ label: "1월", value: "1월" }
];

class Admin_CalculateInfo extends Component {
	state = {
		items: {
			default: "1",
        },
        fromNav: "",
        selectedMonth: ["12월","11월","10월","9월","8월","7월","6월","5월","4월","3월","2월","1월"],
        selectedYear: "2020년",
    }
    
	constructor(props){
        super(props);
        this.selectedYearChange = this.selectedYearChange.bind(this);
	}

	componentDidMount(){
		const{id} = this.props.match.params;
		this.setState({
			items:{default: id},
			fromNav: id
		});
	}

	componentDidUpdate(){
		if(this.state.fromNav===this.props.match.params.id){
			//console.log('컨텐츠 내에서에서 탭버튼클릭으로 이동');
		}else{
			//console.log('사이드메뉴에서 탭메뉴이동');
			this.setState({fromNav: this.props.match.params.id});
			this.setState({items:{default: this.props.match.params.id}});
		}
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

    selectedYearChange(event) {
        this.setState({selectedYear: event.target.value});
    }
    
	render() {
        const{ selectedYear, selectedMonth } = this.state;

		return (
			<div className="Admin_CalculateInfo div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">정산정보 관리 </span><span style={{color:"red"}}>(권한&gt;관리자)</span>
                        { this.state.items.default === "2" && 
                            <span id="title_option">
                                <MDBBtn color="elegant" className="btn_CalcInfo_enroll" >회원사정보 개별등록</MDBBtn>
                                <MDBBtn color="elegant" className="btn_CalcInfo_enroll" >회원사정보 일괄등록</MDBBtn>
                            </span>
                        }
					</MDBCardBody>
				</MDBCard>
				
                {/**내용 */}
				<MDBCard className="mt-2 pb-3">
					<MDBCardBody className="contentCardBody">
                        
                        {/** 탭컨트롤 */}
                        <MDBNav className="nav-pills">
                            <MDBNavItem className="Calculate_pills_title" >
                                <MDBNavLink link to="#" 
                                    active={this.state.items["default"] === "1"} 
                                    onClick={this.togglePills("default", "1")} >
                                    중간정산단가관리
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="Calculate_pills_title" >
                                <MDBNavLink link to="#" 
                                    active={this.state.items["default"] === "2"} 
                                    onClick={this.togglePills("default", "2")} >
                                    연간정산정보관리
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>

                        <MDBTabContent activeItem={this.state.items["default"]}>
							<MDBTabPane tabId="1" >
								{/* 중간정산단가 관리 탭 */}
								<form className="searchFrm form-inline">
									<div className="form-group ml-2">
										<select className="browser-default custom-select" defaultValue="2020년" onChange={this.selectedYearChange}>
											<option>조회년도</option>
											<option value="2020년">2020년</option>
											<option value="2019년">2019년</option>
											<option value="2018년">2018년</option>
											<option value="2017년">2017년</option>
                                            <option value="2016년">2016년</option>
                                            <option value="2015년">2015년</option>
                                            <option value="2014년">2014년</option>
                                            <option value="2013년">2013년</option>
                                            <option value="2012년">2012년</option>
                                            <option value="2011년">2011년</option>
                                            <option value="2010년">2010년</option>
										</select>
									</div>
                                    <div style={{width:"120px", display:"inline-block"}} className="ml-2">
                                        <MultiSelect
                                            options={options}
                                            disableSearch={true}
                                            hasSelectAll={true}
                                            selected={selectedMonth}
                                            onSelectedChanged={selectedMonth => this.setState({selectedMonth})}
                                            overrideStrings={{
                                                selectSomeItems: "조회월",
                                                allItemsAreSelected: "월 전체",
                                                selectAll: "월 전체",
                                                search: "검색",
                                            }}
                                        />
                                    </div>
									<div className="searchFrm_btn">
										<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
										<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
									</div>
								</form>
                                
                                <MDBTable scrollY maxHeight="900px" striped bordered className="text-center mt-3 CalcInfo_table">
                                    <colgroup>
                                        <col width="150px"/>
                                        <col width="250px"/>
                                        <col />
                                        <col width="200px"/>
                                    </colgroup>
                                    <MDBTableHead>
                                        <tr>
                                            <th>연월</th>
                                            <th>정산단가</th>
                                            <th>메모</th>
                                            <th>최종수정일시</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {selectedMonth.length === 0 && (<tr><td colSpan="4">항목을 설정하세요.</td></tr>)}
										{selectedMonth.length !== 0 && (
											<>
											{selectedMonth.map((month, index) => (
                                                (month==="12월" && selectedYear==="2020년") ? 
                                                    <tr key={index}>
                                                        <td>{selectedYear} {month}</td>
                                                        <td><input type="text" className="text-right Info_Price"/></td>
                                                        <td><input type="text" className="Info_Memo"/></td>
                                                        <td>2020-10-10 11:11:11</td>
                                                    </tr>
                                                :
                                                    <tr key={index}>
                                                        <td>{selectedYear} {month}</td>
                                                        <td><input type="text" className="text-right Info_Price" defaultValue="103,000,000" disabled/></td>
                                                        <td><input type="text" className="Info_Memo"/></td>
                                                        <td>2020-10-10 11:11:11</td>
                                                    </tr>
											))}
											</>
										)}
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBTabPane>

                            {/* 연간정산정보관리 탭 */}
							<MDBTabPane tabId="2"> 
                                <form className="searchFrm form-inline">
									<div className="form-group ml-2">
										<select className="browser-default custom-select" defaultValue="1" disabled>
											<option>조회년도</option>
											<option value="1">2020년</option>
											<option value="2">2019년</option>
											<option value="3">2018년</option>
											<option value="4">2017년</option>
                                            <option value="5">2016년</option>
                                            <option value="6">2015년</option>
                                            <option value="7">2014년</option>
                                            <option value="8">2013년</option>
                                            <option value="9">2012년</option>
                                            <option value="10">2011년</option>
                                            <option value="11">2010년</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" defaultValue="1" style={{width:"120px"}} disabled>
											<option>조회월</option>
											<option value="1">월 전체</option>
											<option value="2">12월</option>
											<option value="3">11월</option>
											<option value="4">10월</option>
                                            <option value="5">9월</option>
                                            <option value="6">8월</option>
                                            <option value="7">7월</option>
                                            <option value="8">6월</option>
                                            <option value="9">5월</option>
                                            <option value="10">4월</option>
                                            <option value="11">3월</option>
										</select>
									</div>
									<div className="searchFrm_btn">
										<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
										<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
									</div>
								</form>
                                
                                {/* 거래소의 연간정산 데이터 확인 후 확정/미회신 */}
                                <div className="d-flex flex-wrap align-content-center justify-content-center mt-3" 
                                    style={{color:"darkgray",backgroundColor:"#DCDCDC",fontSize:"30px",height:"900px"}}>
                                    <div> &#8251; 연간정산정보 데이터  &#8251;</div>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Admin_CalculateInfo;