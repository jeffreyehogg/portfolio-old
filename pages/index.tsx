import Head from 'next/head';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  image: {
    zIndex: -1,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Jeff Hogg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/space.jpg"
          className={classes.image}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
        <h1>Home</h1>
      </main>
    </div>
  );
}
