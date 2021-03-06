import React from 'react';
import './styles/styles.scss';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import * as serviceWorker from './Components/ServiceWorker/serviceWorker';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './Components/App/App';
import HomePage from './pages/homePage/homePage';
import ProjectPage from './pages/projectPage/projectPage';
import SkillsPage from './pages/skillsPage/skillsPage';



const routes = (
    <HashRouter basename='/'>
        <Switch>
            <App>
				<Route path="/" exact component={HomePage} />
				<Route path="/projects" exact component={ProjectPage} />
				<Route path="/skills" exact component={SkillsPage} />
            </App>
        </Switch> 
    </HashRouter>
);

const outlet = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

if (module.hot) {
    module.hot.accept(render);
}

serviceWorker.unregister();