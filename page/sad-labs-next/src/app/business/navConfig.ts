import {
  faArrowsTurnRight,
  faExclamationTriangle,
  faFlask,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const businessNavItems = [
  { label: "Problem", href: "#problem", icon: faExclamationTriangle },
  { label: "Solution", href: "#objective", icon: faLightbulb },
  { label: "Methodology", href: "#approach", icon: faFlask },
  { label: "Timeline", href: "#timeline", icon: faArrowsTurnRight },
];

export const viewType = "business" as const;