import { Component } from '@angular/core';

@Component({
  selector: 'app-basictree',
  template: `
    {{nodes | json}}
    <tree-root [focused]="true" [nodes]="nodes" [options]="options"></tree-root>
    <br />
    <p>Keys:</p>
    down | up | left | right | space | enter
  `,
  styles: []
})
export class BasicTreeComponent {
  nodes = [
    {
      name: 'root1',
      hasChildren: true,
      children: [{ name: 'child1' }, { name: 'child2' }]
    },
    {
      name: 'root2',
      hasChildren: true,
      children: [
        { name: 'child2.1' },
        {
          name: 'child2.2',
          children: [{ name: 'grandchild2.2.1' }]
        }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];
  options = {};
}
