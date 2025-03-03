// // src/types/index.d.ts

// export interface Recipe {
//   id: number;
//   name: string;
//   thumbnail_url: string;
//   description?: string;
//   sections: {
//     components: {
//       raw_text: string;
//     }[];
//   }[];
//   instructions: {
//     display_text: string;
//   }[];
// }

// export interface RecipesState {
//   recipes: Recipe[];
//   loading: boolean;
//   error: string | null;
// }

// src/types/index.d.ts

export interface Recipe {
  id: number;
  name: string;
  thumbnail_url: string;
  description?: string;
  sections: {
    components: {
      raw_text: string;
    }[];
  }[];
  instructions: {
    display_text: string;
  }[];
}

export interface RecipesState {
  recipes: Recipe[];
  popularRecipes: Recipe[]; // <--- Add this
  loading: boolean;
  error: string | null;
}
