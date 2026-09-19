export type AppStatus = "live" | "building";

/**
 * What an app actually does with data. Every flag here is load-bearing: the
 * privacy pages are generated from these, so a wrong value produces a wrong
 * legal document. Change them only against the shipped code.
 */
export type DataPractices = {
  /** Google AdMob, with the UMP consent flow for EEA/UK users. */
  ads: boolean;
  /** Google Play Billing. Purchase token only; card details never reach the app. */
  billing: boolean;
  /** Files leave the device for server-side processing. */
  cloudProcessing: boolean;
  /** Text is sent to an inference provider. */
  aiProcessing: boolean;
  /** Everything the app does with user content happens on the device. */
  onDeviceOnly: boolean;
};

export type App = {
  /** URL segment: /apps/<slug> and /privacy/<slug>. */
  slug: string;
  /** Name as it should read on the site. */
  name: string;
  /** Play Store listing title, when it differs from the name above. */
  storeTitle?: string;
  /** One line under the name on its own page. */
  tagline: string;
  /** One plain sentence or two for the list. What it does, not why it is great. */
  summary: string;
  /** Paragraphs for the app's own page. */
  body: string[];
  /** What it does, in short lines. */
  highlights: string[];
  /** Android permissions the app asks for, and why. */
  permissions: { name: string; reason: string }[];
  /** Android applicationId. Used to build the Play link. */
  packageId?: string;
  platform: string;
  stack: string;
  status: AppStatus;
  data: DataPractices;
};

