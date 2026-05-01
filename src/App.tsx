import { BooleanTrap } from './examples/BooleanTrap';
import { MonolithicComposerExample } from './examples/MonolithicComposer';
import { ChannelComposer } from './composers/ChannelComposer';
import { ThreadComposer } from './composers/ThreadComposer';
import { EditMessageComposer } from './composers/EditMessageComposer';
import { ForwardMessageDialog } from './composers/ForwardMessageDialog';

const channelCode = `<ChannelComposerProvider channelId={channelId}>
  <Composer.Dropzone />
  <Composer.Frame>
    <Composer.Header title={\`Message #\${channelId}\`} />
    <Composer.Input />
    <Composer.Footer>
      <CommonActions />
      <Composer.SubmitButton>Send</Composer.SubmitButton>
    </Composer.Footer>
  </Composer.Frame>
</ChannelComposerProvider>`;

const threadCode = `<ThreadComposerProvider channelId={channelId} threadId={threadId}>
  <Composer.Dropzone />
  <Composer.Frame>
    <Composer.Header title="Reply in thread" />
    <Composer.Input />
    <AlsoSendToChannel channelId={channelId} />
    <Composer.Footer>
      <CommonActions />
      <Composer.SubmitButton>Reply</Composer.SubmitButton>
    </Composer.Footer>
  </Composer.Frame>
</ThreadComposerProvider>`;

const editCode = `<LocalComposerProvider supportsAttachments={false}>
  <Composer.Frame>
    <Composer.Header title="Edit message" />
    <Composer.Input />
    <Composer.Footer>
      <TextFormat />
      <Emoji />
      <button>Cancel</button>
      <Composer.SubmitButton>Save</Composer.SubmitButton>
    </Composer.Footer>
  </Composer.Frame>
</LocalComposerProvider>`;

const forwardCode = `<LocalComposerProvider label="forward private message">
  <ForwardMessageComposer />
  <MessagePreview />
  <ForwardActions />
</LocalComposerProvider>`;

export function App() {
  return (
    <main className="page">
      <nav className="topbar" aria-label="Page sections">
        <a className="brand" href="#top" aria-label="Composition Is All You Need home">
          Composition is all you need
        </a>
        <div className="nav-links">
          <a href="#problem">Before</a>
          <a href="#pattern">Composition</a>
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

      <section className="section-heading" id="problem">
        <p className="eyebrow">Before</p>
        <h2>The API shape we are avoiding.</h2>
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
          <p className="eyebrow">Composition</p>
          <h2>The resulting code is the point.</h2>
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
        <h2>The result, next to the code that produced it.</h2>
        <p>
          The demo is only useful if the composition is visible. Each composer sits beside the JSX shape that makes it
          different.
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
          <div className="demo-card-body">
            <div className="demo-preview">
              <ChannelComposer channelId="react-universe" />
            </div>
            <div className="demo-code" aria-label="Channel composer composition code">
              <p>Composition code</p>
              <pre>{channelCode}</pre>
            </div>
          </div>
        </article>

        <article className="demo-card demo-card--thread">
          <div className="demo-card-header">
            <span className="demo-index">02</span>
            <div>
              <p className="card-kicker">Thread branch</p>
              <h3>Thread composer</h3>
            </div>
          </div>
          <div className="demo-card-body">
            <div className="demo-preview">
              <ThreadComposer channelId="react-universe" threadId="talk-prep" />
            </div>
            <div className="demo-code" aria-label="Thread composer composition code">
              <p>Composition code</p>
              <pre>{threadCode}</pre>
            </div>
          </div>
        </article>

        <article className="demo-card demo-card--edit">
          <div className="demo-card-header">
            <span className="demo-index">03</span>
            <div>
              <p className="card-kicker">Local edit state</p>
              <h3>Edit message</h3>
            </div>
          </div>
          <div className="demo-card-body">
            <div className="demo-preview">
              <EditMessageComposer
                messageId="m_123"
                initialBody="I should prep my React Universe talk"
                onCancel={() => window.alert('Cancelled edit')}
              />
            </div>
            <div className="demo-code" aria-label="Edit message composer composition code">
              <p>Composition code</p>
              <pre>{editCode}</pre>
            </div>
          </div>
        </article>

        <article className="demo-card demo-card--forward">
          <div className="demo-card-header">
            <span className="demo-index">04</span>
            <div>
              <p className="card-kicker">Lifted provider</p>
              <h3>Forward message</h3>
            </div>
          </div>
          <div className="demo-card-body">
            <div className="demo-preview">
              <ForwardMessageDialog />
            </div>
            <div className="demo-code" aria-label="Forward message composition code">
              <p>Composition code</p>
              <pre>{forwardCode}</pre>
            </div>
          </div>
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
