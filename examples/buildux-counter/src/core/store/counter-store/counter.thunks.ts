import { builduxThunk } from "../../../../../../src/core/redux/buildux.thunk";
import { thunksRegistry } from "./counter.buildux";

thunksRegistry((context) => [
  builduxThunk({
    context,
    description: "Get user from API",
    reference: "users/createUser",
    action: async (_context, _args) => {},
  }),
]);
