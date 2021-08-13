import React, { useContext } from 'react';
import './Dashboard.css';
import AddItemForm from './AddItemForm';
import { Link } from 'react-router-dom';
import { CurrentMonthContext } from './context/currentMonth.context';
import { ExpensesContext } from './context/expenses.context';
import { CategoriesContext } from './context/categories.context';
import { v4 as uuidv4 } from 'uuid';


const Dashboard = ({ report, colors }) => {
    const { expenses } = useContext(ExpensesContext);
    const { categories } = useContext(CategoriesContext);
    const { currentMonth } = useContext(CurrentMonthContext);

    return (
        <div>
            <AddItemForm />
            <div className="Dashboard">
                {categories.map((c, i) => (
                    <div
                        key={c.id}
                        className="Dashboard-category"
                        style={{ borderTop: `7px solid #${colors[i] || colors[i - colors.length]}` }}
                    >
                        <Link to={`/categories/${c.name}`}>{c.name}</Link>
                        <ul>
                            {expenses.map(e => (
                                (c.name === e.category && currentMonth === e.date)
                                && (
                                    <li key={e.id}>
                                        <span>{e.item}</span>
                                        <span style={{ color: "grey" }}>
                                            <span id="amount">{e.amount}</span>
                                            $
                                        </span>
                                    </li>
                                )))}
                        </ul>
                        <div className="Dashboard-category-total">
                            <hr />
                            Total:
                            {Object.keys(report).map(r =>
                                r === c.name &&
                                (<span style={{ color: "grey" }} key={uuidv4()}>
                                    ${report[r]}
                                </span>))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Dashboard;