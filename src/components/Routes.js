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
			<Route path='/con1' component={Con1} />
			<Route path='/con2' component={Con2} />
			<Route path='/con3' component={Con3} />
			<Route path='/con4' component={Con4} />
			<Route path='/con5' component={Con5} />
			<Route path='/con6/member' component={Con6_Member} />
			<Route path='/con6/notice' component={Con6_Notice} />
			<Route path='/con6/qna' component={Con6_Qna} />
			<Route path='/con6/faq' component={Con6_Faq} />
			<Route path='/con6/log' component={Con6_Log} />
			<Route path='/con6/common' component={Con6_Common} />
			<Route path='/con6/batch' component={Con6_Batch} />
			
		</Switch>
    );
  }
}

export default Routes;
