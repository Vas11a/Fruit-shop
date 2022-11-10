import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get('https://6368e71615219b849609d6ae.mockapi.io/items')
            return response.data[0];

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }

)

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        status: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'resolved'
        })
        builder.addCase(fetchItems.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchItems.rejected, (state, action) => {
            alert(`Error: ${action.payload}`)
            state.status = 'loading'
            state.items = []
        })
        }
        
});

// export const { } = itemsSlice.actions;

export default itemsSlice.reducer;

