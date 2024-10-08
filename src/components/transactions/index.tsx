import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import TransactionServices from "../../services/TransactionServices";

interface TransactionProps {
  transaction_id: number;
  uuid: string;
  type: string;
  amount: number;
  state: string;
  created_at: string;
}

export interface TransactionsProps {
  transactions: TransactionProps[];
}

const columns: TableProps<TransactionProps>["columns"] = [
  {
    title: "Id de Transacción",
    dataIndex: "transaction_id",
    key: "transaction_id",
    sorter: (a, b) => a.transaction_id - b.transaction_id,
    defaultSortOrder: "ascend",
  },
  {
    title: "UUID",
    dataIndex: "uuid",
    key: "uuid",
  },
  {
    title: "Nombre del Fondo",
    dataIndex: "fund_info",
    key: "fund_info",
    render: (text) => {
      return <span>{text.name}</span>;
    },
  },
  {
    title: "Tipo",
    dataIndex: "type",
    key: "type",
    render: (text) => (
      <Tag color="blue">{text.charAt(0).toUpperCase() + text.slice(1)}</Tag>
    ),
  },
  {
    title: "Monto",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Estado",
    dataIndex: "state",
    key: "state",
    render: (text) => {
      switch (text) {
        case "Cancelada":
          return <Tag color="red">Cancelada</Tag>;
        case "Completada":
          return <Tag color="green">Completada</Tag>;
        default:
          return <Tag color="green">Completada</Tag>;
      }
    },
  },
  {
    title: "Fecha de Creación",
    dataIndex: "date",
    key: "date",
    render: (text) => <span>{new Date(text).toLocaleString()}</span>,
  },
];

const TransactionsComponent: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionsProps[] | any>(
    []
  );

  const getAllTransactions = async () => {
    const res = await TransactionServices.getAllTransactions();

    if (Array.isArray(res)) {
      setTransactions(res);
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <Table<TransactionProps> columns={columns} dataSource={transactions} />
  );
};

export default TransactionsComponent;
