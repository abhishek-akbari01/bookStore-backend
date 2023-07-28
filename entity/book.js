module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
    },
    writer: {
      type: Sequelize.STRING,
    },
    coverImage: {
      type: Sequelize.STRING,
    },
    points: {
      type: Sequelize.INTEGER,
    },
    tag: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  });

  return Book;
};
