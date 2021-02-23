import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';

const user = {
  city: 'Napa',
  state: 'CA',
  name: 'Jeff Hogg',
};

const useStyles = makeStyles(() => ({
  img: {
    borderRadius: '50%',
    boxShadow: '0 0 8px 8px black',
  },
  imgWrapper: {
    marginTop: '5rem',
    marginBottom: '1rem',
  },
  profile: {
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
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
        {user.name}
      </Typography>
      <Typography color="textSecondary" variant="body1">
        {`${user.city}, ${user.state}`}
      </Typography>

      <Typography>
        <Box>
          <p>
            Technologies:
            <br />
            Javascript | Python | React | Redux | TypeScript | Next.js | Node.js
            <br />
            Express | MongoDB | MySQL | Git | Heroku | AWS
          </p>
        </Box>
      </Typography>
    </Container>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
