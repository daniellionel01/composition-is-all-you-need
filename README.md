# Composition Is All You Need

A small React app based on Fernando Rojo's React Universe 2025 talk, "Composition Is All You Need."

Original talk: https://www.youtube.com/watch?v=4KvbVq3Eg5w

The repo focuses on one part of the talk: composer UIs get easier to reason about when each variant renders its own tree. Instead of passing flags like `isThread`, `isEditingMessage`, or `renderSubmit` into one oversized component, the examples assemble small primitives in different ways.

## What's in here

- `src/examples/`: the flag-heavy API shape this is trying to avoid
- `src/composer/`: shared primitives and context
- `src/composers/`: the composed versions
  - `ChannelComposer`: synced channel draft state
  - `ThreadComposer`: channel composer plus `AlsoSendToChannel`
  - `EditMessageComposer`: no dropzone, custom footer buttons
  - `ForwardMessageDialog`: local state shared by the composer and buttons outside the frame

## Run it locally

```bash
npm install
npm run dev
```

## The shape of the code

A channel composer is just the pieces it needs:

```tsx
<ChannelComposerProvider channelId="react-universe">
  <Composer.Dropzone />
  <Composer.Frame>
    <Composer.Header />
    <Composer.Input />
    <Composer.Footer>
      <Composer.FooterActions>
        <CommonActions />
      </Composer.FooterActions>
      <Composer.FooterSubmit>
        <Composer.SubmitButton />
      </Composer.FooterSubmit>
    </Composer.Footer>
  </Composer.Frame>
</ChannelComposerProvider>
```

The edit version does not pass `isEditingMessage` down the tree. It renders a smaller tree:

```tsx
<LocalComposerProvider supportsAttachments={false}>
  <Composer.Frame>
    <Composer.Header title="Edit message" />
    <Composer.Input />
    <Composer.Footer>
      <Composer.FooterActions>
        <TextFormat />
        <Emoji />
      </Composer.FooterActions>
      <Composer.FooterSubmit>
        <button>Cancel</button>
        <Composer.SubmitButton>Save</Composer.SubmitButton>
      </Composer.FooterSubmit>
    </Composer.Footer>
  </Composer.Frame>
</LocalComposerProvider>
```

The forward-message example lifts the provider above both the composer frame and the external action row. That lets `ForwardActions` call `actions.submit()` without pushing state through effects or callback props.
