import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <div>
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://lab.ssafy.com/webmobile1-sub3/s02p13a308">
        {'GitLab'}
      </Link>
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {'2020.02.21 Copyright © '}
      <Link color="inherit" href="/view/TeamPage">
        싸피는 하나당
      </Link>
    </Typography>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};