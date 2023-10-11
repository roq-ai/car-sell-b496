import queryString from 'query-string';
import { CarModelInterface, CarModelGetQueryInterface } from 'interfaces/car-model';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarModels = async (
  query?: CarModelGetQueryInterface,
): Promise<PaginatedInterface<CarModelInterface>> => {
  return fetcher('/api/car-models', {}, query);
};

export const createCarModel = async (carModel: CarModelInterface) => {
  return fetcher('/api/car-models', { method: 'POST', body: JSON.stringify(carModel) });
};

export const updateCarModelById = async (id: string, carModel: CarModelInterface) => {
  return fetcher(`/api/car-models/${id}`, { method: 'PUT', body: JSON.stringify(carModel) });
};

export const getCarModelById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/car-models/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCarModelById = async (id: string) => {
  return fetcher(`/api/car-models/${id}`, { method: 'DELETE' });
};
