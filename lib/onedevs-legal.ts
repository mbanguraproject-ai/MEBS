import type { LegalDoc, LegalKind } from "./legal";
import { site } from "./site";

/**
 * OneDevs' privacy policy, terms, refund policy and account deletion page.
 *
 * Written by hand because OneDevs is the one MEBS app with accounts and a
 * server: the generated policies say "no accounts, no server", which would be
 * false here. Every statement is checked against the shipped app and its
 * Supabase schema; change them only against those.
 */

const EFFECTIVE = "3 October 2026";
const APP = "OneDevs";

const privacy: LegalDoc = {
  title: `${APP} privacy policy`,
  lede: `What ${APP} collects, why, who else sees it, and how to have it deleted.`,
  effective: EFFECTIVE,
  sections: [
    {
      heading: "The short version",
      paragraphs: [
        `${APP} is a community where Android developers test each other's apps. To do that it needs an account, and it keeps on its server the things the community runs on: your profile, the apps you list, the tests and missions you take part in, and your DevCoin balance. It shows ads through Google AdMob, sells Premium and Pro plans through Google Play, and uses no analytics or crash-reporting SDK.`,
        "You can delete your account and everything held about it at any time, from inside the app or by email. The details are below.",
      ],
    },
    {
      heading: "Who is responsible",
      paragraphs: [
        `${site.legalName} (“MEBS”, “we”) of ${site.location} is the data controller for ${APP}. You can reach us at ${site.email} about anything on this page.`,
      ],
    },
    {
      heading: "What we collect, and why",
      bullets: [
        {
          term: "Your Google account",
          text: "when you sign in with Google we receive your name, email address, profile picture and a Google account identifier. They create and identify your account, and your name and picture are shown to other members next to what you do in the community.",
        },
        {
          term: "Apps you list",
          text: "the package name, title, category, size, icon and testing instructions you enter. They are public to other members on the Board, because finding testers is what a listing is for.",
        },
        {
          term: "Testing activity",
          text: "which apps you tested, for how many seconds, mission check-ins and results, feedback reports you send, badges you earn and your DevCoin history. They pay out rewards, run missions and stop the same test being claimed twice.",
        },
        {
          term: "Time spent in the app you test",
          text: "with your permission (Android's Usage access setting), the app reads on your phone how long the app under test was in the foreground. Only that number of seconds is sent. Nothing about any other app leaves your phone.",
        },
        {
          term: "Device information",
          text: "your phone's Android ID, model and Android version. The Android ID stops one phone claiming the same test from several accounts. The model and Android version are shown, counted and without names, to a developer whose app you test in a mission, so they know what it was tested on.",
        },
        {
          term: "Device and account integrity",
          text: "Google Play Integrity tells us whether the phone and the copy of the app are genuine. We keep the verdict, not anything else about your phone.",
        },
        {
          term: "Mission chat",
          text: "messages you write in a mission are stored and shown to the other members of that mission.",
        },
        {
          term: "Purchases",
          text: "for a Premium or Pro subscription, Google Play gives us a purchase token, an order number and the subscription's state and expiry, which we use to confirm what you paid for. We never see your payment details.",
        },
        {
          term: "The Lab",
          text: "the Lab analyses an app's APK on your phone; the file is not uploaded. The server keeps only the package names of the apps you chose for the Lab, to apply your plan's limit.",
        },
      ],
    },
    {
      heading: "Advertising",
      paragraphs: [
        `On the free plan ${APP} shows an ad when the app opens, through Google AdMob. AdMob uses your device's advertising ID, general device and app information and an approximate location from your IP address to select and measure ads. Premium and Pro accounts see no ads.`,
        "Where the law requires consent — the EEA, the UK, Switzerland and US states with privacy laws — Google's consent form is shown before any ad is requested, and you can change your choice later in Profile → Legal → Privacy choices.",
      ],
    },
    {
      heading: "Who else is involved",
      paragraphs: [
        "These are the only third parties that receive anything, and only for the purposes described. Each handles it under its own privacy policy.",
      ],
      bullets: [
        {
          term: "Supabase",
          text: "hosts our database, sign-in and file storage, and processes everything above on our behalf. See https://supabase.com/privacy",
        },
        {
          term: "Google Sign-In",
          text: "confirms who you are when you sign in. See https://policies.google.com/privacy",
        },
        {
          term: "Google Play Billing and Play Integrity",
          text: "process subscriptions and check that the phone and app are genuine. See https://policies.google.com/privacy",
        },
        {
          term: "Google AdMob",
          text: "selects and measures ads on the free plan. See https://policies.google.com/technologies/ads",
        },
      ],
    },
    {
      heading: "What we do not do",
      bullets: [
        { text: "We do not sell your personal information." },
        { text: "We use no analytics SDK and no crash-reporting SDK." },
        { text: "We do not collect your precise location, contacts, call logs, messages, photos or microphone input." },
        { text: "We do not read which other apps you use. Usage access is read only for the app you are testing, and only as a number of seconds." },
      ],
    },
    {
      heading: "Why we are allowed to (UK and EU users)",
      bullets: [
        {
          term: "Performing the service you asked for",
          text: "Article 6(1)(b). Your account, listings, tests, missions, rewards and subscription are the service.",
        },
        {
          term: "Legitimate interests",
          text: "Article 6(1)(f). The Android ID and Play Integrity verdicts keep rewards fair by stopping one person claiming them many times.",
        },
        {
          term: "Your consent",
          text: "Article 6(1)(a). Personalised ads, where consent is required. You can withdraw it at any time with no effect on the app's features.",
        },
      ],
    },
    {
      heading: "How long it is kept",
      paragraphs: [
        "Everything is kept while your account exists. When you delete your account it is deleted straight away from our database and storage, except the mission chat messages described below. Database backups are overwritten in the normal cycle, within 30 days.",
        "Google keeps its own records of purchases and subscriptions under its own policy.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "If you are in the UK, the EU or another jurisdiction with equivalent law, you have the right to access the personal data held about you, to have it corrected or erased, to restrict or object to its processing, to receive it in a portable form, and to withdraw consent at any time. You also have the right to complain to your data protection authority.",
        "If you are a California resident, the CCPA as amended by the CPRA gives you the right to know what personal information is collected and why, to have it deleted or corrected, to opt out of its sale or sharing for cross-context behavioural advertising, and not to be discriminated against for exercising these rights. We do not sell personal information.",
        `To exercise any of these rights, write to ${site.email} from the email address of your ${APP} account. To delete your account yourself, see https://mebs.app/delete/onedevs`,
      ],
    },
    {
      heading: "Where data goes",
      paragraphs: [
        "MEBS operates from Sierra Leone. Supabase and Google are international services and process data outside your country, including in the United States and the European Union. Each maintains its own transfer safeguards, described in its privacy policy.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        `${APP} is for app developers. It is not directed to children, and you must be at least 18, or the age of majority where you live, to use it. If you believe a child has provided us with personal information, write to ${site.email} and we will delete it.`,
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "If this policy changes in substance, the effective date at the top of this page changes with it, and we will tell you in the app before the change applies to you.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Questions, requests or complaints about this policy: ${site.email}. We answer from Freetown, Sierra Leone, so allow for the time difference.`,
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: `${APP} terms of service`,
  lede: `The rules for using ${APP}: your account, DevCoins, testing, missions and plans.`,
  effective: EFFECTIVE,
  sections: [
    {
      heading: "Agreement",
      paragraphs: [
        `These terms are an agreement between you and ${site.legalName} (“MEBS”, “we”) of ${site.location}, who make ${APP}. By creating an account or using the app you accept them. If you do not accept them, do not use ${APP}.`,
      ],
    },
    {
      heading: "Your account",
      bullets: [
        { text: "You sign in with a Google account. You must be at least 18, or the age of majority where you live." },
        { text: "One person, one account. Running several accounts, or claiming tests from several accounts on one phone, is not allowed." },
        { text: "You are responsible for what happens under your account and for keeping your Google account secure." },
      ],
    },
    {
      heading: "DevCoins",
      bullets: [
        { text: "DevCoins are the community's points. You earn them by testing other members' apps and by completing missions, and you spend them to have your own apps tested and to join missions. Premium and Pro include a monthly DevCoin allowance." },
        { text: "DevCoins have no cash value. They cannot be bought, sold, transferred outside the app, or exchanged for money, and they are not property." },
        { text: "We may correct a balance that is wrong because of an error, and remove DevCoins gained by breaking these terms." },
        { text: "DevCoins end when your account is deleted or closed." },
      ],
    },
    {
      heading: "Testing other members' apps",
      bullets: [
        { text: "A test counts only when you genuinely install and use the app for the time asked. The app measures that time on your phone." },
        { text: "Feedback you send must be honest and about the app. No abuse, spam or advertising." },
        { text: "Never uninstall an app early, fake activity, or use emulators, scripts or other tricks to claim rewards." },
      ],
    },
    {
      heading: "Listing your apps",
      bullets: [
        { text: "List only apps you own or are authorised to distribute, that are on Google Play or in a Google Play test track." },
        { text: "Your app, its listing and its testing instructions must follow Google Play's policies and the law. No malware, no apps that collect data without disclosure, no adult, hateful or illegal content." },
        { text: "You give MEBS permission to show your app's name, icon, details and instructions to other members inside OneDevs." },
        { text: "We may remove a listing that breaks these rules." },
      ],
    },
    {
      heading: "Missions",
      bullets: [
        { text: "A mission is a group of developers testing each other's apps every day for 14 days, for a DevCoin fee shown before you join." },
        { text: "Leaving before a mission starts refunds the fee in full." },
        { text: "When a mission completes, members who did their part — checked in on at least 10 of the 14 days — get their fee back plus a share of the fees forfeited by those who did not." },
        { text: "Mission chat is for the mission. The same conduct rules apply as everywhere else in the app." },
      ],
    },
    {
      heading: "Premium and Pro",
      bullets: [
        { text: "Premium and Pro are monthly subscriptions sold through Google Play at the price shown in Google Play before you buy. They renew automatically until cancelled." },
        { text: "Cancel at any time in Google Play → Payments & subscriptions. The plan stays active until the end of the month you paid for." },
        { text: "What each plan includes is described on the Plans screen in the app. We may change what plans include; a change that takes something away applies from your next renewal, and we will tell you in the app first." },
        { text: "Refunds are covered by the refund policy at https://mebs.app/refund/onedevs" },
      ],
    },
    {
      heading: "Ads",
      paragraphs: [
        `The free plan shows an ad when ${APP} opens. Paid plans remove ads. Blocking or interfering with ads is not allowed on the free plan.`,
      ],
    },
    {
      heading: "Conduct",
      bullets: [
        { text: "No harassment, hate, threats or impersonation of anyone." },
        { text: "No attempt to break, overload, reverse-engineer or get around the app's limits, checks or security." },
        { text: "No collecting other members' information for any purpose outside OneDevs." },
      ],
    },
    {
      heading: "Suspension and closing accounts",
      paragraphs: [
        "We may suspend or close an account that breaks these terms, and remove its listings and DevCoins. You can delete your account at any time from Profile → Your data → Delete account; see https://mebs.app/delete/onedevs",
      ],
    },
    {
      heading: "What we cannot promise",
      paragraphs: [
        `${APP} is provided as it is. We work to keep it running and accurate, but we do not promise it will always be available or free of errors, that any number of members will test your app, or that Google will approve your app for production. The Lab's results are guidance, not a guarantee of how Google Play will review an app.`,
        "To the extent the law allows, MEBS is not liable for indirect or consequential loss, or for lost profits, revenue or data, and our total liability to you is limited to what you paid us in the 12 months before the claim. Nothing in these terms limits rights you have under consumer law that cannot be limited.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "If these terms change in substance, the effective date at the top changes with them and we will tell you in the app before the change applies to you. Continuing to use the app after that means you accept the new terms.",
      ],
    },
    {
      heading: "Law and contact",
      paragraphs: [
        `These terms are governed by the laws of Sierra Leone, without taking away the protection of mandatory consumer law where you live. Questions: ${site.email}.`,
      ],
    },
  ],
};

const refund: LegalDoc = {
  title: `${APP} refund policy`,
  lede: "How cancelling and refunds work for Premium and Pro.",
  effective: EFFECTIVE,
  sections: [
    {
      heading: "Cancelling",
      paragraphs: [
        "Premium and Pro are monthly Google Play subscriptions. Cancel at any time in the Google Play app → Profile → Payments & subscriptions → Subscriptions. You keep the plan until the end of the month you already paid for, and you are not charged again.",
        `Uninstalling ${APP} or deleting your account does not cancel a subscription. Only Google Play can.`,
      ],
    },
    {
      heading: "Refunds in the first 48 hours",
      paragraphs: [
        "Google Play handles refunds for purchases made through it. Within 48 hours of a charge you can request a refund directly from Google at https://support.google.com/googleplay/answer/2479637",
      ],
    },
    {
      heading: "After 48 hours",
      paragraphs: [
        `Write to ${site.email} from the email address of your ${APP} account, with the Google Play order number (it starts with GPA.) and the reason. We refund in full when:`,
      ],
      bullets: [
        { text: "you were charged after cancelling, or charged twice for the same month;" },
        { text: "a fault on our side stopped the plan's features working for most of the month, and we could not fix it." },
      ],
    },
    {
      heading: "What is not refunded",
      bullets: [
        { text: "Months partly used, other than in the cases above. Cancelling stops the next charge; it does not refund the current month." },
        { text: "DevCoins. They have no cash value and are never exchanged for money, including the allowance a plan includes. Mission fees follow the mission rules in the terms of service." },
        { text: "Accounts closed for breaking the terms of service." },
      ],
    },
    {
      heading: "How a refund is paid",
      paragraphs: [
        "Every refund goes back through Google Play to the payment method you used, usually within a few days of approval. When a subscription is refunded, the plan ends.",
        "This policy does not limit any right to a refund you have under the consumer law where you live.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [`${site.email}. We reply within 5 working days.`],
    },
  ],
};

const deletion: LegalDoc = {
  title: `Delete your ${APP} account`,
  lede: `${APP}, by ${site.legalName}. How to delete your account, and what is deleted and kept.`,
  effective: EFFECTIVE,
  sections: [
    {
      heading: "In the app",
      bullets: [
        { term: "1", text: `Open ${APP} and sign in.` },
        { term: "2", text: "Tap your picture in the top corner to open Profile." },
        { term: "3", text: "Scroll to Your data and tap Delete account." },
        { term: "4", text: "Read what will be deleted and tap Delete." },
      ],
      paragraphs: ["Your account is deleted straight away and you are signed out."],
    },
    {
      heading: "Without the app",
      paragraphs: [
        `Email ${site.email} from the Google account you sign in to ${APP} with, with the subject “Delete my OneDevs account”. We delete the account within 30 days and reply to confirm.`,
      ],
    },
    {
      heading: "What is deleted",
      bullets: [
        { text: "Your profile: name, picture, email and sign-in." },
        { text: "Apps you listed, their icons and testing instructions." },
        { text: "Your DevCoin balance and history." },
        { text: "Tests, missions, check-ins and results, including the device information recorded with them." },
        { text: "Feedback reports you sent, badges, your plan and purchase records, and the apps chosen in the Lab." },
        { text: "Play Integrity verdicts recorded for your account." },
      ],
    },
    {
      heading: "What is kept",
      bullets: [
        { text: "Chat messages you sent inside a mission stay visible to the other members of that mission, with your name removed." },
        { text: "Database backups are overwritten in the normal cycle, within 30 days of deletion." },
        { text: "Google Play keeps its own records of purchases and subscriptions. Deleting your account does not cancel a Premium or Pro subscription: cancel it in Google Play under Payments & subscriptions." },
      ],
    },
  ],
};

export const onedevsLegal: Partial<Record<LegalKind, LegalDoc>> = {
  privacy,
  terms,
  refund,
  delete: deletion,
};
