import React from 'react';
import { Responsive } from 'semantic-ui-react';
import Editor from '../write/Editor';
import WriteActionButtons from '../write/WriteActionButtons';

const WritePage = () => {
    return (
        <Responsive>
            <Editor />
            <WriteActionButtons />
        </Responsive>
    );
};

export default WritePage;