import { createSlice } from '@reduxjs/toolkit';



const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        totalPrice: 0,
        itemCards: [],
        isChanged: true
    },
    reducers: {
        addToBac(state, action) {
            for (var i = state.itemCards.length - 1; i >= 0; i--) {
                let item = state.itemCards[i]
                const oldAm = item.amount
                item.amount = 1
                if (JSON.stringify(item) === JSON.stringify(action.payload)) {
                    item.amount = oldAm + 1
                    state.totalPrice += action.payload.price
                    state.isChanged = false
                    return
                } else {
                    item.amount = oldAm
                    state.isChanged = true
                }
            }
            if (state.itemCards.length === 0) {
                state.isChanged = true
            }
            if (state.isChanged === true) {
                state.itemCards = [...state.itemCards, action.payload]
            }
            state.totalPrice += action.payload.price
        },
        plusAmount(state, action) {
            state.itemCards[action.payload].amount += 1
            state.totalPrice += state.itemCards[action.payload].price
        }, 
        minusAmount(state, action) {
            state.itemCards[action.payload].amount -= 1
            state.totalPrice -= state.itemCards[action.payload].price
        },
        clearBasket(state) {
            state.totalPrice = 0
            state.itemCards = []
            state.isChanged =  true
        },
        removeOne(state, action) {
            state.totalPrice -= state.itemCards[action.payload].amount * state.itemCards[action.payload].price
            state.itemCards.splice(action.payload, 1)
        }
    }

});

export const { addToBac, plusAmount, minusAmount, clearBasket, removeOne } = basketSlice.actions;

export default basketSlice.reducer;
