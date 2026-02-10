import {
  faArrowsTurnRight,
  faBullseye,
  faFlask,
  faRoadBarrier,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export const researchNavItems = [
  { label: "Objectives", href: "#objective", icon: faBullseye },
  { label: "Problem", href: "#problem", icon: faRoadBarrier },
  { label: "Methodology", href: "#approach", icon: faFlask },
  { label: "Timeline", href: "#timeline", icon: faArrowsTurnRight },
  { label: "Take Action", href: "#take-action", icon: faRocket },
];

export const viewType = "research" as const;