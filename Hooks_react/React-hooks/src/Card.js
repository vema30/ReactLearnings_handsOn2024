// src/Card.js
import React, { useState } from 'react';
import img from "./assets/image.png";
import './Card.css';

function Card({ id, description, onDelete }) {
    const truncatedDescription = description.substring(0, 202);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handleDelete = () => {
        onDelete(id); // Notify parent component to delete this card
    };

    return (
        <div className="card">
            <div className="card-content">
                <img src={img} alt="Description of the image" />
                <br />
                <p className="price">$34,650</p>
                <p>{showFullDescription ? description : truncatedDescription}</p>
                <div className="btns">
                    <button onClick={toggleDescription}>
                        {showFullDescription ? 'Show less' : 'Show more'}
                    </button>
                    <button className="btn-del" onClick={handleDelete}>
                        Delete me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
