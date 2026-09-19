import type { App } from "./apps";
import { site } from "./site";

/**
 * Per-app privacy policies, generated from each app's declared data practices
 * in lib/apps.ts. Nothing here is boilerplate about "we may collect" — a
 * section only appears when the app actually does the thing.
 *
 * Update EFFECTIVE_DATE whenever the substance changes, not on copy edits.
 */
export const EFFECTIVE_DATE = "18 September 2026";

export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { term?: string; text: string }[];
};

type ThirdParty = {
  name: string;
  receives: string;
  href: string;
};

function thirdParties(app: App): ThirdParty[] {
  const out: ThirdParty[] = [];
  if (app.data.ads) {
    out.push({
      name: "Google AdMob",
      receives:
        "your device's advertising ID, general device and app information, and an approximate location derived from your IP address, in order to select and measure ads",
      href: "https://policies.google.com/technologies/ads",
    });
  }
  if (app.data.billing) {
    out.push({
      name: "Google Play Billing",
      receives:
        "the purchase itself. Google processes the payment and returns a purchase token to the app; your card details are never handled by, or visible to, the app",
      href: "https://policies.google.com/privacy",
    });
  }
  if (app.data.cloudProcessing) {
    out.push({
      name: "Cloudflare Workers",
      receives:
        "the request in transit. The worker forwards it and keeps no copy of the file and no request log",
      href: "https://www.cloudflare.com/privacypolicy/",
    });
    out.push({
      name: "CloudConvert",
      receives:
        "the file you chose to convert, for as long as it takes to convert it. CloudConvert deletes uploaded and converted files automatically under its own retention policy",
      href: "https://cloudconvert.com/privacy",
    });
  }
  if (app.data.aiProcessing) {
    out.push({
      name: "Groq",
      receives:
        "the text you submit to an AI tool, in order to return a result",
      href: "https://groq.com/privacy-policy/",
    });
  }
  return out;
}

function whatIsHandled(app: App): PolicySection {
  const paragraphs: string[] = [];
  const bullets: { term?: string; text: string }[] = [];

  if (app.slug === "morpho") {
    paragraphs.push(
      "Most of Morpho's tools run entirely on your device. When you compress a PDF, merge pages, resize an image, extract text or sign a document with an offline tool, the file is read, processed and written back on the phone. It is not uploaded, and those tools work with no connection at all.",
    );
    bullets.push({
      term: "Files you convert with a cloud tool",
      text: "sent over an encrypted connection to a Cloudflare Worker, which passes them straight to CloudConvert and returns the result. The worker stores no copy of the file and keeps no request log. CloudConvert deletes the file automatically under its own retention policy.",
    });
    bullets.push({
      term: "Text you submit to an AI tool",
      text: "sent to Groq to produce the result and returned to you. It is not stored by MEBS.",
    });
  } else if (app.slug === "search") {
    paragraphs.push(
      "Search is a browser, so almost everything it handles is between you and the sites you visit. Your browsing history, bookmarks, open tabs and settings are stored in the app's own storage on your device. There is no account, no sync and no server of ours in the middle — none of it is transmitted to MEBS.",
    );
    bullets.push({
      term: "What you type in the address bar",
      text: "sent to the search engine you have selected, which handles it under its own privacy policy. Suggestions are matched against your local history on the device.",
    });
    bullets.push({
      term: "Sites you visit",
      text: "loaded by Android's WebView directly from those sites. Cookies and site data they set are stored on your device and can be cleared from the app's settings.",
    });
  } else if (app.slug === "aura") {
    paragraphs.push(
      "Aura plays media that is already on your device. With your permission it reads the media files on the phone in order to list and play them. Your library, playback positions, speed settings and everything else the app remembers are stored on the device and are never uploaded.",
    );
    paragraphs.push(
      "Playback itself needs no connection. The network is used for two things only: loading ads on the free tier, and confirming the purchase that removes them. Aura has no account, no sync, no analytics and no server of ours.",
    );
  } else if (app.slug === "beampad") {
    paragraphs.push(
      "Beampad registers your phone with Android as a Bluetooth input device and sends your keystrokes and trackpad movements to the TV or computer you pair with, over Bluetooth. Those keystrokes go to the paired device and nowhere else — they are not recorded, stored or transmitted anywhere by the app.",
    );
    paragraphs.push(
      "Your pairing preferences and app settings are stored on the device. There is no account and no server component.",
    );
  }

  if (app.data.ads) {
    bullets.push({
      term: "Advertising",
      text: `${app.name}'s free tier shows ads through Google AdMob, which uses your device's advertising ID. In the EEA, the UK and Switzerland you are asked for consent the first time you open the app, and can change that choice later in the app's settings.`,
    });
  }

  if (app.data.billing) {
    bullets.push({
      term: "Purchases",
      text: "handled by Google Play. The app receives a purchase token confirming what you bought, and uses it to unlock the paid features. It never sees your payment details.",
    });
  }

  return {
    heading: `What ${app.name} handles`,
    paragraphs,
    bullets: bullets.length ? bullets : undefined,
  };
}

