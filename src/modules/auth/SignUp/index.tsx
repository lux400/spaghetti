import * as React from 'react';
import { useApolloClient, useMutation } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import { useFormik } from 'formik';
import { Input } from 'src/components/ui/Input';
import { Button } from 'src/components/ui/Button';
import { registerMutation } from 'src/graphql/mutations/auth';



export default () => {
  const [signUp, { error }] = useMutation(registerMutation);
  const client = useApolloClient();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async values => {
      const { data } = await signUp({
        variables: values,
        update: (store, { data }) => {
          store.writeData({ data: { user: data } });
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
        <Button type="submit">Sign up</Button>
      </form>
    </>
  );
};
