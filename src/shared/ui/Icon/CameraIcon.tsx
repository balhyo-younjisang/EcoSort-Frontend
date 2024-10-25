import { faCamera } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IconProps } from "@shared/ui/Icon/Icon.type";
import { BaseIcon } from "@shared/ui/Icon/BaseIcon";

export const CameraIcon: React.FC<IconProps> = ({ active = false }) => {
  return (
    <>
      <BaseIcon icon={faCamera} active={active} />
    </>
  );
};
