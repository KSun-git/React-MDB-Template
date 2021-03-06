import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBIcon } from "mdbreact";
import nbox from '../../assets/n_box_icon.png';
import './Company_Qna.css';

class Company_Qna extends Component {
	state = {
        Enroll_Modal:false,
        update_qna_Modal: false,
        qna_100_appear: true,
        qna_99_appear: false,
        qna_98_appear: true,
	}

    Enroll_Modal_toggle = () =>{
        this.setState({
            Enroll_Modal: !this.state.Enroll_Modal
        })
    }

    update_Modal_toggle = () =>{
        this.setState({
            update_qna_Modal: !this.state.update_qna_Modal
        });
    }

    toggleAppearOption = (toggleId) => {
        let toggleAppear = toggleId + '_appear'
        this.setState({
            [toggleAppear]: !this.state[toggleAppear]
        })
    }

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
        const {Enroll_Modal, update_qna_Modal} = this.state;
        const {qna_100_appear, qna_99_appear, qna_98_appear} = this.state;
        const element_onBoard = <span className="Qna_on">노출 <MDBIcon icon="caret-down" /></span>;
        const element_offBoard = <span className="Qna_off">미노출 <MDBIcon icon="caret-up" /></span>;

		return (
			<div className="Company_Qna div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">Q&#38;A</span>
					</MDBCardBody>
				</MDBCard>
				
				{/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
						
                        {/**검색라인 */}
                        <form className="searchFrm form-inline">
                            <div className="form-group ml-2">
                                <input type="text" className="form-control dateLabel" defaultValue="등록일자" disabled/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control intputDate" />
                            </div>
                            <span className="ml-2 mr-2"> ~ </span>
                            <div className="form-group">
                                <input type="date" className="form-control" />
                            </div>

                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="제목/내용입력" style={{width:"200px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>
						
                        {/**QNA목록 */}
                        <MDBTable scrollY maxHeight="900px" striped bordered className="mt-2 qna_table text-center">
                            <colgroup>
                                <col width="80px"/>
                                <col />
                                <col width="100px"/>
                                <col width="100px"/>
                                <col width="100px"/>
                                <col width="120px"/>
                                <col width="200px"/>
                                <col width="200px"/>
                            </colgroup>
                            <MDBTableHead color="grey">
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>회원사명</th>
                                    <th>등록자</th>
                                    <th>답변여부</th>
                                    <th>노출여부</th>
                                    <th>등록일시</th>
                                    <th>답변등록일시</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>100</td>
                                    <td className="text-left pl-3">
                                        <span className="qnaTitle" onClick={this.update_Modal_toggle}>최신 질문입니다.</span>
                                        <img src={nbox} alt="new" style={{width:"18px",marginTop:"-18px"}}/>
                                    </td>
                                    <td>회원사명</td>
                                    <td>홍길동</td>
                                    <td>답변완료</td>
                                    <td>
                                        <div className="appear_option" id="qna_100" onClick={this.toggleAppearOption.bind(this, "qna_100")}>
                                            {qna_100_appear ? element_onBoard : element_offBoard}
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>99</td>
                                    <td className="text-left pl-3">
                                        <span className="qnaTitle" onClick={this.update_Modal_toggle}>질문이 있어요.</span>
                                    </td>
                                    <td>회원사명</td>
                                    <td>홍길동</td>
                                    <td>답변대기</td>
                                    <td>
                                        <div className="appear_option" id="qna_99" onClick={this.toggleAppearOption.bind(this, "qna_99")}>
                                            {qna_99_appear ? element_onBoard : element_offBoard}
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td> - </td>
                                </tr>
                                <tr>
                                    <td>98</td>
                                    <td className="text-left pl-3">
                                        <span className="qnaTitle" onClick={this.update_Modal_toggle}>질문이 있어요.</span>
                                    </td>
                                    <td>회원사명</td>
                                    <td>홍길동</td>
                                    <td>답변완료</td>
                                    <td>
                                        <div className="appear_option" id="qna_98" onClick={this.toggleAppearOption.bind(this, "qna_98")}>
                                            {qna_98_appear ? element_onBoard : element_offBoard}
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr><td>97</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>96</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>89</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>88</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>87</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>86</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>85</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>84</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>83</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>82</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>81</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
                        <MDBModal isOpen={update_qna_Modal} toggle={this.update_Modal_toggle} size="lg" centered>
							<MDBModalHeader toggle={this.update_Modal_toggle}><span style={{fontWeight:"600"}}>Q&#38;A 상세/등록</span></MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>

                                    <MDBTable bordered className="enroll_qna_table mt-2">
                                        <MDBTableBody>
                                            <tr>
                                                <th>구분</th>
                                                <td>
                                                    <select className="browser-default custom-select" style={{width:"200px"}} defaultValue="3">
                                                        <option>구분</option>
                                                        <option value="1">회원</option>
                                                        <option value="2">정산</option>
                                                        <option value="3">이행내역</option>
                                                        <option value="4">시스템문의</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>제목</th>
                                                <td><input type="text" className="form-control" defaultValue="제목 입니다. 질문입니다." disabled/></td>
                                            </tr>
                                            <tr>
                                                <th>내용</th>
                                                <td>
                                                    <textarea className="form-control" rows="5" defaultValue="내용 입니다. 질문입니다." disabled></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>답변</th>
                                                <td>
                                                    <textarea className="form-control" rows="5" defaultValue="답변입니다.답변."></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>회원사명</th>
                                                <td>회원사1</td>
                                            </tr>
                                            <tr>
                                                <th>등록자</th>
                                                <td>홍길동</td>
                                            </tr>
                                            <tr>
                                                <th>노출여부</th>
                                                <td>
                                                    <div className="custom-control custom-radio d-inline">
                                                        <input type="radio" name="isDisplay" id="onBoard" className="custom-control-input" value="onBoard" defaultChecked/>
                                                        <label className="custom-control-label" htmlFor="onBoard">노출</label>
                                                    </div>
                                                    <div className="custom-control custom-radio d-inline ml-2">
                                                        <input type="radio" name="isDisplay" id="offBoard" className="custom-control-input" value="offBoard"/>
                                                        <label className="custom-control-label" htmlFor="offBoard">미노출</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>등록일시</th>
                                                <td>2020-10-10 11:11:11</td>
                                            </tr>
                                            <tr>
                                                <th>답변등록일시</th>
                                                <td>2020-10-10 11:11:11</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
								</form>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn color="secondary" onClick={this.update_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn  color="primary" className="btn_modal_commend">저장</MDBBtn>
							</MDBModalFooter>
						</MDBModal>

                        {/* FAQ 등록 모달 */}
                        <MDBModal isOpen={Enroll_Modal} toggle={this.Enroll_Modal_toggle} size="lg" centered>
							<MDBModalHeader toggle={this.Enroll_Modal_toggle}><span style={{fontWeight:"600"}}>Q&#38;A 등록</span></MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>

                                    <MDBTable bordered className="enroll_qna_table mt-2">
                                        <MDBTableBody>
                                            <tr>
                                                <th>구분</th>
                                                <td>
                                                    <select className="browser-default custom-select">
                                                        <option>구분선택</option>
                                                        <option value="1">회원</option>
                                                        <option value="2">정산</option>
                                                        <option value="3">이행내역</option>
                                                        <option value="4">시스템문의</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>제목</th>
                                                <td><input type="text" className="form-control" defaultValue="질문을 입력하세요" /></td>
                                            </tr>
                                            <tr>
                                                <th>내용</th>
                                                <td>
                                                    <textarea className="form-control" rows="10" defaultValue="내용을 입력하세요"></textarea>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
								</form>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn color="secondary" onClick={this.Enroll_Modal_toggle} className="btn_modal_commend">취소</MDBBtn>
								<MDBBtn  color="primary" className="btn_modal_commend">저장</MDBBtn>
							</MDBModalFooter>
						</MDBModal>


					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Company_Qna;