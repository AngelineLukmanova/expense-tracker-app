import React, { useContext, useState } from 'react';
import { MonthsContext } from './context/months.context';
import { Button, TextField, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const date = new Date();

function AddMonthForm({ open, toggle }) {
    const [isAlert, setAlert] = useState(false);
    const { months, dispatch } = useContext(MonthsContext);

    const [inputVal, setInputVal] = useState(
        `${date.getFullYear()}-${String(date.getMonth()).length === 1 ? '0' : ''}${date.getMonth() + 1}`);

    const handleClick = () => {
        const addedMonths = months.map(m => m.name);
        let month = inputVal.split("-")[1];
        let year = inputVal.split("-")[0];
        let index = month[0] === "0" ? month[1] : month;
        let newVal = `${monthNames[index - 1]} ${year}`;
        if (!addedMonths.includes(newVal)) {
            dispatch({ type: "ADD", newVal });
            toggle();
        } else {
            setAlert(true);
        }
    }

    return (
        <div >
            <Dialog open={open} onClose={toggle}>
                {isAlert &&
                    <Alert variant="outlined" severity="error">
                        This month is already added
                    </Alert>}
                <DialogTitle style={{ color: "#0077b6" }} >{"Add New Month"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter a month and a year
                    </DialogContentText>
                    <TextField
                        id="date"
                        onChange={(e) => setInputVal(e.target.value)}
                        defaultValue={inputVal}
                        type="month"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        style={{ color: "#0077b6" }}
                        onClick={() => handleClick()}
                        color="primary" autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddMonthForm;