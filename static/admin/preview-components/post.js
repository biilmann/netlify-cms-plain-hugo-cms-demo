import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <article class="flex-l flex-wrap justify-between mw8 center ph3 ph0-l">
        <header class="mt4 w-100">
          <p class="f6 b helvetica tracked">Posts</p>
          <h1 class="f1 athelas mb1">
            ${entry.getIn(["data", "title"], null)}
          </h1>
          <time class="f6 mv4 dib tracked"
            >${entry.getIn(["data", "date"], new Date()).toString()}</time
          >
        </header>
        <main
          class="nested-copy-line-height lh-copy serif f4 nested-links nested-img mid-gray pr4-l w-two-thirds-l"
        >
          ${this.props.widgetFor("body")}
        </main>
      </article>
    `;
  }
});

export default Post;
