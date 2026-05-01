import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useComposer } from './ComposerPrimitives';

function ActionButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className="action-button" type="button" {...props}>
      {children}
    </button>
  );
}

export function PlusMenu() {
  const { actions } = useComposer();
  return (
    <ActionButton aria-label="Attach demo file" onClick={() => actions.attach(['demo-file.png'])}>
      ＋
    </ActionButton>
  );
}

export function TextFormat() {
  const { state, actions } = useComposer();
  return (
    <ActionButton
      aria-label="Toggle formatting"
      aria-pressed={state.formattingOpen}
      onClick={() => actions.update({ formattingOpen: !state.formattingOpen })}
    >
      Aa
    </ActionButton>
  );
}

export function Emoji() {
  const { state, actions } = useComposer();
  return (
    <ActionButton aria-label="Add a smile" onClick={() => actions.update({ body: `${state.body}🙂` })}>
      ☺
    </ActionButton>
  );
}

export function Mention() {
  const { actions, state } = useComposer();
  return (
    <ActionButton aria-label="Insert mention" onClick={() => actions.update({ body: `${state.body}@` })}>
      @
    </ActionButton>
  );
}

export function Voice() {
  return <ActionButton aria-label="Record voice note">Mic</ActionButton>;
}

export function Video() {
  return <ActionButton aria-label="Attach video clip">Vid</ActionButton>;
}

export function Divider() {
  return <span className="action-divider" aria-hidden="true" />;
}

export function SlashCommands() {
  const { actions, state } = useComposer();
  return (
    <ActionButton aria-label="Insert slash command" onClick={() => actions.update({ body: `${state.body}/` })}>
      /
    </ActionButton>
  );
}

export function CommonActions() {
  return (
    <>
      <PlusMenu />
      <TextFormat />
      <Emoji />
      <Mention />
      <Divider />
      <Voice />
      <Video />
      <Divider />
      <SlashCommands />
    </>
  );
}
