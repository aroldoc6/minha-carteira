import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from '../Components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Register from '../Components/Register';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
            <Route path="/Cadastro" exact component={Register} /> 
        </Switch>
    </Layout>
);

export default AppRoutes;