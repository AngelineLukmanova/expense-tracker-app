import React, { useState, useContext } from 'react';
import { ExpensesContext } from './context/expenses.context';
import './Item.css';

function Item({ item, amount, id, color }) {
    const { dispatch } = useContext(ExpensesContext);
    const [isEditing, setEditing] = useState(false);
    const [value, setValue] = useState(item);
    const [amountVal, setAmountVal] = useState(amount);

    return (
        <tr className="Item-table-row">
            {isEditing
                ? (
                    <td className="Item-edit-form" colSpan="4">
                        <form onSubmit={e => {
                            e.preventDefault();
                            dispatch({ type: "EDIT_ITEM", id, newVal: value, newAmount: amountVal })
                            setEditing(false);
                        }}>
                            <input autoFocus type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
                            <input type="number" value={amountVal} onChange={(e) => setAmountVal(e.target.value)}></input>
                            <button><i className="far fa-save Item-btn"></i></button>
                        </form>
                    </td>)
                : (
                    <>
                        <td className="column1">{item}</td>
                        <td className="column2">{amount}$</td>
                        <td className="column3">
                            <i className="fas fa-pen Item-btn" onClick={() => setEditing(true)}></i>

                        </td>
                        <td className="column4">
                            <i className="fas fa-trash-alt Item-btn" onClick={() => dispatch({ type: "REMOVE", id })}></i>

                        </td>

                    </>
                )
            }
        </tr >

    );
}

export default Item;

