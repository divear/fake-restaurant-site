import Head from "next/head";
import Image from "next/image";
import food from "../public/food.png"

export default function Home() {
	function rezerv() {

	}
	return (
		<div>
			<title>U Labužnického stolu</title>
			<div className="intro">
				<h1 className="headerText">U Labužnického stolu</h1>
				<h2 className="subText">Tradiční česká restaurace.</h2>
				<div className="subButtons">
					<button onClick={() => open("/obedova-nabidka")}>Obědová nabídka</button>
					<button onClick={() => open("/vecerni-nabidka")}>Večerní nabídka</button>
				</div>
			</div>
			<div className="leftText">
				<h1 className="leftHeader">Restaurace s rodinnou tradicí</h1>
				<p>
					Od svého založení v roce 1974 jsme nezměnili menu
				</p>
				<Image className="foodImg" src={food} alt="food img"></Image>
			</div>
			<form onSubmit={rezerv} className="rezerv">
				<h1 className="leftHeader">Rezervujte si stůl</h1>
				<div className="rezervGrid">
					<p>Datum: <input type="date" /></p>
					<p>Počet hostů: <input type="number" /></p>
					<p>Čas: <br /><input type="time" /></p>
					<p>Délka návštevy: <input type="text" /></p>
					<button className="submitRezerv" type="submit">Rezervace</button>
				</div>
			</form>
			<div className="bottomInfo">
				<h1>Otevírací doba</h1>
				<ul>
					<li> PO 11-16</li>
					<li> ÚT 11-16</li>
					<li> ST 11-22</li>
					<li> ČT 11-16</li>
					<li> PÁ 11-22</li>
					<li> SO Zavřeno</li>
					<li> NE Zavřeno</li>
				</ul>
				<h1>Kontakt</h1>
				<ul>
					<li>Purkyňova 2832, 612 00 Brno-Královo Pole, Česko</li>
					<li>+420 123 456 789</li>
					<li>divearus@gmail.com</li>
					<li>Vedoucí: Lukáš Odehnal</li>
				</ul>
				<h1>extra info:</h1>
				<ul>
					<li>Přijdete-li s kočárkem, prosím upozorněte nás na to předem, abychom vybrali vhodné místo.</li>
					<li>Psi v restauraci jsou vítáni, prosím informujte nás předem.</li>
					<li>Restaurace je klimatizovaná.</li>
					<li>K dispozici je WiFi připojení.</li>
				</ul>
			</div>
		</div>
	);
}
