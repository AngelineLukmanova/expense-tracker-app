import React, { useState, useContext } from 'react';
import './AddItemForm.css';
import { CurrentMonthContext } from './context/currentMonth.context';
import { ExpensesContext } from './context/expenses.context';
import { CategoriesContext } from './context/categories.context';


function AddItemForm() {
    const [itemValue, setItemValue] = useState('');
    const [selectCategory, setSelectCategory] = useState("defaultSelect");
    const [amount, setAmount] = useState('');

    const { dispatch } = useContext(ExpensesContext);
    const { categories } = useContext(CategoriesContext);
    const { currentMonth } = useContext(CurrentMonthContext);

    return (
        <div className="AddItemForm-container">
            <div className="AddItemForm-form">
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch({ type: "NEW_ITEM", date: currentMonth, category: selectCategory, item: itemValue, amount });
                    setItemValue('');
                    setSelectCategory("defaultSelect");
                    setAmount('');
                }}>
                    <p>ADD NEW ITEM</p>
                    <input required
                        id="item"
                        autoComplete="off"
                        placeholder="Item"
                        type="text"
                        value={itemValue}
                        onChange={e => setItemValue(e.target.value)}>
                    </input>
                    <input required
                        id="amount"
                        placeholder="Amount"
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}>
                    </input>
                    <select value={selectCategory} onChange={e => setSelectCategory(e.target.value)}>
                        <option disabled value="defaultSelect">
                            Category
                        </option>
                        {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                    <button disabled={selectCategory === "defaultSelect" ? true : false}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddItemForm;