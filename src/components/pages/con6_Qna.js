import React, { Component } from 'react';
import { MDBCard,MDBCardBody } from "mdbreact";
import axios from 'axios'
import './con6_Qna.css';

class con6_Qna extends Component {
	state = {
		cards: [],
		isLoading: false,
		isContentOpen: false,
		openedCard: "none"
	}

	openCard = (cardId) => {
		this.setState({
			isContentOpen: true,
			openedCard: cardId
		});
	};

	closeCard = (cardId) => {
		this.setState({
			isContentOpen: false,
			openedCard: "none"
		});
	};
	
	componentDidMount(){
		this.getQnaList();
	}

	getQnaList = async() => {
		await axios.get("http://localhost:8080/api/getDbSample.json")
		.then(res => {
			console.log(res);
			//this.setState({
			//	message: res.data.message,
			//	isGetData: true
			//})
		})
		.catch(res => console.log(res))
	}

	render() {
		return (
		<div className="Con6_Qna div_content">
			<MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">Qna 관리</span>
				</MDBCardBody>
			</MDBCard>
			
			<MDBCard className="mt-2">
				<MDBCardBody className="contentsCardBody">
					<h3>Main Contents</h3>
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default con6_Qna;