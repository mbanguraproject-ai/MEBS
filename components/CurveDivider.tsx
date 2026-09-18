type CurveDividerProps = {
  /** Colour of the section above the curve. */
  above: string;
  /** Colour of the section arriving below the curve. */
  below: string;
  /** Mirror the S so consecutive boundaries do not repeat the same sweep. */
  flip?: boolean;
};

/**
 * The boundary between sections is the mark's S, not a straight rule.
 */
export function CurveDivider({ above, below, flip = false }: CurveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-[70px] w-full md:h-[130px] ${flip ? "-scale-x-100" : ""}`}
      style={{ backgroundColor: above }}
      aria-hidden="true"
    >
      <path d="M0 6 C 520 6 920 114 1440 114 L1440 120 L0 120 Z" fill={below} />
    </svg>
  );
}
