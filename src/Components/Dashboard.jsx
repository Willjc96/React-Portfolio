import React from "react";
import computer from "../images/Computer_icon.png";
import hair from "../images/Hair.png";
import me from "../images/me.jpg";
import linkedin from "../images/LinkedIn_logo.png";
import github from "../images/Github_logo.png";
import email from "../images/Email.png";
import { ExternalLink } from "react-external-link";
import About from "./About";

export default function Dashboard() {
	return (
		<>
			<main>
				<section className="glass">
					<div className="dashboard">
						<div className="user">
							<div>
								<img src={me} alt="pictureOfMe" className="pictureOfMe" />
							</div>
							<h3>William Cook</h3>
							<p>Trainee Software Engineer</p>
						</div>
						<div className="links">
							<div className="link">
								<img src={hair} alt="Glasses icon" />
								<h2>
									<button>About Me</button>
								</h2>
							</div>
							<div className="link">
								<img src={computer} alt="Computer icon" />
								<h2>
									<button>Projects</button>
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
									<button>Contact Me</button>
								</h2>
							</div>
						</div>
						<div className="pro">
							<h2>Select a theme</h2>
							<div id="theme-options-wrapper">
								<div data-mode="blue" id="blue-mode" className="theme-dot"></div>
								<div data-mode="pink" id="pink-mode" className="theme-dot"></div>
								<div data-mode="red" id="red-mode" className="theme-dot"></div>
								<div data-mode="green" id="green-mode" className="theme-dot"></div>
							</div>
						</div>
					</div>
					<About />
				</section>
			</main>
			<div class="circle1"></div>
			<div class="circle2"></div>
		</>
	);
}
