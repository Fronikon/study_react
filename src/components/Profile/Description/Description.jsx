import styles from "./Description.module.scss";

function Description() {
    return (
        <div className={styles.container}>
            <h3 className="title">Описание:</h3>
            <p className={styles.description}>Предисловие: Наконец появилась возможность добраться до интернета, сейчас мы находимся в Панамском канале и здесь есть wifi. Я на судне уже больше месяца и пока я здесь, я писал все интересное что здесь происходит и вот наконец есть возможность этим поделиться. Фотографий пока не будет, их я выложу или позже, или уже когда вернусь домой.
            </p>
        </div>
    );
}

export default Description;