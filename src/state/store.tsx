import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducer';

// tslint:disable
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                // ...middleware,
            ),
        ),
    );
};

export default configureStore;
