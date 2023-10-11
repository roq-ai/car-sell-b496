import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  purchase_date: yup.date().required(),
  price_paid: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
  dealership_id: yup.string().nullable().required(),
});
