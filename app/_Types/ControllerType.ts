import { AnimationControls } from "motion/react";

export type CommentsController = {
  ref: React.RefObject<HTMLDivElement | null>;
  commentRef: React.RefObject<HTMLDivElement | null>;
  controls: AnimationControls;
};
