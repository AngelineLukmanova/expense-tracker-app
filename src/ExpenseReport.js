import React, { useContext, useState } from 'react';
import './ExpenseReport.css'
import Chart from './Chart';
import { CurrentMonthContext } from './context/currentMonth.context';
import { ExpensesContext } from './context/expenses.context';
import { v4 as uuidv4 } from 'uuid';

function ExpenseReport({ report }) {
    const { currentMonth } = useContext(CurrentMonthContext);
    const { expenses } = useContext(ExpensesContext);
    const [sortBy, setSortBy] = useState("Category");

    const exp = expenses.map(e => ({ ...e }));
    const total = expenses.map(e => currentMonth === e.date && Number(e.amount)).reduce((a, b) => a + b);

    return (
        <div className="Expense-report">
            <div className="Doughnut-chart">
                <Chart report={report} month={currentMonth} />
            </div>
            <table>
                <caption>{currentMonth} Table Report</caption>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Item</th>
                        <th className="sortBy" onClick={() => setSortBy("Category")}>
                            Category
                            <i className={`fas fa-caret-${sortBy === 'Category' ? 'down' : 'up'}`} />
                        </th>
                        <th className="sortBy" onClick={() => setSortBy("Amount")}>
                            Amount
                            < i className={`fas fa-caret-${sortBy === 'Category' ? 'up' : 'down'}`} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {exp
                        .sort(sortBy === "Category"
                            ? ((a, b) => a.category !== b.category ? a.category < b.category ? -1 : 1 : 0)
                            : ((a, b) => a.amount - b.amount))
                        .map(e => (
                            currentMonth === e.date &&
                            <tr key={uuidv4()}>
                                <td>{e.date}</td>
                                <td>{e.item}</td>
                                <td>{e.category}</td>
                                <td >{e.amount}</td>
                            </tr>
                        ))}
                    <tr>
                        <td colSpan="4">$</td>
                    </tr>
                    {Object.keys(report).map(c =>
                        <tr key={uuidv4()}>
                            <td colSpan="2">{c}</td>
                            <td colSpan="2">{report[c]}</td>
                        </tr>)}
                    <tr className="table-score">
                        <th id="score" colSpan="3">TOTAL :</th>
                        <td id="totalAmount">${total}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default ExpenseReport;