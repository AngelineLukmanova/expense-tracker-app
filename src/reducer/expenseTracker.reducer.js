import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), name: action.newVal }];
        case "REMOVE":
            return state.filter(s => s.id !== action.id);
        case "EDIT":
            return state.map(s => s.id === action.id ? { ...s, name: action.newVal } : s);
        case "NEW_ITEM":
            return [...state,
            { id: uuidv4(), date: action.date, category: action.category, item: action.item, amount: action.amount }];
        case "EDIT_ITEM":
            return state.map(s => s.id === action.id ? { ...s, item: action.newVal, amount: action.newAmount } : s);
        case "DELETE_CATEGORY_ITEMS":
            return state.filter(s => s.category !== action.category);
        case "DELETE_MONTH_ITEMS":
            return state.filter(s => s.date !== action.month);
        default:
            alert("!")
    }

}

export default reducer;