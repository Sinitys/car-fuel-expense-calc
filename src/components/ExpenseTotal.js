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

	const averageExpenses = expenses.reduce((average) => {
		average = totalDistance / totalExpenses;
		return average.toPrecision(3);
	}, 0);

	const averageConsumption = expenses.reduce((average) => {
		average = totalFuel / totalDistance
		return average.toPrecision(3);
	}, 0);

	return (
		<div>
			<span>Spent so far: {totalExpenses}€</span>
			<span>Total Liters fueled: {totalFuel}L</span>
			<span>Total Distance driven: {totalDistance}km</span>
			<span>Average expenses per 100 kilometers: {averageExpenses}€</span>
			<span>Average consumption per 100 kilometers: {averageConsumption}L</span>
		</div>
	);
};

export default ExpenseTotal;
