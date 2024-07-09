const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtpass = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
  const userResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!userResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtpass
  );
  return signature;
}

const ans = signJWT("helloworld@gmail.com", "1asfsdfsdf1");
console.log(ans);

function decodeJWT(token) {
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
}

console.log(decodeJWT("Svdsd"));

function verifyJWT(token) {
  let ans = false;
  try {
    const verified = jwt.verify(token, jwtpass);
    if (verified) {
      ans = true;
    }
  } catch (e) {
    ans = false;
  }
  return ans;
}
