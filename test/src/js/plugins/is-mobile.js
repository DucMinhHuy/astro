export default function isMobile(breakpoint) {
  return $(window).width() <= breakpoint ? true : false
}
