import apiClient from '@/services/apiClient';

/**
 * Base API functions for FINBOOKS.
 * Centralizing fetches as per AI Guidelines.
 */

export const dashboardApi = {
  getMetrics: async () => {
    const response = await apiClient.get('/dashboard/metrics');
    return response.data;
  }
};

export const billingApi = {
  createBill: async (data: any) => {
    const response = await apiClient.post('/billing', data);
    return response.data;
  }
};

export const inventoryApi = {
  getItems: async () => {
    const response = await apiClient.get('/items');
    return response.data;
  }
};

export const tableApi = {
  getTables: async () => {
    const response = await apiClient.get('/tables');
    return response.data;
  },
  updateStatus: async (id: string, status: string) => {
    const response = await apiClient.patch(`/tables/${id}/status`, { status });
    return response.data;
  }
};
