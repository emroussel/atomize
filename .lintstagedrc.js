module.exports = {
  "*.{json,md,yml}": ["prettier --write"],
  "package.json": ["sort-package-json", "prettier --write"],
};
