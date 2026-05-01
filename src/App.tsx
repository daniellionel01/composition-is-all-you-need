import { BooleanTrap } from './examples/BooleanTrap';
import { MonolithicComposerExample } from './examples/MonolithicComposer';
import { ChannelComposer } from './composers/ChannelComposer';
import { ThreadComposer } from './composers/ThreadComposer';
import { EditMessageComposer } from './composers/EditMessageComposer';
import { ForwardMessageDialog } from './composers/ForwardMessageDialog';

export function App() {
  return (
    <main className="page">
      <nav className="topbar" aria-label="Page sections">
        <a className="brand" href="#top" aria-label="Composition Is All You Need home">
          Composition is all you need
        </a>
        <div className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#pattern">Pattern</a>
          <a href="#demos">Examples</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">React Universe 2025, reconstructed</p>
          <h1>Render the tree you mean.</h1>
          <p className="lede">
            A small React demo from Fernando Rojo's talk. The composer variants stay readable because each one owns its
            tree instead of feeding another mode flag into the same component.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-button" href="#demos">Open the examples</a>
            <a className="text-link" href="https://www.youtube.com/watch?v=4KvbVq3Eg5w" target="_blank" rel="noreferrer">
              Watch the original talk
            </a>
            <a className="text-link" href="#problem">Start with the failure mode</a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Before and after code comparison">
          <div className="split-code">
            <div className="code-sample code-sample--bad">
              <div className="sample-label">Flag-driven</div>
              <pre>{`<Composer
  isThread
  isEditingMessage={false}
  isForwardingMessage={false}
  renderSubmit={maybeCustomSubmit}
/>`}</pre>
            </div>
            <div className="code-sample code-sample--good">
              <div className="sample-label">Tree-driven</div>
              <pre>{`<ThreadComposerProvider>
  <Composer.Dropzone />
  <Composer.Frame>
    <Composer.Input />
    <Composer.Footer />
  </Composer.Frame>
</ThreadComposerProvider>`}</pre>
            </div>
          </div>
        </aside>
      </section>

      <section className="metric-rail" aria-label="Demo summary">
        <div>
          <span className="metric-value">4</span>
          <span className="metric-label">composer trees</span>
        </div>
        <div>
          <span className="metric-value">0</span>
          <span className="metric-label">editing mode flags</span>
        </div>
        <div>
          <span className="metric-value">1</span>
          <span className="metric-label">primitive set</span>
        </div>
      </section>

      <section className="section-heading" id="problem">
        <p className="eyebrow">Problem</p>
        <h2>The mess starts when props become product logic.</h2>
        <p>
          The parent already knows the shape it wants. A monolith makes the child rediscover that shape through flags,
          branches, and escape hatches.
        </p>
      </section>

      <section className="grid two problem-grid">
        <BooleanTrap />
        <MonolithicComposerExample />
      </section>

      <section className="pattern-panel" id="pattern">
        <div className="pattern-copy">
          <p className="eyebrow">Pattern</p>
          <h2>Keep the primitives. Change the tree.</h2>
          <p>
            The provider owns the state model. The frame, input, footer, dropzone, and actions stay small. Each use case
            chooses the pieces it needs and leaves the rest out.
          </p>
        </div>
        <div className="pattern-steps" aria-label="Composition pattern steps">
          <div>
            <span>01</span>
            <strong>Pick the state boundary</strong>
            <p>Global channel drafts and local modal drafts share the same context shape.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Assemble the UI</strong>
            <p>Thread, edit, channel, and forward flows render different children.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Delete the flags</strong>
            <p>No hidden branch decides whether the dropzone or submit row should exist.</p>
          </div>
        </div>
      </section>

      <section className="section-heading demos-heading" id="demos">
        <p className="eyebrow">Examples</p>
        <h2>The variants are visible in the markup.</h2>
        <p>
          Editing has no dropzone. Forwarding lifts actions outside the frame. Threads get one extra checkbox instead of
          a new mode flag.
        </p>
      </section>

      <section className="demo-grid">
        <article className="demo-card demo-card--channel">
          <div className="demo-card-header">
            <span className="demo-index">01</span>
            <div>
              <p className="card-kicker">Synced draft</p>
              <h3>Channel composer</h3>
            </div>
          </div>
          <ChannelComposer channelId="react-universe" />
        </article>

        <article className="demo-card demo-card--thread">
          <div className="demo-card-header">
            <span className="demo-index">02</span>
            <div>
              <p className="card-kicker">Thread branch</p>
              <h3>Thread composer</h3>
            </div>
          </div>
          <ThreadComposer channelId="react-universe" threadId="talk-prep" />
        </article>

        <article className="demo-card demo-card--edit">
          <div className="demo-card-header">
            <span className="demo-index">03</span>
            <div>
              <p className="card-kicker">Local edit state</p>
              <h3>Edit message</h3>
            </div>
          </div>
          <EditMessageComposer
            messageId="m_123"
            initialBody="I should prep my React Universe talk"
            onCancel={() => window.alert('Cancelled edit')}
          />
        </article>

        <article className="demo-card demo-card--forward">
          <div className="demo-card-header">
            <span className="demo-index">04</span>
            <div>
              <p className="card-kicker">Lifted provider</p>
              <h3>Forward message</h3>
            </div>
          </div>
          <ForwardMessageDialog />
        </article>
      </section>

      <footer className="page-footer">
        <p>
          Built from the talk notes in this repo. Watch Fernando Rojo's original React Universe talk,{' '}
          <a href="https://www.youtube.com/watch?v=4KvbVq3Eg5w" target="_blank" rel="noreferrer">
            "Composition Is All You Need"
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
