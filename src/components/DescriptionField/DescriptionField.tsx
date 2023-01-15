import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface DescriptionFieldProps {
  value: string;
  onChange: (content: string) => void;
}

export const DescriptionField: React.FC<DescriptionFieldProps> = ({ onChange }) => {
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const quillRef = useRef<ReactQuill | null>(null);

  const handleChange = () => {
    const content = quillRef.current?.getEditor().getText();
    if (content) {
      onChange(content);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <ReactQuill
        ref={quillRef}
        readOnly={readOnly}
        onChange={handleChange}
        style={{
          height: '150px',
          resize: 'vertical',
          overflow: 'auto',
        }}
      />
    </div>
  );
};







