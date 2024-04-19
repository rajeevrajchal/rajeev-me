import { filter } from "lodash";

const breakSentences = (sentence: string): string[] => {
  const sentenceList = sentence.split("• ");
  return filter(sentenceList, (item: string) => item !== "");
};

export default breakSentences;
