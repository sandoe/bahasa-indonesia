import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localizedText = z.object({
  da: z.string(),
  en: z.string(),
  id: z.string()
});

const courseCollection = defineCollection({
  loader: glob({ base: "./src/content/courses", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    cefr: z.string(),
    stage: localizedText,
    title: localizedText,
    summary: localizedText,
    focus: z.array(localizedText),
    teacherPositioning: localizedText,
    selfStudyPositioning: localizedText,
    supportedPairs: z.array(z.enum(["da-id", "id-da", "en-id", "id-en"])),
    palette: z.object({
      accent: z.string(),
      glow: z.string()
    })
  })
});

const lessonsCollection = defineCollection({
  loader: glob({
    base: "./src/content/lessons",
    pattern: "**/*.json",
    generateId: ({ entry }) => entry.replace(/\.json$/, "")
  }),
  schema: z.object({
    pair: z.enum(["da-id", "id-da", "en-id", "id-en"]),
    courseSlug: z.string(),
    order: z.number(),
    slug: z.string(),
    durationMinutes: z.number(),
    title: localizedText,
    summary: localizedText,
    objectives: z.array(localizedText),
    unit: z.object({
      slug: z.string(),
      order: z.number(),
      title: localizedText,
      summary: localizedText
    }),
    modes: z.object({
      teacher: z.object({
        opener: localizedText,
        flow: z.array(localizedText),
        notes: z.array(localizedText)
      }),
      selfStudy: z.object({
        path: z.array(localizedText),
        checkpoints: z.array(localizedText)
      })
    }),
    dialogue: z.array(
      z.object({
        speaker: z.string(),
        source: z.string(),
        target: z.string(),
        note: localizedText.optional()
      })
    ),
    vocabulary: z.array(
      z.object({
        source: z.string(),
        target: z.string(),
        note: localizedText
      })
    ),
    grammar: z.array(
      z.object({
        pattern: z.string(),
        explanation: localizedText,
        examples: z.array(
          z.object({
            source: z.string(),
            target: z.string()
          })
        )
      })
    ),
    activities: z.array(
      z.object({
        kind: z.enum(["listen", "speak", "build", "reflect", "analyze"]),
        prompt: localizedText,
        answerShape: localizedText,
        reading: z.object({
          title: localizedText,
          text: localizedText
        }).optional(),
        analysisTable: z.array(
          z.object({
            structure: localizedText,
            textExcerpt: localizedText,
            languageFeature: localizedText
          })
        ).optional(),
        alphabetTable: z.array(
          z.object({
            letter: z.string(),
            pronunciation: z.string(),
            example: localizedText
          })
        ).optional()
      })
    ),
    media: z.array(
      z.object({
        id: z.string(),
        type: z.enum(["video", "audio", "image"]),
        provider: z.enum(["placeholder", "youtube", "self-hosted", "teacher-slide", "copyrighted-classroom"]),
        status: z.enum(["placeholder", "draft", "public-ready"]),
        title: localizedText,
        note: localizedText,
        rights: z.object({
          owner: z.enum(["self-produced", "internal", "licensed", "third-party"]),
          publicSafe: z.boolean()
        })
      })
    )
  })
});

export const collections = {
  courses: courseCollection,
  lessons: lessonsCollection
};
