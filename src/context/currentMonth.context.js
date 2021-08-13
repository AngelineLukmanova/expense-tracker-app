import React, { createContext, useState, useContext, useEffect } from 'react';
import { MonthsContext } from './months.context';

export const CurrentMonthContext = createContext();

export function CurrentMonthProvider(props) {
    const [currentMonth, setCurrentMonth] = useState('');
    const { months } = useContext(MonthsContext);

    useEffect(() => {
        setCurrentMonth(months[months.length - 1].name)
    }, [months]);

    return (
        <CurrentMonthContext.Provider value={{ currentMonth, setCurrentMonth }}>
            {props.children}
        </CurrentMonthContext.Provider>
    )
}

