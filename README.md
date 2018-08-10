# This is Tayst Website, with first iteration of designs from dk

## Aug 9, 2018
### Redux/State Management [LINK HERE](https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_getting_to_know_the_Redux_store)
- Principles of Redux:
    1.      
    2. Only way to change state is by sending a signal (action) to the store    
    3. State is immutable in Redux    

BELOW IS JUST REDUX. IT CAN WORK WITH ALMOST ANY FRAMEWORK. LATER ON, WE WILL LEARN HOW TO CONNECT REDUX AND REACT TOGETHER.

#### How to get started:
- run `yarn add redux --dev` or `npm --install redux --save-dev` to install `react` as a dev dependency in your environment
- run `yarn start` or `npm start` to launch your app on your local machine

### Steps to know: 
- `Store`: Orchestrates all moving parts in Redux. The state of the whole application lives in the `store`
- `Reducers`: Produces the `state`. It is passed into the store. The `state` must return entirely from `reducers`
    - It is a `js` function
    - Takes 2 params. The `current state` and `action`
    - Remember the `state` is immutable in `Redux`
    - So `reducers` are pure functions; they return the same output for the given input
    - Dispatching an action (sending a signal to the store) is the way to change the state without breaking rule #3
- `Actions`: `js` objects. Has a `type` (describes how the state should change) and `payload`. EG:
    ```
    {
        type: 'ADD_ARTICLE',
        payload: {
            name: 'Tutorial',
            id: 1
        }
    }
    ```
    - Best way to deal with actions is to wrap it in a function. See below or `/src/js/actions/` for details:
    ```
        const actionToDispatch = someObject => ({
            type: 'TANK',
            payload: {
                name: 'TANK_ONE',
                id: 1
            }
        })
    ```
- `Reducers` receive an action, and determines the next state depending on the `action type`, which is a key in the `action` object
###### PRO TIP: Reducers will grow as app gets more complex. [Follow this link for best practices](https://redux.js.org/docs/api/combineReducers.html)

Exercise:
- We created `/src/index.js` and assigned `store` and `addArticles` action as key/value pairs for the `window` object
- This allowed us to play with `store`'s methods on the browser, such as `store.getState()`, `store.subscribe()`. and `store.dispatch()`
- We did the following:
```
const firstArticle = { name: 'first article', id: 1 };
window.store.dispatch(window.addArticles(firstArticle));
window.store.getState();
// logs {articles: Array(1)} 
```

### Connecting Redux and React together
- For `React`, there is [react-redux](https://redux.js.org/docs/basics/UsageWithReact.html)
- `react-redux` is a small library that connects `React` and `Redux`. The most important method is `connect`
- run `yarn add react-redux --dev` or `npm install react-redux --save-dev` to install for your local dev environment

2 Fundamental things:
- `mapStateToProps` function: Connects a part of the `Redux` state to the `props` of a `React` component. This allows the component to have access to the part of the store it needs
- `mapDispatchToProps` function: Connects `Redux actions` to `React props`. This way a connected component can dispatch `actions`






