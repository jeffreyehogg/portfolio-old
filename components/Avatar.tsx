import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.09)',
      opacity: 0.7,
    },
    cursor: 'pointer',
  },
}));
const MyAvatar = () => {
  const classes = useStyles();

  return (
    <Link href="/" passHref>
      <Avatar className={classes.avatar} alt="Jeff Hogg">
        <Image src="/images/me.jpg" width={100} height={100} />
      </Avatar>
    </Link>
  );
};

export default MyAvatar;
