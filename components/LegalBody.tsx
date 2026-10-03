import type { PolicySection } from "@/lib/privacy";

/** Turns a bare URL inside a sentence into a link, leaving the rest as text. */
function withLink(text: string) {
  const match = text.match(/https?:\/\/[^\s.]+(?:\.[^\s.,)]+)*\/?/);
  if (!match) return text;

  const url = match[0];
  const [before, after] = text.split(url);
  return (
    <>
      {before}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
      >
        {url}
      </a>
      {after}
    </>
  );
}

/** The sections of a policy or terms page, on the white body. */
export function LegalBody({ sections }: { sections: PolicySection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mt-14 first:mt-0">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            {section.heading}
          </h2>

          {section.paragraphs?.map((para) => (
            <p key={para.slice(0, 40)} className="mt-4 max-w-[66ch] leading-relaxed text-ink/80">
              {withLink(para)}
            </p>
          ))}

          {section.bullets ? (
            <ul className="mt-6 border-t border-ink/12">
              {section.bullets.map((bullet) => (
                <li
                  key={(bullet.term ?? "") + bullet.text.slice(0, 30)}
                  className="max-w-[72ch] border-b border-ink/12 py-4 leading-relaxed text-ink/80"
                >
                  {bullet.term ? <span className="font-medium text-ink">{bullet.term}: </span> : null}
                  {withLink(bullet.text)}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}
