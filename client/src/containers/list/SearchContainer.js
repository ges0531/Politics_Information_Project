import React, { useState } from 'react';
import { Search } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { searchKeyword } from '../../modules/list';

export default function SearchContainer (props) {
    const keyword = useSelector(({ list }) => list.keyword );
    const [ value, setValue ] = useState(keyword);
    const dispatch = useDispatch();

    const handleKeyword = (e) => {
        // e.preventDefault();
        setValue(e.target.value);
        // dispatch(searchKeyword(e.target.value));
    }

    const handleEnter = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            dispatch(searchKeyword(value));
        }
    }

    return (
        <form>
            <Search type="text" placeholder="search.."
                value={value} onSearchChange={handleKeyword} onKeyPress={handleEnter} />
        </form>
    )
}

