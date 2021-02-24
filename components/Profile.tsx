import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  img: {
    borderRadius: '50%',
    // boxShadow: '0 0 8px 8px black',
  },
  imgWrapper: {
    marginTop: '4rem',
    marginBottom: '2rem',
  },
  profile: {
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    marginTop: '1rem',
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Container className={classes.profile}>
      <div className={classes.imgWrapper}>
        <Image
          src="/images/me.jpg"
          alt="Picture of Jeff"
          width={500}
          height={500}
          className={classes.img}
        />
      </div>
      <Typography color="textPrimary" gutterBottom variant="h3">
        Jeff Hogg
      </Typography>
      <Typography color="textSecondary" variant="body1">
        Full-stack web developer
        <br />
        Napa, CA
      </Typography>

      <Box className={classes.content}>
        <Typography>
          Technologies:
          <br />
          Javascript | Python | React | Redux | TypeScript | Next.js | Node.js
          <br />
          Express | MongoDB | MySQL | Git | Heroku | AWS
        </Typography>
      </Box>
    </Container>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
