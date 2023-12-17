const Element = require('../models/element');
const Topic = require('../models/topic');

// Function to fetch and retrieve all elements with associated topics
const getAllElementsWithTopics = async (req, res) => {
  try {
    const elements = await Element.find();
    const elementsTopics = await Promise.all(elements.map(async (element) => {
      const topics = await Topic.find({ _id: { $in: element.topics } }).lean();
      return { ...element.toObject(), topics };
    }));
    res.json(elementsTopics);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving elements', error: error.message });
  }
};

module.exports = {
  getAllElementsWithTopics
};
