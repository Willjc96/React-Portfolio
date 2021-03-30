import React from "react";

export default function Contact() {
	return (
		<div className="contact">
			<h1>Contact Me</h1>
			<form id="contact-form">
				<label>Name</label>
				<input className="input-field" type="text" name="name" />

				<label>Subject</label>
				<input className="input-field" type="text" name="subject" />

				<label>Email</label>
				<input className="input-field" type="text" name="email" />

				<label>Message</label>
				<textarea className="input-field" name="message"></textarea>

				<input id="submit-btn" type="submit" value="Send" />
			</form>
		</div>
	);
}
