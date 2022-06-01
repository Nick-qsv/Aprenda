const PORT = process.env.PORT || 4000;
const app = require("./app");

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`WELCOME APRENDA TEAM TO PORT: ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();