import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

// - Actions
export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAIL = 'FETCH_VIDEOS_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  isFetching: false,
  videos: [],
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isFetching: false,
        videos: action.payload.videos,
      };
    case FETCH_VIDEOS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
};

// - Action Creators
export const fetchVideosRequest = () => ({ type: FETCH_VIDEOS_REQUEST });
export const fetchVideosSuccess = ({
  videos,
}) => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: {
    videos,
  },
});
export const fetchVideosFail = ({ message }) => ({
  type: FETCH_VIDEOS_FAIL,
  payload: { message },
});

// - Selectors
export const getPhotoUrl = state => state.Videos.photoUrl;
export const getUserId = state => state.Videos.userId;

// - Api
export const getWithQuery = ({ url }) => (
  fetch(url)
    .then(r => r.json())
);

// - Sagas
export function* fetchVideos() {
  try {
    const requestInfo = {
      url: '//us-central1-lithe-window-713.cloudfunctions.net/fronted-demo',
    };
    const response = yield call(getWithQuery, requestInfo);
    const {
      data,
      status,
    } = response;

    if (status !== true) {
      throw new Error('api response not correct');
    }

    yield put(fetchVideosSuccess({
      videos: data,
    }));
  } catch (error) {
    yield put(fetchVideosFail(error));
  }
}

function* watchFetchVideos() {
  yield takeLatest(FETCH_VIDEOS_REQUEST, fetchVideos);
}

export default watchFetchVideos;
