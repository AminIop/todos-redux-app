import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSagaMiddleware } from 'redux-saga';

import { watcherSaga } from './sagas/root';
import rootReducer from './reducers'


const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = composeWithDevTools({})
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watcherSaga)

export default store