export type AppStatus = "live" | "building";

export type App = {
  /** Name as it should read on the site. */
  name: string;
  /** Play Store listing title, when it differs from the name above. */
  storeTitle?: string;
  /** One plain sentence or two. What it does, not why it is great. */
  summary: string;
  /** Android applicationId. Used to build the Play link. */
  packageId?: string;
  platform: string;
  stack: string;
  status: AppStatus;
};

export const apps: App[] = [
  {
    name: "Morpho",
    storeTitle: "Morpho: Files, transformed",
    summary:
      "132 file tools in one app: convert, compress, merge, split, sign and extract. The offline tools are free; cloud conversions and the AI tools come with Plus.",
    packageId: "cc.devbangs.morpho",
    platform: "Android",
    stack: "Kotlin, Jetpack Compose, Cloudflare Workers",
    status: "live",
  },
  {
    name: "Search",
    storeTitle: "Search: Web Browser",
    summary:
      "A light Android browser built around a collapsing home feed, fast suggestions and readable offline pages. Pick an accent and the whole app follows it.",
    packageId: "com.devbangs.search",
    platform: "Android",
    stack: "Kotlin, WebView",
    status: "live",
  },
  {
    name: "Aura",
    summary:
      "A player for the video and audio already on your phone. Sleep timer, resume position for long listens, remembered playback speed and a mini player you can swipe away.",
    packageId: "app.devbangs.media",
    platform: "Android",
    stack: "Kotlin, Jetpack Compose, Media3",
    status: "live",
  },
  {
    name: "Void Drifter",
    summary:
      "An endless runner written natively for Android rather than wrapped from the web. Ships are modelled in Blender and rendered on device.",
    platform: "Android",
    stack: "Kotlin, Blender",
    status: "building",
  },
  {
    name: "RELIC",
    summary:
      "A match-3 archaeology adventure. Clear the board to open a dig site, recover the artefact, move to the next one.",
    platform: "Android",
    stack: "Godot 4",
    status: "building",
  },
  {
    name: "SIRAJ",
    summary:
      "An Islamic companion app: prayer times and adhan, Quran, adhkar and Qibla in one place. Working name.",
    platform: "Android",
    stack: "Kotlin, Jetpack Compose",
    status: "building",
  },
  {
    name: "Beampad",
    summary:
      "Turns the phone into a Bluetooth keyboard and trackpad for a TV. Nothing to install on the TV, no wifi, no account.",
    platform: "Android",
    stack: "Kotlin, Bluetooth HID",
    status: "building",
  },
];

export const playUrl = (packageId: string) =>
  `https://play.google.com/store/apps/details?id=${packageId}`;

export const liveApps = apps.filter((app) => app.status === "live");
export const buildingApps = apps.filter((app) => app.status === "building");
