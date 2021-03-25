import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
	return (
		<div className="App">
			<Home />
			<Dashboard />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
