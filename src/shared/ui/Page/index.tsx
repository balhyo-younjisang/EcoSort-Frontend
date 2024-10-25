import { FC, ReactNode } from "react";
import styled from "styled-components";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
`;
