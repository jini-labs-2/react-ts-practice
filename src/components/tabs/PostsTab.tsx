import React, { memo } from 'react'

const PostsTab = memo(function PostsTab() {
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />')

  const items = [];
  for (let i=0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />)
  }
  return (
    <ul className='items'>
      {items}
    </ul>
  )
})

function SlowPost({ index }: {index: number}) {
  const startTime = performance.now();
  while ((performance.now() - startTime) < 1);

  return (
    <li className='item'>
      Post #{index + 1}
    </li>
  )
}

export default PostsTab
