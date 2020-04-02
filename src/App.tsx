// React
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    RouteProps,
    Switch,
    Route,
} from 'react-router-dom';
// Styles
import style from './styles/App.module.scss';
// Components
import Portfolio from './containers/Portfolio/Portfolio';
// Pages
import Home from './containers/Home/Home';

class App extends Component<RouteProps,{}> {
    render(){
        return (
            <Router>
                <div className={style.App}>
                    <Switch>
                        <Route key=':id' path='/p/:id' component={Portfolio}/>
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
