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
			<div className="name">
				{props.name}
			</div>
			<div className="liters">
				{props.liters} liters
			</div>
			<div className="distance">
				{props.distance} distance
			</div>
			<div className="cost">
				{props.cost} €
			</div>
			<div className="delete">
				<TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</div>
	);
};

export default ExpenseItem;
