import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer from "./redux/authReducer.jsx";
import ShoppingCartReducer from "./redux/shoppingCartReducer.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
    shoppingCart: ShoppingCartReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
