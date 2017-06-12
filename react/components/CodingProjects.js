import React from 'react';

class CodingProjects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prImage: 0,
			trvlImage: 0,
			memeImage: 0,

		}

		this.leftArrow = this.leftArrow.bind(this)
		this.rightArrow = this.rightArrow.bind(this)
		
	}

	leftArrow(event){
		let project = event.target.value
		let oldVal = this.state[project]
		this.setState({
			[project]: oldVal - 1
		})
	}

	rightArrow(event){
		let project = event.target.value
		let oldVal = this.state[project]
		this.setState({
			[project]: oldVal + 1
		})
	}

	render(){
		const prImages = ["pr1.png", "pr2.png", "pr3.png", "pr4.png",]
		const trvlImages = ["tp1.png", "tp2.png", "tp3.png"]
		const memeImages = ["mru1.png", "mru2.png"]

		return (
			<div className="coding-projects">
				<h1 className="page-header">Coding Projects</h1>
				<div className="project">
					<div className="project-image">
						{this.state.prImage > 0 ? <button className="arrow" onClick={this.leftArrow} value="prImage">&#10094;</button> : <button className="hidden-arrow">&#10094;</button>}
						<img src={prImages[this.state.prImage]} className="pr-image"/>
						{this.state.prImage < 3 ? <button className="arrow" onClick={this.rightArrow} value="prImage">&#10095;</button> : null}
					</div>
					<div className="project-explanation">
						<h3 className="project-title">Phantom Racer</h3>
						<p className="project-description">A React Native fitness application that enables users to create routes and race against other users’ "phantom" past routes</p>
						<div className="project-links">
							<a href="https://github.com/gklapman/RunningAppFrontEnd" className="project-link">GitHub (Front End)</a>
							<a href="https://github.com/RunsWithBackpack/RunningAppBackEnd" className="project-link">GitHub (Back End)</a>
							<a href="https://www.youtube.com/watch?v=z9-j5N0Bfwk&feature=youtu.be" className="project-link">Presentation Video</a>
						</div>
						<div className="project-more">
							<p className="project-details">
							• Allows users to make a new route to submit to the database for other users to run. The app, running in the foreground or background, will track a users location as well as other metrics. <br/><br/>
							• Users can have a route automatically generated for then. By choosing a start, end, and distance, two custom algorithms will generate a route minimizing street crossings for a better running experience. <br/><br/>
							• Users can race against other users past routes. To ensure they are following the correct route, there are checkpoints which are geofenced to compare to a stream of the current runner's data location points. Runners can also see a simultaneous representation of the phantom racer's location at that time providing them with motivational alerts when they are in close proximity. <br/><br/>
							• Enables users to view metrics of their run such as their speed and heart rate (if they are connected to fitbit) at any specific point of the run. Also allows them to replay the run at various speeds. <br/><br/>
							</p>
						</div>

					</div>
				</div>
				<div className="project">
					<div className="project-explanation">
						<h4 className="project-title">TrvlPage</h4>
						<p className="project-description">A social media web-app for recording a user’s travel locations, experiences, and reviews </p>
						<div className="project-links">
							<a href="https://github.com/gklapman/TravelApp" className="project-link">GitHub (Front End)</a>
							<a href="http://www.youtube.com/watch/RfPrqTlj6U8" className="project-link">Presentation Video</a>
						</div>
						<div className="project-more">
							<p className="project-details">
							• Users can create an account, upload profile pictures, search for other users, and add other users as friends ('trvl buddies')<br/><br/>
							• Users have the ability to pin their travel locations on a map view. Each location has it's own page where users can upload photos and add reviews. <br/><br/>
							• Users receive notifications when another user has added them as a 'trvl buddy'. 
							</p>
						</div>
					</div>
					<div className="project-image">
						{this.state.trvlImage > 0 ? <button className="arrow" onClick={this.leftArrow} value="trvlImage">&#10094;</button> : <button className="hidden-arrow">&#10094;</button>}
						<img src={trvlImages[this.state.trvlImage]} className="web-image"/>
						{this.state.trvlImage < trvlImages.length -1 ? <button className="arrow" onClick={this.rightArrow} value="trvlImage">&#10095;</button> : null}
					</div>
				
				</div>
				<div className="project">
					<div className="project-image">
						{this.state.memeImage > 0 ? <button className="arrow" onClick={this.leftArrow} value="memeImage">&#10094;</button> : <button className="hidden-arrow">&#10094;</button>}
						<img src={memeImages[this.state.memeImage]} className="web-image"/>
						{this.state.memeImage < memeImages.length -1 ? <button className="arrow" onClick={this.rightArrow} value="memeImage">&#10095;</button> : null}
					</div>
					<div className="project-explanation">
						<h4 className="project-title">MemesRUs</h4>
						<p className="project-description">An e-commerce platform allowing users to shop for and purchase Memes as a guest or registered user</p>

						<div className="project-links">
							<a href="https://github.com/gklapman/Grace-Shopper" className="project-link">GitHub</a>
						</div>
						<div className="project-more">
							<p className="project-details">
							• Users can view all available memes, filter by category, or search for speific memes<br/><br/>
							• Users can create an account or shop as a guest. If a user shops as a guest, they have the ability to create an account later and the items in their cart will remain. <br/><br/>
							• Previous orders can be viewed by account holding users. 
							</p>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default CodingProjects;