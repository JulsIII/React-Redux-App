// import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className="containerB">
      <h1>Let me tell you about the Norris...</h1>
      <img src="https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S" />
      <Jokes />
    </div>
  );
}

export default App;
