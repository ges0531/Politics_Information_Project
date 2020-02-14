import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import { GridLayout } from "@egjs/react-infinitegrid";
const classes = makeStyles(theme => ({
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
}));

const MemberListBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;


const PoliticianCard = ({ politician }) => {
  const { pName, pImg, pParty, pId, pConstituency } = politician;

  return (
    <Grid item xs={4}>
      <Card className={classes.card} id={pId}>
        <Link to={"/PoliticianPage"+`/${pId}`}>
          <CardMedia
            className={classes.cardMedia}
            image={pImg}
            style={{ height: '300px' }}
          />
        </Link>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {pName}
          </Typography>
          <Typography color="textSecondary">
            {pParty}
          </Typography>
          <Typography>
            국정운영과 의정활동 36년<br />김싸피는 경제의 맥을 확실히 알고 있습니다
                    </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {pConstituency}
          </Button>
          <Button size="small" color="primary">
            공약이행률 54.00%
                    </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const MemberList = ({ politicians, loading, error, keyword }) => {
  // 에러 발생 시

  if (error) {
    return <MemberListBlock>에러가 발생했습니다.</MemberListBlock>;
  }

  if (keyword != "") {
    politicians = politicians.filter(politician => politician.pName.indexOf(keyword) >= 0);
  }

  return (
    <Container className={classes.cardGrid} justify="center">
      <MemberListBlock>
        {!loading && politicians && (
          <div>
            {politicians.map(politician => (
              <PoliticianCard politician={politician} key={politician.pId} />
            ))}
          </div>
        )}
      </MemberListBlock>
    </Container>
  );
};

export default MemberList;
