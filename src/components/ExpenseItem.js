import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import "../App.css";

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<div className='listFuelingHistory'>
			<li className='list-group-item d-flex justify-content-between align-items-center'>
				{props.name}
				<div>
				{props.liters} liters
				</div>
				<div>
				{props.distance} distance
				</div>
				<div>
					<span>
						{props.cost} €
					</span>
					<TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete>
				</div>
			</li>
		</div>
	);
};

export default ExpenseItem;
