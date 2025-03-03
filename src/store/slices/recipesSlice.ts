// src/store/slices/recipesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Recipe, RecipesState } from "../../types";
import type { RootState } from "../store";

const initialState: RecipesState = {
  recipes: [],
  popularRecipes: [], // <--- Initialize empty
  loading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string; state: RootState }
>(
  "recipes/fetchRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
          },
        }
      );

      if (!response.ok) {
        return rejectWithValue("Failed to fetch recipes");
      }

      const data = await response.json();
      console.log("API Response:", data);
      return data.results as Recipe[];
    } catch (error) {
      return rejectWithValue("Network error");
    }
  },
  {
    // Only fetch if we have no recipes
    condition: (_, { getState }) => {
      const { recipes } = getState().recipes;
      if (recipes.length > 0) {
        return false;
      }
    },
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

          // Pick 3 random recipes and store them in popularRecipes
          if (action.payload.length > 3) {
            const shuffled = [...action.payload].sort(
              () => 0.5 - Math.random()
            );
            state.popularRecipes = shuffled.slice(0, 3);
          } else {
            // If fewer than 3 are available, just store them all
            state.popularRecipes = action.payload;
          }
        }
      )
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching recipes";
      });
  },
});

export default recipesSlice.reducer;
