import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { logout } from '../actions/auth/logout';
import { useSelector, useDispatch } from 'react-redux';




function Header() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
        dispatch(logout());
  };


  const authLinks = (
    <>
          <Button href="/login" variant="outlined" size="small">
              Sign in
          </Button>
          <Button href="/register" variant="outlined" size="small">
              Sign up
          </Button>
    </>
  );

  const settingsLinks = (
    <>

    <Button href="/settings/account" variant="outlined" size="small">
        Acount Settings
    </Button>
    <Button onClick={logoutHandler} variant="outlined" size="small">
        logout
    </Button>
    </>
  );


  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button href="/" size="small">my website</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Welcom
        </Typography>
        {isAuthenticated ? settingsLinks : authLinks}

      </Toolbar>
    </React.Fragment>
  );
}

export default Header;