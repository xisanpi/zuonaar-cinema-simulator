import { pinyin } from "pinyin-pro";

export function normalizeSearchValue(value) {
  return value
    .trim()
    .toLocaleLowerCase("zh-CN")
    .replace(/[\s·•()（）\-—_]/g, "");
}

export function getPinyinLabel(value) {
  return pinyin(value, {
    toneType: "none",
    separator: " ",
    traditional: true,
    nonZh: "consecutive",
  }).toLocaleLowerCase("zh-CN");
}

export function buildPinyinSearchIndex(value) {
  const original = normalizeSearchValue(value);
  const fullPinyin = normalizeSearchValue(
    pinyin(value, {
      toneType: "none",
      separator: "",
      traditional: true,
      nonZh: "consecutive",
    }),
  );
  const initials = normalizeSearchValue(
    pinyin(value, {
      toneType: "none",
      pattern: "first",
      separator: "",
      traditional: true,
      nonZh: "consecutive",
    }),
  );

  return Array.from(new Set([original, fullPinyin, initials])).join("|");
}

export function matchesPinyinSearch(index, query) {
  const normalizedQuery = normalizeSearchValue(query);
  return !normalizedQuery || index.includes(normalizedQuery);
}
