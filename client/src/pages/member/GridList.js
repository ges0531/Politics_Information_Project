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
import Axios from "axios";

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

const Item = ({ item }) => (
  <Card className={classes.card}>
    <Link to="/MemberDetail">
      <CardMedia
        className={classes.cardMedia}
        image={item.pImg}
        style={{ height: '300px' }}
      />
    </Link>
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
        {item.pName}
      </Typography>
      <Typography color="textSecondary">
        {item.pParty}
      </Typography>
      <Typography>
      {/* {candidateData.pCareer} */}
                    </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        {item.pConstituency}
      </Button>
      <Button size="small" color="primary">
        공약이행률 54.00%
                    </Button>
    </CardActions>
  </Card>
);

class GridList extends React.Component {
  state = {
    list: [],
    url: "http://localhost:8000/test/",
    pageNumber: 0,
    totalPage: 0
  };


  // 하단에 닿으면 새로운 컴포턴트 로딩
  loadItems = async (groupKey, size) => {
    
    const pn = this.state.pageNumber;
    console.log(pn);
    const res = await Axios.get(this.state.url + "?pageNumber=" + pn + "&pageSize=" + size);
    const politicians = res.data.content;
    const totalPeges = res.data.pageable.totalPages;
    console.log(res.data);
    const newPoliticians = politicians.map((politician) => (
      <Item groupKey={groupKey} key={politician.pId} item={politician} />
    ));
    this.setState({
      list: this.state.list.push(newPoliticians)
    })
    // politicians.map(element => {
    //   console.log(element);
    //   items.push(
    //     <Item groupKey={groupKey} key={element.pId} item={element} />
    //   );
    // });

    // 한번 로딩 끝나면 페이지 넘버 업데이트
    this.setState({
      pageNumber: this.state.pageNumber + 1
    })
  }

  onAppend = ({ groupKey, startLoading }) => {
    startLoading();
    this.loadItems(parseFloat(groupKey) + 1, 20);
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