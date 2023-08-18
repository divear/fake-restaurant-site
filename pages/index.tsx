import Head from "next/head";
import Image from "next/image";
import food from "../public/food.png"

export default function Home() {
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
			<div className="rezerv">
				<h1 className="leftHeader">Rezervujte si stůl</h1>
				<div className="rezervGrid">
					<p>Datum: <input type="date" /></p>
					<p>Počet hostů: <input type="number" /></p>
					<p>Čas: <br /><input type="time" /></p>
					<p>Délka návštevy: <input type="text" /></p>
					<button className="submitRezerv" type="submit">Rezervace</button>
				</div>
			</div>
			<div className="bottomInfo">
				<h1>Otevírací doba</h1>
			</div>
		</div>
	);
}
