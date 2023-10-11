import { GetQueryInterface } from 'interfaces';

export interface PromotionCampaignInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PromotionCampaignGetQueryInterface extends GetQueryInterface {
  id?: string;
}
