import EmployeeItem from '../EmployeeItem/EmployeeItem'

import './EmployeesList.css'

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {
	return (
		<ul className='app-list list-group'>
			{data.map(item => {
				const { id, ...props } = item
				return (
					<EmployeeItem
						key={id}
						id={id}
						{...props}
						onDelete={() => onDelete(id)}
						onToggleProp={e =>
							onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
						}
						onChangeSalary={onChangeSalary}
					/>
				)
			})}
		</ul>
	)
}

export default EmployeesList
