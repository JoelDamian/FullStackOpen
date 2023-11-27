import React from "react";

const Filter = ({filter, handleChangeFilter}) => {
    return(<div>
        find countries <input value={filter} onChange={handleChangeFilter}/>
    </div>)
};

export default Filter;