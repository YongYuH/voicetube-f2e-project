import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import getWithQuery from '../../../utils/api';

// - Actions
export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAIL = 'FETCH_VIDEOS_FAIL';
export const SET_DURATION_FILTER_INDEX = 'SET_DURATION_FILTER_INDEX';
export const SET_SORT_CONDITION = 'SET_SORT_CONDITION';

// - State
export const initialState = {
  errorMessage: '',
  durationFilterMinAndMax: {
    max: Number.MAX_SAFE_INTEGER,
    min: 0,
  },
  isFetching: false,
  list: [],
  processedList: [],
  sortCondition: 'publish',
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
        list: action.payload.videos,
        processedList: action.payload.videos,
      };
    case FETCH_VIDEOS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isFetching: false,
      };
    case SET_DURATION_FILTER_INDEX:
      return {
        ...state,
        durationFilterMinAndMax: action.payload.durationFilterMinAndMax,
        processedList: state.list.concat()
          .filter(video =>
            (video.duration > action.payload.durationFilterMinAndMax.min
              && video.duration <= action.payload.durationFilterMinAndMax.max))
          .sort((a, b) => a[state.sortCondition] < b[state.sortCondition]),
      };
    case SET_SORT_CONDITION:
      return {
        ...state,
        processedList: state.processedList.concat()
          .filter(video =>
            (video.duration > state.durationFilterMinAndMax.min
              && video.duration <= state.durationFilterMinAndMax.max))
          .sort((a, b) => a[action.payload.sortCondition] < b[action.payload.sortCondition]),
        sortCondition: action.payload.sortCondition,
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
export const setDurationFilterIndex = ({ min, max }) => ({
  type: SET_DURATION_FILTER_INDEX,
  payload: {
    durationFilterMinAndMax: { min, max },
  },
});
export const setSortCondition = sortCondition => ({
  type: SET_SORT_CONDITION,
  payload: { sortCondition },
});

// - Selectors
export const getVideos = state => state.videos.processedList;
// export const getVideos = state => state.videos.list.filter(function(element, index) {
//   return index < 6;
// });

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
