import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import Con1 from './pages/con1';

import Member_Contract from './pages/Member_Contract';
import Member_PowerPlant from './pages/Member_PowerPlant';
import Member_PowerPlant_Info from './pages/Member_PowerPlant_Info';
import Member_REC from './pages/Member_REC';
import Member_REC_Info from './pages/Member_REC_Info';
import Member_Calculate from './pages/Member_Calculate';
import Member_Notice from './pages/Member_Notice';
import Member_Qna from './pages/Member_Qna';
import Member_Faq from './pages/Member_Faq';

import Company_MemberInfo from './pages/Company_MemberInfo';
import Company_REC from './pages/Company_REC';
import Company_REC_Info from './pages/Company_REC_Info';
import Company_Calculate from './pages/Company_Calculate';
import Company_Analysis from './pages/Company_Analysis';
import Company_Notice from './pages/Company_Notice';
import Company_Qna from './pages/Company_Qna';
import Company_Faq from './pages/Company_Faq';
import Company_Log from './pages/Company_Log';

import Admin_Contract from './pages/Admin_Contract';
import Admin_Contract_Info from './pages/Admin_Contract_Info';
import Admin_PowerPlant from './pages/Admin_PowerPlant';
import Admin_PowerPlant_Info from './pages/Admin_PowerPlant_Info';
import Admin_MemberInfo from './pages/Admin_MemberInfo';
import Admin_REC from './pages/Admin_REC';
import Admin_REC_Info from './pages/Admin_REC_Info';
import Admin_Calculate from './pages/Admin_Calculate';
import Admin_CalculateInfo from './pages/Admin_CalculateInfo';
import Admin_MemberConfig from './pages/Admin_MemberConfig';
import Admin_Common from './pages/Admin_Common';
import Admin_Batch from './pages/Admin_Batch';



class Routes extends React.Component {
  render() {
    return (
		<Switch>
			<Route exact path='/' component={DashboardPage} />
			<Route path='/dashboard' component={DashboardPage} />
			<Route path='/404' component={NotFoundPage} />

			{/* 계약정보 */}
				{/* 회원사 */}
				<Route path='/Member/Contract' component={Member_Contract} />
				{/* 관리자 */}
				<Route path='/Admin/Contract' component={Admin_Contract} />
				<Route path='/Admin/Contract-Info/:id' component={Admin_Contract_Info} />

			{/* 자체발전소 */}
				{/* 회원사 */}
				<Route path='/Member/PowerPlant' component={Member_PowerPlant} />
				<Route path='/Member/PowerPlant-Info/:order' component={Member_PowerPlant_Info}/>
				{/* 관리자 */}
				<Route path='/Admin/PowerPlant' component={Admin_PowerPlant} />
				<Route path='/Admin/PowerPlant-Info/:order' component={Admin_PowerPlant_Info}/>
			
			{/* 회원사정보 */}
				{/* 거래소 */}
				<Route path='/Company/MemberInfo' component={Company_MemberInfo} />
				{/* 관리자 */}
				<Route path='/Admin/MemberInfo' component={Admin_MemberInfo} />

			{/* REC이행내역 */}
				{/* 회원사 */}
				<Route path='/Member/REC' component={Member_REC} />
				<Route path='/Member/REC-Info/:id' component={Member_REC_Info} />
				{/* 거래소 */}
				<Route path='/Company/REC' component={Company_REC} />
				<Route path='/Company/REC-Info/:id' component={Company_REC_Info} />
				{/* 관리자 */}
				<Route path='/Admin/REC' component={Admin_REC} />
				<Route path='/Admin/REC-Info/:id' component={Admin_REC_Info} />

			{/* 정산관리 */}
				{/* 회원사 */}
				<Route path='/Member/Calc/:id' component={Member_Calculate} />
				{/* 거래소 */}
				<Route path='/Company/Calc/:id' component={Company_Calculate} />
				{/* 관리자 */}
				<Route path='/Admin/Calc/:id' component={Admin_Calculate} />

			{/* 정산정보관리 */}
				{/* 관리자 */}
				<Route path='/Admin/CalcInfo/:id' component={Admin_CalculateInfo} />

			{/* 분석통계 */}
				{/* 거래소 */}
				<Route path='/Company/Analysis/:id' component={Company_Analysis} />
				{/* 관리자(거래소와 동일) */}
				<Route path='/Admin/Analysis/:id' component={Company_Analysis} />
			
			{/* 사용자관리 */}
				{/* 관리자 */}
				<Route path='/Admin/MemberConfig' component={Admin_MemberConfig} />

			{/* 공지사항 */}
				{/* 회원사 */}
				<Route path='/Member/Notice' component={Member_Notice} />
				{/* 거래소 */}
				<Route path='/Company/Notice' component={Company_Notice} />
				{/* 관리자(거래소와 동일) */}
				<Route path='/Admin/Notice' component={Company_Notice} />
			
			{/* QnA */}
				{/* 회원사 */}
				<Route path='/Member/Qna' component={Member_Qna} />
				{/* 거래소 */}
				<Route path='/Company/Qna' component={Company_Qna} />
				{/* 관리자(거래소와 동일) */}
				<Route path='/Admin/Qna' component={Company_Qna} />

			{/* FAQ */}
				{/* 회원사 */}
				<Route path='/Member/Faq' component={Member_Faq} />
				{/* 거래소 */}
				<Route path='/Company/Faq' component={Company_Faq} />
				{/* 관리자(거래소와 동일) */}
				<Route path='/Admin/Faq' component={Company_Faq} />
			
			{/* 로그조회 */}
				{/* 회원사(거래소와 동일) */}
				<Route path='/Member/Log' component={Company_Log} />
				{/* 거래소 */}
				<Route path='/Company/Log' component={Company_Log} />
				{/* 관리자(거래소와 동일) */}
				<Route path='/Admin/Log' component={Company_Log} />
				
			{/* 공통코드관리 */}
				{/* 관리자 */}
				<Route path='/Admin/Common' component={Admin_Common} />
			
			{/* 배치관리 */}
				{/* 관리자*/}
				<Route path='/Admin/Batch' component={Admin_Batch} />
				
		</Switch>
    );
  }
}

export default Routes;
