import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// import { GridLayout } from "@egjs/react-infinitegrid";
const classes = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
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
    <div>
      {pImg ? (
    <Card className={classes.card} id={pId}>
        <div>
          <Link to={"/view/PoliticianPage" + `/${pId}`}>
            <CardMedia
              className={classes.cardMedia}
              image={pImg}
              style={{ width: "300px", height: "300px" }}
            />
          </Link>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {pName}
            </Typography>
            <Typography component="h4" color="textSecondary">
              {pParty}
            </Typography>
            <Typography component="h4">{pConstituency}</Typography>
          </CardContent>
        </div>
        </Card>
      ) : (
        <div />
      )}
    </div>
  );
};

const MemberList = ({ politicians, loading, error, keyword }) => {
  // 에러 발생 시

  if (error) {
    return <MemberListBlock>에러가 발생했습니다.</MemberListBlock>;
  }

  if (keyword != "") {
    politicians = politicians.filter(
      politician => politician.pName.indexOf(keyword) >= 0
    );
  }

  return (
    <Container className={classes.cardGrid}>
      <MemberListBlock>
        {!loading && politicians && (
          <div style={{ marginTop: "65px" }}>
            <Grid container spacing={2}>
              {politicians.map(politician => (
                <Grid item xs={3} key={politician.pId}>
                  <PoliticianCard
                    politician={politician}
                    key={politician.pId}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </MemberListBlock>
    </Container>
  );
};

export default MemberList;
