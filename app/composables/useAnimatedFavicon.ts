export const useAnimatedFavicon = () => {
  if (!import.meta.client) return

  const frames = [
    // Frame 0: Hand resting at side
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <rect x="5" y="1" width="6" height="1" fill="#3a2a1a"/>
      <rect x="4" y="2" width="8" height="1" fill="#3a2a1a"/>
      <rect x="3" y="3" width="10" height="2" fill="#3a2a1a"/>
      <rect x="4" y="5" width="8" height="5" fill="#f5d6b8"/>
      <rect x="3" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="12" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="5" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="9" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="7" y="8" width="2" height="1" fill="#b8653a"/>
      <rect x="6" y="10" width="4" height="1" fill="#f5d6b8"/>
      <rect x="3" y="11" width="10" height="4" fill="#5e7d4e"/>
      <rect x="7" y="11" width="2" height="4" fill="#4e6e3e"/>
      <rect x="1" y="12" width="2" height="3" fill="#f5d6b8"/>
      <rect x="13" y="12" width="2" height="3" fill="#f5d6b8"/>
    </svg>`,

    // Frame 1: Hand raised slightly (mid-wave)
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <rect x="5" y="1" width="6" height="1" fill="#3a2a1a"/>
      <rect x="4" y="2" width="8" height="1" fill="#3a2a1a"/>
      <rect x="3" y="3" width="10" height="2" fill="#3a2a1a"/>
      <rect x="4" y="5" width="8" height="5" fill="#f5d6b8"/>
      <rect x="3" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="12" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="5" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="9" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="7" y="8" width="2" height="1" fill="#b8653a"/>
      <rect x="6" y="10" width="4" height="1" fill="#f5d6b8"/>
      <rect x="3" y="11" width="10" height="4" fill="#5e7d4e"/>
      <rect x="7" y="11" width="2" height="4" fill="#4e6e3e"/>
      <rect x="1" y="12" width="2" height="3" fill="#f5d6b8"/>
      <rect x="12" y="9" width="2" height="2" fill="#5e7d4e"/>
      <rect x="12" y="5" width="3" height="4" fill="#f5d6b8"/>
    </svg>`,

    // Frame 2: Hand waving high (tilted out)
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <rect x="5" y="1" width="6" height="1" fill="#3a2a1a"/>
      <rect x="4" y="2" width="8" height="1" fill="#3a2a1a"/>
      <rect x="3" y="3" width="10" height="2" fill="#3a2a1a"/>
      <rect x="4" y="5" width="8" height="5" fill="#f5d6b8"/>
      <rect x="3" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="12" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="5" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="9" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="7" y="8" width="2" height="1" fill="#b8653a"/>
      <rect x="6" y="10" width="4" height="1" fill="#f5d6b8"/>
      <rect x="3" y="11" width="10" height="4" fill="#5e7d4e"/>
      <rect x="7" y="11" width="2" height="4" fill="#4e6e3e"/>
      <rect x="1" y="12" width="2" height="3" fill="#f5d6b8"/>
      <rect x="12" y="9" width="2" height="2" fill="#5e7d4e"/>
      <rect x="13" y="4" width="3" height="4" fill="#f5d6b8"/>
    </svg>`,

    // Frame 3: Hand waving inward
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <rect x="5" y="1" width="6" height="1" fill="#3a2a1a"/>
      <rect x="4" y="2" width="8" height="1" fill="#3a2a1a"/>
      <rect x="3" y="3" width="10" height="2" fill="#3a2a1a"/>
      <rect x="4" y="5" width="8" height="5" fill="#f5d6b8"/>
      <rect x="3" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="12" y="5" width="1" height="2" fill="#3a2a1a"/>
      <rect x="5" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="9" y="6" width="2" height="2" fill="#3a2a1a"/>
      <rect x="7" y="8" width="2" height="1" fill="#b8653a"/>
      <rect x="6" y="10" width="4" height="1" fill="#f5d6b8"/>
      <rect x="3" y="11" width="10" height="4" fill="#5e7d4e"/>
      <rect x="7" y="11" width="2" height="4" fill="#4e6e3e"/>
      <rect x="1" y="12" width="2" height="3" fill="#f5d6b8"/>
      <rect x="12" y="9" width="2" height="2" fill="#5e7d4e"/>
      <rect x="11" y="5" width="3" height="4" fill="#f5d6b8"/>
    </svg>`,
  ]

  let currentFrame = 0
  let intervalId: any = null

  const getFaviconLink = (): HTMLLinkElement => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.type = 'image/svg+xml'
    return link
  }

  const updateFavicon = (index: number) => {
    const link = getFaviconLink()
    const svgData = `data:image/svg+xml;utf8,${encodeURIComponent(frames[index].trim())}`
    link.href = svgData
  }

  const startAnimation = () => {
    if (intervalId) return
    intervalId = setInterval(() => {
      currentFrame = (currentFrame + 1) % frames.length
      updateFavicon(currentFrame)
    }, 400)
  }

  const stopAnimation = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  const onVisibilityChange = () => {
    if (document.hidden) {
      stopAnimation()
    } else {
      startAnimation()
    }
  }

  onMounted(() => {
    updateFavicon(0)
    startAnimation()
    document.addEventListener('visibilitychange', onVisibilityChange)
  })

  onBeforeUnmount(() => {
    stopAnimation()
    document.removeEventListener('visibilitychange', onVisibilityChange)
  })
}
