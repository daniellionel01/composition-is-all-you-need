import { useMemo, useRef, useState } from 'react';
import { Composer } from '../composer/ComposerPrimitives';
import type { Children, ComposerActions, ComposerState, ComposerValue } from '../composer/types';
import { emptyComposerState } from '../composer/types';
import { useGlobalChannelComposer } from '../state/syncedChannelStore';

export function ChannelComposerProvider({ channelId, children }: Children & { channelId: string }) {
  const value = useGlobalChannelComposer(`channel:${channelId}`, `#${channelId}`);
  return <Composer.Provider value={value}>{children}</Composer.Provider>;
}

export function ThreadComposerProvider({ channelId, threadId, children }: Children & { channelId: string; threadId: string }) {
  const value = useGlobalChannelComposer(`thread:${channelId}:${threadId}`, `thread in #${channelId}`);
  return <Composer.Provider value={value}>{children}</Composer.Provider>;
}

export function LocalComposerProvider({
  children,
  initialState = emptyComposerState,
  label,
  supportsAttachments = true,
  onSubmit,
}: Children & {
  initialState?: ComposerState;
  label: string;
  supportsAttachments?: boolean;
  onSubmit: (state: ComposerState) => void;
}) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [state, setState] = useState<ComposerState>(initialState);

  const actions = useMemo<ComposerActions>(() => ({
    update(patch) {
      setState((current) => ({ ...current, ...patch }));
    },
    attach(names) {
      setState((current) => ({ ...current, attachments: [...current.attachments, ...names] }));
    },
    reset() {
      setState(initialState);
    },
    submit() {
      onSubmit(state);
      setState(emptyComposerState);
    },
    focusInput() {
      inputRef.current?.focus();
    },
  }), [initialState, onSubmit, state]);

  const value: ComposerValue = {
    state,
    actions,
    meta: {
      inputRef,
      draftId: `local:${label}`,
      label,
      supportsAttachments,
    },
  };

  return <Composer.Provider value={value}>{children}</Composer.Provider>;
}
