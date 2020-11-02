import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBRow, MDBCol } from 'mdbreact';
import { MDBCardTitle, MDBCardText} from 'mdbreact';
import { MDBPagination, MDBPageItem, MDBPageNav} from "mdbreact";
import jsonData from '../../jsonSamples/cardList';
import './Member_Faq.css';

class Member_Faq extends Component {
	state = {
		cards: [],
		isLoading: false,
		isContentOpen: false,
		openedCard: "none"
	};

	constructor(props){
		super(props);
    }
    
    callFaqList = () => {
		//데이터를 불러오는 곳 => 서버에서 불러오는 작업을하려면 Axios|Fetch|XMLHttpRequest 를 사용해야함
		const getData = jsonData;  //json파일에서 데이터 가져옴
		this.setState({cards: getData});
	}

    componentDidMount(){
		this.callFaqList();
    }
    
    componentDidUpdate(){
		
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
    
	render() {
        const {isLoading, isContentOpen, openedCard, cards} = this.state;

		return (
			<div className="Member_Faq div_content">

                {/**타이틀 */}
				<MDBCard>
					<MDBCardBody className="titleCardBody">
						<span id="content_title">FAQ</span><span style={{color:"red"}}> (권한&gt;회원사)</span>
					</MDBCardBody>
				</MDBCard>
				
                {/**내용 */}
				<MDBCard className="mt-2">
					<MDBCardBody className="contentCardBody">
						
                        {/**검색라인 */}
                        <form className="searchFrm form-inline">
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
                            
                            <div className="form-group ml-2">
                                <input type="text" className="form-control" placeholder="제목/내용입력" style={{width:"200px"}} />
                            </div>
                            
                            <div className="searchFrm_btn">
                                <MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
                                <MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
                            </div>
                        </form>
						
                        {/**FAQ목록 */}
						<React.Fragment>
                                {isLoading ? (
                                    <MDBRow className="justify-content-center">
                                        <MDBCol className="loader">
                                            <span className="loader_text">"Now Loading..."</span>
                                        </MDBCol>
                                    </MDBRow>
                                ) : (
                                    <>
                                    <MDBRow className="justify-content-start mt-2">
                                        {cards.map(card => {
                                            return(
                                                <MDBCol key={card.card_idx} id={card.card_idx} sm="12" 
                                                    md={((openedCard===card.card_idx && isContentOpen) ? '12' : '6')} 
                                                    lg={((openedCard===card.card_idx && isContentOpen) ? '12' : '4')} className="mb-5">
                                                    <MDBCard className="faq_card">
                                                        <MDBCardBody>
                                                            <MDBCardTitle className="mb-2 font-bold">Q. {card.card_title}</MDBCardTitle>
                                                            <MDBCardTitle sub className="indigo-text mb-2">{card.card_subTitle}</MDBCardTitle>
                                                            <MDBCardText className={(openedCard===card.card_idx && isContentOpen) ? 'full_contents' : 'sliced_contents'} >
                                                                <strong className="mb-2">A. </strong>
                                                                {card.card_contents}
                                                            </MDBCardText>
                                                            {/** 하위버튼
                                                            <div className="row justify-content-end pr-1">
                                                                {((openedCard===card.card_idx && isContentOpen) ? 
                                                                <MDBBtn size="sm" color="primary" onClick={this.closeCard.bind(this,card.card_idx)} className="CardCloseBtn">Close</MDBBtn> : 
                                                                <MDBBtn size="sm" outline color="primary" onClick={this.openCard.bind(this,card.card_idx)} >More...</MDBBtn>)}
                                                            </div>
                                                            */}
                                                            {/** 기타 컨텐츠
                                                             <MDBCardText>
                                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                             </MDBCardText>
                                                            */}
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            )
                                        })}
                                    </MDBRow>

                                    {/* FAQ목록 페이징 */}
                                    <div className="mt-2 d-flex justify-content-center">
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
                                    </div>
                                    </>
                                )}
                        </React.Fragment>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default Member_Faq;