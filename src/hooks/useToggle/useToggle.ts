import { useState } from 'react';

type UseToggleReturnType = [boolean, () => void];

const useToggle = (initial: boolean | undefined = false): UseToggleReturnType => {
    const [value, setValue] = useState(initial);

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    };

    return [value, toggle];
};

export default useToggle;
