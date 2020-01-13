export const initialState = {
    smurfs : [],
    isFetching : false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCHING_DATA' : 
            return {
                ...state,
                isFetching : true
            }
        case 'FETCHING_DATA_SUCCESSFUL' : 
            return {
                ...state,
                isFetching : false,
                smurfs: action.payload
            }
        case 'ADDING_SMURF_SUCCESSFUL' :
            return {
                    ...state,
                    smurfs: action.payload
            }
        default: 
            return state;
    }
}