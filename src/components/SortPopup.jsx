import React, {
    useState,
    useRef,
    useEffect,
    useCallback
} from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { setOrderBy } from '../redux/actions/filters';

const sortItems = [
    {
        name: 'популярности',
        type: 'popular'
    },
    {
        name: 'цене',
        type: 'price'
    },
    {
        name: 'алфавиту',
        type: 'name'
    }
];

const SortPopup = ({ sortBy }) => {

    const [visablePopup, setVisablePopup] = useState(false);
    const dispatch = useDispatch();
    const sortRef = useRef();

    const togglePopupHandler = () => {
        setVisablePopup(!visablePopup);
    };

    const onActiveSelected = (sortItem) => {
        dispatch(setOrderBy(sortItem));
        setVisablePopup(false);
    }

    const sortOutsideClickListener = useCallback((e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisablePopup(false);
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('click', sortOutsideClickListener);
        return () => document.body.removeEventListener('click', sortOutsideClickListener);;
    }, [sortOutsideClickListener]);

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    className={classNames({ 'rotated': visablePopup })}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={togglePopupHandler}>{sortBy.name}</span>
            </div>
            {
                visablePopup && <div className="sort__popup">
                    <ul>
                        {
                            sortItems.map((sortItem, index) => <li
                                key={index}
                                className={classNames({ 'active': sortBy.type === sortItem.type })}
                                onClick={() => onActiveSelected(sortItem)}
                            >{sortItem.name}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default SortPopup;