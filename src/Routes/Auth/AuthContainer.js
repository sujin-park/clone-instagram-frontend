// Hooks, state
import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { LOG_IN } from './AuthQueries';
import { toast } from 'react-toastify';

export default () => {
  const [action, setAction] = useState('logIn');
  const username = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const secret = useInput('');
  const email = useInput('psujin831@gmail.com');
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  const createAccountMutation = useMutation('CREATE_ACCOUNT', {
    username: username.value,
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === 'logIn') {
      if (!email.value) {
        try {
          const {
            data: {
              requestSecret
            }
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error('You dont have an account yet, create account');
            setTimeout(() => setAction('signUp'), 3000);
          } else {
            toast.success('Check your inbox for your login secret');
            setAction('confirm');
          }
        } catch {
          toast.error('Cant request secret, Network error');
        }
      } else {
        toast.error('Email is required');
      }
    } else if (action === 'signUp') {
      if (username.value !== '' &&
        email.value !== '' &&
        firstName.value !== '' &&
        lastName.value !== '') {
        try {
          const {
            data: {
              createAccount
            }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error('You cant create account');
          } else {
            toast.success('Account created! Log in now');
            setTimeout(() => {
              setAction('LogIn')
            }, 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error('All Input is empty');
      }
    }
  };

  return <AuthPresenter
    setAction={setAction}
    action={action}
    username={username}
    firstName={firstName}
    lastName={lastName}
    email={email}
    secret={secret}
    onLogin={onSubmit}
  />;
};
