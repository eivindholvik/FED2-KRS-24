import "./App.css";
import { useReducer, useEffect } from "react";

import Char from "./pokemon/Char";

function createEnemy(type, id, health, attack) {
    return {
        type,
        id,
        health,
        attack,
    };
}

const initialState = {
    health: 38,
    attack: 4,
    mp: 10,
    debuff: [],
    buffs: [],
    enemies: [createEnemy("snake", 0, 20, 2), createEnemy("goblin", 1, 32, 3)],
    incrementer: 2,
};

function reducer(state, action) {
    switch (action.type) {
        case "attack":
            const targetId = Number(action.payload.target);
            const targetIndex = state.enemies.findIndex(
                (enemy) => enemy.id === targetId
            );
            const target = state.enemies.find((enemy) => enemy.id === targetId);
            target.health -= state.attack;

            let enemies;

            if (target.health <= 0) {
                enemies = state.enemies.filter(
                    (enemy) => enemy.id !== targetId
                );
            } else if (state.enemies.length !== 1) {
                enemies = [
                    ...state.enemies.slice(0, targetIndex),
                    target,
                    ...state.enemies.slice(targetIndex + 1),
                ];
            } else {
                enemies = [target];
            }
            console.log(enemies);

            return { ...state, health: state.health - target.attack, enemies };
        case "addEnemy":
            return {
                ...state,
                enemies: [
                    ...state.enemies,
                    createEnemy(
                        "bunny",
                        state.incrementer + 1,
                        Math.ceil(Math.random() * 20 + 10),
                        Math.ceil(Math.random() * 2 + 2)
                    ),
                ],
                incrementer: state.incrementer + 1,
            };
        default:
            throw new Error();
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: "addEnemy" });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Char type="player" health={state.health} attack={state.attack} />

            {state.enemies.map((enemy) => {
                return (
                    <Char
                        id={enemy.id}
                        key={enemy.id}
                        type={enemy.type}
                        health={enemy.health}
                        attack={enemy.attack}
                        onClick={() => {
                            dispatch({
                                type: "attack",
                                payload: { target: enemy.id },
                            });
                        }}
                    />
                );
            })}
        </>
    );
}

export default App;
