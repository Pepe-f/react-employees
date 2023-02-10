import './Info.css'

const Info = ({ employeesQty, increasedEmployeesQty }) => {
	return (
		<div className='app-info'>
			<h1>Учет сотрудников в компании</h1>
			<h2>Общее число сотрудников: {employeesQty}</h2>
			<h2>Премию получат: {increasedEmployeesQty}</h2>
		</div>
	)
}

export default Info
