import React from 'react'
import Box_one from './Box_one'
import Box_three from './Box_three'
import Box_two from './Box_two'

export default function Boxes() {
  return (
    <div className='py-10 px-2 max-w-full w-11/12 mx-auto justify-center'>
        <Box_one />
        <Box_two />
        <Box_three />
    </div>
  )
}
