import * as React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export const Header = () => {
    const client = useApolloClient();
    console.log(client);

  return <div>owijf</div>
}
