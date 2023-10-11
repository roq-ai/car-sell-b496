import { CarInterface } from 'interfaces/car';
import { PurchaseInterface } from 'interfaces/purchase';
import { SalesManagerInterface } from 'interfaces/sales-manager';
import { SalesRepresentativeInterface } from 'interfaces/sales-representative';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DealershipInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  car?: CarInterface[];
  purchase?: PurchaseInterface[];
  sales_manager?: SalesManagerInterface[];
  sales_representative?: SalesRepresentativeInterface[];
  user?: UserInterface;
  _count?: {
    car?: number;
    purchase?: number;
    sales_manager?: number;
    sales_representative?: number;
  };
}

export interface DealershipGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
