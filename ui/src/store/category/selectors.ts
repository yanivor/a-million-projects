import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.category.pending;

const getCategories = (state: AppState) => state.category.categories;

const getError = (state: AppState) => state.category.error;

export const getCategoriesSelector = createSelector(getCategories, (categories) => categories);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
