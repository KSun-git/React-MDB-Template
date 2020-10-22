import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBRow, MDBCol, MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBtn} from 'mdbreact';
import './JoinModal.css';

class JoinModal extends Component {
	state = {
		items: {
			default: "1",
		}
	};
	
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
			<MDBModal isOpen={this.props.modal_join} toggle={this.props.toggleModal("join")} centered>
				<MDBModalBody>
					<MDBRow center id="modal_title">
						<MDBCol id="join_title" size="4">회원가입</MDBCol>
					</MDBRow>
					<MDBContainer className="mt-2">
						<MDBCol>
							<MDBNav>
								<MDBNavItem className="pills_title" >
									<MDBNavLink link to="#" 
										active={this.state.items["default"] === "1"} 
										onClick={this.togglePills("default", "1")} >
										거래소
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem className="pills_title" >
									<MDBNavLink link to="#" 
										active={this.state.items["default"] === "2"} 
										onClick={this.togglePills("default", "2")} >
										회원사
									</MDBNavLink>
								</MDBNavItem>
							</MDBNav>

							<MDBTabContent activeItem={this.state.items["default"]}>
								<MDBTabPane tabId="1" id="companyTab">
									{/* 거래소 회원가입 탭 start */}
									<form id="frm_company" className="mt-2">
										<label htmlFor="company_id">아이디</label>
										<input type="text" id="company_id" className="form-control" placeholder="영문+숫자 5자리 이상" />

										<label htmlFor="company_password" className="mt-2">비밀번호</label>
										<input type="password" id="company_password" className="form-control" placeholder="영문+숫자+특수기호 8~13자리" />

										<label htmlFor="company_password_check" className="mt-2">비밀번호</label>
										<input type="password" id="company_password_check" className="form-control" placeholder="영문+숫자+특수기호 8~13자리" />

										<label htmlFor="company_department" className="mt-2">부서명</label>
										<input type="text" id="company_department" className="form-control" placeholder="부서명(한글 2자 이상)" />

										<label htmlFor="company_manager" className="mt-2">담담자명</label>
										<input type="text" id="company_manager" className="form-control" placeholder="이름" />

										<label htmlFor="company_phone" className="mt-2">휴대폰번호</label>
										<input type="text" id="company_phone" className="form-control" placeholder="-없이 숫자만 입력" />

										<label htmlFor="company_email" className="mt-2">이메일</label>
										<input type="email" id="company_email" className="form-control" placeholder="@포함한 회사 이메일 입력(abd@abc.co.kr)" />

										<div className="text-center mt-4">
											<MDBBtn id="submit_frm_company" color="indigo" type="submit" disabled>회원가입</MDBBtn>
										</div>
									</form>
								</MDBTabPane>

								<MDBTabPane tabId="2" id="memberTab">
									{/* 회원사 회원가입 탭 */}
									<form id="frm_member" className="mt-2">
										<label htmlFor="member_id">아이디</label>
										<input type="text" id="member_id" className="form-control" placeholder="영문+숫자 5자리 이상" />

										<label htmlFor="member_password" className="mt-2">비밀번호</label>
										<input type="password" id="member_password" className="form-control" placeholder="영문+숫자+특수기호 8~13자리" />

										<label htmlFor="member_password_check" className="mt-2">비밀번호</label>
										<input type="password" id="member_password_check" className="form-control" placeholder="영문+숫자+특수기호 8~13자리" />

										<label htmlFor="member_company" className="mt-2">회원사명</label>
										<select className="browser-default custom-select" id="member_company">
											<option value="0">선택</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>

										<label htmlFor="member_department" className="mt-2">부서명</label>
										<input type="text" id="member_department" className="form-control" placeholder="부서명(한글 2자 이상)" />

										<label htmlFor="member_manager" className="mt-2">담담자명</label>
										<input type="text" id="member_manager" className="form-control" placeholder="이름" />

										<label htmlFor="member_phone" className="mt-2">휴대폰번호</label>
										<input type="text" id="member_phone" className="form-control" placeholder="-없이 숫자만 입력" />

										<label htmlFor="member_email" className="mt-2">이메일</label>
										<input type="email" id="member_email" className="form-control" placeholder="@포함한 회사 이메일 입력(abd@abc.co.kr)" />

										<div className="text-center mt-4">
											<MDBBtn id="submit_frm_member" color="indigo" type="submit" disabled>회원가입</MDBBtn>
										</div>
									</form>
								</MDBTabPane>
							</MDBTabContent>
						</MDBCol>
					</MDBContainer>
				</MDBModalBody>
			</MDBModal>
		)
	}
}

export default JoinModal;