import queryString from 'query-string';
import { SalesRepresentativeInterface, SalesRepresentativeGetQueryInterface } from 'interfaces/sales-representative';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesRepresentatives = async (
  query?: SalesRepresentativeGetQueryInterface,
): Promise<PaginatedInterface<SalesRepresentativeInterface>> => {
  return fetcher('/api/sales-representatives', {}, query);
};

export const createSalesRepresentative = async (salesRepresentative: SalesRepresentativeInterface) => {
  return fetcher('/api/sales-representatives', { method: 'POST', body: JSON.stringify(salesRepresentative) });
};

export const updateSalesRepresentativeById = async (id: string, salesRepresentative: SalesRepresentativeInterface) => {
  return fetcher(`/api/sales-representatives/${id}`, { method: 'PUT', body: JSON.stringify(salesRepresentative) });
};

export const getSalesRepresentativeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/sales-representatives/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSalesRepresentativeById = async (id: string) => {
  return fetcher(`/api/sales-representatives/${id}`, { method: 'DELETE' });
};
