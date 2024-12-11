import { configureStore } from "@reduxjs/toolkit";

import ui from "./ui";
import auth from "./auth";
import cart from "./cart";

const Store = configureStore({
  reducer: {
    ui: ui,
    auth: auth,
    cart: cart,
  },
});

export default Store;
