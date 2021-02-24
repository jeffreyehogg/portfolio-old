import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  mt: {
    marginTop: theme.spacing(4),
  },
  img: {
    objectFit: 'cover',
    maxHeight: '25rem',
    width: '100%',
    border: '1px solid #000',
    borderRadius: '8px',
  },
  imgWrap: {
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.08)',
    },
    cursor: 'pointer',
  },
  text: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: '75%',
  },
  btn: {
    marginTop: theme.spacing(4),
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  link: { color: '#4269f5' },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container>
        <Container className={classes.text}>
          <h2>Iron Dojo</h2>
          <p>
            A react based web application built to track your strength and
            conditioning sessions over time. Create and log your workouts, then
            view your progress displayed in a chart.
          </p>
          <a
            className={classes.link}
            href="https://github.com/jeffhogg86/ironDojo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo - https://github.com/jeffhogg86/Iron-Dojo
          </a>
          <br />
          <a
            className={classes.link}
            href="https://iron-dojo.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployment - https://iron-dojo.herokuapp.com/
          </a>
        </Container>
        <a
          href="https://the-iron-dojo.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.imgWrap}>
            <Image
              className={classes.img}
              src="/images/ironDojo-ss.png"
              alt={'Iron Dojo Screenshot'}
              width="800"
              height="450"
            />
          </div>
        </a>

        <Container className={classes.text}>
          <h2>Shoflix</h2>
          <p>
            A Netflix style video previewer. Makes an API call to render movies
            and shows by category. Some of the movie/show's play a trailer on a
            click. Deployed with firebase.
          </p>
          <a
            className={classes.link}
            href="https://github.com/jeffhogg86/netflix-clone"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo - https://github.com/jeffhogg86/netflix-clone
          </a>
          <br></br>
          <a
            className={classes.link}
            href="https://netflix-clone-23b92.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deployment - https://netflix-clone-23b92.web.app/
          </a>
        </Container>

        <a
          href="https://netflix-clone-23b92.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.imgWrap}>
            <Image
              className={classes.img}
              src="/images/netflix-ss.png"
              width="800"
              height="450"
              alt={'Netflix-clone Screenshot'}
            />
          </div>
        </a>
        <Container className={classes.text}>
          <h2>Chatter</h2>
          <p>
            A Discord style chat app built with react. Demonstrates basic chat
            functionality, creating a channel and sending messages. Implements
            Google Oauth for login.
          </p>
          <a
            className={classes.link}
            href="https://github.com/jeffhogg86/discord-clone"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo - https://github.com/jeffhogg86/discord-clone
          </a>
          <br></br>
          <a
            className={classes.link}
            href="https://discord-47ed9.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deployment - https://discord-47ed9.web.app/
          </a>
        </Container>
        <a
          href="https://discord-47ed9.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.imgWrap}>
            <Image
              className={classes.img}
              src="/images/discord-ss.png"
              width="800"
              height="450"
              alt={'Discord-clone Screenshot'}
            />
          </div>
        </a>
        <Container className={classes.text}>
          <h2>tkrSearch</h2>
          <p>
            tkrSearch is a simple stock and cryptocurrency search application.
            The user can search by ticker symbols and is presented with useful
            information such as current price, previous close, 52 week high and
            52 week low.
          </p>
          <a
            className={classes.link}
            href="https://github.com/jeffhogg86/tkrsearch"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo - https://github.com/jeffhogg86/tkrsearch
          </a>
          <br></br>
          <a
            className={classes.link}
            href="https://bhagatabhijeet.github.io/tkrsearch/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Deployment - https://bhagatabhijeet.github.io/tkrsearch/index.html
          </a>
        </Container>
        <a
          href="https://bhagatabhijeet.github.io/tkrsearch/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.imgWrap}>
            <Image
              className={classes.img}
              src="/images/tkrSearch-ss.png"
              width="800"
              height="450"
              alt={'tkrSearch Screenshot'}
            />
          </div>
        </a>
      </Container>
    </Container>
  );
}
