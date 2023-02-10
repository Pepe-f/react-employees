import { Component } from 'react'
import './Search.css'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: ''
		}
	}

	onUpdateSearch = e => {
		const searchTerm = e.target.value
		this.setState({ searchTerm })
		this.props.onUpdateSearch(searchTerm)
	}

	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Найти сотрудника'
				value={this.state.searchTerm}
				onChange={this.onUpdateSearch}
			/>
		)
	}
}

export default Search
