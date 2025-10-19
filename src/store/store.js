import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
