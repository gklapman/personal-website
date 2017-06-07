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
				<h2 className="page-header">Coding Projects</h2>
				<div className="project">
					<div className="project-image">
						{this.state.prImage > 0 ? <button className="arrow" onClick={this.leftArrow} value="prImage">&#10094;</button> : <button className="hidden-arrow">&#10094;</button>}
						<img src={prImages[this.state.prImage]} className="pr-image"/>
						{this.state.prImage < 3 ? <button className="arrow" onClick={this.rightArrow} value="prImage">&#10095;</button> : null}
					</div>
					<div className="project-explanation">
						<h4 className="project-title">Phantom Racer</h4>
						<p className="project-description">This is an explanation of Phantom Racer <br/> Here's the video to watch the presentation <br/> github: example.git.com</p>
					</div>
				</div>
				<div className="project">
					<div className="project-explanation">
						<h4 className="project-title">TrvlPage</h4>
						<p className="project-description">This is an explanation of TrvlPage <br/> Here's the video to watch the presentation <br/> github: example.git.com</p>
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
						<p className="project-description">This is an explanation of MemesRUs <br/> Here's the video to watch the presentation <br/> github: example.git.com</p>
					</div>
				</div>
			</div>
			)
	}
}

export default CodingProjects;