export function buildPolicy(app: App): PolicySection[] {
  const parties = thirdParties(app);
  const sections: PolicySection[] = [];

  sections.push({
    heading: "The short version",
    paragraphs: [
      app.data.onDeviceOnly
        ? `${app.name} has no accounts, no analytics, no advertising and no server. Nothing you do in it leaves your device. There is no data for us to hold, sell or lose.`
        : `${app.name} has no user accounts and no analytics or crash-reporting SDK of any kind. MEBS operates no server that stores your data and holds no record of you. The sections below set out exactly what leaves your device, when, and to whom.`,
    ],
  });

  sections.push({
    heading: "Who is responsible",
    paragraphs: [
      `${site.legalName} (“MEBS”, “we”) of ${site.location} is the data controller for ${app.name}. You can reach us at ${site.email} about anything on this page.`,
    ],
  });

  sections.push(whatIsHandled(app));

  sections.push({
    heading: "What we do not do",
    bullets: [
      { text: "We do not operate user accounts, and hold no profile of you." },
      { text: "We use no analytics SDK and no crash-reporting SDK. We do not measure how you use the app." },
      { text: "We do not sell your personal information, and we do not share it for cross-context behavioural advertising beyond the advertising ID described above." },
      { text: "We do not collect your precise location, contacts, call logs, messages or microphone input." },
      ...(app.data.cloudProcessing
        ? []
        : [{ text: "We operate no server that receives anything from this app." }]),
    ],
  });

  if (parties.length) {
    sections.push({
      heading: "Who else is involved",
      paragraphs: [
        "These are the only third parties that receive anything, and only for the purposes described. Each handles it under its own privacy policy, linked below.",
      ],
      bullets: parties.map((p) => ({
        term: p.name,
        text: `${p.receives}. See ${p.name}'s privacy policy at ${p.href}.`,
      })),
    });
  }

  sections.push({
    heading: "Why we are allowed to (UK and EU users)",
    paragraphs: [
      "Under the UK GDPR and the EU GDPR we rely on the following legal bases:",
    ],
    bullets: [
      {
        term: "Performing the service you asked for",
        text: "Article 6(1)(b). Running the tool, loading the page or playing the file you chose is the service you installed the app for.",
      },
      ...(app.data.ads
        ? [
            {
              term: "Your consent",
              text: "Article 6(1)(a). Personalised advertising runs only where you have given consent through the dialog shown on first launch. You can withdraw it at any time in the app's settings, with no effect on the app's features.",
            },
          ]
        : []),
      ...(app.data.billing
        ? [
            {
              term: "Performing a contract",
              text: "Article 6(1)(b). Verifying a purchase is necessary to give you what you paid for.",
            },
          ]
        : []),
    ],
  });

  sections.push({
    heading: "Your rights",
    paragraphs: [
      "If you are in the UK, the EU or another jurisdiction with equivalent law, you have the right to access the personal data held about you, to have it corrected or erased, to restrict or object to its processing, to receive it in a portable form, and to withdraw consent at any time. You also have the right to complain to your data protection authority.",
      "If you are a California resident, the CCPA as amended by the CPRA gives you the right to know what personal information is collected and for what purpose, to have it deleted, to have it corrected, to opt out of its sale or sharing for cross-context behavioural advertising, to limit the use of sensitive personal information, and not to be discriminated against for exercising any of these rights. We do not sell personal information.",
      app.data.onDeviceOnly
        ? `In ${app.name}'s case there is a simple practical answer: we hold nothing about you, so there is nothing for us to produce, correct or delete. Everything the app stores is on your device, and uninstalling it removes all of it. To exercise any right against the third parties named above, contact them directly.`
        : `Because we operate no accounts and keep no records, we hold nothing to produce, correct or delete. Everything ${app.name} stores is on your device, and uninstalling the app removes all of it. Rights over data held by the third parties above are exercised with them directly, using the links in that section.`,
    ],
    ...(app.data.ads
      ? {
          bullets: [
            {
              term: "Opting out of personalised ads",
              text: "Withdraw consent in the app's settings, and, for a device-wide setting, use Android's Settings → Privacy → Ads to delete or reset your advertising ID.",
            },
          ],
        }
      : {}),
  });

  sections.push({
    heading: "How long anything is kept",
    paragraphs: [
      app.data.cloudProcessing
        ? "We keep nothing. Data on your device stays there until you clear it or uninstall the app. Files sent for cloud conversion exist only for the conversion and are deleted by CloudConvert automatically under its retention policy; our worker keeps no copy at any point."
        : "We keep nothing. Data on your device stays there until you clear it or uninstall the app.",
    ],
  });

  sections.push({
    heading: "Where data goes",
    paragraphs: [
      app.data.onDeviceOnly
        ? "Nowhere. No data leaves your device, so no international transfer takes place."
        : "MEBS operates from Sierra Leone. The third parties named above are international services and will process data outside your country, including in the United States and the European Union. Each maintains its own transfer safeguards, described in its privacy policy.",
    ],
  });

  sections.push({
    heading: "Children",
    paragraphs: [
      `${app.name} is a general-audience app. It is not directed to children, it is not enrolled in Google Play's Families programme, and we do not knowingly collect personal information from anyone under 13 (or under 16 where local law sets that age). If you believe a child has provided us with personal information, write to ${site.email} and we will act on it.`,
    ],
  });

  sections.push({
    heading: "Changes",
    paragraphs: [
      `If this policy changes in substance, the effective date at the top of this page changes with it, and the previous version stays in the site's git history. We will not quietly broaden what the app does with your data.`,
    ],
  });

  sections.push({
    heading: "Contact",
    paragraphs: [
      `Questions, requests or complaints about this policy: ${site.email}. We answer from Freetown, Sierra Leone, so allow for the time difference.`,
    ],
  });

  return sections;
}
