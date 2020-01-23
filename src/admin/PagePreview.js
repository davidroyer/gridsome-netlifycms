export default {
  props: ['title', 'content'],
  data: () => ({
    message: "Hello, From Preview Component!"
  }),

  render() {
  return <div><h1>{this.title}</h1>{this.content}</div>;
  }
};
