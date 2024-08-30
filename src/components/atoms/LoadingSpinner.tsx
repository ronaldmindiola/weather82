// src/components/LoadingSpinner.tsx
import React from "react";
import { Icon } from "@iconify-icon/react";

const LoadingSpinner: React.FC = () => (
  <div>
    <Icon
      icon="svg-spinners:wind-toy"
      width="64"
      height="64"
      className="mx-auto mb-4 animate-spin-slow"
    />
  </div>
);

export default LoadingSpinner;
