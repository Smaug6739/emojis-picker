# Emojis picker

This module is an emojis picker for html websites.

## Usage

### Import module

#### Style (css)

```html
<link rel="stylesheet" href="./path/to/style.css" />
```

#### Javascript

```html
<script src="./path/to/emojis-picker.js"></script>
```

### Initialisation

Create a new instance of Emojis class :

Options :

- button (string) the id of button for deploy emojis list.
- output (string) the id of div container for the emojis list.
- text (string) the if of input/textarea for display emojis.
- path (string) the path to json emojis.

```js
const picker = new EmojisPicker({
  button: "picker",
  output: "deploy",
  text: "input",
  path: "../dist/assets/emojis.json",
});
```

### deployMenu()

Deploy the menu of emojis

Params :

- None

Return : undefined

```js
picker.deployMenu();
```

### closeMenu()

Close the menu of emojis

Params :

- None

Return : undefined

```js
picker.closeMenu();
```

### Example

```js
picker.deployMenu();
setTimeout(() => {
  picker.closeMenu();
}, 5000);
```
