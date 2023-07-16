import { Buildux } from "../../../../../../src/core/redux/buildux";
import { CounterState } from "../../interfaces/counter-state.interface";

/**
 * Buildux creates a new Slice and then returns a context.
 * The context contains the reducer, actions and services
 * that we can consume if is necessary.
 * For create the state only we need pass the reference like this:
 * new Buildux<MyCurrentState>({})
 */
const { context } = new Buildux<CounterState>({
  name: "counter",
  initialState: { value: 0 },
}).createReducers({
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
});

export const { increment, decrement, incrementByAmount } = context.actions;

export const counterReducer = context.reducer;
