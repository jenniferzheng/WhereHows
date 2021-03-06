import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser/containers/browser-rail', 'Integration | Component | browser/containers/browser rail', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{browser/containers/browser-rail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#browser/containers/browser-rail}}
      template block text
    {{/browser/containers/browser-rail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
