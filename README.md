# Composition Is All You Need — practical React examples

This repo reconstructs the code ideas from Fernando Rojo's React Universe 2025 talk **“Composition Is All You Need”** using the local transcript/video files.

The talk contrasts two approaches:

1. **Boolean-prop monoliths**: one component tries to handle every product variant with props like `isThread`, `isEditingMessage`, `isForwardingMessage`, `renderSubmit`, etc.
2. **Composed primitives**: shared internals (`Provider`, `Frame`, `Input`, `Footer`, `Dropzone`, action buttons) are assembled into distinct component trees per use case.

## What is included

- `docs/slides/` — 62 extracted screenshots from the MP4, named by timestamp/topic.
- `docs/contact-sheets/` — quick review sheets for the selected screenshots.
- `docs/slide-index.md` — timestamped screenshot index.
- `src/examples/` — the anti-pattern examples from the opening of the talk.
- `src/composer/` — reusable composer primitives and context.
- `src/composers/` — practical implementations:
  - `ChannelComposer` — synced/global draft state.
  - `ThreadComposer` — same primitives plus `AlsoSendToChannel`.
  - `EditMessageComposer` — no dropzone; custom footer buttons.
  - `ForwardMessageDialog` — local/ephemeral state lifted above the composer frame so buttons outside the box can use the same actions.

## Run it

```bash
npm install
npm run dev
```

## Key lesson mapped to code

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

The edit variant does **not** pass `isEditingMessage` down the tree. It simply renders a different tree:

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

The forward-message example demonstrates the talk's state-management point: the provider is lifted above both the composer frame and the external action row, so `ForwardActions` can call `actions.submit()` without pushing state up through effects or callback props.

## Screenshot extraction

The extracted images were generated from `../Composition_Is_All_You_Need.mp4` with FFmpeg. The selected timestamps live in `scripts/extract-screenshots.py` so the set can be regenerated or adjusted.

```bash
python3 scripts/extract-screenshots.py ../Composition_Is_All_You_Need.mp4 docs/slides
```

> Note: Screenshots are included for study/reference from the local video; verify licensing before redistributing them publicly.
