;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-locationfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C317.92 64 160 221.92 160 416c0 187.36 315.424 520.032 328.832 534.08C494.88 956.448 503.264 960 512 960c0.224 0 0.48 0 0.704 0 8.992 0 17.472-4.192 23.392-10.944l109.216-125.12C790.432 646.176 864 508.928 864 416 864 221.92 706.08 64 512 64zM512 576c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160S600.384 576 512 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 608c-105.888 0-192-86.112-192-192s86.112-192 192-192 192 86.112 192 192S617.888 608 512 608zM512 288c-70.592 0-128 57.408-128 128s57.408 128 128 128c70.592 0 128-57.408 128-128S582.592 288 512 288z"  ></path>' +
    '' +
    '<path d="M512 960c-7.936 0-15.904-2.944-22.08-8.832-12.768-12.224-13.248-32.48-1.056-45.248C575.392 815.2 800 550.336 800 416c0-158.784-129.184-288-288-288-158.784 0-288 129.216-288 288 0 75.616 72.544 206.08 204.256 367.424 11.2 13.728 9.152 33.888-4.544 45.024-13.696 11.168-33.888 9.152-45.024-4.544C233.568 646.176 160 508.928 160 416 160 221.92 317.92 64 512 64s352 157.92 352 352c0 187.36-315.424 520.032-328.832 534.08C528.864 956.672 520.448 960 512 960z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-timefill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64zM671.264 576l-191.104 0C462.496 576 448 561.536 448 543.84L448 289.088c0-17.664 14.336-32 32-32s32 14.336 32 32L512 512l159.264 0c17.696 0 32 14.336 32 32C703.264 561.696 688.928 576 671.264 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-time" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64zM512 895.712c-211.584 0-383.712-172.16-383.712-383.712C128.288 300.416 300.416 128.288 512 128.288c211.552 0 383.712 172.128 383.712 383.712C895.712 723.552 723.552 895.712 512 895.712z"  ></path>' +
    '' +
    '<path d="M671.968 512 512 512 512 288.064c0-17.76-14.24-32.128-32-32.128s-32 14.4-32 32.128L448 544c0 17.76 14.272 32 32 32l191.968 0c17.76 0 32.128-14.24 32.128-32S689.728 512 671.968 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-my" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 384c0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 16 6.4 35.2 25.6 38.4h6.4c16 0 28.8-9.6 32-25.6 28.8-150.4 160-259.2 313.6-262.4h6.4c156.8 0 284.8-128 284.8-288zM288 384c0-124.8 99.2-224 224-224s224 99.2 224 224c0 121.6-99.2 220.8-220.8 224H505.6C384 604.8 288 505.6 288 384zM723.2 675.2c-16-9.6-35.2-6.4-44.8 9.6-9.6 16-6.4 35.2 9.6 44.8 73.6 51.2 124.8 121.6 140.8 204.8 3.2 16 16 25.6 32 25.6h6.4c16-3.2 28.8-19.2 25.6-38.4-19.2-99.2-80-185.6-169.6-246.4z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-myfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-medalfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 640m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" fill="#666666" ></path>' +
    '' +
    '<path d="M745.6 377.6l83.2-144c3.2-3.2 6.4-9.6 6.4-16V64c0-9.6-3.2-16-9.6-22.4-9.6-9.6-9.6-9.6-630.4-9.6-9.6 0-19.2 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4v153.6c0 6.4 0 9.6 3.2 16l92.8 166.4C198.4 460.8 160 547.2 160 640c0 195.2 156.8 352 352 352s352-156.8 352-352c0-105.6-44.8-198.4-118.4-262.4zM608 131.2c0-19.2 12.8-32 32-32s32 12.8 32 32V320c0 19.2-12.8 32-32 32s-32-12.8-32-32V131.2z m-288 0c0-19.2 12.8-32 32-32s32 12.8 32 32v192c0 19.2-12.8 32-32 32s-32-12.8-32-32v-192zM512 832c-105.6 0-192-86.4-192-192s86.4-192 192-192 192 86.4 192 192-86.4 192-192 192z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-medal" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M748.8 377.6L832 233.6c3.2-6.4 3.2-9.6 3.2-16V64c0-32-25.6-32-57.6-32H195.2c-6.4 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4v153.6c0 6.4 0 9.6 3.2 16l92.8 166.4c-60.8 64-99.2 147.2-99.2 243.2 0 195.2 156.8 352 352 352s352-156.8 352-352c3.2-105.6-44.8-201.6-115.2-265.6z m22.4-169.6l-76.8 131.2c-6.4-3.2-16-9.6-22.4-12.8V96h99.2v112z m-256 80c-44.8 0-86.4 9.6-128 25.6V96h224v204.8c-32-6.4-64-12.8-96-12.8z m-288-192h96v246.4c-3.2 3.2-9.6 6.4-12.8 9.6L227.2 208V96z m288 832c-160 0-288-128-288-288s128-288 288-288 288 128 288 288-131.2 288-288 288z" fill="#666666" ></path>' +
    '' +
    '<path d="M515.2 448c-105.6 0-192 86.4-192 192s86.4 192 192 192 192-86.4 192-192-86.4-192-192-192z m0 320c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)