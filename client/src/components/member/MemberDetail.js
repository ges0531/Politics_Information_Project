import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import moon from './image/moon.png';
import CommentViewer from '../comments/CommentViewer2'

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


const MemberDetail = ({ politician, error, loading }) => {
    const classes = useStyles();
    const classes2 = useStyles2();

    if (error) {
        return <>에러가 발생했습니다.</>;
    }

    console.log(politician);

    // 에러 발생 시
    return (
        <>
            {!loading && politician && (
                <React.Fragment>
                    <CssBaseline />
                    <AppBar position="relative">
                    </AppBar>
                    <main>
                        <div className={classes.heroContent}>
                            <Grid container>
                                <Grid item xs={2}>
                                </Grid>

                                <Grid item xs={4}>
                                    <img src={politician.pImg} width="500" height="500" />
                                </Grid>

                                <Grid item xs={4}>
                                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                        {politician.pName}
                                    </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                        {politician.pParty}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        {politician.pConstituency}
                                    </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                        {politician.pRepeat}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        {politician.pCommittee}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        {politician.pEducation}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        {politician.pCareer}
                                    </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                        {politician.pContact}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        {politician.pMail}
                                    </Typography>

                                    <div className={classes.heroButtons}>
                                        <Grid container spacing={2} justify="center">
                                            <Grid item>
                                                <a style={{ display: "table-cell" }} target="_blank" href={`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${politician.pName}`}>
                                                    <img src={'https://steemitimages.com/DQmcM9KbSbvbNwrZk2cAQ5QLvZd8f6uyQL8JMtSH9tXgMqV/naver.png'} width='150px' />
                                                </a>
                                            </Grid>
                                            <Grid item>
                                                <a style={{ display: "table-cell" }} target="_blank" href={`https://www.youtube.com/results?search_query=${politician.pName}`}>
                                                    <img src={'https://k-napolov.com/uploads/img/page/410_1567758223.png'} width='150px' />
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
                                    <CommentViewer pname={politician.pName} pId={politician.pId} />
                                </div>
                            </div>
                        </Container>
                    </main>
                </React.Fragment >
            )}
        </>

    );
};

export default MemberDetail;
