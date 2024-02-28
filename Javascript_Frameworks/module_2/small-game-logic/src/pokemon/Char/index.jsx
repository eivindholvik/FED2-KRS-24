import styles from "./Char.module.scss";
import Otter from "../../assets/otter.jpg";

function Char({ type, health, attack, onClick }) {
    return (
        <div
            onClick={onClick}
            className={type !== "player" ? styles.enemy : styles.player}
        >
            <img src={Otter} alt="otter" />
            <h2 className={styles.heading}>{type}</h2>
            <ul>
                <li>{health}</li>
                <li>{attack}</li>
            </ul>
        </div>
    );
}

export default Char;
