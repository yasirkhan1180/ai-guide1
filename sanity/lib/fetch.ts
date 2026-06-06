import { client } from "./client";
import { ALL_ARTICLES_QUERY } from "./queries";

export async function getAllArticles() {
  // Use the client to fetch using the query
  return await client.fetch(ALL_ARTICLES_QUERY);
}