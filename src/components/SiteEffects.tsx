import { useEffect, useRef } from 'react'

const revealSelector = [
  '.hero-copy > *',
  '.hero-visual',
  '.section-heading',
  '.service-card',
  '.design-preview',
  '.design-grid button',
  '.project-list button',
  '.project-preview',
  '.about-section .stat-grid article',
  '.skill-card',
  '.timeline article',
  '.education-panel',
  '.testimonials article',
  '.contact > *',
  '.site-footer',
  '.parallax-media',
].join(',')

const tiltSelector = [
  '.hero-visual',
  '.service-card',
  '.design-preview',
  '.design-grid button',
  '.project-preview',
  '.stat-grid article',
  '.skill-card',
  '.timeline article',
  '.education-panel',
].join(',')

export function SiteEffects() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorHaloRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let parallaxFrame = 0

    const setScrollProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      root.style.setProperty('--scroll-progress', `${Math.min(1, Math.max(0, progress))}`)
      root.style.setProperty('--scroll-y', `${window.scrollY}`)
    }

    setScrollProgress()
    window.addEventListener('scroll', setScrollProgress, { passive: true })
    window.addEventListener('resize', setScrollProgress)

    if (reduceMotion.matches) {
      return () => {
        window.removeEventListener('scroll', setScrollProgress)
        window.removeEventListener('resize', setScrollProgress)
      }
    }

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    revealItems.forEach((item, index) => {
      item.classList.add('reveal-ready')
      item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    )

    revealItems.forEach((item) => observer.observe(item))

    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>('.parallax-media'))
    const setParallax = () => {
      parallaxFrame = 0
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const midpoint = rect.top + rect.height / 2
        const distance = midpoint - window.innerHeight / 2
        const travel = Math.max(-1, Math.min(1, distance / window.innerHeight))
        item.style.setProperty('--parallax-y', `${(-travel * 36).toFixed(2)}px`)
      })
    }

    const queueParallax = () => {
      if (!parallaxFrame) {
        parallaxFrame = window.requestAnimationFrame(setParallax)
      }
    }

    setParallax()
    window.addEventListener('scroll', queueParallax, { passive: true })
    window.addEventListener('resize', queueParallax)

    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>(tiltSelector))
    const cleanupTilt = tiltItems.map((item) => {
      const handlePointerMove = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        item.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`)
        item.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`)
        item.style.setProperty('--hover-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
        item.style.setProperty('--hover-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
      }

      const resetTilt = () => {
        item.style.setProperty('--tilt-x', '0deg')
        item.style.setProperty('--tilt-y', '0deg')
      }

      item.addEventListener('pointermove', handlePointerMove)
      item.addEventListener('pointerleave', resetTilt)
      return () => {
        item.removeEventListener('pointermove', handlePointerMove)
        item.removeEventListener('pointerleave', resetTilt)
      }
    })

    let animationFrame = 0
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let dotX = pointerX
    let dotY = pointerY
    let haloX = pointerX
    let haloY = pointerY

    const moveCursor = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      document.body.classList.add('has-pointer')
    }

    const renderCursor = () => {
      dotX += (pointerX - dotX) * 0.42
      dotY += (pointerY - dotY) * 0.42
      haloX += (pointerX - haloX) * 0.16
      haloY += (pointerY - haloY) * 0.16

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`
      }

      if (cursorHaloRef.current) {
        cursorHaloRef.current.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`
      }

      animationFrame = window.requestAnimationFrame(renderCursor)
    }

    window.addEventListener('pointermove', moveCursor, { passive: true })
    animationFrame = window.requestAnimationFrame(renderCursor)

    return () => {
      window.removeEventListener('scroll', setScrollProgress)
      window.removeEventListener('resize', setScrollProgress)
      window.removeEventListener('scroll', queueParallax)
      window.removeEventListener('resize', queueParallax)
      window.removeEventListener('pointermove', moveCursor)
      window.cancelAnimationFrame(animationFrame)
      window.cancelAnimationFrame(parallaxFrame)
      observer.disconnect()
      cleanupTilt.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-halo" ref={cursorHaloRef} aria-hidden="true" />
      <div className="cursor-dot" ref={cursorRef} aria-hidden="true" />
    </>
  )
}
