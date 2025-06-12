import { User } from '../models/user.model';
import { bcrypt } from 'bcrypt';

const signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'Email is already used' });
    }

    const sel = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, sel);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      role : 'user'
    });

    await newUser.save();
    res.status(201).json({ message: 'User created' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creation user' });
  }
};

export { signup };
