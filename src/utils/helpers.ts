export const isEurope = () => {
    const offset = new Date().getTimezoneOffset();
    return  offset <= 0 && offset >= -180;
}

export const getBrowser = (userAgent: string) => {
  const browsers = ['Opera', 'Chrome', 'Firefox', 'IE']
  let browser

  browsers.forEach((b) => {
    if (userAgent.indexOf(b) !== -1) {
      browser = b
    }
  })

  return browser
}
