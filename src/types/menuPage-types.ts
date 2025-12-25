export type VocabularyWord = {
  id: number;
  tj: string;
  ru: string;
  tr: string;
};

export type Lesson = {
  lesson_id: number;
  title: string;
  goal: string;
  vocabulary: VocabularyWord[];
};
