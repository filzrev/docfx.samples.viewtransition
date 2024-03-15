export default {
  start: () => {
    document.addEventListener("pageswap", event => {
      if (!event.viewTransition) {
        return;
      }
      const from_path = new URL(event.activation.from).pathname;
      const to_path = new URL(event.activation.entry).pathname;

      // Skip transitions from landing home
      //if (from_path === "/landing" && to_path === "/home")
      //  event.viewTransition.skipTransition();

      // TODO: Save toc/nav contents & restore contents on load.
    });
  },
}