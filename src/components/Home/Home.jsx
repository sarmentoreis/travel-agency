import styles from "./style.module.css";
import { Header } from "antd/es/layout/layout";
import {
  ConfigProvider,
  FloatButton,
  Modal,
  Form,
  Input,
  InputNumber,
  Rate,
} from "antd";
import TravelCard from "../TravelCard/TravelCard";
import { PlusCircleFilled } from "@ant-design/icons";
import useModal from "../../hooks/useModal";
import useTravels from "../../hooks/useTravels";
import useListTravels from "../../hooks/useListTravels";
import createTravel from "../../utils/createTravel";
import { nanoid } from "nanoid";

const { TextArea } = Input;

export default function Home() {
  const { travels, setTravels } = useTravels();
  const { listTravels, setListTravels } = useListTravels();
  const { showModal, handleCancel, handleOk, isModalOpen } = useModal();
  console.log(travels);

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
      <div className={styles.home}>
        {listTravels.map((location) => (
          <TravelCard key={location.id} travel={location} />
        ))}
      </div>
      <FloatButton
        onClick={() => {
          showModal();
          setTravels({ ...travels, id: nanoid() });
        }}
        type={"primary"}
        icon={<PlusCircleFilled />}
      ></FloatButton>
      <Modal
        title="Cadastrar viagens"
        open={isModalOpen}
        onOk={() => {
          handleOk();
          createTravel(listTravels, setListTravels, travels);
        }}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="País">
            <Input
              allowClear={true}
              placeholder="País"
              onChange={(e) => setTravels({ ...travels, nome: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Estado">
            <Input
              allowClear={true}
              placeholder="Estado"
              onChange={(e) =>
                setTravels({ ...travels, estado: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Descrição">
            <TextArea
              autoSize={{ maxRows: 4 }}
              placeholder="Digite uma descrição do país"
              maxLength={310}
              onChange={(e) =>
                setTravels({ ...travels, descricao: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Diárias">
            <InputNumber
              min={0}
              max={365}
              placeholder="Diárias"
              onChange={(e) =>
                setTravels({ ...travels, diarias: e.toString() })
              }
            />
          </Form.Item>
          <Form.Item label="Classificação">
            <Rate
              onChange={(e) =>
                setTravels({ ...travels, classificacao: e.toString() })
              }
            />
          </Form.Item>
          <Form.Item label="Preço">
            <InputNumber
              min={0}
              step={100.0}
              formatter={(value) =>
                `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              onChange={(e) => setTravels({ ...travels, preco: e.toString() })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}
