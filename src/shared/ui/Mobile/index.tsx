import React, { ReactNode } from "react";
import styled from "styled-components";

export interface MobileProps {
  children?: ReactNode;
  isIndependent?: boolean;
}

export const Mobile: React.FC<MobileProps> = ({
  children,
  isIndependent = false,
}) => {
  return (
    <>
      <Container $isIndependent={isIndependent}>{children}</Container>
    </>
  );
};

interface ContainerProps {
  $isIndependent: boolean;
}

const Container = styled.div<ContainerProps>`
  width: ${({ $isIndependent }) => ($isIndependent ? "430px" : "100vw")};
  height: 100vh;
  display: flex;
  flex-flow: column;
`;
