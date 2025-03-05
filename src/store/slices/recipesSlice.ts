import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { Recipe, RecipesState } from "../../types/types";

const initialState: RecipesState = {
  recipes: [],
  popularRecipes: [],
  loading: false,
  error: null,
  searchResults: [],
  searchLoading: false,
  searchError: null,
};

// 1) Thunk to fetch default recipes using axios
export const fetchRecipes = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string }
>("recipes/fetchRecipes", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      }
    );

    // axios automatically throws for non-2xx status codes so we can return data directly
    return response.data.results as Recipe[];
  } catch (error: any) {
    return rejectWithValue("Network error");
  }
});

// 2) Thunk to search recipes using axios
export const searchRecipes = createAsyncThunk<
  Recipe[],
  string,
  { rejectValue: string }
>("recipes/searchRecipes", async (searchTerm, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchTerm}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      }
    );

    return response.data.results as Recipe[];
  } catch (error: any) {
    return rejectWithValue("Network error");
  }
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ---------- FETCH RECIPES ----------
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.loading = false;
          state.recipes = action.payload;
          // Populate popularRecipes with 3 random recipes
          if (action.payload.length > 3) {
            const shuffled = [...action.payload].sort(
              () => 0.5 - Math.random()
            );
            state.popularRecipes = shuffled.slice(0, 3);
          } else {
            state.popularRecipes = action.payload;
          }
        }
      )
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching recipes";
      });

    // ---------- SEARCH RECIPES ----------
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.searchLoading = true;
        state.searchError = null;
        state.searchResults = [];
      })
      .addCase(
        searchRecipes.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.searchLoading = false;
          state.searchResults = action.payload;
        }
      )
      .addCase(searchRecipes.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.payload || "Error searching recipes";
      });
  },
});

export default recipesSlice.reducer;
