// import React, { Component } from 'react';

// export default class City extends React.Component {
// 	onSelect = (event) => {
// 		this.props.onSelect(parseInt(event.target.value));
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<span>City: </span>
// 				<select onClick={this.onSelect}>
// 					<option>Select city</option>
// 					{this.props.data.map((city) => (
// 						<option key={city.id} value={city.id} selected={this.props.selectedId === city.id}>
// 							{city.name}
// 						</option>
// 					))}
// 				</select>
// 			</div>
// 		);
// 	}
// }
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class City extends React.Component {
	onSelect = (event) => {
		this.props.onSelect(parseInt(event.target.value));
	};
	render() {
		return (
			<div>
				<FormControl style={{ minWidth: 120 }}>
					<InputLabel id="demo-simple-select-label">City</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={this.props.cityValue}
						onChange={this.props.cityChange}
						onClick={this.onSelect}
					>
						{this.props.data.map((city) => {
							return (
								<MenuItem key={city.id} value={city.name} selected={this.props.selectedId === city.id}>
									{city.name}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</div>
		);
	}
}
