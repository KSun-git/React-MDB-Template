import React, { Component } from 'react';
import {MDBModal} from 'mdbreact';
import { MDBContainer, MDBBtn, MDBCol} from 'mdbreact';
import { MDBModalBody} from 'mdbreact';
import { MDBInput } from 'mdbreact';
import Logo_kpx from '../../assets/logo_kpx.png';
import './LoginModal.css';

class LoginModal extends Component {
	state = {
		checked: false,
	};

	handleChange = (e) => {
		const { target: { checked } } = e;
		this.setState({ checked });
	};

	render() {
		return (
			<MDBModal isOpen={this.props.modal_login} toggle={this.props.toggleModal("login")} centered>
				<MDBModalBody>
					<MDBContainer>
						<MDBCol sm="12" md="12" lg="12" className="pl-5 pr-5">
							<form id="form_login">
								<div className="h4 text-center mb-4 mt-4">
									<img id="logo_login" src={Logo_kpx} alt="logo_kpx" />
								</div>
								
								<div className="input_with_icon">
									<MDBInput type="text" id="input_id" label="아이디" background />
								</div>
								
								<div className="input_with_icon">
									<MDBInput type="password" id="input_password" label="비밀번호" background />
								</div>
								
								<div className="text-center mt-4">
									<MDBBtn id="loginBtn" color="indigo" type="submit">로그인</MDBBtn>
									<div className="text-left mt-2">
										<input 
											id="defaultChecked2" 
											type="checkbox" 
											checked={this.state.checked} 
											onChange={this.handleChange} />
										<label htmlFor="defaultChecked2" className="ml-2"> 로그인 상태유지</label>
									</div>
								</div>
							</form>
						</MDBCol>
						<div id="option_login">
							<span>
								<a href="# " >아이디찾기</a>
							</span>
							<span id="option_center">
								<a href="# " >비밀번호찾기</a>
							</span>
							<span>
								<a href="# " >회원가입</a>
							</span>
						</div>
					</MDBContainer>
				</MDBModalBody>
			</MDBModal>
		);
	}
}

export default LoginModal;