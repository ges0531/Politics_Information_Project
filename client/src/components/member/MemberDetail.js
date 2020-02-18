import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CommentViewer from "../comments/CommentViewer2";

import BillList from "./BillList";
import PromiseList from "./PromiseList";
import MemberDetailForm from "./MemberDetailForm";

const useStyles = makeStyles(theme => ({
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(10)
  }
}));

const MemberDetail = ({ politician, error, loading }) => {
  const classes = useStyles();
  const classes2 = useStyles2();

  if (error) {
    return <>에러가 발생했습니다.</>;
  }

  // 에러 발생 시
  return (
    <>
      {!loading && politician && (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative"></AppBar>
          <main>
            <div className={classes.heroContent}>
              <MemberDetailForm politician={politician} />
            </div>

            <Container>
              <div className={classes2.margin}>
                <Grid container>
                  <Grid item xs={4}>
                    <BillList pName={politician.pName} />
                  </Grid>
                  <Grid item xs={4} style={{ marginLeft: "200px" }}>
                    <PromiseList
                      pName={politician.pName}
                      pId={politician.pId}
                    />
                  </Grid>
                </Grid>
              </div>
            </Container>

            <Container>
              <div>
                <div className={classes2.margin}>
                  <CommentViewer
                    pname={politician.pName}
                    pId={politician.pId}
                  />
                </div>
              </div>
            </Container>
          </main>
        </React.Fragment>
      )}
    </>
  );
};

export default MemberDetail;
