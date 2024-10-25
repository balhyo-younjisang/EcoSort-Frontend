import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface BaseIconProps {
  active?: boolean;
}

export const BaseIcon = styled(FontAwesomeIcon).withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<BaseIconProps>`
  color: ${({ active, theme }) =>
    active ? theme.color.active_icon : theme.color.inactive_icon};
  font-size: 22px;
`;