export const apps: App[] = [
  {
    slug: "morpho",
    name: "Morpho",
    storeTitle: "Morpho: Files, transformed",
    tagline: "132 file tools, one app.",
    summary:
      "132 file tools in one app: convert, compress, merge, split, sign and extract. The offline tools are free; cloud conversions and the AI tools come with Plus.",
    body: [
      "Most file tasks on a phone end with a web upload to a site you have never heard of. Morpho keeps the common ones on the device: compressing a PDF, merging pages, pulling text out of an image, signing a document, resizing a batch of photos. Those run locally, work with no signal, and nothing leaves your phone.",
      "The formats that genuinely need a server — the long tail of office and media conversions — go through Morpho Plus. Your file is passed straight through to the conversion service and comes back; nothing is kept in between.",
      "The catalogue is 132 tools. That number is computed from the registry at runtime and shown in the app, so it is never a marketing figure that drifted out of date.",
    ],
    highlights: [
      "Convert, compress, merge, split and sign documents",
      "Image, audio and video conversion",
      "Text extraction from images and PDFs",
      "An invoice generator, with a full suite in progress",
      "Offline tools run with no connection at all",
    ],
    permissions: [
      { name: "Photos and media access", reason: "to open the files you pick and save the results back" },
      { name: "Internet", reason: "for cloud conversions, the AI tools, and ads on the free tier" },
    ],
    packageId: "cc.devbangs.morpho",
    platform: "Android",
    stack: "Kotlin, Jetpack Compose, Cloudflare Workers",
    status: "live",
    data: { ads: true, billing: true, cloudProcessing: true, aiProcessing: true, onDeviceOnly: false },
  },
  {
    slug: "search",
    name: "Search",
    storeTitle: "Search: Web Browser",
    tagline: "A browser that stays out of the way.",
    summary:
      "A light Android browser built around a collapsing home feed, fast suggestions and readable offline pages. Pick an accent and the whole app follows it.",
    body: [
      "Search is a small browser. The home bar collapses as you scroll, suggestions appear as you type with the completion in bold so you can see what pressing enter will do, and pages you cannot reach fall back to something readable rather than a dinosaur.",
      "Pick an accent colour and it carries through the whole app — menu icons, dialogs, the offline pages, even the illustrations.",
      "Your history, bookmarks and settings are stored on the device. There is no account, no sync, and no server of ours between you and the web.",
    ],
    highlights: [
      "Collapsing home bar with a crossfade",
      "Suggestions with bold completion and history",
      "Readable offline pages",
      "Accent colour applied across the whole app",
      "History and bookmarks stay on the device",
    ],
    permissions: [
      { name: "Internet", reason: "to load the pages you visit and show ads on the home feed" },
      { name: "Storage", reason: "only when you download a file from a page" },
    ],
    packageId: "com.devbangs.search",
    platform: "Android",
    stack: "Kotlin, WebView",
    status: "live",
    data: { ads: true, billing: false, cloudProcessing: false, aiProcessing: false, onDeviceOnly: false },
  },
  {
    slug: "aura",
    name: "Aura",
    storeTitle: "Aura",
    tagline: "For what is already on your phone.",
    summary:
      "A player for the video and audio already on your phone. Sleep timer, resume position for long listens, remembered playback speed and a mini player you can swipe away.",
    body: [
      "Aura plays the media on your device. No library to sign into, no catalogue to browse, no recommendations — it opens what you already have.",
      "The details are the point: it remembers where you stopped in a long audiobook or podcast, remembers the speed you listen at, has a sleep timer for playing yourself to sleep, and puts a mini player pill at the bottom with a progress ring you can swipe away.",
      "Everything about your media stays on the device — no account, no sync, nothing uploaded, and playback needs no connection. The free tier loads ads over the network; a one-time purchase removes them.",
    ],
    highlights: [
      "Plays local video and audio",
      "Resume position for audiobooks and podcasts",
      "Remembered playback speed",
      "Sleep timer",
      "Mini player with progress ring and swipe gestures",
      "One-time purchase removes ads",
    ],
    permissions: [
      { name: "Photos and media access", reason: "to find and play the media on your device" },
      { name: "Internet", reason: "to show ads on the free tier and confirm the ad-free purchase" },
    ],
    packageId: "app.devbangs.media",
    platform: "Android",
    stack: "Kotlin, Jetpack Compose, Media3",
    status: "live",
    data: { ads: true, billing: true, cloudProcessing: false, aiProcessing: false, onDeviceOnly: false },
  },
  {
    slug: "beampad",
    name: "BeamPad",
    storeTitle: "BeamPad",
    tagline: "Your phone, as the TV's keyboard.",
    summary:
      "Turns the phone into a Bluetooth keyboard and trackpad for a TV. Nothing to install on the TV, no wifi, no account.",
    body: [
      "Typing a password on a TV with a remote is miserable. BeamPad registers your phone as a Bluetooth keyboard and trackpad, so the TV treats it as an ordinary input device.",
      "That means nothing to install on the TV, no shared wifi network, no pairing app, no account. If the TV can accept a Bluetooth keyboard, it can accept BeamPad.",
      "Free with ads, with a one-time purchase to remove them.",
    ],
    highlights: [
      "Phone acts as a Bluetooth keyboard and trackpad",
      "Nothing to install on the TV",
      "No wifi and no account needed",
      "One-time purchase removes ads",
    ],
    permissions: [
      { name: "Bluetooth", reason: "to register as a keyboard and connect to your TV" },
      { name: "Internet", reason: "to show ads on the free tier" },
    ],
    platform: "Android",
    stack: "Kotlin, Bluetooth HID",
    status: "building",
    data: { ads: true, billing: true, cloudProcessing: false, aiProcessing: false, onDeviceOnly: false },
  },
  {
    slug: "void-drifter",
    name: "Void Drifter",
    tagline: "",
    summary:
      "An endless runner written natively for Android rather than wrapped from the web. Ships are modelled in Blender and rendered on device.",
    body: [],
    highlights: [],
    permissions: [],
    platform: "Android",
    stack: "Kotlin, Blender",
    status: "building",
    data: { ads: false, billing: false, cloudProcessing: false, aiProcessing: false, onDeviceOnly: true },
  },
  {
    slug: "relic",
    name: "RELIC",
    tagline: "",
    summary:
      "A match-3 archaeology adventure. Clear the board to open a dig site, recover the artefact, move to the next one.",
    body: [],
    highlights: [],
    permissions: [],
    platform: "Android",
    stack: "Godot 4",
    status: "building",
    data: { ads: false, billing: false, cloudProcessing: false, aiProcessing: false, onDeviceOnly: true },
  },
  {
    slug: "siraj",
    name: "SIRAJ",
    tagline: "",
    summary:
      "An Islamic companion app: prayer times and adhan, Quran, adhkar and Qibla in one place. Working name.",
    body: [],
    highlights: [],
    permissions: [],
    platform: "Android",
    stack: "Kotlin, Jetpack Compose",
    status: "building",
    data: { ads: false, billing: false, cloudProcessing: false, aiProcessing: false, onDeviceOnly: true },
  },
];

export const playUrl = (packageId: string) =>
  `https://play.google.com/store/apps/details?id=${packageId}`;

export const liveApps = apps.filter((app) => app.status === "live");
export const buildingApps = apps.filter((app) => app.status === "building");

/** Apps with a page of their own — everything with real copy written for it. */
export const detailedApps = apps.filter((app) => app.body.length > 0);

export const appBySlug = (slug: string) => apps.find((app) => app.slug === slug);

export const hasDetailPage = (app: App) => app.body.length > 0;
