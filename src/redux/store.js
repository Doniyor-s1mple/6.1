import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import { XodimlarReducer } from "./XodimlarReducer";

export const store = createStore(XodimlarReducer, applyMiddleware(logger))