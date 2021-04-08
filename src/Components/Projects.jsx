import React from "react";
import me from "../images/me.jpg";
import Sudoku from "../images/Sudoku.png";
import Portfolio from "../images/Portfolio.png";
import News from "../images/News.png";
import CARD from "../images/CARD.png";
import { ExternalLink } from "react-external-link";

export default function Projects() {
	return (
		<div className="projects">
			<div className="status">
				<h1>Projects</h1>
				<input type="text" className="search" placeholder="Search..." />
			</div>
			<div className="scrollbarProject">
				<div className="cards">
					<div className="card">
						<h2>C-AR-D</h2>
						<div className="project-info">
							<ExternalLink href="https://www.youtube.com/watch?v=Ypr8xSdlLGg" target="_blank">
								<img src={CARD} className="proj4-img" alt="Pic of C-AR-D project" />
							</ExternalLink>
							<div className="description"></div>
						</div>
					</div>
					<div className="card">
						<h2>Portfolio Webpage</h2>
						<div className="project-info">
							<ExternalLink href="https://willjc96.github.io/" target="_blank">
								<img src={Portfolio} className="proj2-img" alt="Pic of Portfolio project" />
							</ExternalLink>
							<div className="description">
								The thing you're looking at right now! Check out the code to see how it works {<br></br>}- React.js {<br></br>}- CSS
							</div>
						</div>
					</div>
					<div className="card">
						<h2>Sudoku App</h2>
						<div className="project-info">
							<ExternalLink href="https://sudoku-masters.netlify.app/" target="_blank">
								<img src={Sudoku} className="proj1-img" alt="Pic of Sudoku project" />
							</ExternalLink>
							<div className="description">
								A sudoku game made using React {<br></br>}- Paired programming {<br></br>}- React.js {<br></br>} https://sudoku-masters.netlify.app/
							</div>
						</div>
					</div>
					<div className="card">
						<h2>NC News (Front End)</h2>
						<div className="project-info">
							<ExternalLink href="https://wills-nc-news.netlify.app/" target="_blank">
								<img src={News} className="proj3-img" alt="Pic of NC News project" />
							</ExternalLink>
							<div className="description"></div>
						</div>
					</div>
					<div className="card">
						<h2>Project Coming Soon!</h2>
						<div className="project-info">
							<img src={me} className="proj5-img" alt="Pic of project 5" />
							<div className="description"></div>
						</div>
					</div>
					<div className="card">
						<h2>Project Coming Soon!</h2>
						<div className="project-info">
							<img src={me} className="proj6-img" alt="Pic of project 6" />
							<div className="description"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
