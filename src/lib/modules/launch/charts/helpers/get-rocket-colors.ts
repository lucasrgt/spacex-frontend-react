export const getRocketColors = (rocketTypes: string[]) => {
  return rocketTypes.map((_, i) => {
    const hue = (360 / rocketTypes.length) * i
    return `hsl(${hue}, 70%, 70%)`
  })
}
