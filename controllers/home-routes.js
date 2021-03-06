const router = require("express").Router();
const { Quiz, Comment, User } = require("../models/");

// GET all quizzez on the homepage
router.get("/", async (req, res) => {
  try {
    const quizData = await Quiz.findAll({
      include: [User],
    });
    console.log(quizData);
    const quizzez = quizData.map((quiz) => quiz.get({ plain: true }));

    res.render("all-quizzez", { quizzez });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single quiz
router.get("/quiz/:id", async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (quizData) {
      const quiz = quizData.get({ plain: true });

      res.render("single-quiz", { quiz });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get login data
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//GET signup form
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
