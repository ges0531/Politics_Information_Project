import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/FindInPage';
import GroupIcon from '@material-ui/icons/Group';
import CheckIcon from '@material-ui/icons/Check';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '50px'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: '#77837D'
  }
}));

const Header = ({ isLoginSuccess, nick, onLogout }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {nick !== null ? (
        <List>
          <ListItem button key={'마이페이지'}>
            <img src={`https://api.adorable.io/avatars/48/${nick}@adorable.io.png`} />
            <ListItemText primary={`환영합니다 ${nick}님`} style={{ marginTop: 0, marginLeft: 15 }} />
          </ListItem>
        </List>
      ) : (
          <List>
            <ListItem button key={'마이페이지'}>
              <InputIcon/>
              <Link to='/view/SignIn'>
              <ListItemText primary={`로그인 하러가기`} style={{ marginTop: 0, marginLeft: 15 }} />
              </Link>
            </ListItem>
          </List>)}
      <Divider />
      <List>
        <ListItem button key={'우리동네 후보자 살펴보기'}>
          <FaceIcon />
          <Link to='/view/CandidateCard' className={classes.link}>
            <ListItemText primary={'우리동네 후보자 살펴보기'} style={{ marginTop: 0, marginLeft: 15 }} />
          </Link>
        </ListItem>
        <ListItem button key={'국회의원 찾기'}>
          <SearchIcon />
          <Link to='/view/PoliticianPage' className={classes.link}>
            <ListItemText primary={'국회의원 찾기'} style={{ marginTop: 0, marginLeft: 15 }} />
          </Link>
        </ListItem>
        <ListItem button key={'나와 잘맞는 정치인 찾기'}>
          <GroupIcon />
          <Link to='/view/CardGame' className={classes.link}>
            <ListItemText primary={'나와 잘맞는 정치인 찾기'} style={{ marginTop: 0, marginLeft: 15 }} />
          </Link>
        </ListItem>
        <ListItem button key={'나의 정치성향 테스트'}>
          <CheckIcon />
          <Link to='/view/Test' className={classes.link}>
            <ListItemText primary={'나의 정치성향 테스트'} style={{ marginTop: 0, marginLeft: 15 }} />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>

        <div>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
        </div>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >

          <Link to="/view/" style={{ textDecoration: 'none', marginLeft: '100px' }}>
            {'싸피는하나당'}
          </Link>

        </Typography>
        {
          nick ?
            <div>
              {nick} 님 안녕하세요 !
            <Button variant="outlined" size="medium" onClick={onLogout} style={{ margin: 15 }}>
                로그아웃
            </Button>
            </div>
            :
            <div>
              <Link to="/view/SignIn" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="medium" style={{ margin: 15 }}>
                  로그인
                </Button>
              </Link>
              <Link to="/view/SignUp" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="medium">
                  회원가입
                </Button>
              </Link>
            </div>
        }
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;