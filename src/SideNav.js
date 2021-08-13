import React, { useContext, useState } from 'react';
import AddMonthForm from './AddMonthForm';
import DeleteMonthConfirmation from './DeleteMonthConfirmation';
import { CurrentMonthContext } from './context/currentMonth.context';
import { MonthsContext } from './context/months.context';
import { makeStyles } from '@material-ui/core/styles';
import useToggle from './hooks/useToggle';
import { NavLink } from 'react-router-dom';
import { Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import './SideNav.css'

const useStyles = makeStyles((theme) => ({
    select: {
        fontWeight: 300,
        minWidth: "10em",
        color: "#036092",
    },
}));

const SideNav = () => {
    const classes = useStyles();
    const { months } = useContext(MonthsContext);
    const { currentMonth, setCurrentMonth } = useContext(CurrentMonthContext);
    const [isAddingMonth, toggleAddMonth] = useToggle(false);
    const [isDeletingMonth, toggleDeleteMonth] = useToggle(false);
    const [menuItemId, setMenuItemId] = useState('');
    const [menuItemName, setMenuItemName] = useState('');

    return (
        <div className='SideNav'>
            <h2 id="SideNav-name">
                <i className="fas fa-crow" />
                Expense Tracker
            </h2>
            <div className="SideNav-date">
                <Select id="Navbar-select" value={currentMonth || ''}>
                    {months.map(m =>
                        <MenuItem
                            className={classes.select}
                            key={m.id}
                            id={m.id}
                            value={m.name}
                            onClick={(e) => {
                                setCurrentMonth(e.target.getAttribute("data-value") || currentMonth)
                            }}
                        >
                            {m.name}
                            <CloseIcon
                                style={{ marginLeft: "auto" }}
                                onClick={(e) => {
                                    setMenuItemId(m.id);
                                    setMenuItemName(m.name);
                                    toggleDeleteMonth();
                                }}
                            />
                        </MenuItem >)}
                    <MenuItem className={classes.select} value="Add Month" onClick={toggleAddMonth} >
                        <AddCircleOutlineIcon />
                        <span id="SideNav-add">Add Month</span>
                    </MenuItem>
                </Select>
            </div>
            <div className="SideNav-links">
                <NavLink exact to='/' activeClassName="selected">
                    <i className="fab fa-medapps"></i>Dashboard</NavLink>
                <NavLink exact to="/edit_categories" activeClassName="selected">
                    <i className="fas fa-user-astronaut"></i>Categories</NavLink>
                <NavLink exact to="/expense_report" activeClassName="selected">
                    <i className="far fa-clipboard"></i>Expense Report</NavLink>
            </div>
            {isAddingMonth &&
                <AddMonthForm open={isAddingMonth} toggle={toggleAddMonth} />}
            {isDeletingMonth &&
                <DeleteMonthConfirmation
                    open={isDeletingMonth}
                    toggle={toggleDeleteMonth}
                    id={menuItemId}
                    month={menuItemName} />}
        </div>
    );
}

export default SideNav;