import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { BACKEND_BASE_URL } from "./constants";
import axiosMiddleware, { multiClientMiddleware } from "redux-axios-middleware";
import { createLogger } from "redux-logger";
import axios from "axios";
// Define middleware to use

const baseURL = BACKEND_BASE_URL || "http://localhost:5000";

const client = {
  default: {
    client: axios.create({
      baseURL: baseURL,
      responseType: "json",
    }),
  },
};

const middleware = [thunk, multiClientMiddleware(client)];

const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
  const logger = createLogger();
  middleware.push(logger);
}

// Create redux store
export const store = createStore(rootReducer, applyMiddleware(...middleware));
