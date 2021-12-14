import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const totalFuel = expenses.reduce((total, item) => {
		return (total += item.liters);
	}, 0);

	const totalDistance = expenses.reduce((total, item) => {
		return (total += item.distance);
	}, 0);

	return (
		<div>
			<span>Spent so far: {totalExpenses}€</span>
			<span>Total Liters fueled: {totalFuel}L</span>,
			<span>Total Distance driven: {totalDistance}km</span>
		</div>


	);
};

export default ExpenseTotal;
