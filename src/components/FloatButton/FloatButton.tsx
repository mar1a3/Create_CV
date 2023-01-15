import React from 'react';
import { ButtonProps } from 'antd';
import { StyledButton } from './style';

export const FloatButton: React.FC<ButtonProps> = ({ onClick }) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 574);

    React.useEffect(() =>{
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 574)
        
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

    return (
        <>
            <StyledButton description={isMobile ? 'Show preview' : 'Print CV'} onClick={onClick} />

        </>
    )
};

