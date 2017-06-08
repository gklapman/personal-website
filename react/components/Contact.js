import React from 'react';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			name: '',
			email: '',
			message: '',
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		let value = event.target.value
		let name = event.target.name 
		console.log('name and value ', name, value)
	}
	render(){
		return (
			<div className="contact">
				<h3>Please reach out to me at gabiklapman@gmail.com</h3>
			
			{/*	<div className="form">
					<form action="mailto:gabiklapman@gmail.com" method="post" encType="text/plain">
						<div className="form-group">
						<label>Name</label>
							<input
								name="name"
								type="text"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								name="email"
								type="email"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Message</label>
							<textarea
								name="message"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>
						<button type='sumbit'>Send</button>
					</form>
				</div>*/}
			</div>
		)
	}	

}

export default Contact;