import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice';
import fetchSlice from './fetchSlice';
import bagSlice from './bagSlice';

const myntraStore = configureStore({
    reducer:{
        items:itemsSlice,
        fetchStatus:fetchSlice,
        bag : bagSlice
    }
})

export default myntraStore;