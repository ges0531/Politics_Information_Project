import React from 'react';
import { Responsive } from 'semantic-ui-react';
import Editor from '../write/Editor';

const WritePage = () => {
    return (
        <Responsive>
            <Editor />
        </Responsive>
    );
};

export default WritePage;