export const allFiles = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_FILES_SUCCESS':
            return {
                ...state,
                files: action.response.data.files,
                sortKey: 'file',
                sortOrder: 'asc'
            };
        case 'ADD_FILE_SUCCESS':
            return {
                ...state,
                files: state.files.concat(action.response.data.files)
            }
        case 'DELETE_FILE_SUCCESS':
            return{
                ...state,
                files: state.files.filter(e => e.id !== action.id)
            }
        case 'SEARCH_FILES':
            return {
                ...state,
                files: action.text.length > 0 ? state.files.filter(f => f.file.toLowerCase().includes(action.text.toLowerCase())) : state.files
            }
        case 'SORT_FILES':
            let sortKey = action.sortKey || 'file';

            if(sortKey === state.sortKey) {
                state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            }

            return {
                files: state.files.sort( (a, b) => {
                    if( a[sortKey] < b[sortKey] ) return state.sortOrder === 'asc' ? -1 : 1;
                    if( a[sortKey] > b[sortKey] ) return state.sortOrder === 'asc' ? 1: -1;
                    return 0;
                }),
                sortKey: sortKey,
                sortOrder: state.sortOrder
            };
        case 'RESET_SEARCH':
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

export const isSorting = (state = {sortKey: 'file', sortOrder: 'asc'}, action) => {
    switch (action.type) {
        case 'SORT':
            let sortKey = action.sortKey || 'file';

            if(sortKey === state.sortKey) {
                state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            }

            return {
                bizzes: List(state.bizzes.sort( (a, b) => {
                    if( a[sortKey] < b[sortKey] ) return state.sortOrder === 'asc' ? -1 : 1;
                    if( a[sortKey] > b[sortKey] ) return state.sortOrder === 'asc' ? 1: -1;
                    return 0;
                })),
                sortKey: sortKey,
                sortOrder: state.sortOrder
            };
    }
}
