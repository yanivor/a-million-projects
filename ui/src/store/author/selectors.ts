import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.author.pending;

const getAuthors = (state: AppState) => state.author.authors;

const getError = (state: AppState) => state.author.error;

export const getAuthorsSelector = createSelector(getAuthors, (authors) => authors);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
