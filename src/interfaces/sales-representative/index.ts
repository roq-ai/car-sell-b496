import { UserInterface } from 'interfaces/user';
import { DealershipInterface } from 'interfaces/dealership';
import { GetQueryInterface } from 'interfaces';

export interface SalesRepresentativeInterface {
  id?: string;
  name: string;
  contact_number: string;
  user_id: string;
  dealership_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  dealership?: DealershipInterface;
  _count?: {};
}

export interface SalesRepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact_number?: string;
  user_id?: string;
  dealership_id?: string;
}
