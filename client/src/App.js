import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Details from './components/details/Details';
import Search from './components/search/Search';
import Spinner from './components/layout/Spinner';
import Alert from './components/layout/Alert';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

const App = () => (
    <Provider store={store}>
        <Router>
            <Spinner />
            <Header />
            <Alert />
            <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/details/:id' component={Details} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
