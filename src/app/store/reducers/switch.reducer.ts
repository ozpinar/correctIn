import { createReducer, on } from "@ngrx/store";
import { setTeach, setLearn } from "../actions/switch.actions";

export const initialState = "TEACH";

export const switchReducer = createReducer(
    initialState,
    on(setLearn, () => "LEARN"),
    on(setTeach, () => "TEACH")
);
