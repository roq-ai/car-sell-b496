import queryString from 'query-string';
import {
  CarMaintenanceHistoryInterface,
  CarMaintenanceHistoryGetQueryInterface,
} from 'interfaces/car-maintenance-history';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarMaintenanceHistories = async (
  query?: CarMaintenanceHistoryGetQueryInterface,
): Promise<PaginatedInterface<CarMaintenanceHistoryInterface>> => {
  return fetcher('/api/car-maintenance-histories', {}, query);
};

export const createCarMaintenanceHistory = async (carMaintenanceHistory: CarMaintenanceHistoryInterface) => {
  return fetcher('/api/car-maintenance-histories', { method: 'POST', body: JSON.stringify(carMaintenanceHistory) });
};

export const updateCarMaintenanceHistoryById = async (
  id: string,
  carMaintenanceHistory: CarMaintenanceHistoryInterface,
) => {
  return fetcher(`/api/car-maintenance-histories/${id}`, {
    method: 'PUT',
    body: JSON.stringify(carMaintenanceHistory),
  });
};

export const getCarMaintenanceHistoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/car-maintenance-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCarMaintenanceHistoryById = async (id: string) => {
  return fetcher(`/api/car-maintenance-histories/${id}`, { method: 'DELETE' });
};
