import React from 'react';
import {Link} from 'react-router'

const NavBar = () => (
	<nav className="navigation navbar-default">
	
				<div className="heading">
					<h1 className="navbar-item name">Gabi Klapman</h1>
					<h3 className="navbar-item title">Software Developer</h3>
				</div>
				<ul className="nav navbar-nav navbar-item links">
					<li>
						<Link to='/' activeClassName="active"> <span className="text">Home</span></Link>
					</li>
					<li>
						<Link to='/codingprojects'> <span className="text">Coding Projects</span></Link>
					</li>
					<li>
						<Link to='/workexperience'> <span className="text">Work Experience</span></Link>
					</li>
					<li>
						<Link to='/interests'> <span className="text">Interests</span></Link>
					</li>
				
					
				</ul>
		</nav>

)

export default NavBar;