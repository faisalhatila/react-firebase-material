import './App.css';
import React, { Component } from 'react';
import AppDrawer from './components/drawer';
export default class App extends Component {
	state = {
		nameInput: '',
		cityInput: '',
		countryInput: '',
		zipCodeInput: '',
		addressInput: '',
		emailInput: '',
		data: [],
		modalIsOpen: false
	};
	render() {
		return (
			<div>
				<AppDrawer />
			</div>
		);
	}
}
