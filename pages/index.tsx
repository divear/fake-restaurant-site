import Head from "next/head";
import Image from "next/image";
import food from "../public/food.png"
import image1 from "../public/icons/image1.svg"
import image2 from "../public/icons/image2.svg"
import image3 from "../public/icons/image3.svg"
import image4 from "../public/icons/image4.svg"

export default function Home() {
	function rezerv() {

	}
	return (
		<div>
			<title>U Labužnického stolu</title>
			<div className="intro">
				<h1 className="headerText">U Labužnického stolu</h1>
				<h2 className="subText">Tradiční česká restaurace</h2>
				<div className="subButtons">
					<button className="nabidkaButton" onClick={() => open("/menu/#obedovaNabidka")}>Menu</button>
				</div>
			</div>
			<div className="leftText">
				<h1 className="leftHeader">Restaurace s rodinnou tradicí</h1>
				<h2>
					Od svého založení v roce 1974 jsme nezměnili menu
				</h2>
				<Image className="foodImg" src={food} alt="food img"></Image>
			</div>
			<form onSubmit={rezerv} id="rezervace" className="rezerv">
				<h1 className="leftHeader">Rezervujte si stůl</h1>
				<ul className="extraInfo floatRight">
					<li>Přijdete-li s kočárkem, prosím upozorněte nás na to předem, abychom vybrali vhodné místo.</li>
					<li>Psi v restauraci jsou vítáni, prosím informujte nás předem.</li>
					<li>Restaurace je klimatizovaná.</li>
					<li>K dispozici je WiFi připojení.</li>
				</ul>
				<div className="rezervGrid">
					<p>Datum: <input type="date" /></p>
					<p>Počet hostů: <input type="number" /></p>
					<p>Čas: <br /><input type="time" /></p>
					<p>Délka návštevy: <input type="text" /></p>
					<button className="submitRezerv" type="submit">Rezervace</button>
				</div>
			</form>
			<div className="bottomInfo">
				<div className="otevDoba">
					<h1>Otevírací doba</h1>
					<p><b>PO</b> 11-16</p>
					<p><b>ÚT</b> 11-16</p>
					<p><b>ST</b> 11-22</p>
					<p><b>ČT</b> 11-16</p>
					<p><b>PÁ</b> 11-22</p>
					<p><b>SO</b> Zavřeno</p>
					<p><b>NE</b> Zavřeno</p>
				</div>
				<div id="kontakt" className="kontakt">
					<h1>Kontakt</h1>
					<p title="Adresa"><Image src={image1} alt="Adresa:" /> Purkyňova 2832, 612 00 Brno-Královo Pole, Česko</p>
					<p title="Tel. Číslo"><Image src={image2} alt="Tel. Číslo: " /> +420 123 456 789</p>
					<p title="Email"><Image src={image3} alt="Email:" /> divearus@gmail.com</p>
					<p title="Vedoucí"><Image src={image4} alt="Vedoucí: " /> Lukáš Odehnal</p>
				</div>
			</div>
			<div className="floatRight watermark">
				U labužnického stolu 1974-2023
			</div>
		</div >
	);
}
