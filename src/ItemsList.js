import React, { useContext } from 'react';
import { ExpensesContext } from './context/expenses.context';
import { CurrentMonthContext } from './context/currentMonth.context';
import Item from './Item';
import './ItemsList.css';

function ItemsList(props) {
    const { expenses } = useContext(ExpensesContext)
    const { currentMonth } = useContext(CurrentMonthContext);
    const categoryName = props.match.params.name;

    return (
        <div className="ItemsList">
            <div className="ItemsList-container">
                <table className="ItemsList-table">
                    <thead>
                        <tr>
                            <th colSpan="4" className="column1">{categoryName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((e, i) => (
                            (categoryName === e.category && currentMonth === e.date)
                            && <Item key={e.id} id={e.id} item={e.item} amount={e.amount} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemsList;

