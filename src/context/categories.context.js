import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import reducer from "../reducer/expenseTracker.reducer";
import { v4 as uuidv4 } from 'uuid';


export const CategoriesContext = createContext();

export function CategoriesProvider(props) {
    const defaultVal = [
        { id: uuidv4(), name: "Groceries" },
        { id: uuidv4(), name: "Bills" },
        { id: uuidv4(), name: "Clothes" },
        { id: uuidv4(), name: "Transit" },
        { id: uuidv4(), name: "Fun" },
        { id: uuidv4(), name: "Pets" },
        { id: uuidv4(), name: "For Home" },
        { id: uuidv4(), name: "Miscellaneous" }
    ];

    const [categories, dispatch] = useLocalStorage("categories", defaultVal, reducer);

    return (
        <CategoriesContext.Provider value={{ categories, dispatch }}>
            {props.children}
        </CategoriesContext.Provider>
    );

}