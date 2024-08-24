import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    items: [],
    totalPrice: 0,
};

const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload;
            state.totalPrice = calculateTotalPrice(state.items);
        },
        addItem(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.count += action.payload.count;
            } else {
                state.items.push(action.payload);
            }

            state.totalPrice = calculateTotalPrice(state.items);
            localStorage.setItem('cart', JSON.stringify(state.items));
            toast.success("محصول به سبدخرید اضافه شد");
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalPrice = calculateTotalPrice(state.items);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        incrementItemCount(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.count += 1;
                state.totalPrice = state.items.reduce(
                    (total, item) => total + item.price * item.count,
                    0
                );
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
        },
        decrementItemCount(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.count > 1) {
                item.count -= 1;
                localStorage.setItem('cart', JSON.stringify(state.items));
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
            state.totalPrice = calculateTotalPrice(state.items);

        },
    },
});

export const { addItem, removeItem, incrementItemCount, decrementItemCount, setCart } = cartSlice.actions;
