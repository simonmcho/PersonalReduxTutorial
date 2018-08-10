import { ADD_ARTICLE } from '../constants';

const initialState = { 
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE: 
            console.log("RETURNING ADD_ARTICLE CASE! SEE ACTION BELOW...");
            console.log(action);
            return {...state, articles: [...state.articles, action.payload]};
            //return Object.assign(state, action.payload);
        default:
            console.log("RETURNING DEFAULT CASE! SEE ACTION BELOW...");
            console.log(action);
            return state;
    }
}

export default rootReducer;