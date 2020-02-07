import React from 'react';
import { Responsive } from 'semantic-ui-react';
import Editor from '../components/write/Editor';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <WriteActionButtons />
        </Responsive>
    );
};

export default WritePage;