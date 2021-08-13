import React, { useContext } from 'react';
import { CategoriesContext } from './context/categories.context';
import { ExpensesContext } from './context/expenses.context';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: "5em",
        color: '#ff595eff',
        margin: "0.15em auto",
    },
    dialogTitle: {
        color: "rgba(0, 0, 0, 0.727)",
    },
    dialogText: {
        marginTop: "-0.5em",
    }
}));

function DeleteCategoryConfirmation({ open, toggle, id, categoryName }) {
    const { dispatch } = useContext(CategoriesContext);
    const { dispatch: expensesDispatch } = useContext(ExpensesContext);
    const classes = useStyles();

    return (
        <div className="DeleteConfirmation">
            <Dialog id="DeleteConfirmation-dialog" open={open} onClose={toggle}>
                <HighlightOffIcon className={classes.icon} />
                <DialogTitle className={classes.dialogTitle}>
                    Do you really want to delete category {categoryName}?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className={classes.dialogText}>
                        All expenses under this category will be deleted as well
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        dispatch({ type: "REMOVE", id })
                        expensesDispatch({ type: "DELETE_CATEGORY_ITEMS", category: categoryName })
                        toggle();
                    }}
                        color="primary" autoFocus>
                        Yes
                    </Button>
                    <Button onClick={toggle}
                        color="primary" autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteCategoryConfirmation;
