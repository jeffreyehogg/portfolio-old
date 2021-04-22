import Head from 'next/head';
import ContactForm from '../components/ContactForm';

function contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactForm />
      </main>
    </div>
  );
}

export default contact;
