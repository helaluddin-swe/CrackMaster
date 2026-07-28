const Course = require("../models/Course.js");

// @desc    Get all courses (returns just titles and slugs for a catalog view)
// @route   GET /api/v1/courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).select('slug title');
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get a single course with full curriculum
// @route   GET /api/v1/courses/:slug
// @desc    Get a single course with full curriculum
// @route   GET /api/v1/courses/:slug
exports.getCourseBySlug = async (req, res) => {
  try {
    // 1. Extract slug from req.params
    const { slug } = req.params; 

    // 2. Remove .populate() since questions and subtopics are already embedded
    const course = await Course.findOne({ slug });

    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Seed database with a bulk JSON object OR upsert an individual course/hierarchy from Admin panel
// @route   POST /api/v1/courses and POST /api/v1/courses/seed
exports.seedCourses = async (req, res) => {
  try {
    const reqBody = req.body;

    // Case 1: Bulk Seeding format (e.g., { bangla: { title, chapters }, english: { ... } })
    if (!Array.isArray(reqBody) && !reqBody.slug && Object.keys(reqBody).length > 0) {
      const coursesToInsert = [];
      for (const [slug, courseData] of Object.entries(reqBody)) {
        if (courseData && courseData.chapters) {
          coursesToInsert.push({
            slug: slug,
            title: courseData.title || slug,
            chapters: courseData.chapters
          });
        }
      }

      if (coursesToInsert.length > 0) {
        await Course.deleteMany(); 
        const createdCourses = await Course.insertMany(coursesToInsert);
        return res.status(201).json({ 
          success: true, 
          message: `${createdCourses.length} courses seeded successfully!`,
          data: createdCourses 
        });
      }
    }

    // Case 2: Individual Course / Admin Upsert format (e.g., { slug: 'bangla', title, chapters: [...] })
    const { slug, title, chapters } = reqBody;
    if (!slug) {
      return res.status(400).json({ success: false, message: 'Course slug is required.' });
    }

    let course = await Course.findOne({ slug });

    if (!course) {
      // Create new document if it doesn't exist
      course = new Course({ slug, title, chapters: chapters || [] });
      await course.save();
    } else {
      // Update title if provided
      if (title) course.title = title;

      // Smart merge chapters/topics/subtopics if provided
      if (chapters && Array.isArray(chapters)) {
        chapters.forEach(incomingChapter => {
          const chIdx = course.chapters.findIndex(c => c.id === incomingChapter.id);
          
          if (chIdx > -1) {
            // Chapter exists, look at topics
            incomingChapter.topics.forEach(incomingTopic => {
              const topIdx = course.chapters[chIdx].topics.findIndex(t => t.id === incomingTopic.id);
              
              if (topIdx > -1) {
                // Topic exists, look at subtopics
                incomingTopic.subtopics.forEach(incomingSub => {
                  const subIdx = course.chapters[chIdx].topics[topIdx].subtopics.findIndex(s => s.id === incomingSub.id);
                  
                  if (subIdx > -1) {
                    // Update existing subtopic
                    course.chapters[chIdx].topics[topIdx].subtopics[subIdx] = incomingSub;
                  } else {
                    // Push new subtopic
                    course.chapters[chIdx].topics[topIdx].subtopics.push(incomingSub);
                  }
                });
              } else {
                // Push new topic
                course.chapters[chIdx].topics.push(incomingTopic);
              }
            });
          } else {
            // Push new chapter
            course.chapters.push(incomingChapter);
          }
        });
      }

      await course.save();
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Course hierarchy successfully updated in MongoDB!', 
      data: course 
    });

  } catch (error) {
    console.error("Controller Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};