# gatsby-remark-bulma-adaptor

## 例

```
{
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-bulma-adaptor',
        options: {
          heading: (depth) => {
            if (depth === 1) {
              return `title is-${depth + 2} is-spaced`;
            }
            return `subtitle is-${depth + 2}`;
          },
        },
      },
    ],
  },
}
```
