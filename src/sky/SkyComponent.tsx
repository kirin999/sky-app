import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";

interface FlipEvent {
  data: number;
}

export default function SkyComponent() {
  const [currentPage, setCurrentPage] = useState(0);

  const onPage = (e: FlipEvent) => {
    setCurrentPage(e.data);
  };

  return (
    <>
      <HTMLFlipBook
        width={500}
        height={500}
        className="my-flip-book"
        style={{}}
        size="fixed"
        startPage={0}
        renderOnlyPageLengthChange={false}
        minWidth={510}
        maxWidth={510}
        minHeight={510}
        maxHeight={510}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        onFlip={onPage}
      >
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/sky-1.jpg`}
            width={500}
            height={300}
            alt="Page 1"
          />
          <h2>- 青空と白い雲 -</h2>
          <p>
            青い空にぽっかり浮かぶ白い雲を見ると、いいお天気のサインだよ。
            みんなも、気持ちよくお出かけしたくなるね。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/sky-3.jpg`}
            width={500}
            height={300}
            alt="Page 3"
          />
          <h2>- 夕焼けの空 -</h2>
          <p>
            夕方になると、空が赤く染まってくるよ。きれいな夕焼けを見てると、
            なんだかほっとするね。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/sky-2.jpg`}
            width={500}
            height={300}
            alt="Page 2"
          />
          <h2>- 積乱雲 -</h2>
          <p>
            夏になると、もくもく大きな雲が空に現れるよ。雷や大雨を降らせることも
            あるから、急な天気の変化に気をつけようね。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/kaminari.jpg`}
            width={500}
            height={300}
            alt="Page 4"
          />
          <h2>- 雷雲 -</h2>
          <p>
            雷雲は、真っ黒で大きな雲だよ。ゴロゴロと音をたてながら、雨を
            たくさん降らせることがあるんだ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/sky-4.jpg`}
            width={500}
            height={300}
            alt="Page 6"
          />
          <h2>- 流れる雲 -</h2>
          <p>
            ふわふわ流れる雲を見てると、時間がゆっくり過ぎていく感じがするね。
            のんびりとした気分になれるよ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/unkai.jpg`}
            width={500}
            height={300}
            alt="Page 6"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲がまるで海みたいに広がっているときがあるよ。上から見下ろすと、
            大きな白い海みたいで不思議だね。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/hosizora.jpg`}
            width={500}
            height={300}
            alt="Page 7"
          />
          <h2>- 星空 -</h2>
          <p>
            夜の空には、たくさんの星が輝いているよ。星座を見つけたり、
            流れ星を探したりしてみよう。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/sky/niji.jpg`}
            width={500}
            height={300}
            alt="Page 9"
          />
          <h2>- 虹 -</h2>
          <p>
            雨がやんだあとに見える虹は、とてもきれいな七色の橋みたいだね。
            みんなで見つけたらラッキー！
          </p>
        </div>
      </HTMLFlipBook>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>
          {currentPage + 1} - {currentPage + 2}
        </p>
      </div>
    </>
  );
}
