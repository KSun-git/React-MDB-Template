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

const TopNavigation = () => {
	const [isHover, setIsHover] = useState(false);
	
    return (
        <div className="sidebar-fixed position-fixed" 
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
            <MDBListGroup className={isHover ? "list-group-flush sideNav_group sideNav_extend" : "list-group-flush sideNav_group sideNav_reduction"} >
				<NavLink exact={true} to="/">
                    <MDBListGroupItem className="sideNav_Logo">
                        <img id="topNavLogo" src={Logo_kpx} alt="logo_kpx" />
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/con1">
                    <MDBListGroupItem className="sideNav_menu sideNav_dash first_menu">
						<img src={Menu_energy} alt="Menu_energy" />
						<span className="sideNav_menu_text">계약정보</span>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/con2" >
                    <MDBListGroupItem className="sideNav_menu sideNav_energy">
						<img src={Menu_service} alt="Menu_service" />
						<span className="sideNav_menu_text">회원사정보</span>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/con3" >
                    <MDBListGroupItem className="sideNav_menu sideNav_report">
						<img src={Menu_sulbi} alt="Menu_sulbi" />
						<span className="sideNav_menu_text">REC이행내역</span>
                    </MDBListGroupItem>
                </NavLink>
				<NavLink to="/con4" >
                    <MDBListGroupItem className="sideNav_menu sideNav_report">
						<img src={Menu_history} alt="Menu_history" />
						<span className="sideNav_menu_text">정산관리</span>
                    </MDBListGroupItem>
                </NavLink>
				<NavLink to="/con5" >
                    <MDBListGroupItem className="sideNav_menu sideNav_report">
						<img src={Menu_pre} alt="Menu_pre" />
						<span className="sideNav_menu_text">분석통계</span>
                    </MDBListGroupItem>
                </NavLink>
				
				
                    <MDBListGroupItem className="sideNav_menu sideNav_config">
                        <img src={Menu_config} alt="Menu_config" className="float-left"/>
						<span className="sideNav_menu_text">
							시스템관리
							<ul id="sideNav_config_innerLink" className="pl-4">
								<NavLink to="/con6/member" ><li>사용자관리</li></NavLink>
								<NavLink to="/con6/notice" ><li>공지사항</li></NavLink>
								<NavLink to="/con6/qna" ><li>Q&A</li></NavLink>
								<NavLink to="/con6/faq" ><li>FAQ</li></NavLink>
								<NavLink to="/con6/log" ><li>로그기록</li></NavLink>
								<NavLink to="/con6/common" ><li>공통코드</li></NavLink>
								<NavLink to="/con6/batch" ><li>배치관리</li></NavLink>
							</ul>
						</span>
                    </MDBListGroupItem>
                
				
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;