import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke} from '../actions';

const Jokes = ({ joke, isFetching, error, getJoke }) => {
  useEffect(() => {
    getJoke();
  }, []);

  const handleClick = ()=> {
    getJoke();
    console.log('BtnLoad', joke);
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Dad Joke!</h2>;
  }

  return (
    <>
      <h2>Pappy says: {joke}</h2>
      <button onClick={handleClick}>Tell new joke!</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getJoke })(Jokes);