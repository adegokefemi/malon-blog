import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Hero from '../src/components/Hero/index';

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  const closeModal = () => setModalOpened(false);
  const openModal = () => setModalOpened(true);

  return (
    <div className="App">
      <Header openModal={openModal} />
      <Hero />
      <main>
        <Content modalOpened={modalOpened} closeModal={closeModal} openModal={openModal} />
      </main>
    </div>
  );
}

export default App;
