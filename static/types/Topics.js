/*
This file defines the available topics for blog posts.
Each post must have one of these topics in its frontmatter.
The order of topics in the TOPIC_ORDER array determines their display order.
*/

const Topics = {
  neoGapSemester: "Neo Gap Semester",
  aiMl: "AI/ML",
  webMobileDev: "Web/Mobile Dev",
  other: "Other",
};

// Define the order in which topics should be displayed
const TOPIC_ORDER = [
  Topics.neoGapSemester,
  Topics.aiMl,
  Topics.webMobileDev,
  Topics.other,
];

export { Topics as default, TOPIC_ORDER };
