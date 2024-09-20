import { Link, Navigate } from "react-router-dom";
import styles from "./style.module.css";
import { Button, ConfigProvider } from "antd";

export default function NotFound() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultGhostColor: "black",
            defaultHoverColor: "white",
            defaultActiveColor: "black",
            groupBorderColor: "black",
            defaultActiveBorderColor: "white",
            defaultGhostBorderColor: "#00000071",
            defaultHoverBorderColor: "black",
          },
        },
      }}
    >
      <div className={styles.container}>
        <h1>Página não encontrada</h1>
        <Link to={"/"}>
          <Button
            ghost
            style={{
              margin: "1vw",
            }}
          >
            Home
          </Button>
        </Link>
      </div>
    </ConfigProvider>
  );
}
