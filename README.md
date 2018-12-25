# vuex-actions-states

Nuxt-module state manager for vuex actions.

Keeps track of your actions (dispatch methods):
- `initial` action has not yet been called.
- `pending` at least one action call not yet completed.
- `done` all action calls have been completed. 

Also works in conjunction with vue-devtools.

## Install

```html
yarn add vuex-actions-states
// or 
npm install vuex-actions-states
```

## Setup
In `nuxt.config.js`
```html
{
  ...otherImportantNuxtConfigStuff,
  modules: [
    [ 'vuex-actions-states']
  ]
}
```

## Usage
An `$actions` object is globally accessible via `this` in components or `$nuxt`.

#### `$actions.initial(actionName: String | String[])` 
`String`: returns true if action has not been called yet.  
`String[]`: returns true if at least one action has not been called yet.

#### `$actions.pending(actionName: String | String[])` 
`String`: returns true if action has not been completed yet.  
`String[]`: returns true if at least one action has not been completed yet.

#### `$actions.done(actionName: String | String[])` 
`String`: returns true if action has not been completed yet.  
`String[]`: returns true if at least one action has not been completed yet.

### `$actions.states`
Returns vuex-store state.<br>
Also accessed via `this.$store.actionsStates.state`


## Options

#### module `String: optional`
Defaults to `actionStates`.
Name for vuex store module. 

#### mutation `String: optional`
Defaults to `setActionType`.
Name for vuex store mutation.

(note: most use cases can ignore options)

