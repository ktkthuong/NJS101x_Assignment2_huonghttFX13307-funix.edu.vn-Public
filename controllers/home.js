exports.getHome = (req, res, next) => {
  res.render("home", {
    pageTitle: "Trang Chủ",
    path: "/",
  });
};
