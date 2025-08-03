import { counterSlice } from "@/features/counter/counterSlice";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { configureStore } = require("@reduxjs/toolkit");

export const makeStore = () => {
  return configureStore({
    reducer: { counter: counterSlice.reducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<AppStore["dispatch"]>;
