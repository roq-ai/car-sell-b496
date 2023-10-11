import { GetQueryInterface } from 'interfaces';

export interface CustomerFeedbackInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CustomerFeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
}
