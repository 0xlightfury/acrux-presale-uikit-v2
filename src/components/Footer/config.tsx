import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.acrux.network/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@acrux",
      },
      {
        label: "Community",
        href: "https://docs.acrux.network/contact-us/communities",
      },
      {
        label: "Acrux Token",
        href: "https://docs.acrux.network/tokenomics/acr-token",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://shop.acrux.network/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.acrux.network/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.acrux.network/click-here-for-help/troubleshooting-errors",
      },
      {
        label: "Guides",
        href: "https://docs.acrux.network/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/acrux/acrux/blob/main/acr.sol",
      },
      {
        label: "Documentation",
        href: "https://docs.acrux.network/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.acrux.network/developers/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.acrux.network/",
      },
      {
        label: "Careers",
        href: "https://docs.acrux.network/careers/hiring",
      },
    ],
  },
];

export const socials = [
  // {
  //   label: "Facebook",
  //   icon: "Facebook",
  //   href: "https://facebook.com/acrux",
  // },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/acrux_network",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/acruxnetwork",
  },
  {
    label: "Medium",
    icon: "Medium",
    href: "https://medium.com/@AcruxNetwork",
  },
  {
    label: "Email",
    icon: "Email",
    href: "mailto:info@acrux.network",
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://reddit.com/r/AcruxNetwork",
  // },
  // {
  //   label: "Instagram",
  //   icon: "Instagram",
  //   href: "https://instagram.com/acrux",
  // },
  // {
  //   label: "Github",
  //   icon: "Github",
  //   href: "https://github.com/acrux/acrux/blob/main/acr.sol",
  // },
  // {
  //   label: "Discord",
  //   icon: "Discord",
  //   href: "https://discord.com/channels/929639207721373757/929639965942505523",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
