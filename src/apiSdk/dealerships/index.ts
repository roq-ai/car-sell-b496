import queryString from 'query-string';
import { DealershipInterface, DealershipGetQueryInterface } from 'interfaces/dealership';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDealerships = async (
  query?: DealershipGetQueryInterface,
): Promise<PaginatedInterface<DealershipInterface>> => {
  return fetcher('/api/dealerships', {}, query);
};

export const createDealership = async (dealership: DealershipInterface) => {
  return fetcher('/api/dealerships', { method: 'POST', body: JSON.stringify(dealership) });
};

export const updateDealershipById = async (id: string, dealership: DealershipInterface) => {
  return fetcher(`/api/dealerships/${id}`, { method: 'PUT', body: JSON.stringify(dealership) });
};

export const getDealershipById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/dealerships/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDealershipById = async (id: string) => {
  return fetcher(`/api/dealerships/${id}`, { method: 'DELETE' });
};
