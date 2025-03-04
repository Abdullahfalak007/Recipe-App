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

  // Add the new fields here, marking them optional if not always present:
  tips_and_ratings_enabled?: boolean;
  tips_summary?: {
    by_line?: string;
    content?: string;
    header?: string;
  };
  total_time_minutes?: number;
  total_time_tier?: {
    display_tier?: string;
    tier?: string;
  };
  user_ratings?: {
    count_negative?: number;
    count_positive?: number;
    score?: number;
  };
  yields?: string;
  topics?: {
    name: string;
    slug: string;
  }[];
}

// src/types/index.d.ts

export interface RecipesState {
  recipes: Recipe[];
  popularRecipes: Recipe[];
  loading: boolean;
  error: string | null;

  // For searching
  searchResults: Recipe[];
  searchLoading: boolean;
  searchError: string | null;
}
