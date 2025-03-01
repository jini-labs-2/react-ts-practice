import React, { useState, useTransition } from 'react'
import AboutTab from '../../components/tabs/AboutTab';
import PostsTab from '../../components/tabs/PostsTab';
import ContactTab from '../../components/tabs/ContactTab';
import TabButton from '../../components/TabButton';

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  const selectTab = (nextTab: string) => {
    startTransition(() => {
      setTab(nextTab);
    })
  }

  return (
    <>
      <div style={{display: "flex", gap: "8px", margin: "8px 0"}}>
        <TabButton
          isActive={tab === 'about'}
          onClick={() => selectTab('about')}
        >About</TabButton>
        <TabButton
          isActive={tab === 'posts'}
          onClick={() => selectTab('posts')}
        >posts (slow)</TabButton>
        <TabButton
          isActive={tab === 'contact'}
          onClick={() => selectTab('contact')}
        >Contact</TabButton>
      </div>
      <hr style={{margin: "8px 0"}}/>
      {isPending && <div>Loading...</div>}  {/* ローディング表示を追加 */}
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  )
}

export default UseTransition
