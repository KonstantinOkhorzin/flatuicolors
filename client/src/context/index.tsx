import { useState, createContext, ReactNode, FC, useMemo, Dispatch, SetStateAction } from 'react';

export interface IContext {
  soundEnabled: boolean;
  setSoundEnabled: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: ReactNode;
}

export const Context = createContext<IContext | null>(null);

const Provider: FC<Props> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const providerValue = useMemo(() => {
    return { soundEnabled, setSoundEnabled };
  }, [soundEnabled]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export default Provider;
