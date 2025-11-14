import {
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Instrument_Sans,
  Inter,
  JetBrains_Mono,
  Lora,
  Mulish,
  Noto_Sans_Mono,
  Open_Sans,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Roboto,
  Source_Serif_4,
  Fira_Code,
} from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const fontLora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
});

const fontIbmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
});

const fontInstrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

const fontOpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

const fontMullish = Mulish({
  subsets: ["latin"],
  variable: "--font-mullish",
});

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontSourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source-serif-4",
});

const fontJetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

const fontPlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair-display",
});

const fontFiraCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fira-code",
});

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontPlusJakartaSans.variable,
  fontLora.variable,
  fontIbmPlexMono.variable,
  fontInstrument.variable,
  fontNotoMono.variable,
  fontOpenSans.variable,
  fontMullish.variable,
  fontInter.variable,
  fontSourceSerif4.variable,
  fontJetBrainsMono.variable,
  fontRoboto.variable,
  fontPlayfairDisplay.variable,
  fontFiraCode.variable
);
