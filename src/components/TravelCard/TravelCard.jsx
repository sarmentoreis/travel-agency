import { Content } from "antd/es/layout/layout";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Rate } from "antd";

export default function TravelCard(props) {
  const { id, nome, img, classificacao, diarias, estado, preco } = props.travel;
  return (
    <Link to={`/details/123`}>
      <Content
        style={{
          padding: "1vw",
        }}
      >
        <div className={styles.card}>
          <img src={img} alt="Location image" />
          <div className={styles.card_info}>
            <h2>{nome}</h2>
            <p>Estado: {estado}</p>
            <p>R$: {preco}</p>
            <p>Diárias: {diarias} dias</p>
            <Rate disabled defaultValue={Number(classificacao)} />
          </div>
        </div>
      </Content>
    </Link>
  );
}
