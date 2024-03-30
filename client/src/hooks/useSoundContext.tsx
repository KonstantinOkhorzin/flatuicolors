import { useContext } from 'react';

import { Context, IContext } from '../context';

const useSoundContext = () => {
  const { soundEnabled, setSoundEnabled } = useContext(Context) as IContext;

  return { soundEnabled, setSoundEnabled };
};

export default useSoundContext;
