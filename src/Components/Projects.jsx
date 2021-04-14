import React from "react";
import me from "../images/me.jpg";
import Sudoku from "../images/Sudoku.png";
import Portfolio from "../images/Portfolio.png";
import News from "../images/News.png";
import NewsBE from "../images/NewsBE.png";
import CARD from "../images/CARD.png";
import { ExternalLink } from "react-external-link";

export default function Projects() {
	return (
		<div className="projects">
			<div className="status">
				<h1>Projects</h1>
				{/* <input type="text" className="search" placeholder="Search..." /> */}
			</div>
			<div className="scrollbarProject">
				<div className="cards">
					<div className="card">
						<h2>C-AR-D</h2>
						<div className="project-info">
							<ExternalLink href="https://www.youtube.com/watch?v=Ypr8xSdlLGg" target="_blank">
								<img src={CARD} className="proj4-img" alt="Pic of C-AR-D project" />
							</ExternalLink>
							<div className="description">
								My final project built during my time on the Northcoders bootcamp.{<br></br>} Skills and Technologies: {<br></br>} - React {<br></br>}{" "}
								- React Native {<br></br>} - Expo {<br></br>} - A-Frame {<br></br>} - Group Working {<br></br>} - Trello
							</div>
						</div>
					</div>
					<div className="card">
						<h2>Portfolio Webpage</h2>
						<div className="project-info">
							<ExternalLink href="https://willjc96.github.io/React-Portfolio/">
								<img src={Portfolio} className="proj2-img" alt="Pic of Portfolio project" />
							</ExternalLink>
							<div className="description">
								The thing you're looking at right now! Check out my Github to see how it works.{<br></br>} Skills and Technologies: {<br></br>} -
								React {<br></br>} - CSS
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
								A sudoku game made using React. {<br></br>} Skills and Technologies: {<br></br>} - React {<br></br>} - React hooks {<br></br>} -
								Styled Components {<br></br>} - Paired programming
							</div>
						</div>
					</div>
					<div className="card">
						<h2>NC News (Front End)</h2>
						<div className="project-info">
							<ExternalLink href="https://wills-nc-news.netlify.app/" target="_blank">
								<img src={News} className="proj3-img" alt="Pic of NC News project" />
							</ExternalLink>
							<div className="description">
								A news article website which makes asynchronous API calls to a server. {<br></br>} Skills and Technologies: {<br></br>} - React
								{<br></br>} - Reach Router {<br></br>} - CSS
							</div>
						</div>
					</div>
					<div className="card">
						<h2>NC News API</h2>
						<div className="project-info">
							<ExternalLink href="https://wills-nc-news-api.herokuapp.com/api" target="_blank">
								<img src={NewsBE} className="proj5-img" alt="Pic of NC News Back End project" />
							</ExternalLink>
							<div className="description">
								An API that uses a PSQL database for retrieving data by using specific endpoints. {<br></br>} Skills and Technologies: {<br></br>} -
								PostgreSQL {<br></br>} - Knex {<br></br>} - Express {<br></br>} - Jest
							</div>
						</div>
					</div>
					<div className="card">
						<h2>More Projects Coming Soon!</h2>
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
