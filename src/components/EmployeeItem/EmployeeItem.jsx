import { Component } from 'react'
import './EmployeeItem.css'

class EmployeeItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			salary: props.salary
		}
	}

	onChange = e => {
		const salary = e.target.value

		if (salary === '$') return

		const salaryInt = +salary.replace('$', '')

		this.setState({ salary: salaryInt })
		this.props.onChangeSalary(this.props.id, salaryInt)
	}

	render() {
		const { name, onDelete, onToggleProp, isIncrease, isRise } = this.props

		return (
			<li
				className={
					'list-group-item d-flex justify-content-between' +
					(isIncrease ? ' increase' : '') +
					(isRise ? ' like' : '')
				}
			>
				<span
					className='list-group-item-label'
					onClick={onToggleProp}
					data-toggle='isRise'
				>
					{name}
				</span>
				<input
					type='text'
					className='list-group-item-input'
					value={this.state.salary + '$'}
					onChange={this.onChange}
				/>
				<div className='d-flex justify-content-center align-items-center'>
					<button
						type='button'
						className='btn-cookie btn-sm'
						onClick={onToggleProp}
						data-toggle='isIncrease'
					>
						<i className='fas fa-cookie'></i>
					</button>
					<button type='button' className='btn-trash btn-sm' onClick={onDelete}>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-star'></i>
				</div>
			</li>
		)
	}
}

export default EmployeeItem
