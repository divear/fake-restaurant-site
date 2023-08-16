import Head from "next/head";
import Image from "next/image";

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
			</div>
		</div>
	);
}
