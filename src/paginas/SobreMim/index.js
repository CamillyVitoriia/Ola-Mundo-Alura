import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Camilly!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Profissional apaixonada por tecnologia, especializada em desenvolvimento Front-End, com experiência em HTML, JavaScript, CSS e SQL.
            </p>
            <p className={styles.paragrafo}>
            Atualmente cursando Gestão da Tecnologia da Informação na USJT. Participante ativa do programa ONE NEXT da Oracle e Alura para desenvolvimento de soluções inovadoras.            </p>
            <p className={styles.paragrafo}>
            Em busca de oportunidades para contribuir com avanços tecnológicos impactantes.            </p>
            
        </PostModelo>
    )
}