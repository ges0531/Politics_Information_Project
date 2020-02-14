import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345
  },
  media: {
    width: 400,
    height: 400
  }
});

export default function PoliticianCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.Congressman.pImg}
          title="Contemplative Reptile"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Congressman.pName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h4 style={{marginTop:'10px'}}>{props.Congressman.pParty}</h4>
            <h4 style={{marginTop:'10px'}}>{props.Congressman.pConstituency}</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
