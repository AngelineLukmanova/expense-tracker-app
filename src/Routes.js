import React, { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import CategoriesList from './CategoriesList';
import Dashboard from './Dashboard';
import ItemsList from './ItemsList';
import ExpenseReport from './ExpenseReport';
import { CategoriesContext } from './context/categories.context';
import { ExpensesContext } from './context/expenses.context';
import { CurrentMonthContext } from './context/currentMonth.context';

const colors = [
    "ff595eff",
    "ffca3aff",
    "8ac926ff",
    "1982c4ff",
    "d8bbffff",
    "f28482ff",
    "94d2bdff",
    "f5cac3ff",
    "84a59dff",
    "8e7dbeff",
    "d88c9aff",
    "ee9b00ff"
]

function Routes() {
    const { categories } = useContext(CategoriesContext);
    const { expenses } = useContext(ExpensesContext);
    const { currentMonth } = useContext(CurrentMonthContext);

    const renderCategory = (props) => {
        const categoriesNames = categories.map(c => c.name);
        if (categoriesNames.includes(props.match.params.name)) {
            return <ItemsList {...props} />
        } else {
            return <Route render={() => <h1>This category does not exist!</h1>}></Route>
        }
    }

    const categoriesNames = categories.map(c => c.name);
    const categoriesAmount = categoriesNames
        .map(category => expenses.map(e => (category === e.category && currentMonth === e.date) && Number(e.amount)).reduce((a, b) => a + b));
    const categoriesReport = categoriesAmount.reduce(function (result, value, index) {
        result[categoriesNames[index]] = value;
        return result;
    }, {});

    return (
        <Switch>
            <Route exact path="/" render={() => <Dashboard report={categoriesReport} colors={colors} />} />
            <Route exact path="/edit_categories" render={() => <CategoriesList colors={colors} />} />
            <Route exact path="/expense_report" render={() => <ExpenseReport report={categoriesReport} />}></Route>
            <Route exact path="/categories/:name" render={routeProps => renderCategory(routeProps)}></Route>
            <Redirect to='/' />
        </Switch>
    );
}

export default Routes;