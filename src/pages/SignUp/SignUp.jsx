import { Button } from '../../components';
import { Input, SignUpForm, Text, Title, Wrapper } from './SignUp.style';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Navbar from '../../components/Navbar/Navbar';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();

  const navigate = useNavigate();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // const googleProvider = new GoogleAuthProvider();

  const handleSignUp = async (fullName, email, password) => {
    setLoading(true);
    const res = createUserWithEmailAndPassword(auth, email, password);
    const user = (await res).user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: fullName,
      authProvider: 'local',
      email: email
    });
    setLoading(false);
    setToken(user.accessToken);
    localStorage.setItem('token', user.accessToken);
    navigate('/homepage');
  };

  return (
    <>
      <Navbar button={[{ name: 'Sign In', callBack: () => navigate('/login') }]} />
      <Wrapper>
        <SignUpForm>
          <Title>
            <span>Ken</span>Flix
          </Title>
          <Input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button loading={loading} onClick={() => handleSignUp(fullName, email, password)}>
            Sign Up
          </Button>
          <Text style={{ color: '#ffffff96', fontSize: '0.8rem' }}>
            Already have account? <span onClick={() => navigate('/login')}>Sign In</span>
          </Text>
        </SignUpForm>
      </Wrapper>
    </>
  );
};

export default SignUp;
