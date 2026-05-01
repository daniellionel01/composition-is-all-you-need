# Transcript-derived implementation notes

Source transcript: `../Composition Is All You Need.txt`.

## Narrative arc

- A generic form starts clean, then grows boolean props for create/update/name-only variants.
- Slack's composer is used as the complex UI case study: channel messages, threads, DM threads, editing, forwarding, and different state lifetimes.
- The “typical approach” starts with a single `Composer` and adds props such as `isThread`, `isDmThread`, `isEditingMessage`, and later `isForwardingMessage`.
- Editing messages highlights the smell: the same boolean affects the dropzone, action list, submit UI, and drag/drop behavior.
- Arrays of action config objects become another abstraction trap; JSX is a better UI escape hatch.
- The proposed pattern is similar to Radix/compound components: `Composer.Provider`, `Frame`, `Header`, `Input`, `Footer`, `Dropzone`, and individual actions.
- Shared groups like `CommonActions` are allowed, but they are just composed JSX, not a closed abstraction with more booleans.
- Providers define the interface used by children; each use case owns the implementation:
  - Forwarding: local `useState`, ephemeral in a modal.
  - Channel/thread: synced/global draft state.
- Lift state by lifting the provider. Components outside the visual composer box can still access the same state/actions as long as they are under the provider.

## Repo mapping

| Talk concept | Repo file |
|---|---|
| Boolean prop trap | `src/examples/BooleanTrap.tsx` |
| Monolithic composer API | `src/examples/MonolithicComposer.tsx` |
| Shared composer internals | `src/composer/*` |
| Global/synced channel state | `src/state/syncedChannelStore.ts` |
| Channel composer | `src/composers/ChannelComposer.tsx` |
| Thread composer | `src/composers/ThreadComposer.tsx` |
| Edit message composer | `src/composers/EditMessageComposer.tsx` |
| Forward modal with lifted provider | `src/composers/ForwardMessageDialog.tsx` |

## Prompt to extend this repo with AI

> Add a new composer variant by composing existing primitives. Do not add boolean props to `Composer.Frame`, `Composer.Input`, or `Composer.Footer`. If the variant needs different state, implement a provider that conforms to `ComposerValue`. If the variant needs different UI, render a distinct JSX tree.
