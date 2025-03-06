import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersListReducer from "./reducer/userListReducer";

const combinedReducers = combineReducers({
  userList: usersListReducer,
  
});

const persistedReducers = persistReducer(
  {
    key: "users-list",
    storage,
    whitelist: ["userList"],
  },
  combinedReducers
);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
