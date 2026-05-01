import { CommonActions } from '../composer/ComposerActions';
import { Composer } from '../composer/ComposerPrimitives';
import { ChannelComposerProvider } from './ComposerProviders';

export function ChannelComposer({ channelId }: { channelId: string }) {
  return (
    <ChannelComposerProvider channelId={channelId}>
      <Composer.Dropzone />
      <Composer.Frame>
        <Composer.Header eyebrow="Synced draft" title={`Message #${channelId}`} />
        <Composer.Input placeholder={`Message #${channelId}`} />
        <Composer.Footer>
          <Composer.FooterActions>
            <CommonActions />
          </Composer.FooterActions>
          <Composer.FooterSubmit>
            <Composer.SubmitButton>Send</Composer.SubmitButton>
          </Composer.FooterSubmit>
        </Composer.Footer>
      </Composer.Frame>
    </ChannelComposerProvider>
  );
}
