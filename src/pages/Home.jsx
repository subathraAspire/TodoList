import { useState } from 'react';

const Home = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, { id: Date.now(), content: '', image: null }]);
  };

  const updateCardContent = (id, newContent) => {
    setCards(cards.map(card => card.id === id ? { ...card, content: newContent } : card));
  };

  const updateCardImage = (id, newImage) => {
    setCards(cards.map(card => card.id === id ? { ...card, image: newImage } : card));
  };

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center py-5"
      style={{
        backgroundColor: '#f8f9fa',
        overflowX: 'hidden',
      }}
    >
      <h1 className="mb-4">Welcome to the Todo List App</h1>
      <button
        onClick={addCard}
        className="btn btn-primary mb-4"
      >
        Add Card
      </button>
      <div
        className="d-flex flex-wrap justify-content-center gap-3"
        style={{
          maxWidth: '100%', // Ensure no horizontal overflow
        }}
      >
        {cards.map(card => (
          <div
            key={card.id}
            className="card shadow-lg"
            style={{
              width: '18rem',
              borderRadius: '10px',
            }}
          >
            {card.image && (
              <img
                src={card.image}
                alt="Uploaded"
                className="card-img-top"
                style={{
                  height: '150px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
            )}
            <div className="card-body">
              <textarea
                value={card.content}
                onChange={(e) => updateCardContent(card.id, e.target.value)}
                placeholder="Type here..."
                className="form-control mb-3"
                style={{
                  height: '80px',
                }}
              ></textarea>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      updateCardImage(card.id, reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="form-control mb-3"
              />
              <button
                onClick={() => removeCard(card.id)}
                className="btn btn-danger w-100"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
