import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './slices/itemsSlice'
import reviewSlice from './slices/reviewSlice'
import basketSlice from './slices/basketSlice'
import formSendSlice from './slices/formSendSlice'

export const store = configureStore({
    reducer: {
        items: itemsSlice,
        reviews: reviewSlice,
        card: basketSlice,
        form: formSendSlice,
    },
})