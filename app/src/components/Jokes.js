import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke} from '../actions';
import '../App.css';

const Jokes = ({ joke, isFetching, error, getJoke }) => {
  useEffect(() => {
    getJoke();
  }, []);

  const handleClick = ()=> {
    getJoke();
    console.log('BtnLoad', {joke});
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Strait Up FACTS!</h2>;
  }

  return (
    <>
      <h2>FACT: {joke}</h2>
      <button onClick={handleClick}>Tell me more!</button>
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