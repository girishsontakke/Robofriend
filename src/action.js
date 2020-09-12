import { CHANGE_SEARCH_FIELD } from "./variable";
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
