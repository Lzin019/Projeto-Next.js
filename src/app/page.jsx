import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Next.js</h1>
                <p className={styles.subtitle}>O framework React para produção</p>

                <a
                    href="https://frontend.codeverse.dev.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}>
                    <svg
                        className={styles.ctaIcon}
                        viewBox="-11.5 -10.23174 23 20.46348"
                        width="25"
                        height="25"
                        aria-hidden="true">
                        <circle r="2.05" fill="currentColor" />
                        <g stroke="currentColor" strokeWidth="1" fill="none">
                            <ellipse rx="11" ry="4.2" />
                            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                    </svg>
                    Ver o site oficial
                </a>

                <p className={styles.tagline}>Desenvolvido com React e Next.js</p>
            </div>

            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2023 Next.js. Todos os direitos reservados.</p>
            </footer>
        </main>
    );
}
