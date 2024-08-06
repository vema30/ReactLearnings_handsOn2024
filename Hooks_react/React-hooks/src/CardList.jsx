
import React, { useState } from 'react';
import Card from './CardList';

function CardList() {
    const initialCards = [
        { id: 1, description: "Agra is a city located in the state of Uttar Pradesh in India. It is renowned worldwide for being home to one of the Seven Wonders of the World, the iconic Taj Mahal." },
        { id: 2, description: "Another UNESCO World Heritage Site, the Agra Fort is a massive fortification built by Emperor Akbar in the 16th century." },
        { id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
    ];
    const [cards, setCards] = useState(initialCards);

    const handleDeleteCard = (id) => {
        const newCards = cards.filter(card => card.id !== id);
        setCards(newCards);
        if (newCards.length === 0) {
            // Example: Handle refreshing or recreating cards
            console.log("No more cards. Refreshing...");
            // Logic to fetch new data or reload the page
            // window.location.reload(); // Reload the page
        }
    };

    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.id} id={card.id} description={card.description} onDelete={handleDeleteCard} />
            ))}
        </div>
    );
}

export default CardList;
