import styles from './About.module.css'

export default function AboutPage(options) {
    return (
        <div className={styles.container}>
            <h1>
                Página  Nosotros
            </h1>
            <article>
                <p>
                    Igualmente útil para todo el mundo es una nación progresista, productivo y civilizado.
                </p>
                <p>
                    Religión contiene la tradición y lo absorbe; y la tradición es una manifestación de la vida natural de la gente
                </p>
            </article>
        </div>
    )
}