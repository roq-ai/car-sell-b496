import * as yup from 'yup';

export const salesManagerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contact_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
  dealership_id: yup.string().nullable().required(),
});
