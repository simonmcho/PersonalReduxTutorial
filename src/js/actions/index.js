import { ADD_ARTICLE } from '../constants';

const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export {
    addArticle
}