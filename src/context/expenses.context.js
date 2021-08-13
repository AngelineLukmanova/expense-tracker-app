import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import reducer from "../reducer/expenseTracker.reducer";
import { v4 as uuidv4 } from 'uuid';


export const ExpensesContext = createContext();

export function ExpensesProvider(props) {
    const defaultVal = [
        { id: uuidv4(), date: "July 2021", category: "Groceries", item: "Costco", amount: 170 },
        { id: uuidv4(), date: "July 2021", category: "Groceries", item: "ShoppersDM", amount: 23 },
        { id: uuidv4(), date: "July 2021", category: "Groceries", item: "Whole Foods", amount: 57 },
        { id: uuidv4(), date: "July 2021", category: "Bills", item: "Rent", amount: 1600 },
        { id: uuidv4(), date: "July 2021", category: "Bills", item: "Internet", amount: 70 },
        { id: uuidv4(), date: "July 2021", category: "Bills", item: "Phone", amount: 85 },
        { id: uuidv4(), date: "July 2021", category: "Bills", item: "Car Insurance", amount: 120 },
        { id: uuidv4(), date: "July 2021", category: "Bills", item: "Parking", amount: 100 },
        { id: uuidv4(), date: "July 2021", category: "Bills", item: "BC Hydro", amount: 25 },
        { id: uuidv4(), date: "July 2021", category: "Clothes", item: "Uniqlo", amount: 25 },
        { id: uuidv4(), date: "July 2021", category: "Clothes", item: "Levis", amount: 66 },
        { id: uuidv4(), date: "July 2021", category: "Transit", item: "Gas", amount: 60 },
        { id: uuidv4(), date: "July 2021", category: "Transit", item: "Compass Card", amount: 90 },
        { id: uuidv4(), date: "July 2021", category: "Fun", item: "Cinema", amount: 35 },
        { id: uuidv4(), date: "July 2021", category: "Fun", item: "Chicken McNuggets at 3am", amount: 10 },
        { id: uuidv4(), date: "July 2021", category: "Pets", item: "Vet Appointment", amount: 110 },
        { id: uuidv4(), date: "July 2021", category: "Pets", item: "Toys for Peanut", amount: 27 },
        { id: uuidv4(), date: "July 2021", category: "For Home", item: "Ikea", amount: 276 },
        { id: uuidv4(), date: "July 2021", category: "For Home", item: "Dollarama", amount: 34 },
        { id: uuidv4(), date: "July 2021", category: "For Home", item: "Facebook Marketplace Lamp", amount: 15 },
        { id: uuidv4(), date: "July 2021", category: "Miscellaneous", item: "Gift for Kris", amount: 60 }



    ];

    const [expenses, dispatch] = useLocalStorage("expenses", defaultVal, reducer);

    return (
        <ExpensesContext.Provider value={{ expenses, dispatch }}>
            {props.children}
        </ExpensesContext.Provider>
    );

}