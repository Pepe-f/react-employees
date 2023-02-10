import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import EmployeeForm from './EmployeeForm/EmployeeForm'
import EmployeesList from './EmployeesList/EmployeesList'
import Filter from './Filter/Filter'
import Info from './Info/Info'
import Search from './Search/Search'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					id: 1,
					name: 'John S.',
					salary: 800,
					isIncrease: false,
					isRise: true
				},
				{
					id: 2,
					name: 'Carl W.',
					salary: 3000,
					isIncrease: true,
					isRise: false
				},
				{
					id: 3,
					name: 'Alex D.',
					salary: 5000,
					isIncrease: false,
					isRise: false
				}
			],
			searchTerm: '',
			filter: 'all'
		}
	}

	deleteItem = id => {
		this.setState(({ data }) => ({
			data: data.filter(item => item.id !== id)
		}))
	}

	addItem = (name, salary) => {
		this.setState(({ data }) => {
			const id = uuidv4()
			const newItem = {
				id,
				name,
				salary: +salary,
				isIncrease: false,
				isRise: false
			}

			return {
				data: [...data, newItem]
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}

				return item
			})
		}))
	}

	searchEmployee = (items, searchTerm) => {
		if (searchTerm.length === 0) {
			return items
		}

		return items.filter(item => item.name.indexOf(searchTerm) > -1)
	}

	onUpdateSearch = searchTerm => {
		this.setState({ searchTerm })
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'byRise':
				return items.filter(item => item.isRise === true)
			case 'moreThanThousand':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onSelectFilter = filter => {
		this.setState({ filter })
	}

	onChangeSalary = (id, salary) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, salary }
				}

				return item
			})
		}))
	}

	render() {
		const { data, searchTerm, filter } = this.state
		const increasedEmployeesQty = data.reduce((acc, item) => {
			if (item.isIncrease === true) {
				return acc + 1
			}

			return acc
		}, 0)
		const visibleData = this.filterPost(
			this.searchEmployee(data, searchTerm),
			filter
		)

		return (
			<div className='app'>
				<Info
					employeesQty={data.length}
					increasedEmployeesQty={increasedEmployeesQty}
				/>
				<div className='search-panel'>
					<Search onUpdateSearch={this.onUpdateSearch} />
					<Filter filter={filter} onSelectFilter={this.onSelectFilter} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary}
				/>
				<EmployeeForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
