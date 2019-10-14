import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import { Input } from 'src/components/ui/Input';
import { Button } from 'src/components/ui/Button';
import {
  loginMutation,
  loggedInUserMutation,
} from 'src/graphql/mutations/auth';

export default () => {
  const [logIn] = useMutation(loginMutation);
  const [setLoggedInUser] = useMutation(loggedInUserMutation);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async values => {
      const { data } = await logIn({
        variables: values,
        update: async (store, response: any) => {
          await setLoggedInUser({
            variables: {
              user: response.data.login,
            },
          });
        },
      });
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email address..."
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password..."
        />
        <Button type="submit">Log in</Button>
      </form>
    </>
  );
};
