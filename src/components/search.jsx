import React from 'react';

const SearchData = (props) => {
	return (
		<input
			className="searchInput"
			placeholder="Search By Company Name"
			type="text"
			onChange={props.searchRecord}
			value={props.searchKeyword}
		/>
	);
};

export default SearchData;
