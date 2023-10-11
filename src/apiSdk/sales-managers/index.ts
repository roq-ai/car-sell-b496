import queryString from 'query-string';
import { SalesManagerInterface, SalesManagerGetQueryInterface } from 'interfaces/sales-manager';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesManagers = async (
  query?: SalesManagerGetQueryInterface,
): Promise<PaginatedInterface<SalesManagerInterface>> => {
  return fetcher('/api/sales-managers', {}, query);
};

export const createSalesManager = async (salesManager: SalesManagerInterface) => {
  return fetcher('/api/sales-managers', { method: 'POST', body: JSON.stringify(salesManager) });
};

export const updateSalesManagerById = async (id: string, salesManager: SalesManagerInterface) => {
  return fetcher(`/api/sales-managers/${id}`, { method: 'PUT', body: JSON.stringify(salesManager) });
};

export const getSalesManagerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/sales-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSalesManagerById = async (id: string) => {
  return fetcher(`/api/sales-managers/${id}`, { method: 'DELETE' });
};
