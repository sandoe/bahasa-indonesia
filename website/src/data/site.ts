export const uiLocales = ["da", "en", "id"] as const;
export type UiLocale = (typeof uiLocales)[number];

export const learningPairs = ["da-id", "id-da", "en-id", "id-en"] as const;
export type LearningPair = (typeof learningPairs)[number];

export const courseOrder = [
  "bipa-1",
  "bipa-2",
  "bipa-3",
  "bipa-4",
  "bipa-5",
  "bipa-6",
  "bipa-7",
  "bipa-8"
] as const;

export type LocalizedText = Record<UiLocale, string>;

export const localeLabels: Record<UiLocale, LocalizedText> = {
  da: { da: "Dansk", en: "Danish", id: "Bahasa Denmark" },
  en: { da: "Engelsk", en: "English", id: "Bahasa Inggris" },
  id: { da: "Indonesisk", en: "Indonesian", id: "Bahasa Indonesia" }
};

export const pairMeta: Record<
  LearningPair,
  {
    source: UiLocale;
    target: UiLocale;
    label: LocalizedText;
    deck: LocalizedText;
  }
> = {
  "da-id": {
    source: "da",
    target: "id",
    label: {
      da: "Dansk til Indonesisk",
      en: "Danish to Indonesian",
      id: "Bahasa Denmark ke Bahasa Indonesia"
    },
    deck: {
      da: "Skabt til dansk-talende, der vil lære indonesisk systematisk.",
      en: "Built for Danish speakers learning Indonesian in a structured flow.",
      id: "Dirancang untuk penutur bahasa Denmark yang ingin belajar bahasa Indonesia secara sistematis."
    }
  },
  "id-da": {
    source: "id",
    target: "da",
    label: {
      da: "Indonesisk til Dansk",
      en: "Indonesian to Danish",
      id: "Bahasa Indonesia ke Bahasa Denmark"
    },
    deck: {
      da: "Samme læringsmotor, vendt mod dansk som målsprog.",
      en: "The same learning engine, flipped toward Danish as the target language.",
      id: "Mesin belajar yang sama, diarahkan ke bahasa Denmark sebagai bahasa sasaran."
    }
  },
  "en-id": {
    source: "en",
    target: "id",
    label: {
      da: "Engelsk til Indonesisk",
      en: "English to Indonesian",
      id: "Bahasa Inggris ke Bahasa Indonesia"
    },
    deck: {
      da: "Et globalt spor til selvstudie og undervisning.",
      en: "A global track for self-study and teaching.",
      id: "Jalur global untuk belajar mandiri dan pengajaran."
    }
  },
  "id-en": {
    source: "id",
    target: "en",
    label: {
      da: "Indonesisk til Engelsk",
      en: "Indonesian to English",
      id: "Bahasa Indonesia ke Bahasa Inggris"
    },
    deck: {
      da: "Til senere udvidelse med samme indholdsmodel.",
      en: "Reserved for later expansion with the same content model.",
      id: "Disiapkan untuk pengembangan lanjutan dengan model konten yang sama."
    }
  }
};

export const uiCopy = {
  brand: {
    da: "BahasaBroen",
    en: "BahasaBridge",
    id: "BahasaBridge"
  },
  navOverview: {
    da: "Oversigt",
    en: "Overview",
    id: "Gambaran"
  },
  navStructure: {
    da: "Struktur",
    en: "Structure",
    id: "Struktur"
  },
  navLesson: {
    da: "Eksempel-lektion",
    en: "Sample lesson",
    id: "Pelajaran contoh"
  },
  heroEyebrow: {
    da: "Platform blueprint for gratis sprogundervisning",
    en: "Platform blueprint for free language learning",
    id: "Rancangan platform untuk pembelajaran bahasa gratis"
  },
  heroTitle: {
    da: "Lær indonesisk gratis – fra dit første ord til flydende samtale.",
    en: "Learn Indonesian for free – from your first word to fluent conversation.",
    id: "Belajar Bahasa Indonesia gratis – dari kata pertama hingga percakapan lancar."
  },
  heroBody: {
    da: "Dyk ned i en struktureret rejse gennem 12 temaer. BahasaBroen er din åbne platform til at mestre sproget, uanset om du lærer alene eller med en underviser.",
    en: "Dive into a structured journey through 12 themes. BahasaBridge is your open platform to master the language, whether you're learning alone or with a teacher.",
    id: "Selami perjalanan terstruktur melalui 12 tema. BahasaBridge adalah platform terbuka Anda untuk menguasai bahasa, baik belajar mandiri maupun dengan pengajar."
  },
  architecture: {
    da: "Arkitektur",
    en: "Architecture",
    id: "Arsitektur"
  },
  sampleLesson: {
    da: "Prøvelektion",
    en: "Sample lesson",
    id: "Pelajaran contoh"
  },
  teacherMode: {
    da: "Teacher mode",
    en: "Teacher mode",
    id: "Mode pengajar"
  },
  selfStudyMode: {
    da: "Self-study mode",
    en: "Self-study mode",
    id: "Mode belajar mandiri"
  },
  videoPlaceholder: {
    da: "Video-placeholder",
    en: "Video placeholder",
    id: "Placeholder video"
  },
  comingSoon: {
    da: "Kommer senere",
    en: "Coming later",
    id: "Hadir nanti"
  },
  rightsSafe: {
    da: "Kun placeholder. Ingen ekstern underviservideo publiceres endnu.",
    en: "Placeholder only. No external teacher video is published yet.",
    id: "Hanya placeholder. Belum ada video pengajar eksternal yang dipublikasikan."
  },
  startExploring: {
    da: "Gå til dansk -> indonesisk",
    en: "Open Danish -> Indonesian",
    id: "Buka Denmark -> Indonesia"
  },
  roadmapTitle: {
    da: "Otte niveauer, én læringsmotor",
    en: "Eight levels, one learning engine",
    id: "Delapan level, satu mesin belajar"
  },
  roadmapBody: {
    da: "Hver BIPA får sin egen struktur, men deler samme design system, content schema og fremtidige interaktive motor.",
    en: "Each BIPA level gets its own structure while sharing the same design system, content schema, and future interactive engine.",
    id: "Setiap level BIPA memiliki strukturnya sendiri namun berbagi sistem desain, skema konten, og mesin interaktif masa depan yang sama."
  },
  themeLabel: {
    da: "Tema",
    en: "Theme",
    id: "Tema"
  },
  brandTagline: {
    da: "Sprogbroen",
    en: "The Language Bridge",
    id: "Jembatan Bahasa"
  },
  ariaOpenMenu: {
    da: "Åbn menu",
    en: "Open menu",
    id: "Buka menu"
  },
  ariaNavigation: {
    da: "Hovednavigation",
    en: "Main navigation",
    id: "Navigasi utama"
  },
  breadcrumb: {
    da: "Brødkrumme",
    en: "Breadcrumb",
    id: "Breadcrumb"
  },
  ariaLessonNav: {
    da: "Lektion navigation",
    en: "Lesson navigation",
    id: "Navigasi pelajaran"
  }
  } as const;
