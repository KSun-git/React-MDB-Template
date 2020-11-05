import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBNav, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane} from "mdbreact";
import './Company_Analysis.css';

class Company_Analysis extends Component {
	state = {
		items: {
			default: "1",
        },
        fromNav: "",
    }
    
	constructor(props){
        super(props);
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

	render() {

		return (
			<div className="Company_Analysis div_content">
				
                {/**타이틀 */}
                <MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">분석통계</span>
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
                                    정산가격분석
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="Calculate_pills_title" >
                                <MDBNavLink link to="#" 
                                    active={this.state.items["default"] === "2"} 
                                    onClick={this.togglePills("default", "2")} >
                                    현물가격분석
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>

                        <MDBTabContent activeItem={this.state.items["default"]}>
							<MDBTabPane tabId="1" >
								{/* 정산가격분석 탭 */}
								<form className="searchFrm form-inline">
                                    <div className="form-group ml-2">
                                        <input type="month" className="form-control" style={{width:"160px"}} disabled/>
                                    </div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" disabled>
											<option>SELECT1</option>
											<option value="1">SELECT1</option>
                                            <option value="2">SELECT1</option>
                                            <option value="3">SELECT1</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" disabled>
											<option>SELECT2</option>
											<option value="1">SELECT1</option>
                                            <option value="2">SELECT1</option>
                                            <option value="3">SELECT1</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" disabled>
											<option>SELECT3</option>
											<option value="1">SELECT1</option>
                                            <option value="2">SELECT1</option>
                                            <option value="3">SELECT1</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
                                        <input type="text" className="form-control" placeholder="ENTER KEYWORLD..." style={{width:"220px"}} disabled/>
                                    </div>
                                    
									<div className="searchFrm_btn">
										<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
										<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
									</div>
								</form>
                                
                                {/* 협의후 추후 진행 */}
                                <div className="d-flex flex-wrap align-content-center justify-content-center mt-3" 
                                    style={{color:"darkgray",backgroundColor:"#DCDCDC",fontSize:"30px",height:"900px"}}>
                                    <div> &#8251; 협의후 추후 진행  &#8251;</div>
                                </div>
                                
                            </MDBTabPane>

                            {/* 현물가격분석 탭 */}
							<MDBTabPane tabId="2"> 
                                {/* 현물가격분석 탭 */}
								<form className="searchFrm form-inline">
                                    <div className="form-group ml-2">
                                        <input type="month" className="form-control" style={{width:"160px"}} disabled/>
                                    </div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" disabled>
											<option>SELECT1</option>
											<option value="1">SELECT1</option>
                                            <option value="2">SELECT1</option>
                                            <option value="3">SELECT1</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" disabled>
											<option>SELECT2</option>
											<option value="1">SELECT1</option>
                                            <option value="2">SELECT1</option>
                                            <option value="3">SELECT1</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
										<select className="browser-default custom-select" disabled>
											<option>SELECT3</option>
											<option value="1">SELECT1</option>
                                            <option value="2">SELECT1</option>
                                            <option value="3">SELECT1</option>
										</select>
									</div>

                                    <div className="form-group ml-2">
                                        <input type="text" className="form-control" placeholder="ENTER KEYWORLD..." style={{width:"220px"}} disabled/>
                                    </div>
                                    
									<div className="searchFrm_btn">
										<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
										<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
									</div>
								</form>
                                
                                {/* 협의후 추후 진행 */}
                                <div className="d-flex flex-wrap align-content-center justify-content-center mt-3" 
                                    style={{color:"darkgray",backgroundColor:"#DCDCDC",fontSize:"30px",height:"900px"}}>
                                    <div> &#8251; 협의후 추후 진행  &#8251;</div>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Company_Analysis;