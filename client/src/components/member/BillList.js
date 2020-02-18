import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
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

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);


export default function VirtualizedList(props) {
    var billList
    const pName = props.pName;
    // console.log(pName);
    const [bills, setBills] = useState({});

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    async function fetchMyAPI() {
        let response = await fetch(`http://52.79.219.137:80/bill/${pName}`);
        response = await response.json();
        setBills(response);
    }

    useEffect(() => {
        fetchMyAPI();
    }, []);

    // console.log(bills);
    if (bills[0]) {
        billList = bills.map((bill, index) => (
            <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)} key={index}>
                <ExpansionPanelSummary aria-controls="indexd-content" id="indexd-header">
                    <Typography>{bill.bName}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {bill.bContent}
                    </Typography>
                </ExpansionPanelDetails>
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
                    {pName} 의원이 발의한 의안
                </Box>
                <Box>
                    의안을 누르면 상세내용을 확인할 수 있어요!
                </Box>
            </Typography>
        <Scrollbars style={{ width: '140%', height: 300 }}>
            {billList}
        </Scrollbars>
        </div>
    );
}
