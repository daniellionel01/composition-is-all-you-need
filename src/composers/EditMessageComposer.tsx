import { Emoji, TextFormat } from '../composer/ComposerActions';
import { Composer } from '../composer/ComposerPrimitives';
import { LocalComposerProvider } from './ComposerProviders';

export function EditMessageComposer({
  messageId,
  initialBody,
  onCancel,
}: {
  messageId: string;
  initialBody: string;
  onCancel: () => void;
}) {
  return (
    <LocalComposerProvider
      label={`edit message ${messageId}`}
      supportsAttachments={false}
      initialState={{ body: initialBody, attachments: [], formattingOpen: false }}
      onSubmit={(state) => window.alert(`Saved ${messageId}: ${state.body}`)}
    >
      {/* No <Composer.Dropzone /> here: editing does not support new attachments. */}
      <Composer.Frame>
        <Composer.Header eyebrow="Local edit state" title="Edit message" />
        <Composer.Input placeholder="Edit message" />
        <Composer.Footer>
          <Composer.FooterActions>
            <TextFormat />
            <Emoji />
          </Composer.FooterActions>
          <Composer.FooterSubmit>
            <button className="secondary-button" type="button" onClick={onCancel}>
              Cancel
            </button>
            <Composer.SubmitButton>Save</Composer.SubmitButton>
          </Composer.FooterSubmit>
        </Composer.Footer>
      </Composer.Frame>
    </LocalComposerProvider>
  );
}
