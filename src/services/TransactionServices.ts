import { getRequest, postRequest, deleteRequest } from "./Request";

const BASE_URL: String = "https://back.felixochoa.tech";

export default {
  getAllTransactions: async () => {
    try {
      return await getRequest(`${BASE_URL}/transactions/get-all?limit=10`);
    } catch (error) {
      return { error };
    }
  },

  getActiveSubscriptions: async () => {
    try {
      return await getRequest(`${BASE_URL}/transactions/get-active?user_id=1`);
    } catch (error) {
      return { error };
    }
  },

  createTransaction: async (data: any) => {
    try {
      return await postRequest(`${BASE_URL}/transactions/subscribe`, data);
    } catch (error) {
      return { error };
    }
  },

  unSubscribeTransaction: async (data: any) => {
    try {
      return await deleteRequest(
        `${BASE_URL}/transactions/unsubscribe?transaction_id=${data.transaction_id}`
      );
    } catch (error) {
      return { error };
    }
  },
};
