import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "react-thunk";
import logger from "react-logger";
import { campsites } from "./campsites";
import { comments } from "./comments";
import { promotions } from "./promotions";
import { partners } from "./partners";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites,
      comments,
      promotions,
      partners,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
