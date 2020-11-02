import React, { useState } from 'react';
import { MDBListGroup, MDBListGroupItem} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './sideNavigation.css';
import Logo_kpx from '../assets/logo_kpx_none.png';
import Menu_energy from '../assets/menu_energy.png';
import Menu_config from '../assets/menu_config.png';
import Menu_service from '../assets/menu_service.png';
import Menu_sulbi from '../assets/menu_sulbi.png';
import Menu_history from '../assets/menu_history.png';
import Menu_pre from '../assets/menu_pre.png';
import Menu_dash from '../assets/menu_dash.png';
import Menu_report from '../assets/menu_report.png';

const TopNavigation = (props) => {
    const [isHover, setIsHover] = useState(false);
    
    return (
        <div className="sidebar-fixed position-fixed kpx_sidebar" 
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
            
            <MDBListGroup className={isHover ? "list-group-flush sideNav_group sideNav_extend" : "list-group-flush sideNav_group sideNav_reduction"} >
				
                <NavLink exact={true} to="/">
                    <MDBListGroupItem className="sideNav_Logo">
                        <img id="topNavLogo" src={Logo_kpx} alt="logo_kpx" />
                    </MDBListGroupItem>
                </NavLink>
                
                {//회원사 사이드 네비게이션
                    props.nowRole==="Member" && 
                    <>
                        <NavLink to={`/${props.nowRole}/Contract`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_dash first_menu">
                                <img src={Menu_energy} alt="Menu_energy" />
                                <span className="sideNav_menu_text">계약정보 현황</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <NavLink to={`/${props.nowRole}/PowerPlant`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_energy">
                                <img src={Menu_dash} alt="Menu_dash" />
                                <span className="sideNav_menu_text">자체발전소 정보</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <NavLink to={`/${props.nowRole}/REC`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_report">
                                <img src={Menu_sulbi} alt="Menu_sulbi" />
                                <span className="sideNav_menu_text">REC이행내역</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_report} alt="Menu_history" className="float-left"/>
                            <span className="sideNav_menu_text">
                                정산관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Calc/1`}><li>중간정산승인처리</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Calc/2`}><li>연간정산내역조회</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>

                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_config} alt="Menu_config" className="float-left"/>
                            <span className="sideNav_menu_text">
                                시스템관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Notice`}><li>공지사항</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Qna`}><li>Q&#38;A</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Faq`}><li>FAQ</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Log`}><li>로그조회</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                    </>
                }

                {//거래소 사이드 네비게이션
                    props.nowRole==="Company" && 
                    <>
                        <NavLink to={`/${props.nowRole}/MemberInfo`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_energy first_menu">
                                <img src={Menu_service} alt="Menu_service" />
                                <span className="sideNav_menu_text">회원사정보</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <NavLink to={`/${props.nowRole}/REC`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_report">
                                <img src={Menu_sulbi} alt="Menu_sulbi" />
                                <span className="sideNav_menu_text">REC이행내역 검토관리</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_report} alt="Menu_history" className="float-left"/>
                            <span className="sideNav_menu_text">
                                정산관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Calc/1`}><li>중간정산승인처리</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Calc/2`}><li>연간정산내역조회</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Calc/3`}><li>지급관리</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_pre} alt="Menu_pre" className="float-left"/>
                            <span className="sideNav_menu_text">
                                분석통계
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Analysis`}><li>정산가격분석</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Analysis`}><li>현물가격분석</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_config} alt="Menu_config" className="float-left"/>
                            <span className="sideNav_menu_text">
                                시스템관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Notice`}><li>공지사항</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Qna`}><li>Q&#38;A</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Faq`}><li>FAQ</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Log`}><li>로그조회</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                    </>
                }

                {//관리자 사이드 네비게이션
                    props.nowRole==="Admin" && 
                    <>
                        <NavLink to={`/${props.nowRole}/Contract`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_dash first_menu">
                                <img src={Menu_energy} alt="Menu_energy" />
                                <span className="sideNav_menu_text">계약정보 관리</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <NavLink to={`/${props.nowRole}/PowerPlant`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_energy">
                                <img src={Menu_dash} alt="Menu_dash" />
                                <span className="sideNav_menu_text">자체발전소 정보</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <NavLink to={`/${props.nowRole}/MemberInfo`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_energy">
                                <img src={Menu_service} alt="Menu_service" />
                                <span className="sideNav_menu_text">회원사정보 관리</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <NavLink to={`/${props.nowRole}/REC`}>
                            <MDBListGroupItem className="sideNav_menu sideNav_report">
                                <img src={Menu_sulbi} alt="Menu_sulbi" />
                                <span className="sideNav_menu_text">REC이행내역 관리</span>
                            </MDBListGroupItem>
                        </NavLink>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_report} alt="Menu_history" className="float-left"/>
                            <span className="sideNav_menu_text">
                                정산관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Calc/1`}><li>중간정산승인처리</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Calc/2`}><li>연간정산내역조회</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Calc/3`}><li>지급관리</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_history} alt="Menu_history" className="float-left"/>
                            <span className="sideNav_menu_text">
                                정산정보관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/CalcInfo`}><li>중간정산단가 관리</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/CalcInfo`}><li>연간정산정보 관리</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_pre} alt="Menu_pre" className="float-left"/>
                            <span className="sideNav_menu_text">
                                분석통계
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/Analysis`}><li>정산가격분석</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Analysis`}><li>현물가격분석</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                        
                        <MDBListGroupItem className="sideNav_menu sideNav_config">
                            <img src={Menu_config} alt="Menu_config" className="float-left"/>
                            <span className="sideNav_menu_text">
                                시스템관리
                                <ul id="sideNav_config_innerLink" className="pl-4">
                                    <NavLink to={`/${props.nowRole}/MemberConfig`}><li>사용자관리</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Notice`}><li>공지사항</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Qna`}><li>Q&#38;A</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Faq`}><li>FAQ</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Log`}><li>로그조회</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Common`}><li>공통코드관리</li></NavLink>
                                    <NavLink to={`/${props.nowRole}/Batch`}><li>배치관리</li></NavLink>
                                </ul>
                            </span>
                        </MDBListGroupItem>
                    </>
                }

            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;