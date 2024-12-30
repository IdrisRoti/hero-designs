import React, { MutableRefObject } from 'react'

const VideoPlayer = ({video, videoRef}: {video: string, videoRef: MutableRefObject<HTMLVideoElement | null>}) => {
  return (
    <video className="absolute inset-0" autoPlay muted ref={videoRef} src={video} />
  )
}

export default VideoPlayer