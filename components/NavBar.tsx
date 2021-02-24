import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Hidden,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import MyAvatar from './Avatar';
import Social from './Social';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      marginLeft: '2rem',
    },
    avatar: {
      marginRight: '2rem',
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Hidden only={['xs', 'sm']}>
            <div className={classes.root}>
              <Link href="/about" passHref>
                <Button className={classes.button} color="inherit">
                  About
                </Button>
              </Link>
              <Link href="/portfolio" passHref>
                <Button className={classes.button} color="inherit">
                  Portfolio
                </Button>
              </Link>
              <Link href="/resume" passHref>
                <Button className={classes.button} color="inherit">
                  Resume
                </Button>
              </Link>
            </div>
          </Hidden>
          <Hidden only={['md', 'lg', 'xl']}>
            <div className={classes.root}>
              <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Hidden>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <Link href="/about" passHref>
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link href="/portfolio" passHref>
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            </Link>
            <Link href="/resume" passHref>
              <MenuItem onClick={handleClose}>Resume</MenuItem>
            </Link>
          </Menu>
          <div>
            <Social />
          </div>
          <div className={classes.avatar}>
            <MyAvatar />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
