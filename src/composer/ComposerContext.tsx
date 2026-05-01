import { createContext, useContext } from 'react';
import type { Children, ComposerValue } from './types';

const ComposerContext = createContext<ComposerValue | null>(null);

export function ComposerProvider({ value, children }: Children & { value: ComposerValue }) {
  return <ComposerContext.Provider value={value}>{children}</ComposerContext.Provider>;
}

export function useComposer() {
  const context = useContext(ComposerContext);

  if (!context) {
    throw new Error('Composer primitives must be rendered inside <ComposerProvider>.');
  }

  return context;
}
