import logo from './logo-facebook.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<div>
					<h2>🚀 Toutela arrive bientôt ! 🚀 </h2>
					<p>
						Passionnées de mode et de luxe, préparez-vous à découvrir{" "}
						<b>Toutela</b>, votre nouvelle boutique en ligne dédiée à la{" "}
						<b>mode féminine de seconde main européenne</b>. Retrouvez des
						vêtements et chaussures de luxe d’occasion, soigneusement
						sélectionnés et aussi beaux que neufs ! 👠👗✨
					</p>
					<p>
						<b>Notre site est en construction</b> et sera bientôt prêt à vous
						offrir une expérience shopping exceptionnelle. En attendant, restez
						connectées avec nous sur Facebook pour ne rien manquer des
						nouveautés, offres exclusives, et du lancement officiel !
					</p>
					<a className='fb' href="https://web.facebook.com/profile.php?id=61552605450557">
						👉 Toutela sur Facebook <img src={logo} alt="" />
					</a>
					<p>
						<b>
							#ModeDeLuxe #Toutela #SecondHandLuxury #ShoppingOnline
							#FashionLovers
						</b>
					</p>
				</div>
			</header>
		</div>
	);
}

export default App;
