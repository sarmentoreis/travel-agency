import { Button, ConfigProvider, Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import styles from "./style.module.css";
import { Link, useParams } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";

export default function Details() {
  const params = useParams();
  const { darkmode } = params;
  const travel = getLocalStorage(params.id) || {};

  const isDarkMode = darkmode === "true";
  const imageSrc = travel.imgs || [
    "https://img.odcdn.com.br/wp-content/uploads/2019/12/20191223113501.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
    "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/1.jpg?w=1600&h=900",
    "https://forbes.com.br/wp-content/uploads/2024/04/Galaxia.3.png",
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultColor: isDarkMode ? "black" : "white",
            defaultBg: isDarkMode ? "white" : "#001529",
            defaultHoverColor: isDarkMode ? "white" : "black",
            defaultActiveColor: "#8EA2B4",
            defaultHoverBg: isDarkMode ? "#001529" : "#8EA2B4",
            groupBorderColor: isDarkMode ? "white" : "#8EA2B4",
            defaultActiveBorderColor: "#001529",
            defaultHoverBorderColor: isDarkMode ? "#001529" : "#8EA2B4",
          },
        },
      }}
    >
      <Header
        style={{
          background: isDarkMode ? "#001529" : "#8EA2B4",
          color: isDarkMode ? "#ffffff" : "#001529",
          fontSize: "1.5em",
        }}
      >
        <h2>Travel Agency</h2>
      </Header>
      <Content
        style={{
          background: isDarkMode ? "#6F7C87" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#001529",
          padding: "3vw",
          height: "93.1vh",
        }}
      >
        <div className={styles.details}>
          <div className={styles.carousel_container}>
            <Carousel autoplay arrows>
              {imageSrc.map((eachImage, index) => (
                <img src={eachImage} alt="Travel details" />
              ))}
            </Carousel>
          </div>
          <div className={styles.details_info}>
            <h1>{travel.nome || "Universo"}</h1>
            <h2>Estado: {travel.estado || "-"}</h2>
            <p>
              {travel.descricao ||
                "Na astronomia, o Universo corresponde ao conjunto de toda a matéria, energia, espaço " +
                  "e tempo existente. Ele reúne os astros: planetas, cometas, estrelas, galáxias, nebulosas, " +
                  "satélites, dentre outros. O universo é, portanto, mais que um local imenso, ele é tudo, e engloba tudo o que existe."}
            </p>
            <h3>Diárias: {travel.diarias || "∞"} dias</h3>
            <h1>R$: {travel.preco || "∞"}</h1>
          </div>
        </div>
        <div className={styles.details_btn}>
          <Link to={"/"}>
            <Button
              style={{
                margin: "5vw",
                width: "10vw",
                height: "6vh",
                fontSize: "1.5em",
              }}
            >
              Home
            </Button>
          </Link>
        </div>
      </Content>
    </ConfigProvider>
  );
}
