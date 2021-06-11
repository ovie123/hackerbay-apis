import { validateLoginInput } from '../validation/login.js';
import { generateToken } from '../utils/token.js';

const Login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  const { username, password } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const token = generateToken({ username, password });
  return res.status(200).json({
    status: 'success',
    token,
  });
};

export default Login;
