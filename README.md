# docfx.samples.viewtransition
This repository is intended to test [View Transitions](https://github.com/WICG/view-transitions/tree/main) feature for docfx site.

- View Transitions enabled site:
  - https://filzrev.github.io/docfx.samples.viewtransition
- Original site:
  - https://dotnet.github.io/docfx

`MPA (Multi-page application)` is enabled by adding following `<meta>` tag to template layout.

> `<meta name="view-transition" content="same-origin">`

> [!NOTE]
> To use MPA (Multi-page application) view transitions.
> Currently it requires to enable `viewTransition API for navigations` feature on Chrome.
> And need to restart browser.
>> chrome://flags/#view-transition-on-navigation




