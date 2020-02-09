import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./Responsive";

import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import UserIcon from "@material-ui/icons/AccountCircle";
import BoardIcon from "@material-ui/icons/BorderColor";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/FindInPage";
import GroupIcon from "@material-ui/icons/Group";
import CheckIcon from "@material-ui/icons/Check";

const classes = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    color: "#77837D"
  }
}));

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
height: 4rem;
display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  `;

/**
   * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
  `;

  const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  `;
  
  const Header = ({ isLoginSuccess, nick, onLogout }) => {
    
    
    const [state, setState] = React.useState({
      left: false,
    });
    
    const toggleDrawer = (side, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
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
        <List>
          <ListItem button key={"마이페이지"}>
            <ListItemIcon>
              <UserIcon />
              <ListItemText
                primary={"마이페이지"}
                style={{ marginTop: 0, marginLeft: 15 }}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"자유게시판"}>
            <ListItemIcon>
              <BoardIcon />
              <ListItemText
                primary={"자유게시판"}
                style={{ marginTop: 0, marginLeft: 15 }}
              />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={"우리동네 후보자 살펴보기"}>
            <ListItemIcon>
              <FaceIcon />
              <Link to="/CandidateMain" className={classes.link}>
                <ListItemText
                  primary={"우리동네 후보자 살펴보기"}
                  style={{ marginTop: 0, marginLeft: 15 }}
                />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"국회의원 찾기"}>
            <ListItemIcon>
              <SearchIcon />
              <Link to="/MemberList" className={classes.link}>
                <ListItemText
                  primary={"국회의원 찾기"}
                  style={{ marginTop: 0, marginLeft: 15 }}
                />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"나와 잘맞는 정치인 찾기"}>
            <ListItemIcon>
              <GroupIcon />
              <Link to="/CardGame" className={classes.link}>
                <ListItemText
                  primary={"나와 잘맞는 정치인 찾기"}
                  style={{ marginTop: 0, marginLeft: 15 }}
                />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"나의 정치성향 테스트"}>
            <ListItemIcon>
              <CheckIcon />
              <Link to="/Test" className={classes.link}>
                <ListItemText
                  primary={"나의 정치성향 테스트"}
                  style={{ marginTop: 0, marginLeft: 15 }}
                />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    );
    
    return (
      <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <div>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </Button>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
        </div>
        <Button variant="outlined" size="small" style={{ margin: 15 }}>
            실시간 채팅 참여하기
          </Button>
          <Wrapper>
            <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/">
          싸피는하나당
          </Link>
        </Typography>
            {isLoginSuccess ? (
              <div className="right">
                <UserInfo>{nick} 님 안녕하세요! </UserInfo>
                <Button variant="outlined" size="small" style={{ margin: 15 }} onClick={onLogout}>로그아웃</Button>
              </div>
            ) : (
              <div className="right">
                <Link to="/SignIn">
                <Button to='/SignIn' variant="outlined" size="small" style={{ margin: 15 }}>
                  로그인
                </Button>
                </Link>
                <Link to="/SignUp">
                <Button to='/SignUp' variant="outlined" size="small">
                  회원가입
        </Button>
        </Link>
              </div>
            )}
          </Wrapper>
        <Spacer />
      </Toolbar>
      </React.Fragment>
  );
};

export default Header;
