import React from 'react';
import {Link} from 'react-router'

const Home = () => (
	<div className="home text-center">
		<div id="intro-holder">
			<img src='gabiwebsite.jpeg' id="photo"/>
			<div id="about-me">
				<p id="intro">Hi, I'm Gabi. I am a software developer excited to enter the workforce. I just finished at Fullstack Academy where I learned front end and back end programming. I built this website for you to get to know me and see some of my work.</p>
				<div id="technologies"></div>
				<h5>Technologies</h5>
				<p>Proficient: Javascript, HTML, CSS, React, Express, Sequelize, Node.js, Redux, Postgres <br/>
				Knowledgeable: React Native, JQuery, Bootstrap, Amazon Web Services S3, Google-Map-React, Git, Passport.js, Socket.io</p>
				<div className="link-holder">
					<a className="profile-link" href="https://www.linkedin.com/in/gabrielle-klapman/">LinkedIn</a>
					<a className="profile-link" href="https://github.com/gklapman">GitHub</a>
					<a className="profile-link" href="GabrielleKlapmanResume.pdf">Resume</a>
				</div>
				<h5 className="contact">Contact Info: gabiklapman@gmail.com</h5>
			</div>
		</div>
	</div>

)

export default Home;