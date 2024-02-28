import { useState } from "react";

import Card from "./components/Card";
import { cards } from "./assets/db";

function App() {
    const [cardsState, setCardsState] = useState(cards);
    return (
        <>
            {cardsState.map((card, index) => {
                return <Card key={index} {...card} />;
            })}
        </>
    );
}

export default App;
