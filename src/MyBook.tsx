import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";

interface FlipEvent {
  data: number;
}

export default function MyBook() {
  const [currentPage, setCurrentPage] = useState(0);

  // ページがめくられたときのイベントハンドラ
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
            src="../../images/sky-1.jpg"
            width={500}
            height={300}
            alt="Page 1"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-2.jpg"
            width={500}
            height={300}
            alt="Page 2"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-3.jpg"
            width={500}
            height={300}
            alt="Page 3"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-4.jpg"
            width={500}
            height={300}
            alt="Page 4"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-5.jpg"
            width={500}
            height={300}
            alt="Page 5"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-1.jpg"
            width={500}
            height={300}
            alt="Page 1"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-2.jpg"
            width={500}
            height={300}
            alt="Page 2"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-3.jpg"
            width={500}
            height={300}
            alt="Page 3"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-4.jpg"
            width={500}
            height={300}
            alt="Page 4"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
          </p>
        </div>
        <div className="demoPage">
          <img
            src="../../images/sky-5.jpg"
            width={500}
            height={300}
            alt="Page 5"
          />
          <h2>- 雲海 -</h2>
          <p>
            雲を上から見下ろしたときに、海のようにほぼ一面に広がって見える雲のこと。
            眼下一面に広がる雲が大海原のように見えるため、「雲の海」すなわち「雲海」と呼ばれる。
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
