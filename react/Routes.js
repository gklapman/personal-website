import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './containers/Main'
import WorkExperience from './components/WorkExperience'
import Interests from './components/Interests'
import CodingProjects from './components/CodingProjects'
import Contact from './components/Contact'
import Home from './components/Home'

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
			<Route path="codingprojects" component={CodingProjects}/>
			<Route path="workexperience" component={WorkExperience}/>
			<Route path="interests" component={Interests}/>
		</Route>
	</Router>
);

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
