import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Product} from 'types/Product';

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Product[]>('/data.json');
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(`Error fetching products: ${e.status}`);
        }
    }
);