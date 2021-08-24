import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
	state = {
		monsters: [],
		searchField: "",
	};

	handleChange = (e) => {
		this.setState({
			searchField: e.target.value,
		});
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }));
	}
	render() {
		const { searchField, monsters } = this.state;
		const monsterFilter = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="app">
				<h1>Monsters Rolodex</h1>
				<SearchBox handleChnage={this.handleChange} placeHolder="Search.." />
				<CardList monsters={monsterFilter} />
			</div>
		);
	}
}

export default App;
