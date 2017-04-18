;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.667008 47.65184 341.984256 47.65184c-42.635264 0-77.44 34.884608-77.44 77.436928l0 774.513664c0 42.59328 34.804736 77.44 77.44 77.44l340.682752 0c42.597376 0 77.441024-34.84672 77.441024-77.44L760.108032 125.087744C760.108032 82.536448 725.264384 47.65184 682.667008 47.65184zM465.854464 109.584384l92.944384 0c8.556544 0 15.545344 6.946816 15.545344 15.504384 0 8.602624-6.987776 15.504384-15.545344 15.504384l-92.944384 0c-8.51968 0-15.422464-6.90176-15.422464-15.504384C450.432 116.5312 457.33376 109.584384 465.854464 109.584384zM512.285696 946.034688c-25.637888 0-46.470144-20.754432-46.470144-46.43328s20.832256-46.512128 46.470144-46.512128c25.757696 0 46.512128 20.83328 46.512128 46.512128S538.044416 946.034688 512.285696 946.034688zM729.220096 822.162432 295.552 822.162432 295.552 202.528768l433.668096 0L729.220096 822.162432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duigou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M378.410667 850.450963C364.491852 850.450963 350.610963 845.293037 340.02963 834.939259L20.920889 523.529481C-0.279704 502.821926-0.279704 469.295407 20.920889 448.587852 42.121481 427.880296 76.48237 427.880296 97.682963 448.587852L378.410667 722.526815 925.75763 188.491852C946.958222 167.784296 981.319111 167.784296 1002.519704 188.491852 1023.720296 209.161481 1023.720296 242.688 1002.519704 263.395556L416.791704 834.939259C406.172444 845.293037 392.291556 850.450963 378.410667 850.450963L378.410667 850.450963Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M177.61321 228.002854c-17.712407-18.96698-15.565511-49.855478 4.787026-68.862367s51.321876-19.045775 69.034283-0.078795l594.923618 637.035738c17.712407 18.96698 15.560394 49.860595-4.793166 68.867484-20.352537 19.007913-51.315736 19.040658-69.029166 0.073678L177.61321 228.002854z"  ></path>' +
    '' +
    '<path d="M137.811716 861.504092c-17.71036-18.96391-15.562441-49.852408 4.790096-68.860321l674.574702-629.981065c20.352537-19.007913 51.315736-19.040658 69.026096-0.076748 17.712407 18.96698 15.565511 49.855478-4.787026 68.862367L206.840882 861.429391C186.487322 880.437304 155.524123 880.470049 137.811716 861.504092z"  ></path>' +
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