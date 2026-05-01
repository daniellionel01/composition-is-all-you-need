import type { ReactNode, RefObject } from 'react';

export type ComposerState = {
  body: string;
  attachments: string[];
  formattingOpen: boolean;
  alsoSendToChannel?: boolean;
};

export type ComposerMeta = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
  draftId: string;
  label: string;
  supportsAttachments?: boolean;
};

export type ComposerActions = {
  update: (patch: Partial<ComposerState>) => void;
  reset: () => void;
  submit: () => void;
  focusInput: () => void;
  attach: (names: string[]) => void;
};

export type ComposerValue = {
  state: ComposerState;
  actions: ComposerActions;
  meta: ComposerMeta;
};

export type Children = {
  children: ReactNode;
};

export const emptyComposerState: ComposerState = {
  body: '',
  attachments: [],
  formattingOpen: false,
};
