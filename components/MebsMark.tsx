import Image from "next/image";
import mark from "@/public/mebs-mark.png";

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
 * original.
 *
 * This uses mebs-mark.png, not mebs-icon.png: same artwork rebuilt as white
 * with the luminance carried in the alpha channel. On black it composites back
 * to the original exactly; on the translucent header, or anywhere else, it
 * blends with the surface instead of stamping a black box. mebs-icon.png stays
 * opaque for the favicon and the apple-touch icon, which render transparency
 * unpredictably.
 */
export function MebsMark({ size = 36, className, priority = false }: MebsMarkProps) {
  return (
    <Image
      src={mark}
      alt=""
      width={size}
      height={size}
      className={className}
      priority={priority}
      aria-hidden="true"
    />
  );
}
