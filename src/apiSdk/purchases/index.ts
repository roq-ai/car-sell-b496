import queryString from 'query-string';
import { PurchaseInterface, PurchaseGetQueryInterface } from 'interfaces/purchase';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPurchases = async (
  query?: PurchaseGetQueryInterface,
): Promise<PaginatedInterface<PurchaseInterface>> => {
  return fetcher('/api/purchases', {}, query);
};

export const createPurchase = async (purchase: PurchaseInterface) => {
  return fetcher('/api/purchases', { method: 'POST', body: JSON.stringify(purchase) });
};

export const updatePurchaseById = async (id: string, purchase: PurchaseInterface) => {
  return fetcher(`/api/purchases/${id}`, { method: 'PUT', body: JSON.stringify(purchase) });
};

export const getPurchaseById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/purchases/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePurchaseById = async (id: string) => {
  return fetcher(`/api/purchases/${id}`, { method: 'DELETE' });
};
