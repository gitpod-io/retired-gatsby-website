export function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    const start = performance.now()

    requestAnimationFrame(tick)

    function tick(now: number) {
      if (now - start >= duration) {
        resolve()
      } else {
        requestAnimationFrame(tick)
      }
    }
  })
}
