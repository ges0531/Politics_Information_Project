// 국회의원 디테일 페이지
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


import CommentViewer from '../../components/comments/CommentViewer'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(10),
  },
}));

export default function Album() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Grid container>
              <Grid item xs={2}/>

              <Grid item xs={4}>
              <img src="https://post-phinf.pstatic.net/MjAxNzA1MTFfMTkz/MDAxNDk0NDY1NDQ5NjA2.ofW5NphqGP2x7rL-vzFtg6rZv9ECDfFVzEimSN10N6Eg.tT_rULoEz8DtkE9LGUzwKCWSOakObQUg5ytntyQucgIg.PNG/%EB%AC%B4%EC%A0%9C-1.png?type=w1200" width="500" height="500"/>
              </Grid>

              <Grid item xs={3}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                김 무 성
              </Typography>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                첫번째 국회의원~~
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <a style={{display: "table-cell"}} target="_blank" href={"https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=김무성"}>
                    <img src={'https://steemitimages.com/DQmcM9KbSbvbNwrZk2cAQ5QLvZd8f6uyQL8JMtSH9tXgMqV/naver.png'} width='150px'/>
                    </a>
                  </Grid>
                  <Grid item>
                  <a style={{display: "table-cell"}} target="_blank" href={"https://www.youtube.com/results?search_query=김무성"}>
                  <img src={'https://k-napolov.com/uploads/img/page/410_1567758223.png'} width='150px'/>
                  </a>
                  </Grid>
                </Grid>
              </div>
              </Grid>
        </Grid>
        </div>
        <Container>
          <div>
            <div className={classes2.margin}>
              <CommentViewer pname="문재인" pId="1"/>
            </div>
          </div>
        </Container>
      </main>
    </React.Fragment >
  );
}