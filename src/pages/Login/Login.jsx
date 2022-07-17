/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../components';
import { Container, Input, Title, Wrapper, Text, LoginList, LoginItem } from './Login.style';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
  linkWithPopup,
  fetchSignInMethodsForEmail,
  linkWithCredential
} from 'firebase/auth';
import { firebaseConfig } from '../../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { setToken } = useAuth();

  const navigate = useNavigate();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const fbProvider = new FacebookAuthProvider();
  const ggProvider = new GoogleAuthProvider();
  // const googleProvider = new GoogleAuthProvider();

  const handleSignIn = async (email, password) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      setToken(res.user.accessToken);
      localStorage.setItem('token', res.user.accessToken);
      navigate('/homepage');
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginGG = () => {
    signInWithPopup(auth, ggProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setToken(user.accessToken);
        localStorage.setItem('token', user.accessToken);
        navigate('/homepage');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        if (error.code === 'auth/account-exists-with-different-credential') {
          // Step 2.
          // User's email already exists.
          // The pending Google credential.
          var pendingCred = error.credential;
          // The provider account's email address.
          var email = error.email;
          // Get sign-in methods for this email.
          auth.fetchSignInMethodsForEmail(email).then(function (methods) {
            // Step 3.
            // If the user has several sign-in methods,
            // the first method in the list will be the "recommended" method to use.
            if (methods[0] === 'password') {
              // Asks the user their password.
              // In real scenario, you should handle this asynchronously.
              var password = prompt('Password'); // TODO: implement promptUserForPassword.
              auth
                .signInWithEmailAndPassword(email, password)
                .then(function (result) {
                  // Step 4a.
                  return result.user.linkWithCredential(pendingCred);
                })
                .then(function (data) {
                  // Google account successfully linked to the existing Firebase user.
                  console.log(data);
                  navigate('/hom');
                });
              return;
            }
            auth.signInWithPopup(fbProvider).then(function (result) {
              // Remember that the user may have signed in with an account that has a different email
              // address than the first one. This can happen as Firebase doesn't control the provider's
              // sign in flow and the user is free to login using whichever account they own.
              // Step 4b.
              // Link to Google credential.
              // As we have access to the pending credential, we can directly call the link method.
              result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function (usercred) {
                // Google account successfully linked to the existing Firebase user.
                console.log(usercred);
              });
            });
          });
        }
      });
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          <span>Ken</span>Flix
        </Title>
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

        <Button loading={loading} onClick={() => handleSignIn(email, password)}>
          Sign In
        </Button>
        <div style={{ color: '#fff' }}>or</div>

        <LoginList>
          <LoginItem onClick={handleLoginGG}>
            <FontAwesomeIcon icon={faGoogle} />
          </LoginItem>
        </LoginList>
        <Text style={{ color: '#ffffff96', fontSize: '0.8rem' }}>
          Don&apos;t have account yet? <span onClick={() => navigate('/signup')}>Sign up</span>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Login;
