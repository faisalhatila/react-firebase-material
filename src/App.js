import './App.css';
import React, { Component } from 'react';
import AppDrawer from './components/drawer';
let companyId = 0;
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
	handleDataInsert = () => {
		// const { nameInput, cityInput, countryInput, cityInput, addressInput, emailInput } = this.state;
		let userData = {
			companyId: companyId,
			name: this.state.nameInput,
			city: this.state.cityInput,
			country: this.state.countryInput,
			zip: this.state.zipCodeInput,
			address: this.state.addressInput,
			email: this.state.emailInput
		};
		companyId++;
		this.state.data.push(userData);
		this.setState(
			{
				data: this.state.data,
				nameInput: '',
				cityInput: '',
				countryInput: '',
				zipCodeInput: '',
				addressInput: '',
				emailInput: ''
			},
			() => {
				console.log('State : ', this.state);
			}
		);
	};
	handleDataDelete = (companyId) => {
		// let { data } = this.state;
		// data = this.state.data.filter((item) => {
		// 	return item.companyId !== companyId;
		// });
		// this.setState({ data: data });
		// alert('asdas');
		let { data } = this.state;
		data = this.state.data.filter((item) => {
			return item.companyId !== companyId;
		});
	};
	handleNameInputChange = (event) => {
		this.setState({
			nameInput: event.target.value
		});
		// console.log(this.state.nameInput);
	};
	handleCityInputChange = (event) => {
		this.setState({
			cityInput: event.target.value
		});
		// console.log(this.state.cityInput);
	};
	handleCountryInputChange = (event) => {
		this.setState({
			countryInput: event.target.value
		});
		// console.log(this.state.countryInput);
	};
	handleZipCodeInputChange = (event) => {
		this.setState({
			zipCodeInput: event.target.value
		});
		// console.log(this.state.zipCodeInput);
	};
	handleAddressInputChange = (event) => {
		this.setState({
			addressInput: event.target.value
		});
		// console.log(this.state.addressInput);
	};
	handleEmailInputChange = (event) => {
		this.setState({
			emailInput: event.target.value
		});
		// console.log(this.state.emailInput);
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
				<AppDrawer
					nameValue={this.state.name}
					nameChange={this.handleNameInputChange}
					cityValue={this.state.cityInput}
					cityChange={this.handleCityInputChange}
					countryValue={this.state.countryInput}
					countryChange={this.handleCountryInputChange}
					zipValue={this.state.zipCodeInput}
					zipChange={this.handleZipCodeInputChange}
					addressValue={this.state.addressInput}
					addressChange={this.handleAddressInputChange}
					emailValue={this.state.emailInput}
					emailChange={this.handleEmailInputChange}
					handleDataInsert={this.handleDataInsert}
					userData={this.state.data}
					handleDeleteData={this.handleDataDelete}
				/>
			</div>
		);
	}
}
