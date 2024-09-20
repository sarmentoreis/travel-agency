import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";

const mock = {
  id: 1,
  nome: "Japão",
  imgs: [
    "https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=16x9&q=h_833,w_1480,c_fill",
  ],
  descricao:
    "O Japão é o 11º maior país do mundo em população. De acordo com os dados das Nações Unidas para 2020, o território japonês possui um contingente populacional de 126.476.000 de pessoas. Além de populoso, pode-se dizer que o Japão é um país densamente povoado, com distribuição de 346,9 habitantes a cada km².",
  diarias: "5",
  estado: "Tokyo",
  preco: "5.000,00",
};

export default function Details() {
  const params = useParams();

  console.log(params);

  return (
    <ConfigProvider>
      <Header
        style={{
          color: "snow",
          fontSize: "1.5em",
        }}
      >
        Travel Agency
      </Header>
      <Content
        style={{
          padding: "3vw",
        }}
      >
        <div className={styles.details}>
          <img src={mock.imgs[0]} alt="Travel details" />
          <div className={styles.details_info}>
            <h1>{mock.nome}</h1>
            <h2>Estado: {mock.estado}</h2>
            <p>{mock.descricao}</p>
            <h3>Diárias: {mock.diarias} dias</h3>
            <h1>R$: {mock.preco}</h1>
          </div>
        </div>
      </Content>
    </ConfigProvider>
  );
}
