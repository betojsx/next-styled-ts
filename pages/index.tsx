import Head from 'next/head';
import Home from '../src/components/Home/home';

const Index = () => (
	<div className="container">
		<Head>
			<title>Promo King</title>
			<link rel="icon" href="/favicon.png" />
			<link rel="stylesheet" href="/static/fonts/stylesheet.css" />
		</Head>

		<Home></Home>

		<footer>
			<a
				href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
			</a>
		</footer>
	</div>
);

export default Index;
