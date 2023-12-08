import { HTMLInputTypeAttribute } from 'react';
import Label from '../Label/Label';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../../../types/user.types';

import styles from './Input.module.scss';

interface IInputProps {
    type: HTMLInputTypeAttribute;
    placeholder: string;
    label?: boolean;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    register: UseFormRegister<IFormInput>;
    name: keyof IFormInput;
    errors?: any;
}

const Input = ({
    type,
    placeholder,
    label,
    id,
    onChange,
    register,
    name,
    errors,
}: IInputProps) => {
    const labelItem =
        label && id ? <Label idName={id}>+38 (XXX) XXX - XX - XX</Label> : null;

    return (
        <>
            <input
                {...register(name)}
                type={type}
                className={`${styles.input}`}
                placeholder={placeholder}
                id={id}
                onChange={onChange}
            />
            {labelItem}
            {errors && errors[name] && (
                <span className="error">{errors[name]?.message}</span>
            )}
        </>
    );
};
export default Input;
