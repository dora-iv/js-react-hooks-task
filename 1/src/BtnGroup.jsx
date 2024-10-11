import cn from 'classnames';
import React, {useState} from 'react';

const BtnGroup = () => {
    // BEGIN (write your solution here)
    const [activeBtn, setActiveBtn] = useState(null);

    const handleLeftClick = () => {
        setActiveBtn('left');
    };

    const handleRightClick = () => {
        setActiveBtn('right');
    };

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={cn('btn', 'btn-secondary', 'left', {active: activeBtn === 'left'})}
                onClick={handleLeftClick}
            >
                Left
            </button>
            <button
                type="button"
                className={cn('btn', 'btn-secondary', 'right', {active: activeBtn === 'right'})}
                onClick={handleRightClick}
            >
                Right
            </button>
        </div>
    );
    // END
};

export default BtnGroup;