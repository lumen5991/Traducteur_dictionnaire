const useRouter = require("./routes");

const handler = (req, res) => {
    useRouter.resolve(req, res);
};

module.exports = handler;
