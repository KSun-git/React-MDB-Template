import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
import jsonData from '../../jsonSamples/cardList';
import './ProfilePage.css';

class ProfilePage extends React.Component {
	state = {
		cards: [],
		isLoading: false,
		isContentOpen: false,
		openedCard: "none"
	};

	constructor(props){
		console.log('[Component]Profile => constructor!')
		super(props);
		this.state = {
			cards: [],
			isLoading: false,
			isContentOpen: false,
			openedCard: "none"
		}
	};
	
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
	
	callData = () => {
		//데이터를 불러오는 곳 => 서버에서 불러오는 작업을하려면 Axios|Fetch|XMLHttpRequest 를 사용해야함
		const getData = jsonData;  //json파일에서 데이터 가져옴
		console.log("callData");
		console.log(getData);
		this.setState({cards: getData});
	}
	
	componentDidMount(){
		//체크용:최초마운트
		console.log("[Component]Profile => componentDidMount!");
		console.log(this.state.isContentOpen);
		console.log(this.state.openedCard);
		this.callData();
	};

	componentDidUpdate(){
		//컴포넌트 업데이트완료 => open이면 스크롤이동
		console.log("[Component]Profile => componentDidUpdate!");
		console.log(this.state.isContentOpen);
		console.log(this.state.openedCard);
		
		if(this.state.isContentOpen){
			const moveTop = document.getElementById(this.state.openedCard).offsetTop - 30 ;
			//window.scrollTo(0, moveTop);
			window.scrollTo({ top:moveTop, behavior:'smooth'});
		}
		
	};


	
	render(){
		console.log('[Component]Profile => render');
		const {isLoading, isContentOpen, openedCard, cards} = this.state;
	return (
		<div className="profilePage">
			<MDBRow className="justify-content-center">
				{isLoading ? (
					<MDBCol className="loader">
						<span className="loader_text">"Now Loading..."</span>
					</MDBCol>
				) : (
					cards.map(card => {
					 	return(
							<MDBCol key={card.card_idx} id={card.card_idx} sm="12" 
								md={((openedCard===card.card_idx && isContentOpen) ? '12' : '6')} 
								lg={((openedCard===card.card_idx && isContentOpen) ? '12' : '3')} className="mb-5">
								<MDBCard className="profile_card">
									<MDBCardBody>
										<MDBCardTitle className="text-center mb-2 font-bold">{card.card_title}</MDBCardTitle>
										<MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">{card.card_subTitle}</MDBCardTitle>
										<MDBCardText className={(openedCard===card.card_idx && isContentOpen) ? 'full_contents' : 'sliced_contents'} >
											<strong className="mb-2">Contents: </strong>
											{(openedCard===card.card_idx && isContentOpen) ? 
												card.card_contents : 
												`${card.card_contents.slice(0, 150)}...`
											}
											
										</MDBCardText>
										<div className="row justify-content-end pr-1">
											{((openedCard===card.card_idx && isContentOpen) ? 
											  <MDBBtn size="sm" color="primary" onClick={this.closeCard.bind(this,card.card_idx)} className="CardCloseBtn">Close</MDBBtn> : 
											  <MDBBtn size="sm" outline color="primary" onClick={this.openCard.bind(this,card.card_idx)} >More...</MDBBtn>)}
										</div>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						)
					})
				)}
			</MDBRow>
		</div>
	);
	}
}

export default ProfilePage;