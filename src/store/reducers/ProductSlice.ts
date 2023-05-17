import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from 'types/Product';
import {CartProduct} from 'types/CartProduct';
import {fetchProducts} from 'store/reducers/ActionCreators';

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string;
    cart: CartProduct[];
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: '',
    cart: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<number>) {
            const id = action.payload;
            const entry = state.cart.find(productEntry => productEntry.product.id === id);
            if (entry) {
                entry.count++;
            } else {
                const product = state.products.find(p => p.id === id);
                if (product) {
                    state.cart.push({
                        product,
                        count: 1
                    });
                } else {
                    throw new Error(`Product with id ${id} not found`);
                }
            }
        },
        deleteProduct(state, action: PayloadAction<number>) {
            const id = action.payload;
            const entry = state.cart.find(productEntry => productEntry.product.id === id);
            if (!entry) {
                throw new Error(`No products with id ${id} in cart`);
            }

            entry.count--;
            if (entry.count === 0) {
                // state.cart = state.cart.splice(state.cart.indexOf(entry), 1);
                state.cart = state.cart.filter(productEntry => productEntry.product.id !== id);
            }
        },
        deleteCartProduct(state, action: PayloadAction<number>) {
            const id = action.payload;
            const entry = state.cart.find(productEntry => productEntry.product.id === id);
            console.log(id);
            if (!entry) {
                throw new Error(`No products with id ${id} in cart`);
            }
            console.log(state.cart.indexOf(entry));

            state.cart = state.cart.filter(productEntry => productEntry.product.id !== id);
        },
        saveToLocalStorage(state) {
            const serialisedState = JSON.stringify(state.cart);
            localStorage.setItem('cart', serialisedState);
        },
        loadFromStorage(state) {
            const serialisedState = localStorage.getItem('cart');
            if (serialisedState) {
                state.cart = JSON.parse(serialisedState);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending.type, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled.type, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.error = '';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected.type, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload;
                state.products = [];
            })
            .addDefaultCase((state, action) => {

            });
    }
});

export default productSlice.reducer;