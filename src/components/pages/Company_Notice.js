import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBIcon } from "mdbreact";
import nbox from '../../assets/n_box_icon.png';
import './Company_Notice.css';

class Company_Notice extends Component {
	state = {
        notice_Modal: false,
        modalOrder: "none",
        notice_100_appear: true,
        notice_99_appear: false,
        notice_98_appear: true,
    }
    
    toggleNoticeModal = (order) => {
        if(this.state.modalOrder==="none"){
            //모달 표시
            this.setState({
                modalOrder: order,
                notice_Modal: !this.state.notice_Modal
            })
        }else{
            //모달제거
            this.setState({
                modalOrder: "none",
                notice_Modal: !this.state.notice_Modal
            })
        }
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
        const {notice_Modal, modalOrder} = this.state;
        const {notice_100_appear, notice_99_appear, notice_98_appear} = this.state;
        const element_onBoard = <span className="notice_on">노출 <MDBIcon icon="caret-down" /></span>;
        const element_offBoard = <span className="notice_off">미노출 <MDBIcon icon="caret-up" /></span>;

		return (
			<div className="Company_Notice div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">공지사항</span>
                        <span id="title_option">
						    <MDBBtn color="elegant" className="btn_notice_enroll" onClick={this.toggleNoticeModal.bind(this, "enroll")}>공지사항 등록</MDBBtn>
                        </span>
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
						
                        {/**FAQ목록 */}
                        <MDBTable scrollY maxHeight="900px" striped bordered className="mt-2 notice_table text-center">
                            <colgroup>
                                <col width="80px"/>
                                <col />
                                <col width="180px"/>
                                <col width="120px" />
                                <col width="200px"/>
                            </colgroup>
                            <MDBTableHead color="grey">
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>파일</th>
                                    <th>노출여부</th>
                                    <th>등록일시</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>100</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.toggleNoticeModal.bind(this, "update")}>최신 공지사항입니다.</span>
                                        <img src={nbox} alt="new" style={{width:"18px",marginTop:"-18px"}}/>
                                    </td>
                                    <td><span style={{cursor:"pointer"}}><MDBIcon icon="download" /> abc.pdf</span></td>
                                    <td>
                                        <div className="appear_option" id="notice_100" onClick={this.toggleAppearOption.bind(this, "notice_100")}>
                                            {notice_100_appear ? element_onBoard : element_offBoard}
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>99</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.toggleNoticeModal.bind(this, "update")}>공지사항입니다.</span>
                                    </td>
                                    <td> - </td>
                                    <td>
                                        <div className="appear_option" id="notice_99" onClick={this.toggleAppearOption.bind(this, "notice_99")}>
                                            {notice_99_appear ? element_onBoard : element_offBoard}
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>98</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.toggleNoticeModal.bind(this, "update")}>공지사항입니다.</span>
                                    </td>
                                    <td> - </td>
                                    <td>
                                        <div className="appear_option" id="notice_98" onClick={this.toggleAppearOption.bind(this, "notice_98")}>
                                            {notice_98_appear ? element_onBoard : element_offBoard}
                                        </div>
                                    </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr><td>97</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>96</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>95</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>94</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>93</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>92</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>91</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>90</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>89</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>88</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>87</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>86</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>85</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>84</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>83</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>82</td><td></td><td></td><td></td><td></td></tr>
                                <tr><td>81</td><td></td><td></td><td></td><td></td></tr>
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


                        {/* 공지사항상세 모달 */}
                        <MDBModal isOpen={notice_Modal} toggle={this.toggleNoticeModal.bind(this, "none")} size="lg" centered>
							<MDBModalHeader toggle={this.toggleNoticeModal.bind(this, "none")}>
                                <span style={{fontWeight:"600"}}>
                                    {modalOrder === "update" && "공지사항 상세/수정"}
                                    {modalOrder === "enroll" && "공지사항 등록"}
                                </span>
                            </MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>
                                    <MDBTable bordered className="detail_table mt-2">
                                        <MDBTableBody>
                                            <tr>
                                                <th>제목</th>
                                                <td><input type="text" className="form-control" id="noticeTitle" placeholder="제목을 입력해주세요." defaultValue={modalOrder === "update" ? "oooooo" : ""} /></td>
                                            </tr>
                                            <tr>
                                                <th style={{height:"200px"}}>내용</th>
                                                <td><textarea className="form-control" id="noticeContents" rows="10" placeholder="내용을 입력해주세요." defaultValue={modalOrder === "update" ? "oooooo" : ""} ></textarea></td>
                                            </tr>
                                            <tr>
                                                <th>파일</th>
                                                <td><input type="file" /></td>
                                            </tr>
                                            <tr>
                                                <th>노출여부</th>
                                                <td>
                                                    <div class="custom-control custom-radio d-inline">
                                                        <input type="radio" name="isDisplay" id="onBoard" class="custom-control-input" value="onBoard"/>
                                                        <label className="custom-control-label" htmlFor="onBoard">노출</label>
                                                    </div>
                                                    <div class="custom-control custom-radio d-inline ml-2">
                                                        <input type="radio" name="isDisplay" id="offBoard" class="custom-control-input" value="offBoard"/>
                                                        <label className="custom-control-label" htmlFor="offBoard">미노출</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            {modalOrder === "update" && <tr><th>등록일시</th><td>2020-10-10 11:11:11</td></tr>}
                                        </MDBTableBody>
                                    </MDBTable>
								</form>

							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
                                <MDBBtn color="secondary" onClick={this.toggleNoticeModal.bind(this, "none")} className="btn_modal_commend">취소</MDBBtn>
                                <MDBBtn  color="primary" className="btn_modal_commend">확인</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Company_Notice;