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
	componentDidMount() {
		this.handleFormModal();
	}
	handleFormModal = () => {
		const { modalIsOpen } = this.state;
		if (!modalIsOpen) {
			this.setState({
				modalIsOpen: !modalIsOpen
			});
		}
	};
	render() {
		return (
			<div>
				<AppDrawer handleFormModal={this.handleFormModal} modalState={this.state.modalIsOpen} />
			</div>
		);
	}
}
