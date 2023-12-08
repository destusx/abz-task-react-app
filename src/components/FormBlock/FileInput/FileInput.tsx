import { useRef } from 'react';

import styles from './FileInput.module.scss';

interface FileInputProps {
    onChange: (file: File | null) => void;
}

const FileInput = ({ onChange }: FileInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = () => {
        const files = fileInputRef.current?.files;
        if (files && files.length > 0) {
            const file = files[0];
            onChange(file);
        } else {
            onChange(null);
        }
    };

    return (
        <label
            htmlFor="images"
            className={styles['drop-container']}
            id="dropcontainer"
        >
            <input
                onChange={handleFileChange}
                ref={fileInputRef}
                type="file"
                id="images"
                hidden
            />
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.left}`}>Upload</div>
                <div className={`${styles.right}`}>Upload your photo</div>
            </div>
        </label>
    );
};

export default FileInput;
