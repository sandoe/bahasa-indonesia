import { getCollection } from "astro:content";
import { courseOrder, learningPairs, uiLocales, type LearningPair, type UiLocale } from "@data/site";

export async function getCourses() {
  const courses = await getCollection("courses");
  return courses.sort(
    (left, right) => courseOrder.indexOf(left.data.slug) - courseOrder.indexOf(right.data.slug)
  );
}

export async function getLessons() {
  const lessons = await getCollection("lessons");
  return lessons.sort((left, right) => {
    if (left.data.courseSlug !== right.data.courseSlug) {
      return left.data.courseSlug.localeCompare(right.data.courseSlug);
    }

    if (left.data.unit.order !== right.data.unit.order) {
      return left.data.unit.order - right.data.unit.order;
    }

    return left.data.order - right.data.order;
  });
}

export async function getCoursesForPair(pair: LearningPair) {
  const courses = await getCourses();
  return courses.filter((course) => course.data.supportedPairs.includes(pair));
}

export async function getLessonsForCourse(pair: LearningPair, courseSlug: string) {
  const lessons = await getLessons();
  return lessons.filter(
    (lesson) => lesson.data.pair === pair && lesson.data.courseSlug === courseSlug
  );
}

export function groupLessonsByUnit(lessons: Awaited<ReturnType<typeof getLessonsForCourse>>) {
  const groups = new Map<string, typeof lessons>();

  for (const lesson of lessons) {
    const key = lesson.data.unit.slug;
    const current = groups.get(key) ?? [];
    current.push(lesson);
    groups.set(key, current);
  }

  return [...groups.entries()].map(([slug, unitLessons]) => ({
    slug,
    title: unitLessons[0].data.unit.title,
    summary: unitLessons[0].data.unit.summary,
    lessons: unitLessons
  }));
}

export function getStaticRouteMatrix() {
  return uiLocales.flatMap((locale) =>
    learningPairs.map((pair) => ({
      locale,
      pair
    }))
  );
}

export function isSupportedLocale(value: string): value is UiLocale {
  return uiLocales.includes(value as UiLocale);
}

export function isSupportedPair(value: string): value is LearningPair {
  return learningPairs.includes(value as LearningPair);
}
