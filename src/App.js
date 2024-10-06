import logo from './logo-facebook.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<h1>
					Toutle.mg sur{" "}
					<a href="https://web.facebook.com/profile.php?id=61552605450557">
						<img src={logo} alt="" />
					</a>{" "}
				</h1>
				<p>Une belle chose ici pour bientôt !</p>
			</header>
		</div>
	);
}

export default App;
