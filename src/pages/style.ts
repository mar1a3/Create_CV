import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  padding: 10px;

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(126, 124, 124, 0.2);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
  background: rgba(82, 81, 81, 0.2);
}
`;
export const LeftSide = styled.div<{ isMobile: boolean }>`
  overflow: auto;
  padding: 10px;
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")}; /* На мобиле 100%, иначе 50% */
  max-height: 100vh;
  transition: width 0.3s ease-in-out;
`;
export const RightSide = styled.div`
  overflow: auto;
  width: 50%;
  height: 100vh;
  padding:10px;
`;

