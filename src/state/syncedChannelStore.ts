import { useMemo, useRef, useSyncExternalStore } from 'react';
import type { ComposerActions, ComposerState, ComposerValue } from '../composer/types';
import { emptyComposerState } from '../composer/types';

type Listener = () => void;

const listeners = new Set<Listener>();
const drafts = new Map<string, ComposerState>();

function getDraft(draftId: string): ComposerState {
  return drafts.get(draftId) ?? emptyComposerState;
}

function setDraft(draftId: string, next: ComposerState) {
  drafts.set(draftId, next);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useGlobalChannelComposer(draftId: string, label: string): ComposerValue {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const state = useSyncExternalStore(subscribe, () => getDraft(draftId), () => getDraft(draftId));

  const actions = useMemo<ComposerActions>(() => ({
    update(patch) {
      setDraft(draftId, { ...getDraft(draftId), ...patch });
    },
    attach(names) {
      const current = getDraft(draftId);
      setDraft(draftId, { ...current, attachments: [...current.attachments, ...names] });
    },
    reset() {
      setDraft(draftId, emptyComposerState);
    },
    submit() {
      const current = getDraft(draftId);
      window.alert(`Sent to ${label}: ${current.body || current.attachments.join(', ')}`);
      setDraft(draftId, emptyComposerState);
    },
    focusInput() {
      inputRef.current?.focus();
    },
  }), [draftId, label]);

  return {
    state,
    actions,
    meta: {
      inputRef,
      draftId,
      label,
      supportsAttachments: true,
    },
  };
}
