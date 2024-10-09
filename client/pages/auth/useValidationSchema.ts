import * as Yup from 'yup';

export const useValidationSchema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .trim()
            .email('Email wrong format')
            .required('Email is required'),
        password: Yup.string()
            .trim()
            .min(4, 'Min length is 4 character')
            .max(20, 'Max length is 4 character')
            .required('Password is required'),
    })
};
