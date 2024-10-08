import React from "react";
import { Button, Form, InputNumber, Select } from "antd";
import TransactionServices from "../../services/TransactionServices";
import toast from "react-hot-toast";

const SubscribeComponent: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const newTransaction = {
      ...values,
      user_id: 1,
      date: new Date().toJSON(),
      uuid: "0",
      type: "Apertura",
      state: "Completada",
      transaction_id: 0,
    };

    const res = await TransactionServices.createTransaction(newTransaction);

    if (res?.error === true) {
      toast.error(res?.message);
    } else {
      toast.success(res?.message);
      form.resetFields();
    }
  };

  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-lg font-semibold">Suscribirse a un nuevo fondo</h1>
      </div>

      <Form
        layout="vertical"
        size="middle"
        className="mt-4"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="Valor de vinculación" required name="amount">
          <InputNumber
            required
            placeholder="Digite aquí..."
            className="w-full"
          />
        </Form.Item>
        <Form.Item label="Fondos" required name="fund_id">
          <Select placeholder="Selecciona una opción...">
            <Select.Option value={1}>FPV_BTG_PACTUAL_RECAUDADORA</Select.Option>
            <Select.Option value={2}>FPV_BTG_PACTUAL_ECOPETROL</Select.Option>
            <Select.Option value={3}>DEUDAPRIVADA</Select.Option>
            <Select.Option value={4}>FDO-ACCIONES</Select.Option>
            <Select.Option value={5}>FPV_BTG_PACTUAL_DINAMICA</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Tipo de notificación"
          required
          name="typeNotification"
        >
          <Select placeholder="Selecciona una opción...">
            <Select.Option value="email">Email</Select.Option>
            <Select.Option value="sms">SMS</Select.Option>
          </Select>
        </Form.Item>

        <Button className="w-full" type="primary" htmlType="submit">
          Realizar apertura
        </Button>
      </Form>
    </div>
  );
};

export default SubscribeComponent;
