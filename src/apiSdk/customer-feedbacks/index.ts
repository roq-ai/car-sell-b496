import queryString from 'query-string';
import { CustomerFeedbackInterface, CustomerFeedbackGetQueryInterface } from 'interfaces/customer-feedback';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerFeedbacks = async (
  query?: CustomerFeedbackGetQueryInterface,
): Promise<PaginatedInterface<CustomerFeedbackInterface>> => {
  return fetcher('/api/customer-feedbacks', {}, query);
};

export const createCustomerFeedback = async (customerFeedback: CustomerFeedbackInterface) => {
  return fetcher('/api/customer-feedbacks', { method: 'POST', body: JSON.stringify(customerFeedback) });
};

export const updateCustomerFeedbackById = async (id: string, customerFeedback: CustomerFeedbackInterface) => {
  return fetcher(`/api/customer-feedbacks/${id}`, { method: 'PUT', body: JSON.stringify(customerFeedback) });
};

export const getCustomerFeedbackById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/customer-feedbacks/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCustomerFeedbackById = async (id: string) => {
  return fetcher(`/api/customer-feedbacks/${id}`, { method: 'DELETE' });
};
