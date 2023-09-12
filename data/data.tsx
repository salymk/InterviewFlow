import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

import {
  NoneIcon,
  ForgotIcon,
  PartiallyRecalledIcon,
  RecalledWithEffortIcon,
  EasilyRecalledIcon,
} from "../components/confidence-icons";

export const labels = [
  {
    value: "html",
    label: "HTML",
  },
  {
    value: "css",
    label: "CSS",
  },
  {
    value: "js",
    label: "JS",
  },
  {
    value: "dom manipulation",
    label: "DOM Manipulation",
  },
  {
    value: "react components",
    label: "React Components",
  },
  {
    value: "react hooks",
    label: "React Hooks",
  },
];

export const confidence = [
  {
    value: "none",
    label: "None",
    icon: NoneIcon,
  },
  {
    value: "forgot",
    label: "Forgot",
    icon: ForgotIcon,
  },
  {
    value: "partially recalled",
    label: "Partially Recalled",
    icon: PartiallyRecalledIcon,
  },
  {
    value: "recalled with effort",
    label: "Recalled With Effort",
    icon: RecalledWithEffortIcon,
  },
  {
    value: "easily recalled",
    label: "Easily Recalled",
    icon: EasilyRecalledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
