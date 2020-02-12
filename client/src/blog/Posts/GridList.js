import React from "react";
import { GridLayout } from "@egjs/react-infinitegrid";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const Item = ({ candidateData }) => (
  <Card className={classes.card}>
    <Link to="/MemberDetail">
      <CardMedia
        className={classes.cardMedia}
        image={candidateData.pImg}
        style={{ height: '300px' }}
      />
    </Link>
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
      {candidateData.pName}
                    </Typography>
      <Typography color="textSecondary">
      {candidateData.pParty}
                    </Typography>
      <Typography>
      {candidateData.pCareer}
                    </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        {candidateData.pConstituency}
                    </Button>
      <Button size="small" color="primary">
        공약이행률 54.00%
                    </Button>
    </CardActions>
  </Card>
);

class GridList extends React.Component {
  state = { list: [] };
  loadItems(groupKey, num) {
    const items = [];
    const start = this.start || 0;

    for (let i = 0; i < num; ++i) {
      items.push(
        <Item groupKey={groupKey} num={1 + start + i} key={start + i} candidateData={this.props.candidateData[start + i]} />
      );
    }
    this.start = start + num;
    console.log(items)
    return items;
  }
  onAppend = ({ groupKey, startLoading }) => {
    startLoading();
    const list = this.state.list;
    const items = this.loadItems(parseFloat(groupKey) + 1, 5);

    this.setState({ list: list.concat(items) });
  };
  onLayoutComplete = ({ isLayout, endLoading }) => {
    !isLayout && endLoading();
  };
  render() {
    return (
      <GridLayout
        options={{
          isConstantSize: true,
          transitionDuration: 0.2
        }}
        layoutOptions={{
          margin: 10,
          align: "center"
        }}
        onAppend={this.onAppend}
        onLayoutComplete={this.onLayoutComplete}
      >
        {this.state.list}
      </GridLayout>
    );
  }
}

export default GridList;