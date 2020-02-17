import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        height: 400,
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
}));

function renderRow(props) {
    const { index, style } = props;
    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
        </ListItem>
    );
}

renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

export default function VirtualizedList(props) {
    var billList
    const classes = useStyles();
    const pName = props.pName;
    console.log(pName);
    const [bills, setBills] = useState({});

    async function fetchMyAPI() {
        let response = await fetch(`http://52.79.219.137:80/bill/${pName}`);
        response = await response.json();
        setBills(response);
    }

    useEffect(() => {
        fetchMyAPI();
    }, []);

    if (bills[0]) {
        billList = bills.map((bill, index) => (<li key={index}>{bill.bName}</li>));
    } else {
        return(<div>1</div>)
    }

    console.log(billList, 1111)

    return(
    <div>{billList}</div>
    )
}
