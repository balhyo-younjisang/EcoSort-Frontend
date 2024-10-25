import { CameraIcon, HomeIcon, MapIcon, UserIcon } from "@shared/ui/Icon";
import styled from "styled-components";

export const BottomNavigation = () => {
  return (
    <>
      <Container>
        <HomeIcon active />

        <CameraIcon active />

        <MapIcon active />

        <UserIcon active />
      </Container>
    </>
  );
};

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 50px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 -3px 5px -3px rgba(0, 0, 0, 0.2);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
