import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBIcon } from "mdbreact";
import nbox from '../../assets/n_box_icon.png';
import './Company_Faq.css';


class Company_Faq extends Component {
	state = {
        enroll_faq_Modal: false,
        update_faq_Modal: false,
    }
    
    enroll_Modal_toggle = () => {
        this.setState({
            enroll_faq_Modal: !this.state.enroll_faq_Modal,
        });
    }

    update_Modal_toggle = () =>{
        this.setState({
            update_faq_Modal: !this.state.update_faq_Modal
        });
    }

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
        const {enroll_faq_Modal, update_faq_Modal} = this.state;

		return (
			<div className="Company_Faq div_content">
				
                {/**타이틀 */}
                <MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">FAQ</span><span style={{color:"red"}}> (권한&gt;회원사)</span>
                        <span id="title_option">
						    <MDBBtn color="elegant" className="btn_faq_enroll" onClick={this.enroll_Modal_toggle}>FAQ 등록</MDBBtn>
                        </span>
                        
                        {/* FAQ 등록 모달 */}
                        <MDBModal isOpen={enroll_faq_Modal} toggle={this.enroll_Modal_toggle} size="lg" centered>
							<MDBModalHeader toggle={this.enroll_Modal_toggle}><span style={{fontWeight:"600"}}>FAQ 등록</span></MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>

                                    <MDBTable bordered className="enroll_faq_table mt-2">
                                        <MDBTableBody>
                                            <tr>
                                                <th><label htmlFor="faqQuestion">질문</label></th>
                                                <td><input type="text" className="form-control" id="faqQuestion" placeholder="질문을 입력해주세요."/></td>
                                            </tr>
                                            <tr>
                                                <th><label htmlFor="faqAns">답변</label></th>
                                                <td>
                                                    <textarea className="form-control" id="faqAns" rows="10" placeholder="답변을 입력해주세요."></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>노출여부</th>
                                                <td>
                                                    <div class="custom-control custom-radio d-inline">
                                                        <input type="radio" name="isDisplay" id="onBoard" class="custom-control-input" value="onBoard"/>
                                                        <label class="custom-control-label" htmlFor="onBoard">노출</label>
                                                    </div>
                                                    <div class="custom-control custom-radio d-inline ml-2">
                                                        <input type="radio" name="isDisplay" id="offBoard" class="custom-control-input" value="offBoard"/>
                                                        <label class="custom-control-label" htmlFor="offBoard">미노출</label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
								</form>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn color="secondary" onClick={this.enroll_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn  color="primary" className="btn_modal_commend">확인</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</MDBCardBody>
				</MDBCard>
				
                {/**내용 */}
				<MDBCard className="mt-2 pb-3">
					<MDBCardBody className="contentCardBody">

						{/**검색라인 */}
                        <form className="searchFrm form-inline">
                            <div className="form-group ml-2">
                                <input type="text" className="form-control dateLabel" defaultValue="등록일자" disabled/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control intputDate" />
                            </div>
                            <sapn className="ml-2 mr-2"> ~ </sapn>
                            <div className="form-group">
                                <input type="date" className="form-control" />
                            </div>

                            {/**구분 미정?
                            <div className="form-group ml-2">
							    <select className="browser-default custom-select" style={{width:"120px"}}>
                                    <option>전체</option>
                                    <option value="1">Gubun1</option>
                                    <option value="2">Gubun2</option>
                                    <option value="3">Gubun3</option>
                                    <option value="4">Gubun4</option>
                                    <option value="5">Gubun5</option>
                                </select>
                            </div>
                             */}

                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="제목/내용입력" style={{width:"200px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>
						
						{/**FAQ목록 */}
                        <MDBTable scrollY maxHeight="600px" striped bordered className="mt-2 faq_table text-center">
                            <colgroup>
                                <col width="70px"/>
                                <col />
                                <col width="120px"/>
                                <col width="200px"/>
                            </colgroup>
                            <MDBTableHead color="grey">
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>노출여부</th>
                                    <th>등록일시</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>100</td>
                                    <td className="text-left pl-3">
                                        <span className="faqTitle" onClick={this.update_Modal_toggle}>FAQ Question 1</span>
                                        <img src={nbox} alt="new" style={{width:"18px",marginTop:"-18px"}}/>
                                    </td>
                                    <td>
                                        <div className="appear_option" id="faq_100" >
                                            <span className="Faq_on">노출 <MDBIcon icon="caret-down" /></span>
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>99</td>
                                    <td className="text-left pl-3">
                                        <span className="faqTitle" onClick={this.update_Modal_toggle}>FAQ Question 2</span>
                                    </td>
                                    <td>
                                        <div className="appear_option" id="faq_99">
                                            <span className="Faq_off">미노출 <MDBIcon icon="caret-up" /></span>
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>98</td>
                                    <td className="text-left pl-3">
                                        <span className="faqTitle" onClick={this.update_Modal_toggle}>FAQ Question 3</span>
                                    </td>
                                    <td>
                                        <div className="appear_option" id="faq_98">
                                            <span className="Faq_on">노출 <MDBIcon icon="caret-down" /></span>
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>

                                <tr><td>97</td><td></td><td></td><td></td></tr>
                                <tr><td>96</td><td></td><td></td><td></td></tr>
                                <tr><td>95</td><td></td><td></td><td></td></tr>
                                <tr><td>94</td><td></td><td></td><td></td></tr>
                                <tr><td>93</td><td></td><td></td><td></td></tr>
                                <tr><td>92</td><td></td><td></td><td></td></tr>
                                <tr><td>91</td><td></td><td></td><td></td></tr>
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

                        {/* FAQ 업데이트 모달 */}
                        <MDBModal isOpen={update_faq_Modal} toggle={this.update_Modal_toggle} size="lg" centered>
							<MDBModalHeader toggle={this.update_Modal_toggle}><span style={{fontWeight:"600"}}>FAQ 상세/수정</span></MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>

                                    <MDBTable bordered className="enroll_faq_table mt-2">
                                        <MDBTableBody>
                                            <tr>
                                                <th><label htmlFor="faqQuestion">질문</label></th>
                                                <td><input type="text" className="form-control" id="faqQuestion" defaultValue="질문내용 ooooooo 입니다." /></td>
                                            </tr>
                                            <tr>
                                                <th><label htmlFor="faqAns">답변</label></th>
                                                <td>
                                                    <textarea className="form-control" id="faqAns" rows="10" defaultValue="답변내용 ooooooooooooooooo 입니다."></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>노출여부</th>
                                                <td>
                                                    <div class="custom-control custom-radio d-inline">
                                                        <input type="radio" name="isDisplay" id="onBoard" class="custom-control-input" value="onBoard" defaultChecked/>
                                                        <label className="custom-control-label" htmlFor="onBoard">노출</label>
                                                    </div>
                                                    <div class="custom-control custom-radio d-inline ml-2">
                                                        <input type="radio" name="isDisplay" id="offBoard" class="custom-control-input" value="offBoard"/>
                                                        <label className="custom-control-label" htmlFor="offBoard">미노출</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>등록일시</th>
                                                <td>2020-10-10 11:11:11</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
								</form>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn color="secondary" onClick={this.update_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn  color="primary" className="btn_modal_commend">확인</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Company_Faq;