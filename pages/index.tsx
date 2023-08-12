import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<title>U Labužnického stolu</title>
			<div className="intro">
				<h1>U Labužnického stolu</h1>
				<h2>Tradiční české restaurace.</h2>
				<button>Obědová nabídka</button>
				<button>Večerní nabídka</button>
			</div>
		</div>
	);
}
