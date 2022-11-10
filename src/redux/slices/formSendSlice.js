import { createSlice } from '@reduxjs/toolkit';


const formSlice = createSlice({
    name: 'form',
    initialState: {
        dataForServer: []
    },
    reducers: {
        sentData(state, action) {
            state.dataForServer = action.payload
            alert(state.dataForServer);
        }
    }

});

export const { sentData } = formSlice.actions;

export default formSlice.reducer;