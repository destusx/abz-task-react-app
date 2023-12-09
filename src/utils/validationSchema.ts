import * as yup from 'yup';

const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;
const emailRegExp =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

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
        .matches(emailRegExp, 'Invalid email format'),
    phone: yup
        .string()
        .required('Phone is required')
        .max(120)
        .matches(phoneRegExp, 'Invalid phone number format'),
});
