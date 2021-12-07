import React from "react";
import icon from "./../Images/search.png";

//Style sheet
import "./../styles/globalStyle.css";

const Search = () => {
    return (
        <div className="search">
            <div>
                <input type="text" placeholder="Search..." />
            </div>
            <div className="search-btn">
                <img src={icon} alt="" className="magnifier" />
            </div>
        </div>
    );
};

export default Search;
