import React from 'react';
import {Link} from 'react-router'

const Home = () => (
	<div className="home text-center">
		<div id="intro-holder">
			<img src='gabiwebsite.jpeg' id="photo"/>
			<div id="about-me">
				<p id="intro">Hi, I'm Gabi. I am a software developer excited to enter the workforce. I just finished at Fullstack Academy where I learned front end and back end programming. I built this website for you to get to know me and see some of my work. I would love to hear from you!</p>
				<div className="link-holder">
					<a className="profile-link" href="https://www.linkedin.com/in/gabrielle-klapman/">LinkedIn</a>
					<a className="profile-link" href="https://github.com/gklapman">Github</a>
					<a className="profile-link" href="GabrielleKlapmanResume.pdf">Resume</a>
				</div>
			</div>
		</div>
	</div>

)

export default Home;