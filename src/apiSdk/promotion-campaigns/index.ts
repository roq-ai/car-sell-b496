import queryString from 'query-string';
import { PromotionCampaignInterface, PromotionCampaignGetQueryInterface } from 'interfaces/promotion-campaign';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPromotionCampaigns = async (
  query?: PromotionCampaignGetQueryInterface,
): Promise<PaginatedInterface<PromotionCampaignInterface>> => {
  return fetcher('/api/promotion-campaigns', {}, query);
};

export const createPromotionCampaign = async (promotionCampaign: PromotionCampaignInterface) => {
  return fetcher('/api/promotion-campaigns', { method: 'POST', body: JSON.stringify(promotionCampaign) });
};

export const updatePromotionCampaignById = async (id: string, promotionCampaign: PromotionCampaignInterface) => {
  return fetcher(`/api/promotion-campaigns/${id}`, { method: 'PUT', body: JSON.stringify(promotionCampaign) });
};

export const getPromotionCampaignById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/promotion-campaigns/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePromotionCampaignById = async (id: string) => {
  return fetcher(`/api/promotion-campaigns/${id}`, { method: 'DELETE' });
};
