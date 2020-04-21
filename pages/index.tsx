import Head from 'next/head';

const Index = () => (
	<div className="container">
		<Head>
			<title>Next JS Base APP</title>
			<link rel="icon" href="/favicon.png" />
		</Head>

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
