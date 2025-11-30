import React from 'react';
import Header from './assets/components/Header';
import JokeContainer from './assets/components/JokeContainer';

const App = () => {
  return (
    <div>
      <Header title="Get a joke" />
      <JokeContainer />
    </div>
  );
};

export default App;
