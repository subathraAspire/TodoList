import { useState } from 'react';

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, { id: Date.now(), text: '' }]);
  };

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleTextChange = (id, text) => {
    setCards(cards.map(card => card.id === id ? { ...card, text } : card));
  };

  return (
    <div className="dashboard">
      <button className="add-card-button" onClick={addCard}>+ Add Card</button>
      <div className="cards-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div
              className="card-content"
              contentEditable="true"
              suppressContentEditableWarning={true}
              onInput={(e) => handleTextChange(card.id, e.target.innerText)}
              placeholder="Type something.."
            >
              {card.text || 'Type something...'}
            </div>
            <button
              className="remove-card-button"
              onClick={() => removeCard(card.id)}
            >
              Remove Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
