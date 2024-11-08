import { MutableRefObject } from "react";
import { BeamOptions } from "../types/BeamOptions";

export interface CollisionMechanismProps {
  beamOptions: BeamOptions;
  containerRef: MutableRefObject<HTMLElement | null>;
  parentRef: MutableRefObject<HTMLElement | null>;
}