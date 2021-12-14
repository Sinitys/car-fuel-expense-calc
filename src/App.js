import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';


const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1>Fuel Expense Calculator</h1>
				<div>
					<div>
						<ExpenseTotal />
					</div>
				</div>
				<h3>Fueling history</h3>
				<div>
					<div>
						<ExpenseList />
					</div>
				</div>
				<h3>Add Fueling</h3>
				<div>
					<div>
						<AddExpense />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;