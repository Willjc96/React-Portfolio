import React from "react";
import me from "../images/me.jpg";
import Sudoku from "../images/Sudoku.png";
import Portfolio from "../images/Portfolio.png";
import News from "../images/News.png";

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
						<h2>Sudoku App</h2>
						<div className="project-info">
							<img src={Sudoku} className="proj1-img" alt="Pic of Sudoku project" />
							<div className="description">
								A sudoku game made using React {<br></br>}- Paired programming {<br></br>}- React.js
							</div>
						</div>
					</div>
					<div className="card">
						<h2>Portfolio Webpage</h2>
						<div className="project-info">
							<img src={Portfolio} className="proj2-img" alt="Pic of project 2" />
							<div className="description">
								The thing you're looking at right now! Check out the code to see how it works {<br></br>}- React.js {<br></br>}- CSS
							</div>
						</div>
					</div>
					<div className="card">
						<h2>NC News (Front End)</h2>
						<div className="project-info">
							<img src={News} className="proj3-img" alt="Pic of project 3" />
							<div className="description"></div>
						</div>
					</div>
					<div className="card">
						<h2>Project 4</h2>
						<div className="project-info">
							<img src={me} className="proj4-img" alt="Pic of project 4" />
							<div className="description"></div>
						</div>
					</div>
					<div className="card">
						<h2>Project 5</h2>
						<div className="project-info">
							<img src={me} className="proj5-img" alt="Pic of project 5" />
							<div className="description"></div>
						</div>
					</div>
					<div className="card">
						<h2>Project 6</h2>
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
