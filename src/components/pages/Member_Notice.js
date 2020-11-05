import React, { Component } from 'react';
import { MDBCard,MDBCardBody, MDBBtn} from "mdbreact";
import { MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBIcon } from "mdbreact";
import nbox from '../../assets/n_box_icon.png';
import './Member_Notice.css';

class Member_Notice extends Component {
	state = {
		update_notice_Modal: false,
    }
    
    update_Modal_toggle = () =>{
        this.setState({
            update_notice_Modal: !this.state.update_notice_Modal
        });
    }

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	render() {
        const {update_notice_Modal} = this.state;

		return (
			<div className="Member_Notice div_content">
				{/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">공지사항</span><span style={{color:"red"}}></span>
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
                        <MDBTable scrollY maxHeight="900px" striped bordered className="mt-2 notice_table text-center">
                            <colgroup>
                                <col width="80px"/>
                                <col />
                                <col width="180px"/>
                                <col width="200px"/>
                            </colgroup>
                            <MDBTableHead color="grey">
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>파일</th>
                                    <th>등록일시</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>100</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.update_Modal_toggle}>최신 공지사항입니다.</span>
                                        <img src={nbox} alt="new" style={{width:"18px",marginTop:"-18px"}}/>
                                    </td>
                                    <td><span style={{cursor:"pointer"}}><MDBIcon icon="download" /> abc.pdf</span></td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>99</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.update_Modal_toggle}>공지사항입니다.</span>
                                    </td>
                                    <td> - </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>98</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.update_Modal_toggle}>공지사항입니다.</span>
                                    </td>
                                    <td> - </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr>
                                    <td>97</td>
                                    <td className="text-left pl-3">
                                        <span className="noticeTitle" onClick={this.update_Modal_toggle}>공지사항입니다.</span>
                                    </td>
                                    <td> - </td>
                                    <td>2020-10-10 11:11:11</td>
                                </tr>
                                <tr><td>96</td><td></td><td></td><td></td></tr>
                                <tr><td>95</td><td></td><td></td><td></td></tr>
                                <tr><td>94</td><td></td><td></td><td></td></tr>
                                <tr><td>93</td><td></td><td></td><td></td></tr>
                                <tr><td>92</td><td></td><td></td><td></td></tr>
                                <tr><td>91</td><td></td><td></td><td></td></tr>
                                <tr><td>90</td><td></td><td></td><td></td></tr>
                                <tr><td>89</td><td></td><td></td><td></td></tr>
                                <tr><td>88</td><td></td><td></td><td></td></tr>
                                <tr><td>87</td><td></td><td></td><td></td></tr>
                                <tr><td>86</td><td></td><td></td><td></td></tr>
                                <tr><td>85</td><td></td><td></td><td></td></tr>
                                <tr><td>84</td><td></td><td></td><td></td></tr>
                                <tr><td>83</td><td></td><td></td><td></td></tr>
                                <tr><td>82</td><td></td><td></td><td></td></tr>
                                <tr><td>81</td><td></td><td></td><td></td></tr>
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
                        <MDBModal isOpen={update_notice_Modal} toggle={this.update_Modal_toggle} size="lg" centered>
							<MDBModalHeader toggle={this.update_Modal_toggle}><span style={{fontWeight:"600"}}>공지사항 상세</span></MDBModalHeader>
							<MDBModalBody className="pt-1">
								<form>
                                    <MDBTable bordered className="detail_table mt-2">
                                        <MDBTableBody>
                                            <tr>
                                                <th>제목</th>
                                                <td style={{fontWeight:"bold"}}>공지사항입니다.</td>
                                            </tr>
                                            <tr>
                                                <th style={{height:"200px"}}>내용</th>
                                                <td>공지사항 내용입니다1.<br/>공지사항 내용입니다2.<br/>공지사항 내용입니다3.</td>
                                            </tr>
                                            <tr>
                                                <th>파일</th>
                                                <td><span style={{cursor:"pointer"}}><MDBIcon icon="download" /> abc.pdf</span></td>
                                            </tr>
                                            <tr>
                                                <th>등록일시</th>
                                                <td>2020-10-10 11:11:11</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
								</form>

                                {/* 이전글, 다음글 */}
                                <div className="wrap_pre_next">
                                    <div className="pre_div">
                                        <span style={{fontWeight:"bold"}}>이전 글 : </span>
                                        <span className="ml-2" style={{cursor:"pointer"}}>이전글 입니다.</span>
                                    </div>
                                    <div className="next_div">
                                        <span style={{fontWeight:"bold"}}>다음 글 : </span>
                                        <span className="ml-2" style={{cursor:"pointer"}}>다음글 입니다.</span>
                                    </div>
                                </div>
							</MDBModalBody>
							<MDBModalFooter className="justify-content-center">
								<MDBBtn  color="primary" onClick={this.update_Modal_toggle} className="btn_modal_commend">확인</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Member_Notice;