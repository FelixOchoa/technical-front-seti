import React from "react";
import { Button, Form, InputNumber } from "antd";
import TransactionServices from "../../services/TransactionServices";
import toast from "react-hot-toast";

const UnSubscribeComponent: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const newTransaction = {
      transaction_id: values.transaction_id,
    };

    const res = await TransactionServices.unSubscribeTransaction(
      newTransaction
    );

    if (res?.error === true) {
      toast.error(res?.message);
    } else {
      toast.success(res?.message);
      form.resetFields();
    }
  };

  return (
    <div className="flex flex-col w-full p-8">
      <h1 className="text-lg font-semibold">Cancelar apertura de un Fondo</h1>

      <Form
        layout="vertical"
        size="middle"
        className="mt-4"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="Id de la transacción" required name="transaction_id">
          <InputNumber
            required
            placeholder="Digite aquí..."
            className="w-full"
          />
        </Form.Item>

        <Button className="w-full" type="primary" htmlType="submit">
          Realizar cancelación
        </Button>
      </Form>
    </div>
  );
};

export default UnSubscribeComponent;
