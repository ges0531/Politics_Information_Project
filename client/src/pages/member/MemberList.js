// 국회의원 리스트 페이지
import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Search from './MemberSearch';
import GridList from './GridList';

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
    link: '/MemberDetail',
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  var candidateData
  const classes = useStyles();
  const [candidate, setCandidate] = useState(false);
  async function fetchMyAPI() {
    let response = await fetch("http://52.79.219.137:8000/politician/");
    response = await response.json();
    setCandidate(response);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);
  if (candidate.list) {
    candidateData = candidate.list
    // console.log(candidate.list);
  } else {
    return(<div>LOADING...</div>)
  }
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm-5">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              찾고 싶은 국회의원을 검색해보세요.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              목록을 쭈욱 내려보셔도 됩니다.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Search />
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
            <GridList candidateData={candidateData} />
        </Container>
      </main>
    </React.Fragment>
  );
}