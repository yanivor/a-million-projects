import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.image.pending;

const getImages = (state: AppState) => state.image.images;

const getError = (state: AppState) => state.image.error;

export const getImagesSelector = createSelector(getImages, (images) => images);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
