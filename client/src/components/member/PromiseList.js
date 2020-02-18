import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { Scrollbars } from 'react-custom-scrollbars';
import Box from '@material-ui/core/Box'

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
        width: '100%',
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

export default function VirtualizedList(props) {
    var promiseList
    const pId = props.pId;
    const pName = props.pName;
    // console.log(pId);
    const [promises, setPromises] = useState({});

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    async function fetchMyAPI() {
        let response = await fetch(`http://52.79.219.137:80/promise/${pId}`);
        response = await response.json();
        setPromises(response);
    }

    useEffect(() => {
        fetchMyAPI();
    }, []);

    // console.log(promises);
    if (promises[0]) {
        promiseList = promises.map((promise, index) => (
            <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)} key={index}>
                <ExpansionPanelSummary aria-controls="indexd-content" id="indexd-header">
                    <Typography>{promise.title}</Typography>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        ));
    } else {
        return (
            <div>
                LOADING...
            </div>
        )
    }

    return (
        <div>
            <Typography style={{margin : '10px'}} component={'div'} variant={'body2'}>
                <Box fontWeight="fontWeightBold" fontSize={20}>
                    {pName} 의원이 약속한 공약
                </Box>
                <Box>
                    스크롤을 내려 더 많은 공약을 확인할 수 있어요!
                </Box>
            </Typography>
            <Scrollbars style={{ width: '140%', height: 300 }} >
                {promiseList}
            </Scrollbars>
        </div>
    );
}
