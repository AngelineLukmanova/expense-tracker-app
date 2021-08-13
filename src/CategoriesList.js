import React, { useContext, useState } from 'react';
import './CategoriesList.css';
import Category from './Category';
import { CategoriesContext } from './context/categories.context';
import Alert from '@material-ui/lab/Alert';

function CategoriesList({ colors }) {
    const { categories, dispatch } = useContext(CategoriesContext);
    const [value, setValue] = useState('');
    const [alert, setAlert] = useState(false);

    const categoriesNames = categories.map(cat => cat.name.toUpperCase());
    const runAlert = () => {
        setAlert(true);
        setTimeout(() => { setAlert(false) }, 4000);
    }

    return (
        <div>
            {alert && <div className="CategoriesList-alert">
                <Alert severity="error">
                    This category already exists. Try adding a new one
                </Alert>
            </div>}
            <div className='container'>
                <div className="CategoriesList">
                    <div className="CategoriesList-list">
                        <ul>
                            {categories.map((c, i) =>
                                <Category
                                    runAlert={runAlert}
                                    id={c.id}
                                    name={c.name}
                                    key={c.id}
                                    color={`#${colors[i] || colors[i - colors.length]}`}

                                />)}
                        </ul>
                    </div>
                    <div className="CategoriesList-form">
                        <form onSubmit={e => {
                            e.preventDefault();
                            categoriesNames.includes(value.toUpperCase())
                                ? runAlert()
                                : dispatch({ type: "ADD", newVal: value });
                            setValue('');
                        }}>
                            <input
                                required
                                autoComplete="off"
                                placeholder="Add New Category..."
                                type="text"
                                id="addCategory"
                                value={value}
                                onClick={() => setAlert(false)}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default CategoriesList;


