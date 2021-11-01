import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cakes: null,
  biscuit: null,
  dessert: null,
  other: null,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,

  reducers: {
    setCakes: (state, action) => {
      state.cakes = action.payload.cakes;
      state.biscuit = action.payload.biscuit;
      state.dessert = action.payload.dessert;
      state.other = action.payload.other;
    },
  },
});

export const { setCakes } = cakeSlice.actions;
export const selectCakes = (state) => state.cake.cakes;
export const selectBiscuit = (state) => state.cake.biscuit;
export const selectDessert = (state) => state.cake.dessert;
export const selectOther = (state) => state.cake.other;

export default cakeSlice.reducer;
