import { FETCH_JOKE_START, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAIL} from './../actions';

const initialState = {
  joke: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_JOKE_START):
      return({
        ...state,
        isFetching: true,
        error:'',
        joke:''
      });
    case(FETCH_JOKE_SUCCESS):
      return({
        ...state,
        joke: action.payload,
        isFetching: false,
        error:''
      })
    case(FETCH_JOKE_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
};