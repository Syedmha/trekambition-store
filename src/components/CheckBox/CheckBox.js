import '../FilterBar/FilterBar.css';

function CheckBox({ type, checked, changeHandler }) {
    return (
        <div className="option">
            <label className="input-label very-sm-txt light-txt flex-row-container" htmlFor={type} >
                <input
                    className="input-checkbox"
                    type="checkbox"
                    name={type}
                    id={type}
                    checked={checked}
                    onChange={changeHandler}
                />{" "}
                {type}
            </label>
        </div>
    );
}

export default CheckBox;