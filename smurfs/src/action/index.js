import axios from 'axios'

export const fetchingData = () => {
    return dispatch => {
        dispatch({type : 'FETCHING_DATA'})

        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log('FETCHING DATA SUCCESSFUL:', res)
                dispatch({type : 'FETCHING_DATA_SUCCESSFUL', payload : res.data})
            })
            .catch(err => {
                console.log('ERROR NOT SUCCESSFUL:', err)
            })
    }
}