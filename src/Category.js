import React from 'react';
import DeleteCategoryConfirmation from './DeleteCategoryConfirmation';
import useToggle from './hooks/useToggle';
import DeleteIcon from '@material-ui/icons/Delete';
import './Category.css';


function Category({ name, id, color }) {
    const [isDeleting, toggleDeleting] = useToggle(false);

    return (
        <div>
            <div style={{ backgroundColor: color }} className="Category">
                <li>{name}</li>
                <DeleteIcon
                    style={{ fontSize: "1.2em" }}
                    className="Caregory-btn-delete"
                    onClick={() => {
                        toggleDeleting();
                    }}
                />
            </div>
            {isDeleting &&
                <DeleteCategoryConfirmation
                    open={isDeleting}
                    toggle={toggleDeleting}
                    id={id}
                    categoryName={name} />}
        </div >
    );
}

export default Category;