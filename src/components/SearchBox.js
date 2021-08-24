import React from "react";

const SearchBox = ({ handleChnage, placeHolder }) => {
	return (
		<div className="searchBox">
			<input type="search" onChange={handleChnage} placeHolder={placeHolder} />
		</div>
	);
};

export default SearchBox;
