import queryString from 'query-string';
import { CarInsuranceInterface, CarInsuranceGetQueryInterface } from 'interfaces/car-insurance';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarInsurances = async (
  query?: CarInsuranceGetQueryInterface,
): Promise<PaginatedInterface<CarInsuranceInterface>> => {
  return fetcher('/api/car-insurances', {}, query);
};

export const createCarInsurance = async (carInsurance: CarInsuranceInterface) => {
  return fetcher('/api/car-insurances', { method: 'POST', body: JSON.stringify(carInsurance) });
};

export const updateCarInsuranceById = async (id: string, carInsurance: CarInsuranceInterface) => {
  return fetcher(`/api/car-insurances/${id}`, { method: 'PUT', body: JSON.stringify(carInsurance) });
};

export const getCarInsuranceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/car-insurances/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCarInsuranceById = async (id: string) => {
  return fetcher(`/api/car-insurances/${id}`, { method: 'DELETE' });
};
