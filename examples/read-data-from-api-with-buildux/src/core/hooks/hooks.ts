import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

//Hooks for read and emit states with redux.

//Calls an action
export const useAppDispatch: () => AppDispatch = useDispatch;

//Read the state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
