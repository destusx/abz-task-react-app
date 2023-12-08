import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../Button/Button';
import FileInput from '../FileInput/FileInput';
import Input from '../Input/Input';
import RadioBlock from '../RadioList/RadioList';
import SuccessMsg from '../../Other/SuccessMsg/SuccessMsg';
import { useUserStore } from '../../../store/useUserStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../../utils/validationSchema';
import { IFormInput } from '../../../types/user.types';

import styles from './Form.module.scss';

const Form = () => {
    const [AddUser, token] = useUserStore(state => [state.addUser, state.token]);
    const [positionId, setPositionId] = useState<number | undefined>();
    const [file, setFile] = useState<File | null>(null);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        mode: 'onSubmit',
        resolver: yupResolver(validationSchema),
    });

    const handleFileChange = (file: File | null) => {
        if (file) {
            setFile(file);
        }
    };

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        if (positionId && file) {
            const formData = new FormData();
            formData.append('position_id', positionId.toString());
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('photo', file);

            const res = await AddUser(formData, token);

            if (res.success) {
                setShowSuccessMsg(true);
                reset();
                setTimeout(() => {
                    setShowSuccessMsg(false);
                }, 4000);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
            {showSuccessMsg && <SuccessMsg />}
            <Input
                name="name"
                register={register}
                errors={errors}
                type="text"
                placeholder="Your name"
            />
            <Input
                name="email"
                register={register}
                errors={errors}
                type="email"
                placeholder="Email"
            />
            <Input
                name="phone"
                register={register}
                errors={errors}
                type="phone"
                placeholder="Phone"
                id="phone"
                label
            />
            <RadioBlock setPositionId={setPositionId} />
            <FileInput onChange={handleFileChange} />
            <Button color="secondary">Sign up</Button>
        </form>
    );
};

export default Form;
