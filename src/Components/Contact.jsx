import React from "react";

export default function Contact() {
	return (
		<div class="contact">
			<h1>Contact Me</h1>
			<form id="contact-form">
				<label>Name</label>
				<input class="input-field" type="text" name="name" />

				<label>Subject</label>
				<input class="input-field" type="text" name="subject" />

				<label>Email</label>
				<input class="input-field" type="text" name="email" />

				<label>Message</label>
				<textarea class="input-field" name="message"></textarea>

				<input id="submit-btn" type="submit" value="Send" />
			</form>
		</div>
	);
}
