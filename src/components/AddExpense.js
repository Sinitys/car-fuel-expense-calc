import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
    const [liters, setLiters] = useState('');
    const [distance, setDistance] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
            liters: parseInt(liters),
            distance: parseInt(distance),
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<div>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
                <div>
					<label for='liters'>Liters</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='liters'
						value={liters}
						onChange={(event) => setLiters(event.target.value)}
					></input>
				</div>
                <div>
					<label for='distance'>Distance driven</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='distance'
						value={distance}
						onChange={(event) => setDistance(event.target.value)}
					></input>
				</div>
				<div>
					<label for='cost'>Expense</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div>
					<button type='submit'>
						Add refueling expense
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpense;
