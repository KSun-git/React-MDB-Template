import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';

import Con1 from './pages/con1';
import Con2 from './pages/con2';
import Con3 from './pages/con3';
import Con4 from './pages/con4';
import Con5 from './pages/con5';
import Con6_Member from './pages/con6_Member';
import Con6_Notice from './pages/con6_Notice';
import Con6_Qna from './pages/con6_Qna';
import Con6_Faq from './pages/con6_Faq';
import Con6_Log from './pages/con6_Log';
import Con6_Common from './pages/con6_Common';
import Con6_Batch from './pages/con6_Batch';

import Member_REC from './pages/Member_REC';
import Member_REC_Info from './pages/Member_REC_Info';
import Company_REC from './pages/Company_REC';
import Company_REC_Info from './pages/Company_REC_Info';
import Admin_REC from './pages/Admin_REC';
import Admin_REC_Info from './pages/Admin_REC_Info';

import Member_Contract from './pages/Member_Contract';
import Admin_Contract from './pages/Admin_Contract';
import Admin_Contract_Info from './pages/Admin_Contract_Info';

import Member_PowerPlant from './pages/Member_PowerPlant';
import Member_PowerPlant_Info from './pages/Member_PowerPlant_Info';
import Admin_PowerPlant from './pages/Admin_PowerPlant';
import Admin_PowerPlant_Info from './pages/Admin_PowerPlant_Info';

import Member_Calculate from './pages/Member_Calculate';
import Company_Calculate from './pages/Company_Calculate';
import Admin_Calculate from './pages/Admin_Calculate';

import Member_Faq from './pages/Member_Faq';
import Company_Faq from './pages/Company_Faq';

class Routes extends React.Component {
  render() {
    return (
		<Switch>
			<Route exact path='/' component={DashboardPage} />
			<Route path='/dashboard' component={DashboardPage} />
			<Route path='/profile' component={ProfilePage} />
			<Route path='/tables' component={TablesPage} />
			<Route path='/maps' component={MapsPage} />
			<Route path='/404' component={NotFoundPage} />
			
			{/* 관리자_사이드 네비게이션 메뉴 */}
			<Route path='/con1' component={Admin_Contract} />
			<Route path='/con2' component={Con2} />
			{/*<Route path='/con3' component={Con3} />*/}
			<Route path='/con3' component={Member_REC} />
			<Route path='/con4' component={Con4} />
			<Route path='/con5' component={Con5} />
			<Route path='/con6/member' component={Con6_Member} />
			<Route path='/con6/notice' component={Con6_Notice} />
			<Route path='/con6/qna' component={Con6_Qna} />
			<Route path='/con6/faq' component={Con6_Faq} />
			<Route path='/con6/log' component={Con6_Log} />
			<Route path='/con6/common' component={Con6_Common} />
			<Route path='/con6/batch' component={Con6_Batch} />
			
			{/* 10.27_진행중_REC이행내역 */}
				{/* 1. 회원사 */}
				<Route path='/Member/REC' component={Member_REC} />
				<Route path='/Member/REC-Info/:id' component={Member_REC_Info} />
				
				{/* 2. 거래소 */}
				<Route path='/Company/REC' component={Company_REC} />
				<Route path='/Company/REC-Info/:id' component={Company_REC_Info} />

				{/* 3. 관리자 */}
				<Route path='/Admin/REC' component={Admin_REC} />
				<Route path='/Admin/REC-Info/:id' component={Admin_REC_Info} />

			{/* 10.29_진행중_계약정보 */}
				{/* 1.회원사 */}
				<Route path='/Member/Contract' component={Member_Contract} />

				{/* 3.관리자 */}
				<Route path='/Admin/Contract' component={Admin_Contract} />
				<Route path='/Admin/Contract-Info/:id' component={Admin_Contract_Info} />

			{/* 10.30_진행중_정산관리 */}
				{/* 1. 회원사 */}
				<Route path='/Member/Calc/:id' component={Member_Calculate} />

				{/* 2. 거래소 */}
				<Route path='/Company/Calc/:id' component={Company_Calculate} />

				{/* 3. 관리자 */}
				<Route path='/Admin/Calc/:id' component={Admin_Calculate} />

			{/* 10.30_진행중_자체발전소정보 */}
				{/* 1.회원사 */}
				<Route path='/Member/PowerPlant' component={Member_PowerPlant} />
				<Route path='/Member/PowerPlant-Info/:order' component={Member_PowerPlant_Info}/>

				{/* 3.관리자 */}
				<Route path='/Admin/PowerPlant' component={Admin_PowerPlant} />
				<Route path='/Admin/PowerPlant-Info/:order' component={Admin_PowerPlant_Info}/>

			{/* 11.02_FAQ */}
				{/* 1.회원사 */}
				<Route path='/Member/Faq' component={Member_Faq} />

				{/* 2.거래소 */}
				<Route path='/Company/Faq' component={Company_Faq} />
				
				{/* 3.관리자 */}
		</Switch>
    );
  }
}

export default Routes;
