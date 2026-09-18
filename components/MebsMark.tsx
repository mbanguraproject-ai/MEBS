import Image from "next/image";
import icon from "@/public/mebs-icon.png";

type MebsMarkProps = {
  /** Rendered size in px. The source is 512×512, so anything up to that is crisp. */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * The MEBS mark, from the real asset.
 *
 * A traced vector of this mark loses what gives it its character — the gradient
 * fold between the two lobes — and every flat version reads thinner than the
 * original. The PNG's background is the same black as the page, so it sits on
 * dark surfaces with no visible edge.
 */
export function MebsMark({ size = 36, className, priority = false }: MebsMarkProps) {
  return (
    <Image
      src={icon}
      alt=""
      width={size}
      height={size}
      className={className}
      priority={priority}
      aria-hidden="true"
    />
  );
}
