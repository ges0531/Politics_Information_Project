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
    const classes = useStyles();
    const pId = props.pId;
    console.log(pId);
    const [promises, setPromises] = useState({});

    async function fetchMyAPI() {
        let response = await fetch(`http://70.12.247.60:8000/promise/${pId}`);
        response = await response.json();
        setPromises(response);
    }

    useEffect(() => {
        fetchMyAPI();
    }, []);

    console.log(promises);

    return (
        <div className={classes.root}>
            <FixedSizeList height={400} width={500} itemSize={46} itemCount={200}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
}
