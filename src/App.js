import './App.css';
import React, { Component } from 'react';
import AppDrawer from './components/drawer';
import Province from './components/province';
import City from './components/cities';
import * as firebase from 'firebase';
import './config';

const searchingFor = (searchKeyword) => {
	return (result) => {
		return result.name.toLowerCase().includes(searchKeyword.toLowerCase()) || !searchKeyword;
	};
};

let companyId = 0;
// const data = {
// 	provinces: [
// 		{ id: 1, name: 'Sindh' },
// 		{ id: 2, name: 'Punjab' },
// 		{ id: 3, name: 'Baloachistan' },
// 		{ id: 4, name: 'KPK' }
// 	],
// 	cities: [
// 		{ id: 1, name: 'Karachi', provinceId: 1 },
// 		{ id: 2, name: 'Hyderabad', provinceId: 1 },
// 		{ id: 3, name: 'Sukkur', provinceId: 1 },
// 		{ id: 4, name: 'Lahore', provinceId: 2 },
// 		{ id: 5, name: 'Multan', provinceId: 2 },
// 		{ id: 6, name: 'Quetta', provinceId: 3 },
// 		{ id: 7, name: 'Peshawar', provinceId: 4 }
// 	]
// };
const data = {
	provinces: [
		{ id: 1, name: 'Afghanistan' },
		{ id: 2, name: 'Australia' },
		{ id: 3, name: 'China' },
		{ id: 4, name: 'India' },
		{ id: 5, name: 'Iran' },
		{ id: 6, name: 'Japan' },
		{ id: 7, name: 'Pakistan' },
		{ id: 8, name: 'Saudi Arabia' },
		{ id: 9, name: 'Spain' },
		{ id: 10, name: 'UK' },
		{ id: 11, name: 'USA' }
	],
	cities: [
		{ id: 1, name: 'Kabul', provinceId: 1 },
		{ id: 2, name: 'Sydney', provinceId: 2 },
		{ id: 3, name: 'Melbourne', provinceId: 2 },
		{ id: 4, name: 'Canberra', provinceId: 2 },
		{ id: 5, name: 'Wuhan', provinceId: 3 },
		{ id: 6, name: 'Beijing', provinceId: 3 },
		{ id: 7, name: 'Shanghai', provinceId: 3 },
		{ id: 8, name: 'Mumbai', provinceId: 4 },
		{ id: 9, name: 'New Dehli', provinceId: 4 },
		{ id: 10, name: 'Banglore', provinceId: 4 },
		{ id: 11, name: 'Tehran', provinceId: 5 },
		{ id: 12, name: 'Tokyo', provinceId: 6 },
		{ id: 13, name: 'Karachi', provinceId: 7 },
		{ id: 14, name: 'Lahore', provinceId: 7 },
		{ id: 15, name: 'Quetta', provinceId: 7 },
		{ id: 16, name: 'Makkah', provinceId: 8 },
		{ id: 17, name: 'Madina', provinceId: 8 },
		{ id: 18, name: 'Barcelona', provinceId: 9 },
		{ id: 19, name: 'Madrid', provinceId: 9 },
		{ id: 20, name: 'London', provinceId: 10 },
		{ id: 21, name: 'Manchester', provinceId: 10 },
		{ id: 22, name: 'Birmingham', provinceId: 10 },
		{ id: 23, name: 'New York', provinceId: 11 },
		{ id: 24, name: 'Texas', provinceId: 11 },
		{ id: 25, name: 'Washington DC', provinceId: 11 }
	]
};
export default class App extends Component {
	state = {
		nameInput: '',
		cityInput: '',
		countryInput: '',
		zipCodeInput: '',
		addressInput: '',
		emailInput: '',
		data: [],
		modalIsOpen: false,
		countryList: [],
		citiesList: [],
		selectedCountry: null,
		selectedCity: null,
		provinces: data.provinces,
		provinceId: null,
		cities: data.cities,
		cityId: null,
		searchKeyword: '',
		firebaseData: []
	};
	componentDidMount() {
		// fetch('https://restcountries.eu/rest/v2/all').then((res) => res.json()).then((result) => {
		// 	// console.log(result);
		// 	result.map((item) => {
		// 		this.state.countryList.push(item);
		// 		this.state.citiesList.push(item);
		// 		this.setState({
		// 			countryList: this.state.countryList,
		// 			citiesList: this.state.citiesList
		// 		});
		// 	});
		// 	console.log(this.state.countryList);
		// });
		firebase.database().ref('data').once('value').then((snapShot) => {
			// console.log(snapShot.val());
			snapShot.forEach((item) => {
				this.state.firebaseData.push({
					id: item.key,
					...item.val()
				});
			});
		});
	}
	handleSearch = (e) => {
		this.setState({
			searchKeyword: e.target.value
		});
	};
	onSelectProvince = (provId) => {
		const selCities = data.cities.filter((c) => c.provinceId === provId);
		this.setState({
			provinceId: provId,
			cities: selCities
			// countryInput: provId.target.value
		});
		console.log(provId);
	};

	onSelectCity = (city) => {
		this.setState({
			cityId: city.id
		});
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
		firebase.database().ref('data').push({
			companyId: companyId,
			name: this.state.nameInput,
			city: this.state.cityInput,
			country: this.state.countryInput,
			zip: this.state.zipCodeInput,
			address: this.state.addressInput,
			email: this.state.emailInput
		});

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
				// console.log('State : ', this.state);
			}
		);
	};
	handleNameInputChange = (event) => {
		this.setState({
			nameInput: event.target.value
		});
	};
	handleCityInputChange = (event) => {
		this.setState({
			cityInput: event.target.value
		});
	};
	handleSelectCity = (city) => {
		this.setState({
			selectedCity: city.alpha2Code
		});
	};
	handleCountryInputChange = (event) => {
		this.setState({
			countryInput: event.target.value
		});
	};
	handleSelectCountry = (alpha2Code) => {
		const { countryList } = this.state;
		const selCities = countryList.capital.filter((c) => c.alpha2Code === alpha2Code);
		this.setState({
			selectedCountry: alpha2Code,
			citiesList: selCities
		});
	};
	handleZipCodeInputChange = (event) => {
		this.setState({
			zipCodeInput: event.target.value
		});
	};
	handleAddressInputChange = (event) => {
		this.setState({
			addressInput: event.target.value
		});
	};
	handleEmailInputChange = (event) => {
		this.setState({
			emailInput: event.target.value
		});
	};
	handleFormModal = () => {
		const { modalIsOpen } = this.state;
		if (!modalIsOpen) {
			this.setState({
				modalIsOpen: !modalIsOpen
			});
		}
	};
	render() {
		const { countryList } = this.state;
		return (
			<div>
				{console.log(this.state.firebaseData)}
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
					countryList={this.state.countryList}
					selectedCountry={this.state.selectedCountry}
					selectedCity={this.state.selectedCity}
					dataProv={this.state.provinces}
					selectedProvId={this.state.provinceId}
					onSelectProv={this.onSelectProvince}
					dataCity={this.state.cities}
					selectedCityId={this.state.cityId}
					onSelectCity={this.onSelectCity}
					searchRecord={this.handleSearch}
					searchKeyword={this.state.searchKeyword}
					searchingFor={searchingFor}
				/>
			</div>
		);
	}
}
