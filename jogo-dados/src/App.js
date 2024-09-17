import React, { useState } from 'react';
import './App.css';

// Função para gerar um número aleatório entre 1 e 6
const rollDice = () => Math.floor(Math.random() * 6) + 1;

function App() {
  // Estado para armazenar os valores dos dados, vitórias e jogadas
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [wins, setWins] = useState(0);
  const [plays, setPlays] = useState(0);
  const [message, setMessage] = useState('');

  const handleRoll = () => {
    const newDice1 = rollDice();
    const newDice2 = rollDice();
    const sum = newDice1 + newDice2;

    setDice1(newDice1);
    setDice2(newDice2);

    if (sum === 7 || sum === 11) {
      setWins(wins + 1);
      setMessage('Você ganhou!');
    } else {
      setMessage('Você perdeu.');
    }

    setPlays(plays + 1);
  };

  const getWinPercentage = () => {
    return plays === 0 ? 0 : ((wins / plays) * 100).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Jogo dos Dados</h1>
      <div className="dice-container">
        <img src={`/dice-${dice1}.png`} alt={`Dado 1: ${dice1}`} width={100} />
        <img src={`/dice-${dice2}.png`} alt={`Dado 2: ${dice2}`} width={100} />
      </div>
      <button onClick={handleRoll}>Jogar</button>
      <p>{message}</p>
      <div className="score">
        <p>Vitórias: {wins}</p>
        <p>Total de jogadas: {plays}</p>
        <p>Percentual de vitórias: {getWinPercentage()}%</p>
      </div>
    </div>
  );
}

export default App;
