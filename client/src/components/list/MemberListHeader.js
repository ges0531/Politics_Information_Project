import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MemberListContainer from '../../containers/list/MemberListContainer';
import SearchContainer from '../../containers/list/SearchContainer';

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

const MemberListHeader = () => {
    // 에러 발생 시
    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    찾고 싶은 국회의원을 검색해보세요.
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    목록을 쭈욱 내려보셔도 됩니다.
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={1} justify="center">
                        <SearchContainer />
                    </Grid>
                </div>
            </Container>
            <MemberListContainer />
        </div>
    );
};

export default MemberListHeader;
