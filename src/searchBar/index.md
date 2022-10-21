## SearchBar

Demo:

```tsx
import React from 'react';
import { SearchBar } from 'chemical_components';

export default () => (
  <SearchBar
    size="large"
    onSearch={(x, y) => console.log(x, y)}
    selectOptions={[
      { label: '1', value: '1' },
      { label: '2', value: '2' },
    ]}
    autoCompleteOptions={[
      {
        title: 'liam',
        options: [
          {
            label: '1',
            value: '1',
          },
          {
            label: '2',
            value: '2',
          },
        ],
      },
      {
        title: 'evan',
        options: [
          {
            label: '3',
            value: '3',
          },
          {
            label: '4',
            value: '4',
          },
        ],
      },
    ]}
  />
);
```
<API></API>

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
