const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1. Interactive Elements Sub-Schemas
const QuizQuestionSchema = new Schema({
  id: { type: String, required: true }, // JSON-এ এটি এখন "q_101" স্ট্রিং
  question: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
  explanation: String,
});

// JSON-এ প্রম্পটগুলো এখন অবজেক্ট { id, text }
const PromptSchema = new Schema({
  id: String,
  text: String,
});

// 2. Article Body Sub-Schemas
const SubSectionSchema = new Schema({
  id: String, // আপনার JSON-এ sub_sections এও ID আছে
  title: String,
  desc: String,
});

const AnalysisTableSchema = new Schema({
  id: String, // row_501 এর জন্য
  aspect: String,
  details: String,
});

// বুলেট পয়েন্ট এখন অবজেক্ট { id, text }
const BulletPointSchema = new Schema({
  id: String,
  text: String,
});

const SectionSchema = new Schema({
  id: { type: String, required: true },
  h2: { type: String, required: true },
  content: { type: String, required: true },
  image_tag: String,
  bullet_points: [BulletPointSchema], // [String] থেকে পরিবর্তন করে [BulletPointSchema] করা হয়েছে
  sub_sections: [SubSectionSchema],
  analysis_table: [AnalysisTableSchema],
});

// 3. Main Article Schema
const BCSArticleSchema = new Schema(
  {
    seo_metadata: {
      title_tag: { type: String, required: true },
      meta_description: { type: String, required: true },
      slug: { type: String, required: true, unique: true, index: true },
      canonical_url: String,
      schema_type: { type: String, default: "EducationalArticle" },
      focus_keywords: [String],
    },
    content_header: {
      topic_id: { type: String, required: true },
      subject: { type: String, required: true },
      syllabus_category: String,
      last_updated: {
        type: String,
        default: () => new Date().toISOString().split("T")[0],
      },
    },
    article_body: {
      h1: { type: String, required: true },
      sections: [SectionSchema],
    },
    interactive_elements: {
      quiz: {
        id: String, // কুইজ সেকশনেও আইডি আছে
        title: String,
        questions: [QuizQuestionSchema],
      },
      written_corner: {
        id: String, // রিটেন কর্নারেও আইডি আছে
        title: String,
        prompts: [PromptSchema], // [String] থেকে পরিবর্তন করে [PromptSchema] করা হয়েছে
      },
    },

    views: { type: Number, default: 0 },
    totalTimeSpent: { type: Number, default: 0 }, // In seconds
    reading_difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Ensure virtuals are sent to frontend
    toObject: { virtuals: true },
  },
);

// Virtual field to calculate read time (approx 200 words per minute)
BCSArticleSchema.virtual("estimatedReadTime").get(function () {
  const content = JSON.stringify(this.article_body);
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
});

const BCSArticle = mongoose.model("BCSArticle", BCSArticleSchema);
module.exports = BCSArticle;
