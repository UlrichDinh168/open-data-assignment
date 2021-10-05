import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { BACKEND_BASE_URL, PERSIST_KEY } from "./constants";
import { multiClientMiddleware } from "redux-axios-middleware";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import axios from "axios";
// Define middleware to use

const baseURL = BACKEND_BASE_URL || "http://localhost:5000";

// Config redux-persist
const persistConfig = {
  key: PERSIST_KEY,
  storage,
  blacklist: [],
};
const client = {
  default: {
    client: axios.create({
      baseURL: baseURL,
      responseType: "json",
    }),
  },
};

const middleware = [thunk, multiClientMiddleware(client)];
const tools = [applyMiddleware(...middleware)];

const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
  const logger = createLogger();
  middleware.push(logger);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create redux store
const store = createStore(persistedReducer, compose(...tools));
const persistor = persistStore(store);

export { store, persistor };
