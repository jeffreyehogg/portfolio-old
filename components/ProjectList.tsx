import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: '2rem',
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
  },
  link: { color: '#4269f5' },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container>
        <Grid container spacing={6}>
          <Grid item lg={6}>
            <Container className={classes.text}>
              <h2>CodeTech TV</h2>
              <p>
                A next.js built react web application. Using the YouTube API and
                a video player, this app presents the user with free coding
                videos and tutorials.
              </p>
              <a
                className={classes.link}
                href="https://github.com/jeffhogg86/codetechtv"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </Container>
            <a href="http://codetechtv.com/" target="_blank" rel="noreferrer">
              <div className={classes.imgWrap}>
                <Image
                  className={classes.img}
                  src="/images/codetech.png"
                  alt={'CodeTech Screenshot'}
                  width="800"
                  height="450"
                />
              </div>
            </a>
          </Grid>
          <Grid item lg={6}>
            <Container className={classes.text}>
              <h2>Iron Dojo</h2>
              <p>
                A react based web application built to track your strength and
                conditioning sessions over time. Create and log your workouts,
                then view your progress displayed in a chart.
              </p>
              <a
                className={classes.link}
                href="https://github.com/jeffhogg86/Iron-Dojo"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
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
          </Grid>
          <Grid item lg={6}>
            <Container className={classes.text}>
              <h2>Shoflix</h2>
              <p>
                A Netflix style video previewer. Makes an API call to render
                movies and shows by category. Some of the movie/show's play a
                trailer on a click. Deployed with firebase.
              </p>
              <a
                className={classes.link}
                href="https://github.com/jeffhogg86/shoflix"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
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
                  src="/images/shoflix.png"
                  width="800"
                  height="450"
                  alt={'Shoflix Screenshot'}
                />
              </div>
            </a>
          </Grid>
          <Grid item lg={6}>
            <Container className={classes.text}>
              <h2>Chatter</h2>
              <p>
                A Discord style chat app built with react. Demonstrates basic
                chat functionality, creating a channel and sending messages.
                Implements Google Oauth for login.
              </p>
              <a
                className={classes.link}
                href="https://github.com/jeffhogg86/chatter"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
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
                  src="/images/chatter.png"
                  width="800"
                  height="450"
                  alt={'Chatter Screenshot'}
                />
              </div>
            </a>
          </Grid>
          <Grid item lg={6}>
            <Container className={classes.text}>
              <h2>tkrSearch</h2>
              <p>
                tkrSearch is a simple stock and cryptocurrency search
                application. The user can search by ticker symbols and is
                presented with useful information for that stock or crypto.
              </p>
              <a
                className={classes.link}
                href="https://github.com/jeffhogg86/tkrsearch"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
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
          </Grid>
        </Grid>
        {/* 

        
        
         */}
      </Container>
    </Container>
  );
}
