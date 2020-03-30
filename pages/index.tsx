import Head from 'next/head';
import Header from '../src/styled/components/Header.styled';

const Home = () => (
  <div className="container">
    <Head>
      <title>Promo King</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main>
      <Header>hello world</Header>
    </main>

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

export default Home;
