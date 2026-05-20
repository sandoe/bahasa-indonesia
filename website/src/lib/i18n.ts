import { localeLabels, pairMeta, type LearningPair, type LocalizedText, type UiLocale } from "@data/site";

export function t(copy: LocalizedText, locale: UiLocale) {
  return copy[locale] ?? copy.da;
}

export function getPair(pair: LearningPair) {
  return pairMeta[pair];
}

export function getLanguageLabel(language: UiLocale, locale: UiLocale) {
  return localeLabels[language][locale];
}

export function getDirectionLabel(pair: LearningPair, locale: UiLocale) {
  return t(pairMeta[pair].label, locale);
}
