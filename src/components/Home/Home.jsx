import styles from "./style.module.css";
import { Content, Header } from "antd/es/layout/layout";
import {
  ConfigProvider,
  FloatButton,
  Modal,
  Form,
  Input,
  InputNumber,
  Rate,
  Select,
  Switch,
  notification,
} from "antd";
import TravelCard from "../TravelCard/TravelCard";
import { PlusCircleFilled, DeleteFilled } from "@ant-design/icons";
import useModal from "../../hooks/useModal";
import useTravels from "../../hooks/useTravels";
import useListTravels from "../../hooks/useListTravels";
import createTravel from "../../utils/createTravel";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import deleteTravel from "../../utils/deleteTravel";
import useDarkMode from "../../hooks/useDarkMode";
import { loadTheme, loadTravels } from "../../utils/loadLocalStorage";

export default function Home() {
  const [api, contextHolder] = notification.useNotification();
  const { travels, setTravels } = useTravels();
  const { isDarkMode, setIsDarkMode, handleDarkMode } = useDarkMode();
  const { listTravels, setListTravels } = useListTravels();
  const { showModal, handleCancel, handleOk, isModalOpen } = useModal();
  const [form] = Form.useForm();
  const { TextArea } = Input;

  useEffect(() => {
    loadTravels(setListTravels);
    loadTheme(setIsDarkMode);
  }, []);

  const handleDeleteButtonClick = () => {
    let deleteATravel = "";
    Modal.confirm({
      title: "Informe o nome do país a ser deletado",
      content: (
        <Input
          autoFocus
          placeholder="Nome do país"
          onChange={(e) => (deleteATravel = e.target.value)}
        />
      ),
      onOk: () => {
        deleteTravel(listTravels, setListTravels, deleteATravel, api);
      },
    });
  };

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "Cadastro de viagem",
      description: `Viagem ${travels.nome} cadastrada com sucesso!`,
    });
  };

  return (
    <ConfigProvider>
      {contextHolder}
      <Header
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "1.5em",
          background: isDarkMode ? "#001529" : "#8EA2B4",
          color: isDarkMode ? "#ffffff" : "#001529",
          alignItems: "center",
        }}
      >
        <h2 className={styles.title}>Travel Agency</h2>
        <Switch
          checked={isDarkMode}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          defaultChecked
          onChange={handleDarkMode}
        />
      </Header>
      <Content
        style={{
          background: isDarkMode ? "#6F7C87" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#001529",
        }}
        className={styles.home}
      >
        {listTravels.map((location) => (
          <TravelCard
            key={location.id}
            travel={location}
            darkmode={isDarkMode}
          />
        ))}
      </Content>
      <FloatButton.Group>
        <FloatButton
          onClick={() => {
            showModal();
            setTravels({ ...travels, id: nanoid() });
          }}
          type={isDarkMode ? "default" : "primary"}
          icon={<PlusCircleFilled />}
        />
        <FloatButton
          onClick={handleDeleteButtonClick}
          type={isDarkMode ? "default" : "primary"}
          icon={<DeleteFilled />}
        />
      </FloatButton.Group>
      <Modal
        title="Cadastrar viagens"
        open={isModalOpen}
        onOk={() => {
          form.submit();
        }}
        onCancel={() => {
          handleCancel();
          setTravels({});
        }}
      >
        <Form
          form={form}
          onFinish={(value) => {
            if (value) {
              handleOk();
              createTravel(listTravels, setListTravels, travels);
              openNotificationWithIcon();
              form.resetFields();
            }
          }}
          layout="vertical"
        >
          <Form.Item
            name="pais"
            rules={[
              {
                required: true,
                message: "Informe um país de destino",
              },
            ]}
            label="País"
          >
            <Input
              allowClear={true}
              placeholder="País"
              onChange={(e) => setTravels({ ...travels, nome: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name="estado"
            rules={[
              {
                required: true,
                message: "Informe o estado do país",
              },
            ]}
            label="Estado"
          >
            <Input
              allowClear={true}
              placeholder="Estado"
              onChange={(e) =>
                setTravels({ ...travels, estado: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="descricao"
            rules={[
              {
                required: true,
                message: "Informe uma descrição do país",
              },
            ]}
            label="Descrição"
          >
            <TextArea
              autoSize={{ maxRows: 4 }}
              placeholder="Digite uma descrição do país"
              maxLength={310}
              onChange={(e) =>
                setTravels({ ...travels, descricao: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="diarias"
            rules={[
              {
                required: true,
                message: "Informe a quantidade de diárias da viagem",
              },
            ]}
            label="Diárias"
          >
            <InputNumber
              min={0}
              max={365}
              placeholder="Diárias"
              onChange={(e) =>
                setTravels({ ...travels, diarias: e.toString() })
              }
            />
          </Form.Item>
          <Form.Item
            name="classificacao"
            rules={[
              {
                required: true,
                message: "Informe uma classificação para o país",
              },
            ]}
            label="Classificação"
          >
            <Rate
              onChange={(e) =>
                setTravels({ ...travels, classificacao: e.toString() })
              }
            />
          </Form.Item>
          <Form.Item
            name="imagens"
            rules={[
              {
                required: true,
                message: "Informe pelo menos 1 URL de imagem",
              },
            ]}
            label="Imagens"
          >
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Insira até quatro(4) URL's de imagens"
              allowClear
              maxCount={4}
              onChange={(e) => {
                if (e.length <= 4) {
                  setTravels((prevTravels) => ({
                    ...prevTravels,
                    imgs: e,
                  }));
                }
              }}
              value={travels.imgs}
            />
          </Form.Item>
          <Form.Item
            name="preco"
            rules={[
              {
                required: true,
                message: "Informe o preço da viagem",
              },
            ]}
            label="Preço"
          >
            <InputNumber
              min={0}
              step={100.0}
              formatter={(value) =>
                `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\R\$\s?|(,*)/g, "")}
              onChange={(value) => setTravels({ ...travels, preco: value })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}
