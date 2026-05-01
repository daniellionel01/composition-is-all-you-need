import { Emoji, Mention, TextFormat } from '../composer/ComposerActions';
import { Composer, useComposer } from '../composer/ComposerPrimitives';
import { LocalComposerProvider } from './ComposerProviders';

function ForwardMessageComposer() {
  return (
    <Composer.Frame>
      <Composer.Header eyebrow="Ephemeral modal state" title="Forward this private message" />
      <Composer.Input placeholder="Add a message if you like" />
      <Composer.Footer>
        <Composer.FooterActions>
          <TextFormat />
          <Emoji />
          <Mention />
        </Composer.FooterActions>
        {/* The submit button is intentionally not inside this footer. */}
        <Composer.FooterSubmit />
      </Composer.Footer>
    </Composer.Frame>
  );
}

function MessagePreview() {
  return (
    <aside className="message-preview">
      <small>Forwarding</small>
      <strong>I should prep my React Universe talk</strong>
      <span>Original message preview</span>
    </aside>
  );
}

function ForwardActions() {
  const { actions, state } = useComposer();

  return (
    <div className="dialog-actions">
      <button className="secondary-button" type="button" onClick={() => window.alert('Link copied')}>
        Copy link
      </button>
      <button className="secondary-button" type="button" onClick={actions.reset}>
        Save draft
      </button>
      <button className="send-button" type="button" disabled={!state.body.trim()} onClick={actions.submit}>
        Forward
      </button>
    </div>
  );
}

export function ForwardMessageDialog() {
  return (
    <LocalComposerProvider
      label="forward private message"
      onSubmit={(state) => window.alert(`Forwarded with note: ${state.body}`)}
    >
      <div className="dialog-shell">
        <ForwardMessageComposer />
        <MessagePreview />
        <ForwardActions />
      </div>
    </LocalComposerProvider>
  );
}
