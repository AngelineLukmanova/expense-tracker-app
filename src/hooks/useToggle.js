import { useState } from 'react';

const useToggle = (initialVal) => {
    const [state, setState] = useState(initialVal);

    const toggleState = () => {
        setState(!state);
    }
    return [state, toggleState];
};

export default useToggle;