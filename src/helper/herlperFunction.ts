import randomBytes from "randombytes";

const getRandomID = () => randomBytes(23).toString("hex");

export { getRandomID };
