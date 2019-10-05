// Hooks, state
import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { LOG_IN } from './AuthQueries';
import { toast } from 'react-toastify';

export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("psujin831@gmail.com");
    const requestSecret = useMutation(LOG_IN, {
        update: (_, { data}) => {
            const { requestSecret } = data;
            if (!requestSecret) {
                toast.error('You dont have an account yet, create account');
                setTimeout(() => setAction('signUp'), 2000);
            }
        },
        variables: { email: email.value }
    });
    const createAccount = useMutation('CREATE_ACCOUNT', {
        username: username.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value
    })
    const onSubmit = (e) => {
        e.preventDefault();
        if (action === 'logIn') {
            if (!email.value ) {
                requestSecret();
            } else {
                toast.error('Email is required');
            }
        } else if (action === 'signUp') {
            if (username.value !== '' &&
                email.value !== '' &&
                firstName.value !== '' &&
                lastName.value !== '') {
                createAccount();
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
        onLogin={onSubmit}
    />;
};
