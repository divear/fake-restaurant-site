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
					<button>Obědová nabídka</button>
					<button>Večerní nabídka</button>
				</div>
			</div>
		</div>
	);
}
