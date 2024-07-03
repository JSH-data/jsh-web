import React from 'react';
const Blog = React.lazy(
  () =>
    import("remote1/Blog") as Promise<any>,
);
export default function App() {
  return (
    <div>
      This is Host Container
      <div>This is Child <Blog></Blog></div>
    </div>
  )
}
