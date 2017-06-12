import React from 'react';

const Interests = () => (
	<div className="interests text-center">
		<h1 className="page-header">My Interests</h1>
		<div className="container">
			<div className="col-md-4 interest">
				<div className="running container-hover">
					<div>
						<img src="running1.png" className="interest-photo"/>
					</div>
					<div className="overlay">
						<p className="overlay-text">One of my favorite things is running on the lake front trail during the summer. I sometimes <strike>attempt to</strike> run races (no more than a 10K for me!)</p>
					</div>
				</div>
			</div>
			<div className="col-md-4 interest">
				<div className="travel container-hover">
					<div>
						<img src="travel1.png" className="interest-photo"/>
					</div>
					<div className="overlay">
						<p className="overlay-text">After studying abroad in Madrid, I definitely caught the travel bug! Post college, I spent 2 months backpacking in South East Asia and 3 months volunteering in South Africa.</p>
					</div>
				</div>
			</div>
			<div className="col-md-4 interest">
				<div className="scrapbooking container-hover">
					<img src="scrapbook1.png" className="interest-photo"/>
					<div className="overlay">
						<p className="overlay-text">I've always loved doing little art projects and scrapbooking has been a hobby of mine since I can remember.</p>
					</div>
				</div>
			</div>
			<div className="col-md-4 interest">
				<div className="games container-hover">
					<img src="games1.png" className="interest-photo"/>
					<div className="overlay">
						<p className="overlay-text">Name the game and I'm in! Just don't ask me to play poker, because you will regret it.</p>
					</div>
				</div>
			</div>
			<div className="col-md-4 interest">
				<div className="country container-hover">
					<img src="country2.png" className="interest-photo"/>
					<div className="overlay">
						<p className="overlay-text">Going to college in the middle of cornfields made me fall in love with country music. Now, I love going to country concerts in Chicago.</p>
					</div>
				</div>
			</div>
			<div className="col-md-4 interest">
				<div className="cubs container-hover">
					<img src="cubs1.png" className="interest-photo"/>
					<div className="overlay">
						<p className="overlay-text">Cubs games were always on at my house growing up. After years of stealing my brothers Cubs gear, I finally got some of my own. Time to soak up baseball season and head to Wrigley for some games.</p>
					</div>
				</div>
			</div>
		

	
			
		</div>
	</div>

)

export default Interests;