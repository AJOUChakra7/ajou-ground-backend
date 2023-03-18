const { createGround } = require("../functions/ground");
const { createUser } = require("../functions/user");
const { makeConnectionToMongo } = require("./dbConnect");
const config = require("../utils/config");

const grounds = [
  {
    name: "대운동장",
    introduction: "대운동장입니다.",
  },
  {
    name: "소운동장",
    introduction: "소운동장입니다.",
  },
];

const create = async () => {
  await makeConnectionToMongo({ url: config.dbUrl })

  for (const ground of grounds) {
    ground.dbObject = await createGround(ground);
  }

  const user = await createUser({
    email: "test@ajou.ac.kr",
    name: "테스트",
    studentNumber: "2018000000",
  })
};

create();
