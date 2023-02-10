import './Filter.css'

const Filter = ({ filter, onSelectFilter }) => {
	const filterButtonsData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'byRise', label: 'На повышение' },
		{ name: 'moreThanThousand', label: 'З/П больше 1000$' }
	]

	const filterButtons = filterButtonsData.map(({ name, label }) => {
		return (
			<button
				className={
					'btn' + (filter === name ? ' btn-light' : ' btn-outline-light')
				}
				type='button'
				key={name}
				onClick={() => onSelectFilter(name)}
			>
				{label}
			</button>
		)
	})

	return <div className='btn-group'>{filterButtons}</div>
}

export default Filter
