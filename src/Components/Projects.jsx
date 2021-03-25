import React from "react";
import me from "../images/me.jpg";

export default function Projects() {
	return (
		<div class="projects">
			<div class="status">
				<h1>Projects (coming soon...)</h1>
				<input type="text" name="search" placeholder="Search..." />
			</div>
			<div class="scrollbarProject">
				<div class="cards">
					<div class="card">
						<img src={me} alt="Pic of project 1" />
						<div class="project-info">
							<h2>Project 1</h2>
							<div class="progress"></div>
						</div>
					</div>
					<div class="card">
						<img src={me} alt="Pic of project 2" />
						<div class="project-info">
							<h2>Project 2</h2>
							<div class="progress"></div>
						</div>
					</div>
					<div class="card">
						<img src={me} alt="Pic of project 3" />
						<div class="project-info">
							<h2>Project 3</h2>
							<div class="progress"></div>
						</div>
					</div>
					<div class="card">
						<img src={me} alt="Pic of project 4" />
						<div class="project-info">
							<h2>Project 4</h2>
							<div class="progress"></div>
						</div>
					</div>
					<div class="card">
						<img src={me} alt="Pic of project 5" />
						<div class="project-info">
							<h2>Project 5</h2>
							<div class="progress"></div>
						</div>
					</div>
					<div class="card">
						<img src={me} alt="Pic of project 6" />
						<div class="project-info">
							<h2>Project 6</h2>
							<div class="progress"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
