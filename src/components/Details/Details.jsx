import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";

export default function Details() {
  const params = useParams();
  const travel = getLocalStorage(params.id) || {};

  const imageSrc =
    travel.imgs ||
    "https://img.odcdn.com.br/wp-content/uploads/2019/12/20191223113501.jpg";

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
          <img src={imageSrc} alt="Travel details" />
          <div className={styles.details_info}>
            <h1>{travel.nome || "Via Láctea"}</h1>
            <h2>Estado: {travel.estado || "-"}</h2>
            <p>
              {travel.descricao ||
                "Nossa galáxia tem a forma de um espiral e é composta por três elementos principais: disco, bojo e halo" +
                  ". O disco é constituído por bilhões de estrelas, poeira e gases, sendo responsável por definir o formato" +
                  "+de espiral. O bojo fica na região central, é circular e contém estrelas mais velhas, de cor avermelhada."}
            </p>
            <h3>Diárias: {travel.diarias || "∞"} dias</h3>
            <h1>R$: {travel.preco || "∞"}</h1>
          </div>
        </div>
      </Content>
    </ConfigProvider>
  );
}
