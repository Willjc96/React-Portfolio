import React, { useState } from "react";
import computer from "../images/Computer_icon.png";
import hair from "../images/Hair.png";
import me from "../images/me.jpg";
import linkedin from "../images/LinkedIn_logo.png";
import github from "../images/Github_logo.png";
import email from "../images/Email.png";
import { ExternalLink } from "react-external-link";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Dashboard() {
	const [about, setAbout] = useState(true);
	const [projects, setProjects] = useState(false);
	const [contact, setContact] = useState(false);
	const [blueButton, setBlue] = useState(true);
	const [redButton, setRed] = useState(false);
	const [greenButton, setGreen] = useState(false);
	const [pinkButton, setPink] = useState(false);

	const aboutClick = () => {
		setAbout(true);
		setProjects(false);
		setContact(false);
	};

	const projectsClick = () => {
		setProjects(true);
		setAbout(false);
		setContact(false);
	};
	const contactClick = () => {
		setContact(true);
		setAbout(false);
		setProjects(false);
	};

	const pageSelect = () => {
		if (about) {
			return <About />;
		} else if (projects) {
			return <Projects />;
		} else if (contact) {
			return <Contact />;
		}
	};

	const blueClick = () => {
		setBlue(true);
		setRed(false);
		setGreen(false);
		setPink(false);
	};
	const redClick = () => {
		setRed(true);
		setBlue(false);
		setGreen(false);
		setPink(false);
	};
	const greenClick = () => {
		setGreen(true);
		setRed(false);
		setBlue(false);
		setPink(false);
	};
	const pinkClick = () => {
		setPink(true);
		setRed(false);
		setGreen(false);
		setBlue(false);
	};

	const themeSelect = () => {
		if (blueButton) {
			return "proBlue";
		}
		if (redButton) {
			return "proRed";
		}
		if (greenButton) {
			return "proGreen";
		}
		if (pinkButton) {
			return "proPink";
		}
	};
	const backgroundThemeSelect = () => {
		if (blueButton) {
			return "blue";
		}
		if (redButton) {
			return "red";
		}
		if (greenButton) {
			return "green";
		}
		if (pinkButton) {
			return "pink";
		}
	};

	return (
		<>
			<main className={backgroundThemeSelect()}>
				<section className="glass">
					<div className="dashboard">
						<div>
							<img src={me} alt="pictureOfMe" className="pictureOfMe" />
						</div>
						<h3>William Cook</h3>
						<p>Trainee Software Engineer</p>
						<div className="links">
							<div className="link">
								<img src={hair} alt="Glasses icon" />
								<h2>
									<button
										className="aboutBtn"
										onClick={() => {
											aboutClick();
										}}
									>
										About Me
									</button>
								</h2>
							</div>
							<div className="link">
								<img src={computer} alt="Computer icon" />
								<h2>
									<button
										className="projectBtn"
										onClick={() => {
											projectsClick();
										}}
									>
										Projects
									</button>
								</h2>
							</div>
							<div className="link">
								<img src={linkedin} alt="LinkedIn icon" width="2" />
								<h2>
									<ExternalLink href="https://www.linkedin.com/in/william-cook-b2700a1b5/" target="_blank">
										LinkedIn
									</ExternalLink>
								</h2>
							</div>
							<div className="link">
								<img src={github} alt="Github icon" />
								<h2>
									<ExternalLink href="https://github.com/Willjc96" target="_blank">
										Github
									</ExternalLink>
								</h2>
							</div>
							<div className="link">
								<img src={email} alt="Email icon" />
								<h2>
									<button
										className="contactBtn"
										onClick={() => {
											contactClick();
										}}
									>
										Contact Me
									</button>
								</h2>
							</div>
						</div>
						<div className={themeSelect()}>
							<h2>Select a theme</h2>
							<div id="theme-options-wrapper">
								<div
									data-mode="blue"
									id="blue-mode"
									className="theme-dot"
									onClick={() => {
										blueClick();
									}}
								></div>
								<div
									data-mode="pink"
									id="pink-mode"
									className="theme-dot"
									onClick={() => {
										pinkClick();
									}}
								></div>
								<div
									data-mode="red"
									id="red-mode"
									className="theme-dot"
									onClick={() => {
										redClick();
									}}
								></div>
								<div
									data-mode="green"
									id="green-mode"
									className="theme-dot"
									onClick={() => {
										greenClick();
									}}
								></div>
							</div>
						</div>
					</div>
					{pageSelect()}
				</section>
			</main>
			<div className="circle1"></div>
			<div className="circle2"></div>
		</>
	);
}
