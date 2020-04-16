import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
export default class Province extends React.Component {
	onSelect = (event) => {
		this.props.onSelect(parseInt(event.target.value));
	};
	render() {
		return (
			// <div className="MuiFormControl-root">
			// 	<label>Province: </label>
			// 	<select onChange={this.onSelect}>
			// 		<option>Select province</option>
			// 		{this.props.data.map((prov) => (
			// 			<option key={prov.id} value={prov.id} selected={this.props.selectedId === prov.id}>
			// 				{prov.name}
			// 			</option>
			// 		))}
			// 	</select>
			// </div>
			<div>
				<FormControl style={{ minWidth: 120 }}>
					<InputLabel id="demo-simple-select-label">Country: </InputLabel>
					<Select onChange={this.onSelect || this.props.countryChange}>
						{/* <option>Select province</option> */}
						{this.props.data.map((prov) => (
							<MenuItem key={prov.id} value={prov.id} selected={this.props.selectedId === prov.id}>
								{prov.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		);
	}
}
// import React, { Component } from 'react';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// export default class Province extends React.Component {
// 	onSelect = (event) => {
// 		this.props.onSelect(parseInt(event.target.value));
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<FormControl style={{ minWidth: 120 }}>
// 					<InputLabel id="demo-simple-select-label">Country</InputLabel>
// 					<Select
// 						onChange={this.props.countryChange}
// 						// onClick={this.onSelect}
// 						// onChange={this.onSelect}
// 					>
// 						{this.props.data.map((country) => {
// 							return (
// 								<MenuItem
// 									key={country.id}
// 									value={country.name}
// 									selected={this.props.selectedId === country.id}
// 								>
// 									{country.name}
// 								</MenuItem>
// 							);
// 						})}
// 					</Select>
// 				</FormControl>
// 			</div>
// 		);
// 	}
// }
