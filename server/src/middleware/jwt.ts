import jwt from 'jsonwebtoken';

const secret = process.env.SECRET as string;

const generateToken = (payload: any) => {
  const token = jwt.sign({ user: payload }, secret, {
    expiresIn: '2d',
  });
  return token;
};

const validateToken = (token: any) => {
  return jwt.verify(token, secret);
};

const decodeToken = (token: any) => {
    if (validateToken(token)) {
        return jwt.decode(token);
    }
    return false;
}

export { generateToken, validateToken, decodeToken };
