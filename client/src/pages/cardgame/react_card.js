/* eslint-disable react-hooks/exhaustive-deps */
/* global WebKitCSSMatrix */
// npm install eslint-plugin-react-hooks@next

const React = require('react')
const sleep = require('p-sleep')

const settings = {
  snapBackDuration: 300,
  maxTilt: 5,
  bouncePower: 0.2,
  swipeThreshold: 300 // px/s
}

const getElementSize = (element) => {
  const elementStyles = window.getComputedStyle(element)
  const widthString = elementStyles.getPropertyValue('width')
  const width = Number(widthString.split('px')[0])
  const heightString = elementStyles.getPropertyValue('height')
  const height = Number(heightString.split('px')[0])
  return { x: width, y: height }
}

const pythagoras = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(0, 2))  // Math.pow(y, 2)
}

const animateOut = async (element, speed) => {
  const startPos = getTranslate(element)
  const bodySize = getElementSize(document.body)
  const diagonal = pythagoras(bodySize.x, 0)  // bodySize.y

  const velocity = pythagoras(speed.x, 0)  // speed.y
  const time = diagonal / velocity
  const multiplier = diagonal / velocity

  const translateString = translationString(speed.x * multiplier + startPos.x, 0)  // -speed.y * multiplier + startPos.y
  // const rotateString = rotationString(getRotation(element))

  element.style.transition = 'ease-out ' + time + 's'
  element.style.transform = translateString  // + rotateString

  await sleep(time * 1000)
}

const animateBack = (element) => {
  element.style.transition = settings.snapBackDuration + 'ms'
  const startingPoint = getTranslate(element)
  const translation = translationString(startingPoint.x * -settings.bouncePower, 0)  // startingPoint.y * -settings.bouncePower
  // const rotation = rotationString(getRotation(element) * -settings.bouncePower)
  element.style.transform = translation  // + rotation

  setTimeout(() => {
    element.style.transform = 'none'
  }, settings.snapBackDuration * 0.75)

  setTimeout(() => {
    element.style.transition = '10ms'
  }, settings.snapBackDuration)
}

const getSwipeDirection = (speed) => {
  // if (Math.abs(speed.x) > Math.abs(speed.y)) {
  //   return (speed.x > 0) ? '좋아합니다' : '싫어합니다'
  // } else {
  //   return (speed.y > 0) ? 'up' : 'down'
  // }
  return (speed.x > 0) ? '좋아요👍' : '싫어요👎'
}


const calcSpeed = (oldLocation, newLocation) => {
  const dx = newLocation.x - oldLocation.x
  // const dy = oldLocation.y - newLocation.y
  const dt = (newLocation.time - oldLocation.time) / 1000
  return { x: dx / dt, y: 0 }  // dy/ dt
}

const translationString = (x, y) => {
  const translation = 'translate(' + x + 'px, ' + 0 + 'px)'  // y
  return translation
}

// const rotationString = (rot) => {
//   const rotation = 'rotate(' + rot + 'deg)'
//   return rotation
// }

const getTranslate = (element) => {
  const style = window.getComputedStyle(element)
  const matrix = new WebKitCSSMatrix(style.webkitTransform)
  const ans = { x: matrix.m41, y: 0 }  // y: matrix.m42 => y방향으로 가지 않게
  return ans
}

// const getRotation = (element) => {
//   const style = window.getComputedStyle(element)
//   const matrix = new WebKitCSSMatrix(style.webkitTransform)
//   const ans = -Math.asin(matrix.m21) / (2 * Math.PI) * 360
//   return ans
// }

const dragableTouchmove = (coordinates, element, offset, lastLocation) => {
  const pos = { x: coordinates.x + offset.x, y: 0 }  // coordinates.y + offset.y
  const newLocation = { x: pos.x, y: 0, time: new Date().getTime() } // y: pos.y => y방향으로 가지 않게
  const translation = translationString(pos.x, 0) // pos.y => y방향으로 가지 않게
  // const rotCalc = calcSpeed(lastLocation, newLocation).x / 1000
  // const rotation = rotationString(rotCalc * settings.maxTilt)
  element.style.transform = translation  //  + rotation  돌지 않게
  return newLocation
}

const touchCoordinatesFromEvent = (e) => {
  const touchLocation = e.targetTouches[0]
  // return { x: e.clientX, y: touchLocation.clientX }  // y 방향 안움직이게
  return { x: touchLocation.clientX, y: 0 }
}

const mouseCoordinatesFromEvent = (e) => {
  // return { x: e.clientX, y: e.clientY }  // y 방향 안움직이게
  return { x: e.clientX, y: 0 }
}


let swipeAlreadyReleased = false

const Reactcard = ({ flickOnSwipe = true, children, onSwipe, onCardLeftScreen, className }) => {
  const handleSwipeReleased = async (element, speed) => {
    if (swipeAlreadyReleased) { return }
    swipeAlreadyReleased = true
    if (Math.abs(speed.x) > settings.swipeThreshold | Math.abs(speed.y) > settings.swipeThreshold) { // Swipe recognized
      if (flickOnSwipe) {
        onSwipe(getSwipeDirection(speed))
        await animateOut(element, speed)
        element.style.display = 'none'
        onCardLeftScreen()
      } else {
        animateBack(element)
        onSwipe(getSwipeDirection(speed))
      }
    } else {
      animateBack(element)
    }
  }


  const handleSwipeStart = () => {
    swipeAlreadyReleased = false
  }

  const ref = React.useCallback((element) => {
    if (!element) { return } // necesarry?
    let offset = { x: null, y: null }
    let speed = { x: 0, y: 0 }
    let lastLocation = { x: 0, y: 0, time: new Date().getTime() }
    let mouseIsClicked = false

    element.addEventListener(('touchstart'), (ev) => {
      ev.preventDefault()
      handleSwipeStart()
      offset = { x: -touchCoordinatesFromEvent(ev).x, y: 0 }  // -touchCoordinatesFromEvent(ev).y => y 방향 안움직이게 모바일
    })

    element.addEventListener(('mousedown'), (ev) => {
      ev.preventDefault()
      mouseIsClicked = true
      handleSwipeStart()
      offset = { x: -mouseCoordinatesFromEvent(ev).x, y: 0 }  // -mouseCoordinatesFromEvent(ev).y => y 방향 안움직이게 컴퓨터
    })

    element.addEventListener(('touchmove'), (ev) => {
      ev.preventDefault()
      const newLocation = dragableTouchmove(touchCoordinatesFromEvent(ev), element, offset, lastLocation)
      speed = calcSpeed(lastLocation, newLocation)
      lastLocation = newLocation
    })

    element.addEventListener(('mousemove'), (ev) => {
      ev.preventDefault()
      if (mouseIsClicked) {
        const newLocation = dragableTouchmove(mouseCoordinatesFromEvent(ev), element, offset, lastLocation)
        speed = calcSpeed(lastLocation, newLocation)
        lastLocation = newLocation
      }
    })

    element.addEventListener(('touchend'), (ev) => {
      ev.preventDefault()
      handleSwipeReleased(element, speed)
    })

    element.addEventListener(('mouseup'), (ev) => {
      if (mouseIsClicked) {
        ev.preventDefault()
        mouseIsClicked = false
        handleSwipeReleased(element, speed)
      }
    })

    element.addEventListener(('mouseleave'), (ev) => {
      if (mouseIsClicked) {
        ev.preventDefault()
        mouseIsClicked = false
        handleSwipeReleased(element, speed)
      }
    })
  })

  return (
    React.createElement('div', { ref, className }, children)
  )
}
// module.exports = TinderCard
export default Reactcard
