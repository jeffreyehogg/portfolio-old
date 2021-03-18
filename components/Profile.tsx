import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  img: {
    borderRadius: '50%',
  },
  imgWrapper: {
    marginTop: '4rem',
    marginBottom: '2rem',
  },
  profile: {
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
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
          width={400}
          height={400}
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
          Aspiring Full-stack Web Developer with a background in broadcast
          communications. While attending UC Berkeley’s Full-stack Web
          Development program, I gained hands-on experience developing and
          deploying web applications, manipulating data, and solving algorithms.
          <br />
        </Typography>
        <Typography className={classes.content}>
          Languages​: ​JavaScript, Python
          <br />
          Front-end​: ​React, Nextjs, Redux, TypeScript
          <br />
          Backend: Express, Node.js Django
          <br />
          Databases​: ​MongoDB, MySQL
        </Typography>
      </Box>
    </Container>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
