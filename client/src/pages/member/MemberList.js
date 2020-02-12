// 국회의원 리스트 페이지
import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { Link } from 'react-router-dom';
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
    console.log(candidate.list);
  } else {
    return(<div>1</div>)
    
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
          {/* End hero unit */}
            {/* {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to="/MemberDetail">
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Link>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        문 재 인
                    </Typography>
                    <Typography color="textSecondary">
                        싸하당
                    </Typography>
                      <Typography>
                        국정운영과 의정활동 36년<br/>김싸피는 경제의 맥을 확실히 알고 있습니다
                    </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        강남구 갑
                    </Button>
                      <Button size="small" color="primary">
                        공약이행률 54.00%
                    </Button>
                    </CardActions>
                </Card>
              </Grid>
            ))} */}
            <GridList candidateData={candidateData} />
        </Container>
      </main>
    </React.Fragment>
  );
}