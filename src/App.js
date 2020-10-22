import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import Footer from './components/Footer';
import SideNavigation from './components/sideNavigation';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
		<Router>
			<div className="flexible-content">
				<TopNavigation />
				<SideNavigation />
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
