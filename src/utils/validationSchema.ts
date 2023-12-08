import * as yup from 'yup';

const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Please enter a minimum of 2 characters')
        .max(60, 'Please enter a maximum of 60 characters'),
    email: yup
        .string()
        .required('Email is required')
        .min(2, 'Please enter a minimum of 2 characters')
        .max(100, 'Please enter a maximum of 100 characters')
        .email('Invalid email format'),
    phone: yup
        .string()
        .required('Phone is required')
        .max(120)
        .matches(phoneRegExp, 'Invalid phone number format'),
});
