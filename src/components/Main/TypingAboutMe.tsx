import React, { FunctionComponent } from 'react'
import Typed from 'react-typed'

const TypingAboutMe: FunctionComponent = function () {


  return (
    <div>
        <span>I'm </span>
        <Typed
            strings={[
            'a SW engineer.',
            'a reviewer.',
            'gus.']}
            typeSpeed={50}
            backSpeed={70}
            loop
            />
    </div>
  )
}

export default TypingAboutMe