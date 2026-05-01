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
        The implementation keeps asking the same questions: dropzone or not, which actions should show, where submit
        lives, and whose state this is.
      </p>
    </div>
  );
}

export function MonolithicComposer(_props: MonolithicComposerProps) {
  // This intentionally stays unimplemented: it is here as an anti-pattern boundary.
  // The practical implementation lives in ../composers and ../composer.
  return null;
}
