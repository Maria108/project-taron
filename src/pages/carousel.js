import React, { useState } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"

import "../styles/carousel.css"

const items = [
  {
    id: 1,
    altText: "Live the life you love. Love the life you live.",
    caption: "Bob Marley",
  },
  {
    id: 2,
    altText: "Singing I forget my sorrows and displeasures as well.",
    caption: "Hector Lavoe",
  },
  {
    id: 3,
    altText: "This class is going to change your life.",
    caption: "Christopher Washburne",
  },
  {
    id: 4,
    altText: "Legalize it, and I will advertise it.",
    caption: "Peter Tosh",
  },
]

const Example = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        className={`custom-tag${item.id}`}
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="text-carousel"
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    )
  })

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default Example
