import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchReview = createAsyncThunk(
    'review/fetchReview',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get('https://6368e71615219b849609d6ae.mockapi.io/items')
            return response.data[1];

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)




const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviews: [],
        status: null,
        myReview: '',
        isOpened: false
    },
    reducers: {
        changeMyRev(state, action) {
            state.myReview = action.payload
        },
        addMyRev(state) {
            let newId = state.reviews[0].id -1
            state.reviews = [{id: newId, name: 'User', text:state.myReview}, ...state.reviews]
            state.myReview = ''
        },
        removeRev(state) {
            state.reviews.splice(0, 1)
        },
        setIsOpen(state) {
            if (state.isOpened === false) {
                state.isOpened = true
            } else {
                state.isOpened = false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReview.fulfilled, (state, action) => {
            state.reviews = action.payload
            state.status = 'resolved'
        })
        builder.addCase(fetchReview.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchReview.rejected, (state, action) => {
            alert(`Error: ${action.payload}`)
            state.status = 'loading'
            state.reviews = []
        })
    }

});

export const { changeMyRev, addMyRev, removeRev, setIsOpen } = reviewSlice.actions;

export default reviewSlice.reducer;