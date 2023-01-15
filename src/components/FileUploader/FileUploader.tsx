import React, { useState } from 'react';
import { Upload as UploadAnt, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';

interface UploadPropsAnt {
    onChange: (img: string) => void;
}

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });


export const FileUploader: React.FC<UploadPropsAnt> = ({ onChange }) => {
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = async (fileList) => {
        const base64 = await getBase64(fileList.file as RcFile);
        setImageUrl(base64);
        onChange(base64);
    };

    return (
        <>
            <UploadAnt
                listType="picture-card"
                beforeUpload={() => false}
                onChange={handleChange}
                showUploadList={false}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: '100%' }}
                    />
                ) : (
                    <p>Upload the image </p>
                )}
            </UploadAnt>
        </>
    );
};

