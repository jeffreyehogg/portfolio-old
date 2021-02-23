import React from 'react';
import { makeStyles } from '@material-ui/core';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  group: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginRight: '3rem',
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.09)',
      opacity: 0.7,
    },
    cursor: 'pointer',
  },
  a: {
    color: 'inherit',
  },
}));

const Social = () => {
  const classes = useStyles();
  return (
    <div className={classes.group}>
      <div className={classes.icon}>
        <a
          className={classes.a}
          href="http://github.com/jeffhogg86"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </div>
      <div className={classes.icon}>
        <a
          href="http://www.linkedin.com/in/jeffhogg/"
          target="_blank"
          rel="noreferrer"
          className={classes.a}
        >
          <LinkedIn />
        </a>
      </div>
      <div className={classes.icon}>
        <a
          className={classes.a}
          href="mailto:jeffhogg86@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email />
        </a>
      </div>
    </div>
  );
};

export default Social;
