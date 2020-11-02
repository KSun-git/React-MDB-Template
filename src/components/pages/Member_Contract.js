import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import { MDBModal, MDBModalHeader, MDBModalBody} from "mdbreact"
import './Member_Contract.css';


class Member_Contract extends Component {
	state= {
		isLoading: true,
		contract_Modal: false,
	}

	contract_Modal_toggle = () => {
		this.setState({
			contract_Modal: !this.state.contract_Modal
		});
	}
	
	callCon1Data = () =>{
		//데이터를 불러오는 곳

		setTimeout(() => { //로더 확인용 지연함수
			this.setState({isLoading:false});
		}, 1000)
	}
	
	
	componentDidMount(){
		//컴포넌트 마운트 시 수행됨
		this.callCon1Data();
	}

	render() {
		const {isLoading, contract_Modal} = this.state;
		
    return (
		<div className="Member_Contract div_content">
			
            {/* 타이틀 */}
            <MDBCard>
				<MDBCardBody className="titleCardBody">
					<span id="content_title">계약정보 현황 </span><span style={{color:"red"}}>(권한&gt;회원사)</span>
				</MDBCardBody>
			</MDBCard>
			
            {/* 내용 */}
			<MDBCard className="mt-2">
				<MDBCardBody className="contentCardBody">
					
                    {/* 검색라인 */}
                    <form className="searchFrm form-inline">
						<div className="form-group ml-2">
                            <input type="text" className="form-control dateLabel" defaultValue="계약시작일" disabled/>
                        </div>
						
						<div className="form-group">
							<input type="date" className="form-control intputDate" />
						</div>
						
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>계약유형 전체</option>
								<option value="1">수기계약</option>
								<option value="2">전자계약</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>계약시장 전체</option>
								<option value="1">예관공</option>
								<option value="2">자체</option>
							</select>
						</div>
						<div className="form-group ml-2">
							<select className="browser-default custom-select">
								<option>계약형태 전체</option>
								<option value="1">자체현물구매(고정가)</option>
								<option value="2">자체현물구매(비고정가)</option>
								<option value="3">예관공 선정계약</option>
                                <option value="4">예관광</option>
                                <option value="5">예관공</option>
                                <option value="6">소형태양광계약</option>
							</select>
						</div>
						
						<div className="form-group ml-2">
							<input type="text" className="form-control" placeholder="계약번호 입력" />
						</div>
						
						<div className="searchFrm_btn">
							<MDBBtn color="blue-grey" className="btn_searchFrm_clear">초기화</MDBBtn>
							<MDBBtn color="mdb-color" className="btn_searchFrm_submit">조회</MDBBtn>
						</div>
					</form>
					
					{isLoading? (
						<div className="con1_loader">
							<div className="spinner-border" style={{width:"3rem", height:"3rem"}} role="status"></div>
						</div>
					) : (
						<>
							<MDBTable scrollY maxHeight="600px" striped bordered className="text-center mt-3 Contract_table">
								<MDBTableHead color="grey">
									<tr>
										<th>번호</th>
										<th>계약번호</th>
                                        <th>계약시작일</th>
                                        <th>계약종료일</th>
										<th>발전소명</th>
										<th>계약유형</th>
										<th>계약시장</th>
										<th>계약형태</th>
                                        <th>단위가격</th>
                                        <th>약정REC</th>
                                        <th>등록일시</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									<tr>
										<td>100</td>
										<td>
                                            <span style={{cursor:"pointer"}} onClick={this.contract_Modal_toggle}>123457</span>
                                        </td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전1</td>
                                        <td>수기계약</td>
                                        <td>자체</td>
                                        <td>자체현물구매(고정가)</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>99</td>
										<td><span style={{cursor:"pointer"}} onClick={this.contract_Modal_toggle}>123458</span></td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전2</td>
                                        <td>전자계약</td>
                                        <td>자체</td>
                                        <td>자체현물구매(비고정가)</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>98</td>
										<td><span style={{cursor:"pointer"}} onClick={this.contract_Modal_toggle}>123459</span></td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전3</td>
                                        <td>수기계약</td>
                                        <td>예관공</td>
                                        <td>예관공 선정계약</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>97</td>
										<td><span style={{cursor:"pointer"}} onClick={this.contract_Modal_toggle}>123455</span></td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전4</td>
                                        <td>전자계약</td>
                                        <td>예관공</td>
                                        <td>예관광</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr>
										<td>96</td>
										<td><span style={{cursor:"pointer"}} onClick={this.contract_Modal_toggle}>123454</span></td>
										<td>2020-01-01</td>
										<td>2030-12-31</td>
										<td>한국발전5</td>
                                        <td>전자계약</td>
                                        <td>예관공</td>
                                        <td>예관공 소형태양광계약</td>
                                        <td>8,000,000</td>
                                        <td>10,000</td>
                                        <td>2020-01-02 11:11:11</td>
									</tr>
                                    <tr><td>95</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>94</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>93</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>92</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>91</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>90</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>89</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>88</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>87</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>86</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>85</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>84</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>83</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>82</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>81</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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

							{/* 계약정보 모달 */}
							<MDBModal isOpen={contract_Modal} toggle={this.contract_Modal_toggle} size="fluid">
								<MDBModalHeader toggle={this.contract_Modal_toggle}>계약정보</MDBModalHeader>
								<MDBModalBody className="pt-1">
									<MDBTable responsive bordered className="Contract_info_table text-center mt-2">
										<MDBTableHead color="grey">
											<tr>
												<th>계약번호</th>
												<th>계약시작일</th>
												<th>계약종료일</th>
												<th>발전소명</th>
												<th>계약유형</th>
												<th>계약시장</th>
												<th>계약형태</th>
												<th>단위가격</th>
												<th>약정REC</th>
												<th>등록일시</th>
											</tr>
										</MDBTableHead>
										<MDBTableBody>
											<tr>
												<td>123457</td>
												<td>2020-01-01</td>
												<td>2030-12-31</td>
												<td>한국발전1</td>
												<td>수기계약</td>
												<td>자체</td>
												<td>자체현물구매(고정가)</td>
												<td>8,000,000</td>
												<td>10,000</td>
												<td>2020-01-02 11:11:11</td>
											</tr>
										</MDBTableBody>
									</MDBTable>
									<div className="d-flex flex-wrap align-content-center justify-content-center contractLoad">
										<div> &#8251; 계약서 보여줌 &#8251; </div>
									</div>
								</MDBModalBody>
							</MDBModal>
						</>
					)}
				</MDBCardBody>
			</MDBCard>
		</div>
    );
  }
}

export default Member_Contract;
