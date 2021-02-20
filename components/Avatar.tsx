import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar as MuiAvatar, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  avatar: {
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.09)',
    },
    cursor: 'pointer',
  },
}));
const Avatar = () => {
  const classes = useStyles();

  return (
    <MuiAvatar className={classes.avatar} alt="Jeff Hogg">
      <Link href="/">
        <Image src="/images/me.jpg" width={100} height={100} />
      </Link>
    </MuiAvatar>
  );
};

export default Avatar;
