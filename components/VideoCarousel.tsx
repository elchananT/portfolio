"use client"

import { useEffect, useRef, useState } from "react"

interface VideoCarouselProps {
  videos: string[]
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const infiniteVideos = [...videos, ...videos, ...videos]
  const [activeIndex, setActiveIndex] = useState(videos.length) // Start at middle set
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const LOAD_RANGE = 2

  const shouldLoadVideo = (index: number) => {
    return Math.abs(index - activeIndex) <= LOAD_RANGE
  }

  const getPreloadStrategy = (index: number) => {
    if (index === activeIndex) return "auto"
    if (Math.abs(index - activeIndex) === 1) return "metadata"
    return "none"
  }

  // Handle video playback - only play the active video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch(() => {
            console.log("Autoplay prevented for video", index)
          })
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [activeIndex])

  // Scroll to center the active video
  useEffect(() => {
    if (containerRef.current && !isScrollingRef.current) {
      const activeElement = containerRef.current.children[activeIndex] as HTMLElement
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex < videos.length / 2) {
      // Near the start, jump to middle set
      setActiveIndex(activeIndex + videos.length)
    } else if (activeIndex >= videos.length * 2.5) {
      // Near the end, jump to middle set
      setActiveIndex(activeIndex - videos.length)
    }
  }, [activeIndex, videos.length])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      isScrollingRef.current = true

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Set new timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false

        // Find the video closest to center
        const containerRect = container.getBoundingClientRect()
        const containerCenter = containerRect.left + containerRect.width / 2

        let closestIndex = 0
        let closestDistance = Number.POSITIVE_INFINITY

        Array.from(container.children).forEach((child, index) => {
          const childRect = child.getBoundingClientRect()
          const childCenter = childRect.left + childRect.width / 2
          const distance = Math.abs(containerCenter - childCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        if (closestIndex !== activeIndex) {
          setActiveIndex(closestIndex)
        }
      }, 150)
    }

    container.addEventListener("scroll", handleScroll)
    return () => {
      container.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [activeIndex])

  const handleVideoClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  }

  if (!videos || videos.length === 0) {
    return <div className="flex items-center justify-center h-96 text-muted-foreground">No videos available</div>
  }

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={containerRef}
        className="flex items-center gap-6 overflow-x-auto px-8 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {infiniteVideos.map((videoUrl, index) => {
          const isActive = index === activeIndex
          const shouldLoad = shouldLoadVideo(index)

          return (
            <div
              key={index}
              className={`
                flex-shrink-0 snap-center transition-all duration-500 ease-out cursor-pointer
                ${isActive ? "scale-100" : "scale-75 opacity-60 hover:opacity-80"}
              `}
              onClick={() => handleVideoClick(index)}
              style={{
                width: isActive ? "640px" : "400px",
                maxWidth: isActive ? "80vw" : "50vw",
              }}
            >
              <div className="relative rounded-xl overflow-hidden bg-black">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el
                  }}
                  src={shouldLoad ? videoUrl : undefined}
                  loop
                  muted
                  playsInline
                  className="w-full h-auto aspect-video object-cover"
                  preload={getPreloadStrategy(index)}
                />

                {/* Overlay for non-active videos */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center"/>
                )}

                {isActive && (
                  <div className="absolute bottom-4 right-4">
                    <div className="text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
                      Now Playing
                    </div>
                  </div>
                )}
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}