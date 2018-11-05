export const allFiles = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_FILES_SUCCESS':
            return action.response.data.files;
        case 'ADD_FILE_SUCCESS':
            return state.concat(action.response.data.files);
        case 'DELETE_FILE_SUCCESS':
            return state.filter(e => e.id !== action.id);
        case 'SEARCH_FILES':
            console.log('in search files reducer', action)
            // return Object.assign([], state, [
            //     state.filter(f => f.file.toLowerCase().includes(action.text.toLowerCase()))
            // ]);
            // console.log('state now is ', state)
            return state.filter(f => f.file.toLowerCase().includes(action.text.toLowerCase()));
        case 'RESET_SEARCH':
            console.log('resetting', state);
        default:
            return state;
    }
};

export const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_FILES_REQUEST':
            return true;
        case 'FETCH_FILES_SUCCESS':
        case 'FETCH_FILES_FAILURE':
            return false;
        default:
            return state;
    }
};

export const isUploading = (state = false, action) => {
    switch (action.type) {
        case 'UPLOAD_FILES_REQUEST':
            return true;
        case 'UPLOAD_FILES_SUCCESS':
        case 'UPLOAD_FILES_FAILURE':
            return false;
        default:
            return state;
    }
};
