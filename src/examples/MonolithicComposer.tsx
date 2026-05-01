import type { ReactElement } from 'react';

type MonolithicComposerProps = {
  isThread?: boolean;
  isDmThread?: boolean;
  isEditingMessage?: boolean;
  isForwardingMessage?: boolean;
  channelId?: string;
  onCancel?: () => void;
  renderSubmit?: () => ReactElement;
};

export function MonolithicComposerExample() {
  return (
    <div className="code-card bad">
      <h3>Monolithic composer API</h3>
      <pre>{`<Composer
  isThread
  isDmThread={false}
  isEditingMessage={false}
  isForwardingMessage={false}
  channelId="react"
  onCancel={maybeCancel}
  renderSubmit={maybeCustomSubmit}
/>`}</pre>
      <p>
        The implementation has to repeatedly ask the same questions: should it render a dropzone, which actions are
        visible, where submit lives, and which state implementation should back it?
      </p>
    </div>
  );
}

export function MonolithicComposer(_props: MonolithicComposerProps) {
  // This intentionally stays unimplemented: it is here as an anti-pattern boundary.
  // The practical implementation lives in ../composers and ../composer.
  return null;
}
