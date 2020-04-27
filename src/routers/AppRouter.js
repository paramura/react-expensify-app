import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpensifyHeaderPage from '../components/ExpensifyHeader';
import ExpensifyHelpPage from '../components/ExpensifyHelpPage';
import ExpensifyNoPageFoundPage from '../components/ExpensifyNoPageFoundPage';

    const AppRouter = () => (
        <BrowserRouter>
            <div>
                <ExpensifyHeaderPage />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/create" component={CreateExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/help" component={ExpensifyHelpPage}/>
                    <Route component={ExpensifyNoPageFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
    
    export default AppRouter;