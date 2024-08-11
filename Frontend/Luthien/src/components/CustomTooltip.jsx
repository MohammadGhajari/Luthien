import { Tooltip } from "react-tippy";
import styles from "./../styles/custom-tooltip.module.css";

export default function CustomTooltip({
  children,
  cTitle,
  pos = "top",
  distance = "5",
  size = "regular",
}) {
  return (
    <Tooltip
      title={cTitle}
      position={pos}
      trigger="mouseenter"
      delay={500}
      hideDelay={100}
      animation={"shift"}
      arrow={true}
      arrowSize={"small"}
      distance={distance}
      size={size}
    >
      {children}
    </Tooltip>
  );
}
