import { useContext } from 'react';
import { RouterContext } from '../BrowserRouter';

export default function useRouter() {
  return useContext(RouterContext);
}
