import { Buildux } from "../../../../../../src/core/redux/buildux";
import { CounterState } from "../../interfaces/counter-state.interface";
import { builduxThunk } from "../../../../../../src/core/redux/buildux.thunk";

/**
 * Buildux creates a new Slice and then returns a context.
 * The context contains the reducer, actions and services
 * that we can consume if is necessary.
 * For create the state only we need pass the reference like this:
 * new Buildux<MyCurrentState>({})
 */
const { context, thunksRegistry } = new Buildux<CounterState>({
  name: "counter",
  initialState: { value: 0 },
  services: [],
}).createReducers({
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(context.thunks[0].fulfilled, (state, action) => {
      action.payload;
    });
  },
});

export { thunksRegistry };
export const { increment, decrement } = context.actions;
export const counterReducer = context.reducer;
