import Card from "./Card.jsx";

function Tours({ tours, removeTour }) {
    return (
        <div>
            <div>
                <h2>Plan with Love</h2>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </div>
    );
}

export default Tours;
