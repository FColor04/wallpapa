import React, {PropsWithChildren, useState} from "react";

export interface IProduct {
	type: "IProduct",
	id: number,
	name: string,
	quantity: number,
	price: number,
	series: string,
	onSale: boolean,
}

export interface IOrder {
	type: "IOrder",
	id: number,
	date: number,
	products: Array<IProduct>,
	delivered: boolean
}

export enum ProductActions {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CREATE_ORDER
}

const initialProductState = {
	resources: 0, //Money
	cart: Array<IProduct>(),
	ordersInProgress: Array<IOrder>(),
	filter: {
		availability: false,
		onSale: false,
		priceRange: [0, undefined],
		includeSeries: []
	},
};

const Reducer = (state: typeof initialProductState, action: { type: ProductActions, value?: IProduct | IOrder }) => {
	if (action.value === undefined) {
		switch (action.type) {
			case ProductActions.CREATE_ORDER:
				state.ordersInProgress.push({
					type: "IOrder",
					id: state.ordersInProgress.length,
					date: Date.now(),
					products: state.cart,
					delivered: false
				});
				state.cart = [];
				break;
		}

		//Early exit if value is not provided
		return state;
	}

	switch (action.value.type) {
		//Product operations
		case "IProduct":
			switch (action.type) {
				case ProductActions.ADD_TO_CART:
					return {...state, cart: [...state.cart, action.value]};
					break;
				case ProductActions.REMOVE_FROM_CART:
					return {
						...state,
						cart: [...state.cart].filter(p => p.id != action.value?.id)
					};
					break;
			}
			break;
		case "IOrder":

			break;
	}

	return state;
};

export interface ProductActionsSignatures {
	GetState: () => typeof initialProductState,
	GetId: () => number,
	AddToCart: (product: IProduct) => void,
	RemoveFromCart: (product: IProduct) => void,
	CreateOrder: () => void
}

export const ProductContext = React.createContext({} as ProductActionsSignatures);
export const ProductsProvider = ({children}: PropsWithChildren) => {
	const [id, setId] = useState(0);
	const [state, dispatch] = React.useReducer(Reducer, initialProductState);
	const actions = {
		GetState: () => state,
		GetId: () => {
			setId(id + 1);
			return id;
		},
		//Expose dispatching functions
		AddToCart: (product: IProduct) => dispatch({type: ProductActions.ADD_TO_CART, value: product}),
		RemoveFromCart: (product: IProduct) => dispatch({type: ProductActions.REMOVE_FROM_CART, value: product}),
		CreateOrder: () => dispatch({type: ProductActions.CREATE_ORDER})
	} as ProductActionsSignatures;

	return (
		<ProductContext.Provider value={actions}>
			{children}
		</ProductContext.Provider>
	);
};
