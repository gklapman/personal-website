import React from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import WorkExperience from '../components/WorkExperience'
import Interests from '../components/Interests'
import CodingProjects from '../components/CodingProjects'
import Contact from '../components/Contact'


 const Main = ({children}) => (
	<div id="main" className="container-fluid">
		<div id="back-photo">
			<NavBar/>
			{children}
			<Footer />
		</div>
	</div>
);

 export default Main;