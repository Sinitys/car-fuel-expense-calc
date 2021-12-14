import React, { createContext, useReducer } from 'react';

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};

		default:
			return state;
	}
};

// Sets the initial state
const initialState = {
	expenses: [],
};

// 2. Creates the context
export const AppContext = createContext();

// 3. Provider component that wraps the components we want to give access to the state
export const AppProvider = (props) => {
	// 4. Sets up the app state, takes the reducer, and an initial state
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// 5. Returns our context.
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};