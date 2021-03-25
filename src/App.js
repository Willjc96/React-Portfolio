import "./App.css";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
	return (
		<div className="App">
			<Dashboard />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
