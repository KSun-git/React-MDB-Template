import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import Footer from './components/Footer';
import SideNavigation from './components/sideNavigation';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	state = {
		kpx_role:"Admin"
	}

	changeRole = roleName => () =>{
		this.setState({
			kpx_role: roleName
		});
	}
	
	
	render() {
		const{kpx_role} = this.state;
		
		return (
	  		<Router>
				<div className="flexible-content">
					<TopNavigation nowRole={this.state.kpx_role} changeRole={this.changeRole}/>
					<SideNavigation nowRole={this.state.kpx_role} />
					<main id="mainContent" className="p-3">
						<Routes />
					</main>
					<Footer />
				</div>
			</Router>
    	);
  	}
}

export default App;
