export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId?: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
}

export const siteConfig: SiteConfig = {
  name: "Surf Guadeloupe — Guide des Spots, Houle & Culture Surf aux Antilles",
  domain: "surf-guadeloupe.com",
  url: "https://surf-guadeloupe.com",
  description: "Le portail de référence du surf en Guadeloupe : guide des 10 meilleurs spots de récif et beach breaks, météo de la houle, écoles certifiées et culture glisse.",
  repo: "jc842/surf-guadeloupe",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-pacific-drift",
    fontFamily: "sans",
    colorScheme: "neo-cyan",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "66",
    containerId: "sFLW3TKn",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "Éditeur indépendant — Passionnés de Glisse & Surf Caraïbes",
    address: "Grande-Terre / Basse-Terre, Guadeloupe",
    contactEmail: "contact@surf-guadeloupe.com",
    hostName: "Cloudflare Pages & Hetzner",
    hostAddress: "Union Européenne",
  },
};
