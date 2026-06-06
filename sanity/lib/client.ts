import { createClient } from "next-sanity";

// Temporarily bypass the .env check to see if it fixes the data fetch
export const client = createClient({
  projectId: "hm4t7i73", 
  dataset: "production",
  apiVersion: "2026-06-06",
  useCdn: false,
});