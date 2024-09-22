import { Content } from "antd/es/layout/layout";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Rate } from "antd";

export default function TravelCard(props) {
  const { id, nome, imgs, classificacao, diarias, estado, preco } =
    props.travel;
  const { darkmode } = props;
  return (
    <Link to={`/details/${id}/${darkmode}`}>
      <Content
        style={{
          padding: "1vw",
          color: darkmode ? "#ffffff" : "#001529",
        }}
      >
        <div className={styles.card}>
          <img src={imgs[0]} alt="Location image" />
          <div className={styles.card_info}>
            <h2>{nome}</h2>
            <p>Estado: {estado}</p>
            <p>Diárias: {diarias} dia(s)</p>
            <Rate disabled defaultValue={Number(classificacao)} />
            <h3>R$: {preco}</h3>
          </div>
        </div>
      </Content>
    </Link>
  );
}
