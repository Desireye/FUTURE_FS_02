import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", 
    async () => {
        const res = await fetch("http://localhost:3000");
        const data = await res.json();
        return data.products;
    }
);

const initialState = {
    items: [],
    filteredItems : [],
    searchTerm: "",
    status: "idle",
    error: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      if (state.searchTerm.trim() === "") {
        state.filteredItems = state.items; // reset if cleared
      } else {
        state.filteredItems = state.items.filter((product) =>
          product.product_name
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload; // ✅ initialize filtered list
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setSearchTerm} = productSlice.actions;
export default productSlice.reducer;