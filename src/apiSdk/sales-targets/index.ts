import queryString from 'query-string';
import { SalesTargetInterface, SalesTargetGetQueryInterface } from 'interfaces/sales-target';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesTargets = async (
  query?: SalesTargetGetQueryInterface,
): Promise<PaginatedInterface<SalesTargetInterface>> => {
  return fetcher('/api/sales-targets', {}, query);
};

export const createSalesTarget = async (salesTarget: SalesTargetInterface) => {
  return fetcher('/api/sales-targets', { method: 'POST', body: JSON.stringify(salesTarget) });
};

export const updateSalesTargetById = async (id: string, salesTarget: SalesTargetInterface) => {
  return fetcher(`/api/sales-targets/${id}`, { method: 'PUT', body: JSON.stringify(salesTarget) });
};

export const getSalesTargetById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/sales-targets/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSalesTargetById = async (id: string) => {
  return fetcher(`/api/sales-targets/${id}`, { method: 'DELETE' });
};
