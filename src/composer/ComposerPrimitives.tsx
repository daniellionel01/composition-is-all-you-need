import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ComposerProvider, useComposer } from './ComposerContext';

function Frame({ children }: { children: ReactNode }) {
  return <section className="composer-frame">{children}</section>;
}

function Header({ title, eyebrow }: { title?: string; eyebrow?: string }) {
  return (
    <header className="composer-header">
      {eyebrow ? <span>{eyebrow}</span> : null}
      <strong>{title ?? 'Message'}</strong>
    </header>
  );
}

function Input({ placeholder = 'Write a message...' }: { placeholder?: string }) {
  const { state, actions, meta } = useComposer();

  return (
    <textarea
      ref={meta.inputRef}
      className="composer-input"
      aria-label={meta.label}
      placeholder={placeholder}
      value={state.body}
      onChange={(event) => actions.update({ body: event.target.value })}
      onKeyDown={(event) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
          event.preventDefault();
          actions.submit();
        }
      }}
    />
  );
}

function Attachments() {
  const { state } = useComposer();

  if (state.attachments.length === 0) return null;

  return (
    <div className="composer-attachments" aria-label="Attached files">
      {state.attachments.map((name, index) => (
        <span key={`${name}-${index}`}>{name}</span>
      ))}
    </div>
  );
}

function Footer({ children }: { children: ReactNode }) {
  return <footer className="composer-footer">{children}</footer>;
}

function FooterActions({ children }: { children: ReactNode }) {
  return <div className="composer-footer-actions">{children}</div>;
}

function FooterSubmit({ children }: { children?: ReactNode }) {
  return <div className="composer-footer-submit">{children}</div>;
}

function Dropzone({ children }: { children?: ReactNode }) {
  const { actions, meta } = useComposer();

  if (meta.supportsAttachments === false) return null;

  return (
    <div
      className="composer-dropzone"
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        const names = Array.from(event.dataTransfer.files).map((file) => file.name);
        if (names.length) actions.attach(names);
      }}
    >
      {children ?? 'Drop files here to attach'}
    </div>
  );
}

function SubmitButton({ children = 'Send', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { state, actions } = useComposer();

  return (
    <button
      className="send-button"
      type="button"
      disabled={!state.body.trim() && state.attachments.length === 0}
      onClick={actions.submit}
      {...props}
    >
      {children}
    </button>
  );
}

export const Composer = {
  Provider: ComposerProvider,
  Frame,
  Header,
  Input,
  Attachments,
  Footer,
  FooterActions,
  FooterSubmit,
  Dropzone,
  SubmitButton,
};

export { useComposer };
