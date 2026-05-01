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
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>Composition lab</span>
        </a>
        <div className="nav-links">
          <a href="#problem">The trap</a>
          <a href="#pattern">The pattern</a>
          <a href="#demos">Demos</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">React Universe 2025, rebuilt in code</p>
          <h1>Stop teaching one component every job.</h1>
          <p className="lede">
            This demo rebuilds Fernando Rojo's composer examples as a small React app. The point is blunt: render the
            tree you mean. Don't pack one API with booleans and hope the branches stay readable.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-button" href="#demos">Try the composed examples</a>
            <a className="text-link" href="#problem">See the boolean trap</a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Before and after code comparison">
          <div className="panel-chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="split-code">
            <div className="code-sample code-sample--bad">
              <div className="sample-label">Before</div>
              <pre>{`<Composer
  isThread
  isEditingMessage={false}
  isForwardingMessage={false}
  renderSubmit={maybeCustomSubmit}
/>`}</pre>
            </div>
            <div className="code-sample code-sample--good">
              <div className="sample-label">After</div>
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
          <span className="metric-label">isEditingMessage props</span>
        </div>
        <div>
          <span className="metric-value">1</span>
          <span className="metric-label">shared primitive set</span>
        </div>
      </section>

      <section className="section-heading" id="problem">
        <p className="eyebrow">The trap</p>
        <h2>Boolean props feel harmless until the component has to remember everything.</h2>
        <p>
          The parent already knows the product shape. A monolith makes the child rediscover it with flags, branches, and
          escape hatches.
        </p>
      </section>

      <section className="grid two problem-grid">
        <BooleanTrap />
        <MonolithicComposerExample />
      </section>

      <section className="pattern-panel" id="pattern">
        <div className="pattern-copy">
          <p className="eyebrow">The pattern</p>
          <h2>Shared internals. Different trees.</h2>
          <p>
            The provider owns the state model. The frame, input, footer, dropzone, and action buttons stay small. Each
            use case chooses the pieces it needs and leaves the rest out.
          </p>
        </div>
        <div className="pattern-steps" aria-label="Composition pattern steps">
          <div>
            <span>01</span>
            <strong>Pick the state boundary</strong>
            <p>Global channel drafts and local modal drafts use the same context shape.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Assemble the tree</strong>
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
        <p className="eyebrow">Composed internals</p>
        <h2>The variants are visible in the markup.</h2>
        <p>
          These four examples share the same primitives, but the shape of each UI is honest. Editing has no dropzone.
          Forwarding lifts actions outside the frame. Threads get one extra checkbox instead of a new mode flag.
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
        <p>Built from the talk notes in this repo. The code is deliberately small so the composition boundary stays easy to see.</p>
      </footer>
    </main>
  );
}
