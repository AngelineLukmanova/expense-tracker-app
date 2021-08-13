import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import reducer from "../reducer/expenseTracker.reducer";
import { v4 as uuidv4 } from 'uuid';


export const MonthsContext = createContext();

export function MonthsProvider(props) {
    const defaultVal = {
        months: [
            { id: uuidv4(), name: "June 2021" },
            { id: uuidv4(), name: "July 2021" }
        ]
    }

    const [months, dispatch] = useLocalStorage("months", defaultVal.months, reducer);
    return (
        <MonthsContext.Provider value={{ months, dispatch }}>
            {props.children}
        </MonthsContext.Provider>
    );

}