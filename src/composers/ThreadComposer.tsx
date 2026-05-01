import { CommonActions } from '../composer/ComposerActions';
import { Composer, useComposer } from '../composer/ComposerPrimitives';
import { ThreadComposerProvider } from './ComposerProviders';

function AlsoSendToChannel({ channelId }: { channelId: string }) {
  const { state, actions } = useComposer();

  return (
    <label className="also-send">
      <input
        type="checkbox"
        checked={Boolean(state.alsoSendToChannel)}
        onChange={(event) => actions.update({ alsoSendToChannel: event.target.checked })}
      />
      Also send to #{channelId}
    </label>
  );
}

export function ThreadComposer({ channelId, threadId }: { channelId: string; threadId: string }) {
  return (
    <ThreadComposerProvider channelId={channelId} threadId={threadId}>
      <Composer.Dropzone />
      <Composer.Frame>
        <Composer.Header eyebrow="Synced thread draft" title="Reply in thread" />
        <Composer.Input placeholder="Reply in thread" />
        <AlsoSendToChannel channelId={channelId} />
        <Composer.Footer>
          <Composer.FooterActions>
            <CommonActions />
          </Composer.FooterActions>
          <Composer.FooterSubmit>
            <Composer.SubmitButton>Reply</Composer.SubmitButton>
          </Composer.FooterSubmit>
        </Composer.Footer>
      </Composer.Frame>
    </ThreadComposerProvider>
  );
}
