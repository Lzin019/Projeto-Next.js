// not-found.jsx
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles["not-found"]}>
            <h1>4🔍4</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você procura não existe.</p>

            <div>
                <Link href="/">🏠 Voltar para Home</Link>
                <Link href="/contato">💬 Fale Conosco</Link>
            </div>
        </div>
    )
}
