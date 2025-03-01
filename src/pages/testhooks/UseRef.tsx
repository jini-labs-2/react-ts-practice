import React, { useRef, useState } from 'react'

const UseRef = () => {
  let ref = useRef<number>(0);
  function handleTimesClick() {
    ref.current = ref.current + 1;
    // alert('Your clicked ' + ref.current + 'times!');
  }

  const inputFocusRef = useRef<HTMLInputElement>(null);
  function handleFocusClick() {
    inputFocusRef.current?.focus();
  }

  const scrollImageRef = useRef<HTMLUListElement>(null);
  function handleScrollImageClick(index: number) {
    const listNode = scrollImageRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[index];
    imgNode?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  function handleVideoPlay() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying)
    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }

  console.log('--rendering--');
  return (
    <div>
      <section>
        <p>Clickしてもレンダリングしない</p>
        <button onClick={handleTimesClick} style={{padding: "8px"}}>
          Click me!
        </button>
      </section>

      <hr style={{margin: "4px auto"}} />
      <section>
        <p>focusを設定</p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nobis.
        <span onClick={handleFocusClick} style={{color: "red", cursor: "pointer"}}>ここ</span>から入力ください
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, minus saepe iure dolore corrupti ea.k 
        </p>
        <input ref={inputFocusRef} type='text' placeholder={'focusがくる'}/>
      </section>

      <hr style={{margin: "4px auto"}} />
      <section>
        <div>
          <p>Image Scroll
            りレンダーリングを防いでスクロールできる
          </p>
          <nav>
            <button onClick={() => handleScrollImageClick(0)} style={{padding:"8px"}}>Neo</button>
            <button onClick={() => handleScrollImageClick(1)} style={{padding:"8px"}}>Millie</button>
            <button onClick={() => handleScrollImageClick(2)} style={{padding:"8px"}}>Bella</button>
          </nav>
          <div>
            <ul ref={scrollImageRef} style={{display: "flex", width: "400px", overflow: "hidden"}}>
              <li> <img src='https://placecats.com/neo/300/200' alt='Neo'/> </li>
              <li> <img src='https://placecats.com/millie/300/200' alt='Millie'/> </li>
              <li> <img src='https://placecats.com/bella/300/200' alt='Bella'/> </li>
            </ul>
          </div>
        </div>
      </section>

      <hr style={{margin: "4px auto"}} />
      <section>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p>Image Scroll
            りレンダーリングを防いで Videoを一時停止、再プレイする
          </p>
          <button
            onClick={handleVideoPlay} 
            style={{padding: '8px', width: '100px'}}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <video
            width="250"
            ref={videoRef}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
              type='video/mp4'
            ></source>
          </video>
        </div>
      </section>
    </div>
  )
}

export default UseRef
