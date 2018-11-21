import React from 'react';

export const fetchFiles = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_FILES_REQUEST'});
            const response = await fetch('/api/files');
            let data = await response.json();
            dispatch(getFiles(data));
        } catch (e) {
            console.log('error ', e)
            // catch errors from fetch
        }
    }
};


export const deleteFile = id => {
    return async dispatch => {
        try {
            const response = await fetch(`/api/file/${id}`, {method: 'DELETE'});
            let data = await response.json();
            dispatch(removeFile(id));
        } catch (e) {
            console.log('could not delete file ', e)
        }
    }
};

export const saveFiles = files => {
    let formData = new FormData();
    files.map(file => formData.append('file[]', file));
    const config = {
        method: 'POST',
        body: formData,
    };
    return async dispatch => {
        try {
            const response = await fetch('/api/upload', config);
            let data = await response.json();
            dispatch(addFile(data));
        } catch (e) {

        }
    }
};

const addFile = response => ({
        type: 'ADD_FILE_SUCCESS',
        response
});

const getFiles = response => ({
        type: 'FETCH_FILES_SUCCESS',
        response
});

const removeFile = id => ({
    type: 'DELETE_FILE_SUCCESS',
    id
});

export const searchAllFiles = text => ({
    type: 'SEARCH_FILES',
    text
});

export const resetSearch = () => ({
    type: 'RESET_SEARCH'
});

export const sortFiles = col => ({
    type: 'SORT_FILES',
    sortKey: col
});