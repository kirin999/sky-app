import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";

interface FlipEvent {
  data: number;
}

export default function TrainComponent() {
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
            src={`${process.env.PUBLIC_URL}/images/train/kagayaki.jpg`}
            width={500}
            height={300}
            alt="Page 1"
          />
          <h2>- かがやき -</h2>
          <p>
            かがやきは、東京から金沢へ行く新幹線だよ。とっても速くて、
            北陸地方への旅行があっという間に楽しめるんだ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/asama.jpg`}
            width={500}
            height={300}
            alt="Page 2"
          />
          <h2>- あさま -</h2>
          <p>
            あさまは、東京から長野へ向かう新幹線。きれいな山々を見ながら、
            ゆったりとした旅ができるよ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/hayabusa.jpg`}
            width={500}
            height={300}
            alt="Page 3"
          />
          <h2>- はやぶさ -</h2>
          <p>
            はやぶさは、東京から北海道へ行く新幹線。スピードが速くて、
            長い旅も楽しくなるよ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/komati.jpg`}
            width={500}
            height={300}
            alt="Page 4"
          />
          <h2>- こまち -</h2>
          <p>
            こまちは、東京から秋田へ行く新幹線。田んぼや山を見ながら、
            のんびり旅を楽しもう。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/nozomi.jpg`}
            width={500}
            height={300}
            alt="Page 5"
          />
          <h2>- のぞみ -</h2>
          <p>
            のぞみは、東京から博多まで行く日本一速い新幹線。遠くても、
            すぐに到着するからびっくりだよ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/yamanote.jpg`}
            width={500}
            height={300}
            alt="Page 6"
          />
          <h2>- 山手線 -</h2>
          <p>
            山手線は、東京の中心をぐるぐる回る電車。たくさんの観光地に
            行けるから、東京探検にぴったりだね。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/keihintouhoku.jpg`}
            width={500}
            height={300}
            alt="Page 7"
          />
          <h2>- 京浜東北線 -</h2>
          <p>
            京浜東北線は、東京と横浜をつなぐ電車。たくさんの駅に
            止まるから、学校や会社へ行くのに便利だよ。
          </p>
        </div>
        <div className="demoPage">
          <img
            src={`${process.env.PUBLIC_URL}/images/train/skyraina.jpg`}
            width={500}
            height={300}
            alt="Page 8"
          />
          <h2>- スカイライナー -</h2>
          <p>
            スカイライナーは、成田空港と東京を結ぶ速い電車。
            飛行機に乗る人たちにとっても便利なんだよ。
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
