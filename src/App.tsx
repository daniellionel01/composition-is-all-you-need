import { BooleanTrap } from './examples/BooleanTrap';
import { MonolithicComposerExample } from './examples/MonolithicComposer';
import { ChannelComposer } from './composers/ChannelComposer';
import { ThreadComposer } from './composers/ThreadComposer';
import { EditMessageComposer } from './composers/EditMessageComposer';
import { ForwardMessageDialog } from './composers/ForwardMessageDialog';

export function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">React Universe 2025 talk reconstruction</p>
        <h1>Composition Is All You Need</h1>
        <p>
          Practical React examples based on the transcript and extracted screenshots. The examples model the talk's
          core idea: render different component trees instead of growing one component with boolean props.
        </p>
        <div className="hero-links">
          <a href="/docs/slides/manifest.json">Screenshot manifest</a>
          <a href="/docs/contact-sheets/selected_01.jpg">Contact sheet</a>
        </div>
      </section>

      <section className="grid two">
        <BooleanTrap />
        <MonolithicComposerExample />
      </section>

      <section className="section-heading">
        <p className="eyebrow">Composed internals</p>
        <h2>Same primitives, distinct trees</h2>
        <p>
          The root provider owns the state implementation. The frame, input, footer, dropzone, and action buttons are
          reusable primitives. Each product use case chooses what to render.
        </p>
      </section>

      <section className="demo-grid">
        <article>
          <h3>Channel composer</h3>
          <ChannelComposer channelId="react-universe" />
        </article>
        <article>
          <h3>Thread composer</h3>
          <ThreadComposer channelId="react-universe" threadId="talk-prep" />
        </article>
        <article>
          <h3>Edit message composer</h3>
          <EditMessageComposer
            messageId="m_123"
            initialBody="I should prep my React Universe talk"
            onCancel={() => window.alert('Cancelled edit')}
          />
        </article>
        <article>
          <h3>Forward message dialog</h3>
          <ForwardMessageDialog />
        </article>
      </section>
    </main>
  );
}
