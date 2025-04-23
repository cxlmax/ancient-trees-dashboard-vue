// Pannellum 2.5.6, https://github.com/mpetroff/pannellum
window.libpannellum = (function (E, g, p) {
    function Ba(K) {
        function ja(a, e) { return a.level == 1 && e.level != 1 ? -1 : e.level == 1 && a.level != 1 ? 1 : e.timestamp - a.timestamp } function Q(a, e) { return a.level != e.level ? a.level - e.level : a.diff - e.diff } function ka(a, e, c, g, l, h) { this.vertices = a; this.side = e; this.level = c; this.x = g; this.y = l; this.path = h.replace('%s', e).replace('%l', c).replace('%x', g).replace('%y', l) } function Ja(a, e, g, p, l) {
            let h; var d = e.vertices; h = la(a, d.slice(0, 3)); var u = la(a, d.slice(3, 6)); var x = la(a, d.slice(6, 9)); var d = la(a, d.slice(9,
                12)); let t = h[0] + u[0] + x[0] + d[0]; t == -4 || t == 4 ? h = !1 : (t = h[1] + u[1] + x[1] + d[1], h = t == -4 || t == 4 ? !1 : h[2] + u[2] + x[2] + d[2] != 4); if (h) {
                h = e.vertices; u = h[0] + h[3] + h[6] + h[9]; x = h[1] + h[4] + h[7] + h[10]; d = h[2] + h[5] + h[8] + h[11]; t = Math.sqrt(u * u + x * x + d * d); d = Math.asin(d / t); u = Math.atan2(x, u) - p; u += u > Math.PI ? -2 * Math.PI : u < -Math.PI ? 2 * Math.PI : 0; u = Math.abs(u); e.diff = Math.acos(Math.sin(g) * Math.sin(d) + Math.cos(g) * Math.cos(d) * Math.cos(u)); u = !1; for (x = 0; x < c.nodeCache.length; x++) {
                    if (c.nodeCache[x].path == e.path) {
                        u = !0; c.nodeCache[x].timestamp = c.nodeCacheTimestamp++
                        c.nodeCache[x].diff = e.diff; c.currentNodes.push(c.nodeCache[x]); break
                    }
                } u || (e.timestamp = c.nodeCacheTimestamp++, c.currentNodes.push(e), c.nodeCache.push(e)); if (e.level < c.level) {
                    var d = m.cubeResolution * Math.pow(2, e.level - m.maxLevel); var u = Math.ceil(d * m.invTileResolution) - 1; var x = d % m.tileResolution * 2; let k = 2 * d % m.tileResolution; k === 0 && (k = m.tileResolution); x === 0 && (x = 2 * m.tileResolution); t = 0.5; if (e.x == u || e.y == u) t = 1 - m.tileResolution / (m.tileResolution + k); const y = 1 - t; var d = []; let s = t; let z = t; let D = t; let I = y; let A = y; let B = y; if (k < m.tileResolution) {
                        if (e.x ==
                                u && e.y != u) { if (A = z = 0.5, e.side == 'd' || e.side == 'u') B = D = 0.5 } else e.x != u && e.y == u && (I = s = 0.5, e.side == 'l' || e.side == 'r') && (B = D = 0.5)
                    } x <= m.tileResolution && (e.x == u && (s = 0, I = 1, e.side == 'l' || e.side == 'r') && (D = 0, B = 1), e.y == u && (z = 0, A = 1, e.side == 'd' || e.side == 'u') && (D = 0, B = 1)); k = [h[0], h[1], h[2], h[0] * s + h[3] * I, h[1] * t + h[4] * y, h[2] * D + h[5] * B, h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B, h[0] * t + h[9] * y, h[1] * z + h[10] * A, h[2] * D + h[11] * B]; k = new ka(k, e.side, e.level + 1, 2 * e.x, 2 * e.y, m.fullpath); d.push(k); e.x == u && x <= m.tileResolution || (k = [h[0] * s +
                            h[3] * I, h[1] * t + h[4] * y, h[2] * D + h[5] * B, h[3], h[4], h[5], h[3] * t + h[6] * y, h[4] * z + h[7] * A, h[5] * D + h[8] * B, h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B], k = new ka(k, e.side, e.level + 1, 2 * e.x + 1, 2 * e.y, m.fullpath), d.push(k)); e.x == u && x <= m.tileResolution || e.y == u && x <= m.tileResolution || (k = [h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B, h[3] * t + h[6] * y, h[4] * z + h[7] * A, h[5] * D + h[8] * B, h[6], h[7], h[8], h[9] * s + h[6] * I, h[10] * t + h[7] * y, h[11] * D + h[8] * B], k = new ka(k, e.side, e.level + 1, 2 * e.x + 1, 2 * e.y + 1, m.fullpath), d.push(k)); e.y == u && x <= m.tileResolution ||
                                (k = [h[0] * t + h[9] * y, h[1] * z + h[10] * A, h[2] * D + h[11] * B, h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B, h[9] * s + h[6] * I, h[10] * t + h[7] * y, h[11] * D + h[8] * B, h[9], h[10], h[11]], k = new ka(k, e.side, e.level + 1, 2 * e.x, 2 * e.y + 1, m.fullpath), d.push(k)); for (e = 0; e < d.length; e++)Ja(a, d[e], g, p, l)
                }
            }
        } function ta() { return [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1] } function ua(a, e, c) {
            const g = Math.sin(e); e = Math.cos(e)
            if (c == 'x') return [a[0], e * a[1] + g * a[2], e * a[2] - g * a[1], a[3], e * a[4] + g * a[5], e * a[5] - g * a[4], a[6], e * a[7] + g * a[8], e * a[8] - g * a[7]]; if (c == 'y') return [e * a[0] - g * a[2], a[1], e * a[2] + g * a[0], e * a[3] - g * a[5], a[4], e * a[5] + g * a[3], e * a[6] - g * a[8], a[7], e * a[8] + g * a[6]]; if (c == 'z') return [e * a[0] + g * a[1], e * a[1] - g * a[0], a[2], e * a[3] + g * a[4], e * a[4] - g * a[3], a[5], e * a[6] + g * a[7], e * a[7] - g * a[6], a[8]]
        } function ma(a) { return [a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]] } function Ka(a) {
            La(a, a.path + '.' + m.extension,
                function (e, c) { a.texture = e; a.textureLoaded = c ? 2 : 1 }, va.crossOrigin)
        } function la(a, e) { var c = [a[0] * e[0] + a[1] * e[1] + a[2] * e[2], a[4] * e[0] + a[5] * e[1] + a[6] * e[2], a[11] + a[8] * e[0] + a[9] * e[1] + a[10] * e[2], 1 / (a[12] * e[0] + a[13] * e[1] + a[14] * e[2])]; const g = c[0] * c[3]; const l = c[1] * c[3]; var c = c[2] * c[3]; const h = [0, 0, 0]; g < -1 && (h[0] = -1); g > 1 && (h[0] = 1); l < -1 && (h[1] = -1); l > 1 && (h[1] = 1); if (c < -1 || c > 1) h[2] = 1; return h } function Ea() { console.log('Reducing canvas size due to error 1286!'); A.width = Math.round(A.width / 2); A.height = Math.round(A.height / 2) } var A = g.createElement('canvas')
        A.style.width = A.style.height = '100%'; K.appendChild(A); let c, a, U, V, $, R, wa, ga, m, z, F, ca, Fa, Y, na, va; this.init = function (L, e, Ca, H, l, h, d, u) {
            function x(a) { if (E) { const e = a * a * 4; const h = new Uint8ClampedArray(e); const c = u.backgroundColor ? u.backgroundColor : [0, 0, 0]; c[0] *= 255; c[1] *= 255; c[2] *= 255; for (let b = 0; b < e; b++)h[b++] = c[0], h[b++] = c[1], h[b++] = c[2]; a = new ImageData(h, a, a); for (t = 0; t < 6; t++)m[t].width == 0 && (m[t] = a) } } e === p && (e = 'equirectangular'); if (e != 'equirectangular' && e != 'cubemap' && e != 'multires') {
                throw console.log('Error: invalid image type specified!'),
                { type: 'config error' }
            } z = e; m = L; F = Ca; va = u || {}; if (c) { U && (a.detachShader(c, U), a.deleteShader(U)); V && (a.detachShader(c, V), a.deleteShader(V)); a.bindBuffer(a.ARRAY_BUFFER, null); a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null); c.texture && a.deleteTexture(c.texture); if (c.nodeCache) for (L = 0; L < c.nodeCache.length; L++)a.deleteTexture(c.nodeCache[L].texture); a.deleteProgram(c); c = p } ga = p; let t; var E = !1; let y; if (z == 'cubemap') {
                for (t = 0; t < 6; t++) {
                    m[t].width > 0
                        ? (y === p && (y = m[t].width), y != m[t].width && console.log('Cube faces have inconsistent widths: ' +
                            y + ' vs. ' + m[t].width))
                        : E = !0
                }
            } z == 'cubemap' && (y & y - 1) !== 0 && (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/) || navigator.userAgent.match(/Trident.*rv[ :]*11\./)) || (a || (a = A.getContext('webgl2', { antialias: true, alpha: !1, depth: !1 })), a && a.getError() == 1286 && Ea()); if (!a && (z == 'multires' && m.hasOwnProperty('fallbackPath') || z == 'cubemap') && ('WebkitAppearance' in
                g.documentElement.style || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || navigator.appVersion.indexOf('MSIE 10') !== -1)) {
                R && K.removeChild(R); R = g.createElement('div'); R.className = 'pnlm-world'; H = m.basePath ? m.basePath + m.fallbackPath : m.fallbackPath; const Q = 'frblud'.split(''); let S = 0; l = function () {
                    const a = g.createElement('canvas'); a.className = 'pnlm-face pnlm-' + Q[this.side] + 'face'; R.appendChild(a); const e = a.getContext('2d'); a.style.width = this.width + 4 + 'px'; a.style.height = this.height + 4 + 'px'; a.width = this.width + 4; a.height =
                        this.height + 4; e.drawImage(this, 2, 2); const h = e.getImageData(0, 0, a.width, a.height); const c = h.data; let b; let d; for (b = 2; b < a.width - 2; b++) for (d = 0; d < 4; d++)c[4 * (b + a.width) + d] = c[4 * (b + 2 * a.width) + d], c[4 * (b + a.width * (a.height - 2)) + d] = c[4 * (b + a.width * (a.height - 3)) + d]; for (b = 2; b < a.height - 2; b++) for (d = 0; d < 4; d++)c[4 * (b * a.width + 1) + d] = c[4 * (b * a.width + 2) + d], c[4 * ((b + 1) * a.width - 2) + d] = c[4 * ((b + 1) * a.width - 3) + d]; for (d = 0; d < 4; d++) {
                        c[4 * (a.width + 1) + d] = c[4 * (2 * a.width + 2) + d], c[4 * (2 * a.width - 2) + d] = c[4 * (3 * a.width - 3) + d], c[4 * (a.width * (a.height - 2) + 1) + d] = c[4 *
                                (a.width * (a.height - 3) + 2) + d], c[4 * (a.width * (a.height - 1) - 2) + d] = c[4 * (a.width * (a.height - 2) - 3) + d]
                    } for (b = 1; b < a.width - 1; b++) for (d = 0; d < 4; d++)c[4 * b + d] = c[4 * (b + a.width) + d], c[4 * (b + a.width * (a.height - 1)) + d] = c[4 * (b + a.width * (a.height - 2)) + d]; for (b = 1; b < a.height - 1; b++) for (d = 0; d < 4; d++)c[b * a.width * 4 + d] = c[4 * (b * a.width + 1) + d], c[4 * ((b + 1) * a.width - 1) + d] = c[4 * ((b + 1) * a.width - 2) + d]; for (d = 0; d < 4; d++) {
                        c[d] = c[4 * (a.width + 1) + d], c[4 * (a.width - 1) + d] = c[4 * (2 * a.width - 2) + d], c[a.width * (a.height - 1) * 4 + d] = c[4 * (a.width * (a.height - 2) + 1) + d], c[4 * (a.width *
                                a.height - 1) + d] = c[4 * (a.width * (a.height - 1) - 2) + d]
                    } e.putImageData(h, 0, 0); D.call(this)
                }; var D = function () { this.width > 0 ? ($ === p && ($ = this.width), $ != this.width && console.log('Fallback faces have inconsistent widths: ' + $ + ' vs. ' + this.width)) : E = !0; S++; S == 6 && ($ = this.width, K.appendChild(R), d()) }; var E = !1; for (t = 0; t < 6; t++)h = new Image(), h.crossOrigin = va.crossOrigin ? va.crossOrigin : 'anonymous', h.side = t, h.onload = l, h.onerror = D, h.src = z == 'multires' ? H.replace('%s', Q[t]) + '.' + m.extension : m[t].src; x($)
            } else {
                if (!a) {
                    throw console.log('Error: no WebGL support detected!'),
                    { type: 'no webgl' }
                } z == 'cubemap' && x(y); m.fullpath = m.basePath ? m.basePath + m.path : m.path; m.invTileResolution = 1 / m.tileResolution; L = ta(); wa = []; for (t = 0; t < 6; t++)wa[t] = L.slice(12 * t, 12 * t + 12), L = ta(); L = 0; if (z == 'equirectangular') { if (L = a.getParameter(a.MAX_TEXTURE_SIZE), Math.max(m.width / 2, m.height) > L) throw console.log('Error: The image is too big; it\'s ' + m.width + 'px wide, but this device\'s maximum supported size is ' + 2 * L + 'px.'), { type: 'webgl size error', width: m.width, maxWidth: 2 * L } } else if (z == 'cubemap' && y > a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)) {
                    throw console.log('Error: The image is too big; it\'s ' +
                        y + 'px wide, but this device\'s maximum supported size is ' + L + 'px.'), { type: 'webgl size error', width: y, maxWidth: L }
                } u === p || u.horizonPitch === p && u.horizonRoll === p || (ga = [u.horizonPitch == p ? 0 : u.horizonPitch, u.horizonRoll == p ? 0 : u.horizonRoll]); y = a.TEXTURE_2D; a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight); a.getShaderPrecisionFormat && (e = a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)) && e.precision < 1 && (oa = oa.replace('highp', 'mediump')); U = a.createShader(a.VERTEX_SHADER); e = s; z == 'multires' &&
                    (e = k); a.shaderSource(U, e); a.compileShader(U); V = a.createShader(a.FRAGMENT_SHADER); e = pa; z == 'cubemap' ? (y = a.TEXTURE_CUBE_MAP, e = qa) : z == 'multires' && (e = bb); a.shaderSource(V, e); a.compileShader(V); c = a.createProgram(); a.attachShader(c, U); a.attachShader(c, V); a.linkProgram(c); a.getShaderParameter(U, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(U)); a.getShaderParameter(V, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(V)); a.getProgramParameter(c, a.LINK_STATUS) || console.log(a.getProgramInfoLog(c)); a.useProgram(c)
                c.drawInProgress = !1; e = u.backgroundColor ? u.backgroundColor : [0, 0, 0]; a.clearColor(e[0], e[1], e[2], 1); a.clear(a.COLOR_BUFFER_BIT); c.texCoordLocation = a.getAttribLocation(c, 'a_texCoord'); a.enableVertexAttribArray(c.texCoordLocation); z != 'multires'
                    ? (ca || (ca = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, ca), a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]), a.STATIC_DRAW), a.vertexAttribPointer(c.texCoordLocation, 2, a.FLOAT, !1, 0, 0), c.aspectRatio = a.getUniformLocation(c, 'u_aspectRatio'),
                    a.uniform1f(c.aspectRatio, a.drawingBufferWidth / a.drawingBufferHeight), c.psi = a.getUniformLocation(c, 'u_psi'), c.theta = a.getUniformLocation(c, 'u_theta'), c.f = a.getUniformLocation(c, 'u_f'), c.h = a.getUniformLocation(c, 'u_h'), c.v = a.getUniformLocation(c, 'u_v'), c.vo = a.getUniformLocation(c, 'u_vo'), c.rot = a.getUniformLocation(c, 'u_rot'), a.uniform1f(c.h, H / (2 * Math.PI)), a.uniform1f(c.v, l / Math.PI), a.uniform1f(c.vo, h / Math.PI * 2), z == 'equirectangular' && (c.backgroundColor = a.getUniformLocation(c, 'u_backgroundColor'), a.uniform4fv(c.backgroundColor,
                        e.concat([1]))), c.texture = a.createTexture(), a.bindTexture(y, c.texture), z == 'cubemap'
                        ? (a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[1]), a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[3]), a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[4]), a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[5]), a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[0]), a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                            0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[2]))
                        : m.width <= L
                            ? (a.uniform1i(a.getUniformLocation(c, 'u_splitImage'), 0), a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m))
                            : (a.uniform1i(a.getUniformLocation(c, 'u_splitImage'), 1), H = g.createElement('canvas'), H.width = m.width / 2, H.height = m.height, H = H.getContext('2d'), H.drawImage(m, 0, 0), l = H.getImageData(0, 0, m.width / 2, m.height), a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, l), c.texture2 = a.createTexture(), a.activeTexture(a.TEXTURE1), a.bindTexture(y, c.texture2), a.uniform1i(a.getUniformLocation(c,
                                'u_image1'), 1), H.drawImage(m, -m.width / 2, 0), l = H.getImageData(0, 0, m.width / 2, m.height), a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, l), a.texParameteri(y, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(y, a.TEXTURE_MAG_FILTER, a.LINEAR), a.activeTexture(a.TEXTURE0)), a.texParameteri(y, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_MIN_FILTER,
                        a.LINEAR), a.texParameteri(y, a.TEXTURE_MAG_FILTER, a.LINEAR))
                    : (c.vertPosLocation = a.getAttribLocation(c, 'a_vertCoord'), a.enableVertexAttribArray(c.vertPosLocation), Fa || (Fa = a.createBuffer()), Y || (Y = a.createBuffer()), na || (na = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, Y), a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, na), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), a.STATIC_DRAW), c.perspUniform = a.getUniformLocation(c,
                        'u_perspMatrix'), c.cubeUniform = a.getUniformLocation(c, 'u_cubeMatrix'), c.level = -1, c.currentNodes = [], c.nodeCache = [], c.nodeCacheTimestamp = 0); H = a.getError(); if (H !== 0) throw console.log('Error: Something went wrong with WebGL!', H), { type: 'webgl error' }; d()
            }
        }; this.destroy = function () { K !== p && (A !== p && K.contains(A) && K.removeChild(A), R !== p && K.contains(R) && K.removeChild(R)); if (a) { const c = a.getExtension('WEBGL_lose_context'); c && c.loseContext() } }; this.resize = function () {
            const g = E.devicePixelRatio || 1; A.width = A.clientWidth *
                g; A.height = A.clientHeight * g; a && (a.getError() == 1286 && Ea(), a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), z != 'multires' && a.uniform1f(c.aspectRatio, A.clientWidth / A.clientHeight))
        }; this.resize(); this.setPose = function (a, c) { ga = [a, c] }; this.render = function (g, e, k, s) {
            let l; let h = 0; s === p && (s = {}); s.roll && (h = s.roll); if (ga !== p) {
                l = ga[0]; var d = ga[1]; var u = g; const x = e; const t = Math.cos(d) * Math.sin(g) * Math.sin(l) + Math.cos(g) * (Math.cos(l) * Math.cos(e) + Math.sin(d) * Math.sin(l) * Math.sin(e)); const E = -Math.sin(g) * Math.sin(d) + Math.cos(g) *
                    Math.cos(d) * Math.sin(e); g = Math.cos(d) * Math.cos(l) * Math.sin(g) + Math.cos(g) * (-Math.cos(e) * Math.sin(l) + Math.cos(l) * Math.sin(d) * Math.sin(e)); g = Math.asin(Math.max(Math.min(g, 1), -1)); e = Math.atan2(E, t); l = [Math.cos(u) * (Math.sin(d) * Math.sin(l) * Math.cos(x) - Math.cos(l) * Math.sin(x)), Math.cos(u) * Math.cos(d) * Math.cos(x), Math.cos(u) * (Math.cos(l) * Math.sin(d) * Math.cos(x) + Math.sin(x) * Math.sin(l))]; d = [-Math.cos(g) * Math.sin(e), Math.cos(g) * Math.cos(e)]; d = Math.acos(Math.max(Math.min((l[0] * d[0] + l[1] * d[1]) / (Math.sqrt(l[0] *
                        l[0] + l[1] * l[1] + l[2] * l[2]) * Math.sqrt(d[0] * d[0] + d[1] * d[1])), 1), -1)); l[2] < 0 && (d = 2 * Math.PI - d); h += d
            } if (a || z != 'multires' && z != 'cubemap') {
                if (z != 'multires') k = 2 * Math.atan(Math.tan(0.5 * k) / (a.drawingBufferWidth / a.drawingBufferHeight)), k = 1 / Math.tan(0.5 * k), a.uniform1f(c.psi, e), a.uniform1f(c.theta, g), a.uniform1f(c.rot, h), a.uniform1f(c.f, k), !0 === F && z == 'equirectangular' && (a.bindTexture(a.TEXTURE_2D, c.texture), a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m)), a.drawArrays(a.TRIANGLES, 0, 6); else {
                    l = a.drawingBufferWidth /
                        a.drawingBufferHeight; d = 2 * Math.atan(Math.tan(k / 2) * a.drawingBufferHeight / a.drawingBufferWidth); d = 1 / Math.tan(d / 2); l = [d / l, 0, 0, 0, 0, d, 0, 0, 0, 0, 100.1 / -99.9, 20 / -99.9, 0, 0, -1, 0]; for (d = 1; d < m.maxLevel && a.drawingBufferWidth > m.tileResolution * Math.pow(2, d - 1) * Math.tan(k / 2) * 0.707;)d++; c.level = d; d = [1, 0, 0, 0, 1, 0, 0, 0, 1]; d = ua(d, -h, 'z'); d = ua(d, -g, 'x'); d = ua(d, e, 'y'); d = [d[0], d[1], d[2], 0, d[3], d[4], d[5], 0, d[6], d[7], d[8], 0, 0, 0, 0, 1]; a.uniformMatrix4fv(c.perspUniform, !1, new Float32Array(ma(l))); a.uniformMatrix4fv(c.cubeUniform,
                        !1, new Float32Array(ma(d))); h = [l[0] * d[0], l[0] * d[1], l[0] * d[2], 0, l[5] * d[4], l[5] * d[5], l[5] * d[6], 0, l[10] * d[8], l[10] * d[9], l[10] * d[10], l[11], -d[8], -d[9], -d[10], 0]; c.nodeCache.sort(ja); if (c.nodeCache.length > 200 && c.nodeCache.length > c.currentNodes.length + 50) for (l = c.nodeCache.splice(200, c.nodeCache.length - 200), d = 0; d < l.length; d++)a.deleteTexture(l[d].texture); c.currentNodes = []; d = 'fbudlr'.split(''); for (l = 0; l < 6; l++)u = new ka(wa[l], d[l], 1, 0, 0, m.fullpath), Ja(h, u, g, e, k); c.currentNodes.sort(Q); for (g = S.length - 1; g >=
                                0; g--)c.currentNodes.indexOf(S[g].node) === -1 && (S[g].node.textureLoad = !1, S.splice(g, 1)); if (S.length === 0) for (g = 0; g < c.currentNodes.length; g++) if (e = c.currentNodes[g], !e.texture && !e.textureLoad) { e.textureLoad = !0; setTimeout(Ka, 0, e); break } if (!c.drawInProgress) {
                        c.drawInProgress = !0; a.clear(a.COLOR_BUFFER_BIT); for (g = 0; g < c.currentNodes.length; g++) {
                            c.currentNodes[g].textureLoaded > 1 && (a.bindBuffer(a.ARRAY_BUFFER, Fa), a.bufferData(a.ARRAY_BUFFER, new Float32Array(c.currentNodes[g].vertices), a.STATIC_DRAW), a.vertexAttribPointer(c.vertPosLocation,
                                3, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, Y), a.vertexAttribPointer(c.texCoordLocation, 2, a.FLOAT, !1, 0, 0), a.bindTexture(a.TEXTURE_2D, c.currentNodes[g].texture), a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0))
                        } c.drawInProgress = !1
                    }
                } if (s.returnImage !== p) return A.toDataURL('image/png')
            } else {
                for (l = $ / 2, s = {
                    f: 'translate3d(-' + (l + 2) + 'px, -' + (l + 2) + 'px, -' + l + 'px)',
                    b: 'translate3d(' + (l + 2) + 'px, -' + (l + 2) + 'px, ' + l + 'px) rotateX(180deg) rotateZ(180deg)',
                    u: 'translate3d(-' + (l + 2) + 'px, -' + l + 'px, ' + (l + 2) + 'px) rotateX(270deg)',
                    d: 'translate3d(-' + (l + 2) + 'px, ' + l + 'px, -' + (l + 2) + 'px) rotateX(90deg)',
                    l: 'translate3d(-' + l + 'px, -' + (l + 2) + 'px, ' + (l + 2) + 'px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)',
                    r: 'translate3d(' + l + 'px, -' + (l + 2) + 'px, -' + (l + 2) + 'px) rotateY(270deg)'
                }, k = 1 / Math.tan(k / 2), k = k * A.clientWidth / 2 + 'px', e = 'perspective(' + k + ') translateZ(' + k + ') rotateX(' + g + 'rad) rotateY(' + e + 'rad) ', k = Object.keys(s), g = 0; g < 6; g++) if (h = R.querySelector('.pnlm-' + k[g] + 'face')) h.style.webkitTransform = e + s[k[g]], h.style.transform = e + s[k[g]]
            }
        }; this.isLoading =
            function () { if (a && z == 'multires') for (let g = 0; g < c.currentNodes.length; g++) if (!c.currentNodes[g].textureLoaded) return !0; return !1 }; this.getCanvas = function () { return A }; var S = []; var La = (function () {
            function c() {
                const d = this; this.texture = this.callback = null; this.image = new Image(); this.image.crossOrigin = l || 'anonymous'; const e = function () {
                    if (d.image.width > 0 && d.image.height > 0) {
                        var c = d.image; a.bindTexture(a.TEXTURE_2D, d.texture); a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, c); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER,
                            a.LINEAR); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE); a.bindTexture(a.TEXTURE_2D, null); d.callback(d.texture, !0)
                    } else d.callback(d.texture, !1); S.length ? (c = S.shift(), d.loadTexture(c.src, c.texture, c.callback)) : k[g++] = d
                }; this.image.addEventListener('load', e); this.image.addEventListener('error', e)
            } function e(a, c, e, g) {
                this.node = a; this.src = c; this.texture = e; this.callback =
                        g
            } var g = 4; var k = {}; let l; c.prototype.loadTexture = function (a, c, e) { this.texture = c; this.callback = e; this.image.src = a }; for (let h = 0; h < g; h++)k[h] = new c(); return function (c, h, m, p) { l = p; p = a.createTexture(); g ? k[--g].loadTexture(h, p, m) : S.push(new e(c, h, p, m)); return p }
        }())
    } var s = 'attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}'; var k = 'attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}'
    var oa = 'precision highp float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nuniform bool u_splitImage;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);'
    var qa = oa + 'float cosphi = cos(phi);\ngl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));\n}'; var pa = oa + 'lambda = mod(lambda + PI, PI * 2.0) - PI;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = u_backgroundColor;\nelse {\nif(u_splitImage) {\nif(coord.x < 0.0)\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / u_h, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\nelse\ngl_FragColor = texture2D(u_image1, vec2((coord.x + u_h) / u_h - 1.0, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n} else {\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}\n}\n}'
    var bb = 'varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}'; return { renderer: function (g, k, p, s) { return new Ba(g, k, p, s) } }
}(window, document))
window.pannellum = (function (E, g, p) {
    function Ba(s, k) {
        function oa() {
            var a = g.createElement('div'); a.innerHTML = '\x3c!--[if lte IE 9]><i></i><![endif]--\x3e'; if (a.getElementsByTagName('i').length == 1) K(); else {
                ra = b.hfov; Ga = b.pitch; let f; if (b.type == 'cubemap') { P = []; for (a = 0; a < 6; a++)P.push(new Image()), P[a].crossOrigin = b.crossOrigin; q.load.lbox.style.display = 'block'; q.load.lbar.style.display = 'none' } else if (b.type == 'multires') {
                    a = JSON.parse(JSON.stringify(b.multiRes)), b.basePath && b.multiRes.basePath && !/^(?:[a-z]+:)?\/\//i.test(b.multiRes.basePath)
                        ? a.basePath = b.basePath + b.multiRes.basePath
                        : b.multiRes.basePath ? a.basePath = b.multiRes.basePath : b.basePath && (a.basePath = b.basePath), P = a
                } else if (!0 === b.dynamic) P = b.panorama; else { if (b.panorama === p) { K(b.strings.noPanoramaError); return } P = new Image() } if (b.type == 'cubemap') {
                    for (var n = 6, c = function () { n--; n === 0 && pa() }, d = function (a) { const ea = g.createElement('a'); ea.href = a.target.src; ea.textContent = ea.href; K(b.strings.fileAccessError.replace('%s', ea.outerHTML)) }, a = 0; a < P.length; a++) {
                        f = b.cubeMap[a], f == 'null'
                            ? (console.log('Will use background instead of missing cubemap face ' +
                                a), c())
                            : (b.basePath && !qa(f) && (f = b.basePath + f), P[a].onload = c, P[a].onerror = d, P[a].src = I(f))
                    }
                } else if (b.type == 'multires') pa(); else if (f = '', b.basePath && (f = b.basePath), !0 !== b.dynamic) {
                    f = qa(b.panorama) ? b.panorama : f + b.panorama; P.onload = function () { E.URL.revokeObjectURL(this.src); pa() }; const e = new XMLHttpRequest(); e.onloadend = function () { if (e.status != 200) { const a = g.createElement('a'); a.href = f; a.textContent = a.href; K(b.strings.fileAccessError.replace('%s', a.outerHTML)) } Ba(this.response); q.load.msg.innerHTML = '' }; e.onprogress =
                        function (a) { if (a.lengthComputable) { q.load.lbarFill.style.width = a.loaded / a.total * 100 + '%'; let b, ea; a.total > 1E6 ? (b = 'MB', ea = (a.loaded / 1E6).toFixed(2), a = (a.total / 1E6).toFixed(2)) : a.total > 1E3 ? (b = 'kB', ea = (a.loaded / 1E3).toFixed(1), a = (a.total / 1E3).toFixed(1)) : (b = 'B', ea = a.loaded, a = a.total); q.load.msg.innerHTML = ea + ' / ' + a + ' ' + b } else q.load.lbox.style.display = 'block', q.load.lbar.style.display = 'none' }; try { e.open('GET', f, !0) } catch (h) { K(b.strings.malformedURLError) } e.responseType = 'blob'; e.setRequestHeader('Accept',
                        'image/*,*/*;q=0.9'); e.withCredentials = b.crossOrigin === 'use-credentials'; e.send()
                } b.draggable && J.classList.add('pnlm-grab'); J.classList.remove('pnlm-grabbing'); Ma = !0 === b.dynamicUpdate; b.dynamic && Ma && (P = b.panorama, pa())
            }
        } function qa(a) { return /^(?:[a-z]+:)?\/\//i.test(a) || a[0] == '/' || a.slice(0, 5) == 'blob:' } function pa() {
            C || (C = new libpannellum.renderer(M)); Sa || (Sa = !0, W.addEventListener('mousedown', ka, !1), g.addEventListener('mousemove', ua, !1), g.addEventListener('mouseup', ma, !1), b.mouseZoom && (J.addEventListener('mousewheel',
                U, !1), J.addEventListener('DOMMouseScroll', U, !1)), b.doubleClickZoom && W.addEventListener('dblclick', Ja, !1), s.addEventListener('mozfullscreenchange', d, !1), s.addEventListener('webkitfullscreenchange', d, !1), s.addEventListener('msfullscreenchange', d, !1), s.addEventListener('fullscreenchange', d, !1), E.addEventListener('resize', z, !1), E.addEventListener('orientationchange', z, !1), b.disableKeyboardCtrl || (s.addEventListener('keydown', V, !1), s.addEventListener('keyup', R, !1), s.addEventListener('blur', $, !1)), g.addEventListener('mouseleave',
                ma, !1), g.documentElement.style.pointerAction === '' && g.documentElement.style.touchAction === '' ? (W.addEventListener('pointerdown', A, !1), W.addEventListener('pointermove', c, !1), W.addEventListener('pointerup', a, !1), W.addEventListener('pointerleave', a, !1)) : (W.addEventListener('touchstart', Ka, !1), W.addEventListener('touchmove', la, !1), W.addEventListener('touchend', Ea, !1)), E.navigator.pointerEnabled && (s.style.touchAction = 'none')); va(); x(b.hfov); setTimeout(function () { }, 500)
        } function Ba(a) {
            const f = new FileReader()
            f.addEventListener('loadend', function () {
                var n = f.result; if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) { var c = n.indexOf('\u00ff\u00c2'); (c < 0 || c > 65536) && K(b.strings.iOS8WebGLError) } c = n.indexOf('<x:xmpmeta'); if (c > -1 && !0 !== b.ignoreGPanoXMP) {
                    const d = n.substring(c, n.indexOf('</x:xmpmeta>') + 12); var e = function (a) {
                        let b; d.indexOf(a + '="') >= 0
                            ? (b = d.substring(d.indexOf(a + '="') + a.length + 2), b = b.substring(0, b.indexOf('"')))
                            : d.indexOf(a + '>') >= 0 && (b = d.substring(d.indexOf(a + '>') + a.length + 1), b = b.substring(0,
                                b.indexOf('<'))); return b !== p ? Number(b) : null
                    }; var n = e('GPano:FullPanoWidthPixels'); var c = e('GPano:CroppedAreaImageWidthPixels'); const g = e('GPano:FullPanoHeightPixels'); const h = e('GPano:CroppedAreaImageHeightPixels'); const l = e('GPano:CroppedAreaTopPixels'); const k = e('GPano:PoseHeadingDegrees'); const m = e('GPano:PosePitchDegrees'); var e = e('GPano:PoseRollDegrees'); n !== null && c !== null && g !== null && h !== null && l !== null && (aa.indexOf('haov') < 0 && (b.haov = c / n * 360), aa.indexOf('vaov') < 0 && (b.vaov = h / g * 180), aa.indexOf('vOffset') < 0 && (b.vOffset = -180 * ((l + h / 2) / g -
                        0.5)), k !== null && aa.indexOf('northOffset') < 0 && (b.northOffset = k, !1 !== b.compass && (b.compass = !0)), m !== null && e !== null && (aa.indexOf('horizonPitch') < 0 && (b.horizonPitch = m), aa.indexOf('horizonRoll') < 0 && (b.horizonRoll = e)))
                } P.src = E.URL.createObjectURL(a)
            }); f.readAsBinaryString !== p ? f.readAsBinaryString(a) : f.readAsText(a)
        } function K(a) {
            a === p && (a = b.strings.genericWebGLError); q.errorMsg.innerHTML = '<p>' + a + '</p>'; v.load.style.display = 'none'; q.load.box.style.display = 'none'; q.errorMsg.style.display = 'table'; Na = !0; G =
                p; M.style.display = 'none'; B('error', a)
        } function ja(a) { const b = Q(a); fa.style.left = b.x + 'px'; fa.style.top = b.y + 'px'; clearTimeout(ja.t1); clearTimeout(ja.t2); fa.style.display = 'block'; fa.style.opacity = 1; ja.t1 = setTimeout(function () { fa.style.opacity = 0 }, 2E3); ja.t2 = setTimeout(function () { fa.style.display = 'none' }, 2500); a.preventDefault() } function Q(a) { const b = s.getBoundingClientRect(); const n = {}; n.x = (a.clientX || a.pageX) - b.left; n.y = (a.clientY || a.pageY) - b.top; return n } function ka(a) {
            a.preventDefault(); s.focus(); if (G && b.draggable) {
                const f =
                    Q(a); if (b.hotSpotDebug) { const n = ta(a); console.log('Pitch: ' + n[0] + ', Yaw: ' + n[1] + ', Center Pitch: ' + b.pitch + ', Center Yaw: ' + b.yaw + ', HFOV: ' + b.hfov) } t(); Da(); b.roll = 0; w.hfov = 0; ha = !0; N = Date.now(); xa = f.x; ya = f.y; Oa = b.yaw; Pa = b.pitch; J.classList.add('pnlm-grabbing'); J.classList.remove('pnlm-grab'); B('mousedown', a); F()
            }
        } function Ja(a) { b.minHfov === b.hfov ? da.setHfov(ra, 1E3) : (a = ta(a), da.lookAt(a[0], a[1], b.minHfov, 1E3)) } function ta(a) {
            var f = Q(a); a = C.getCanvas(); var n = a.clientWidth; var c = a.clientHeight; a = f.x / n * 2 -
                1; var c = (1 - f.y / c * 2) * c / n; const e = 1 / Math.tan(b.hfov * Math.PI / 360); const d = Math.sin(b.pitch * Math.PI / 180); const g = Math.cos(b.pitch * Math.PI / 180); var f = e * g - c * d; var n = Math.sqrt(a * a + f * f); var c = 180 * Math.atan((c * g + e * d) / n) / Math.PI; a = 180 * Math.atan2(a / n, f / n) / Math.PI + b.yaw; a < -180 && (a += 360); a > 180 && (a -= 360); return [c, a]
        } function ua(a) {
            if (ha && G) {
                N = Date.now(); var f = C.getCanvas(); let n = f.clientWidth; var f = f.clientHeight; a = Q(a); const c = 180 * (Math.atan(xa / n * 2 - 1) - Math.atan(a.x / n * 2 - 1)) / Math.PI * b.hfov / 90 + Oa; w.yaw = (c - b.yaw) % 360 * 0.2; b.yaw = c; n = 360 * Math.atan(Math.tan(b.hfov /
                    360 * Math.PI) * f / n) / Math.PI; n = 180 * (Math.atan(a.y / f * 2 - 1) - Math.atan(ya / f * 2 - 1)) / Math.PI * n / 90 + Pa; w.pitch = 0.2 * (n - b.pitch); b.pitch = n
            }
        } function ma(a) { ha && (ha = !1, Date.now() - N > 15 && (w.pitch = w.yaw = 0), J.classList.add('pnlm-grab'), J.classList.remove('pnlm-grabbing'), N = Date.now(), B('mouseup', a)) } function Ka(a) {
            if (G && b.draggable) {
                t(); Da(); b.roll = 0; w.hfov = 0; const f = Q(a.targetTouches[0]); xa = f.x; ya = f.y; if (a.targetTouches.length == 2) {
                    const n = Q(a.targetTouches[1]); xa += 0.5 * (n.x - f.x); ya += 0.5 * (n.y - f.y); Ha = Math.sqrt((f.x - n.x) *
                        (f.x - n.x) + (f.y - n.y) * (f.y - n.y))
                } ha = !0; N = Date.now(); Oa = b.yaw; Pa = b.pitch; B('touchstart', a); F()
            }
        } function la(a) {
            if (b.draggable && (a.preventDefault(), G && (N = Date.now()), ha && G)) {
                let f = Q(a.targetTouches[0]); let n = f.x; let c = f.y; a.targetTouches.length == 2 && Ha != -1 && (a = Q(a.targetTouches[1]), n += 0.5 * (a.x - f.x), c += 0.5 * (a.y - f.y), f = Math.sqrt((f.x - a.x) * (f.x - a.x) + (f.y - a.y) * (f.y - a.y)), x(b.hfov + 0.1 * (Ha - f)), Ha = f); f = b.hfov / 360 * b.touchPanSpeedCoeffFactor; n = (xa - n) * f + Oa; w.yaw = (n - b.yaw) % 360 * 0.2; b.yaw = n; c = (c - ya) * f + Pa; w.pitch = 0.2 * (c - b.pitch)
                b.pitch = c
            }
        } function Ea() { ha = !1; Date.now() - N > 150 && (w.pitch = w.yaw = 0); Ha = -1; N = Date.now(); B('touchend', event) } function A(a) { a.pointerType == 'touch' && G && b.draggable && (ia.push(a.pointerId), za.push({ clientX: a.clientX, clientY: a.clientY }), a.targetTouches = za, Ka(a), a.preventDefault()) } function c(a) { if (a.pointerType == 'touch' && b.draggable) for (let f = 0; f < ia.length; f++) if (a.pointerId == ia[f]) { za[f].clientX = a.clientX; za[f].clientY = a.clientY; a.targetTouches = za; la(a); a.preventDefault(); break } } function a(a) {
            if (a.pointerType ==
                'touch') { for (var b = !1, n = 0; n < ia.length; n++)a.pointerId == ia[n] && (ia[n] = p), ia[n] && (b = !0); b || (ia = [], za = [], Ea()); a.preventDefault() }
        } function U(a) { G && (b.mouseZoom != 'fullscreenonly' || Aa) && (a.preventDefault(), t(), N = Date.now(), a.wheelDeltaY ? (x(b.hfov - 0.05 * a.wheelDeltaY), w.hfov = a.wheelDelta < 0 ? 1 : -1) : a.wheelDelta ? (x(b.hfov - 0.05 * a.wheelDelta), w.hfov = a.wheelDelta < 0 ? 1 : -1) : a.detail && (x(b.hfov + 1.5 * a.detail), w.hfov = a.detail > 0 ? 1 : -1), F()) } function V(a) {
            t(); N = Date.now(); Da(); b.roll = 0; const f = a.which || a.keycode; b.capturedKeyNumbers.indexOf(f) <
                0 || (a.preventDefault(), f == 27 ? Aa && h() : wa(f, !0))
        } function $() { for (let a = 0; a < 10; a++)r[a] = !1 } function R(a) { const f = a.which || a.keycode; b.capturedKeyNumbers.indexOf(f) < 0 || (a.preventDefault(), wa(f, !1)) } function wa(a, b) {
            let n = !1; switch (a) {
                    case 109: case 189: case 17: case 173: r[0] != b && (n = !0); r[0] = b; break; case 107: case 187: case 16: case 61: r[1] != b && (n = !0); r[1] = b; break; case 38: r[2] != b && (n = !0); r[2] = b; break; case 87: r[6] != b && (n = !0); r[6] = b; break; case 40: r[3] != b && (n = !0); r[3] = b; break; case 83: r[7] !=
                    b && (n = !0); r[7] = b; break; case 37: r[4] != b && (n = !0); r[4] = b; break; case 65: r[8] != b && (n = !0); r[8] = b; break; case 39: r[5] != b && (n = !0); r[5] = b; break; case 68: r[9] != b && (n = !0), r[9] = b
            }n && b && (ba = typeof performance !== 'undefined' && performance.now() ? performance.now() : Date.now(), F())
        } function ga() {
            if (G) {
                var a = !1; let f = b.pitch; let n = b.yaw; let c = b.hfov; let e; e = typeof performance !== 'undefined' && performance.now() ? performance.now() : Date.now(); ba === p && (ba = e); var d = (e - ba) * b.hfov / 1700; var d = Math.min(d, 1); r[0] && !0 === b.keyboardZoom && (x(b.hfov + (0.8 * w.hfov +
                    0.5) * d), a = !0); r[1] && !0 === b.keyboardZoom && (x(b.hfov + (0.8 * w.hfov - 0.2) * d), a = !0); if (r[2] || r[6]) b.pitch += (0.8 * w.pitch + 0.2) * d, a = !0; if (r[3] || r[7]) b.pitch += (0.8 * w.pitch - 0.2) * d, a = !0; if (r[4] || r[8]) b.yaw += (0.8 * w.yaw - 0.2) * d, a = !0; if (r[5] || r[9]) b.yaw += (0.8 * w.yaw + 0.2) * d, a = !0; a && (N = Date.now()); if (b.autoRotate) {
                    if (e - ba > 0.001) { var a = (e - ba) / 1E3; var g = (w.yaw / a * d - 0.2 * b.autoRotate) * a; var g = (-b.autoRotate > 0 ? 1 : -1) * Math.min(Math.abs(b.autoRotate * a), Math.abs(g)); b.yaw += g } b.autoRotateStopDelay && (b.autoRotateStopDelay -= e - ba, b.autoRotateStopDelay <= 0 &&
                            (b.autoRotateStopDelay = !1, Z = b.autoRotate, b.autoRotate = 0))
                } O.pitch && (m('pitch'), f = b.pitch); O.yaw && (m('yaw'), n = b.yaw); O.hfov && (m('hfov'), c = b.hfov); d > 0 && !b.autoRotate && (a = 1 - b.friction, r[4] || r[5] || r[8] || r[9] || O.yaw || (b.yaw += w.yaw * d * a), r[2] || r[3] || r[6] || r[7] || O.pitch || (b.pitch += w.pitch * d * a), r[0] || r[1] || O.hfov || x(b.hfov + w.hfov * d * a)); ba = e; d > 0 && (w.yaw = 0.8 * w.yaw + (b.yaw - n) / d * 0.2, w.pitch = 0.8 * w.pitch + (b.pitch - f) / d * 0.2, w.hfov = 0.8 * w.hfov + (b.hfov - c) / d * 0.2, f = b.autoRotate ? Math.abs(b.autoRotate) : 5, w.yaw = Math.min(f,
                    Math.max(w.yaw, -f)), w.pitch = Math.min(f, Math.max(w.pitch, -f)), w.hfov = Math.min(f, Math.max(w.hfov, -f))); r[0] && r[1] && (w.hfov = 0); (r[2] || r[6]) && (r[3] || r[7]) && (w.pitch = 0); (r[4] || r[8]) && (r[5] || r[9]) && (w.yaw = 0)
            }
        } function m(a) {
            const f = O[a]; var n = Math.min(1, Math.max((Date.now() - f.startTime) / 1E3 / (f.duration / 1E3), 0)); var n = f.startPosition + b.animationTimingFunction(n) * (f.endPosition - f.startPosition); if (f.endPosition > f.startPosition && n >= f.endPosition || f.endPosition < f.startPosition && n <= f.endPosition || f.endPosition === f.startPosition) {
                n =
                    f.endPosition, w[a] = 0, delete O[a]
            } b[a] = n
        } function z() { d('resize') } function F() { Ta || (Ta = !0, ca()) } function ca() {
            if (!Za) {
                if (Fa(), Qa && clearTimeout(Qa), ha || !0 === X) requestAnimationFrame(ca); else if (r[0] || r[1] || r[2] || r[3] || r[4] || r[5] || r[6] || r[7] || r[8] || r[9] || b.autoRotate || O.pitch || O.yaw || O.hfov || Math.abs(w.yaw) > 0.01 || Math.abs(w.pitch) > 0.01 || Math.abs(w.hfov) > 0.01) ga(), b.autoRotateInactivityDelay >= 0 && Z && Date.now() - N > b.autoRotateInactivityDelay && !b.autoRotate && (b.autoRotate = Z, da.lookAt(Ga, p, ra, 3E3)), requestAnimationFrame(ca)
                else if (C && (C.isLoading() || !0 === b.dynamic && Ma)) requestAnimationFrame(ca); else { B('animatefinished', { pitch: da.getPitch(), yaw: da.getYaw(), hfov: da.getHfov() }); Ta = !1; ba = p; const a = b.autoRotateInactivityDelay - (Date.now() - N); a > 0 ? Qa = setTimeout(function () { b.autoRotate = Z; da.lookAt(Ga, p, ra, 3E3); F() }, a) : b.autoRotateInactivityDelay >= 0 && Z && (b.autoRotate = Z, da.lookAt(Ga, p, ra, 3E3), F()) }
            }
        } function Fa() {
            let a; if (G) {
                let f = C.getCanvas(); !1 !== b.autoRotate && (b.yaw > 360 ? b.yaw -= 360 : b.yaw < -360 && (b.yaw += 360)); a = b.yaw; let n = 0; if (b.avoidShowingBackground) {
                    var c =
                        b.hfov / 2; var d = 180 * Math.atan2(Math.tan(c / 180 * Math.PI), f.width / f.height) / Math.PI; b.vaov > b.haov ? Math.min(Math.cos((b.pitch - c) / 180 * Math.PI), Math.cos((b.pitch + c) / 180 * Math.PI)) : n = c * (1 - Math.min(Math.cos((b.pitch - d) / 180 * Math.PI), Math.cos((b.pitch + d) / 180 * Math.PI)))
                } var c = b.maxYaw - b.minYaw; var d = -180; let e = 180; c < 360 && (d = b.minYaw + b.hfov / 2 + n, e = b.maxYaw - b.hfov / 2 - n, c < b.hfov && (d = e = (d + e) / 2), b.yaw = Math.max(d, Math.min(e, b.yaw))); !1 === b.autoRotate && (b.yaw > 360 ? b.yaw -= 360 : b.yaw < -360 && (b.yaw += 360)); !1 !== b.autoRotate && a != b.yaw && ba !==
                    p && (b.autoRotate *= -1); a = 2 * Math.atan(Math.tan(b.hfov / 180 * Math.PI * 0.5) / (f.width / f.height)) / Math.PI * 180; f = b.minPitch + a / 2; n = b.maxPitch - a / 2; b.maxPitch - b.minPitch < a && (f = n = (f + n) / 2); isNaN(f) && (f = -90); isNaN(n) && (n = 90); b.pitch = Math.max(f, Math.min(n, b.pitch)); C.render(b.pitch * Math.PI / 180, b.yaw * Math.PI / 180, b.hfov * Math.PI / 180, { roll: b.roll * Math.PI / 180 }); b.hotSpots.forEach(Ca); b.compass && (Ia.style.transform = 'rotate(' + (-b.yaw - b.northOffset) + 'deg)', Ia.style.webkitTransform = 'rotate(' + (-b.yaw - b.northOffset) + 'deg)')
            }
        }
        function Y(a, b, c, d) { this.w = a; this.x = b; this.y = c; this.z = d } function na(a) {
            let f; f = a.alpha; let c = a.beta; a = a.gamma; c = [c ? c * Math.PI / 180 / 2 : 0, a ? a * Math.PI / 180 / 2 : 0, f ? f * Math.PI / 180 / 2 : 0]; f = [Math.cos(c[0]), Math.cos(c[1]), Math.cos(c[2])]; c = [Math.sin(c[0]), Math.sin(c[1]), Math.sin(c[2])]; f = new Y(f[0] * f[1] * f[2] - c[0] * c[1] * c[2], c[0] * f[1] * f[2] - f[0] * c[1] * c[2], f[0] * c[1] * f[2] + c[0] * f[1] * c[2], f[0] * f[1] * c[2] + c[0] * c[1] * f[2]); f = f.multiply(new Y(Math.sqrt(0.5), -Math.sqrt(0.5), 0, 0)); c = E.orientation
                ? -E.orientation * Math.PI / 180 / 2
                : 0; f = f.multiply(new Y(Math.cos(c), 0, -Math.sin(c), 0)).toEulerAngles(); typeof X === 'number' && X < 10 ? X += 1 : X === 10 ? ($a = f[2] / Math.PI * 180 + b.yaw, X = !0, requestAnimationFrame(ca)) : (b.pitch = f[0] / Math.PI * 180, b.roll = -f[1] / Math.PI * 180, b.yaw = -f[2] / Math.PI * 180 + $a)
        } function va() {
            try {
                const a = {}; b.horizonPitch !== p && (a.horizonPitch = b.horizonPitch * Math.PI / 180); b.horizonRoll !== p && (a.horizonRoll = b.horizonRoll * Math.PI / 180); b.backgroundColor !== p && (a.backgroundColor = b.backgroundColor); C.init(P, b.type, b.dynamic, b.haov * Math.PI / 180,
                    b.vaov * Math.PI / 180, b.vOffset * Math.PI / 180, S, a); !0 !== b.dynamic && (P = p)
            } catch (f) { if (f.type == 'webgl error' || f.type == 'no webgl') K(); else if (f.type == 'webgl size error') K(b.strings.textureSizeError.replace('%s', f.width).replace('%s', f.maxWidth)); else throw K(b.strings.unknownError), f }
        } function S() {
            if (b.sceneFadeDuration && C.fadeImg !== p) { C.fadeImg.style.opacity = 0; const a = C.fadeImg; delete C.fadeImg; setTimeout(function () { M.removeChild(a); B('scenechangefadedone') }, b.sceneFadeDuration) } Ia.style.display = b.compass
                ? 'inline'
                : 'none'; L(); q.load.box.style.display = 'none'; sa !== p && (M.removeChild(sa), sa = p); G = !0; B('load'); F()
        } function La(a) {
            a.pitch = Number(a.pitch) || 0; a.yaw = Number(a.yaw) || 0; const f = g.createElement('div'); f.className = 'pnlm-hotspot-base'; f.className = a.cssClass ? f.className + (' ' + a.cssClass) : f.className + (' pnlm-hotspot pnlm-sprite pnlm-' + D(a.type)); const c = g.createElement('span'); a.text && (c.innerHTML = D(a.text)); let d; if (a.video) {
                d = g.createElement('video'); var e = a.video; b.basePath && !qa(e) && (e = b.basePath + e); d.src =
                    I(e); d.controls = !0; d.style.width = a.width + 'px'; M.appendChild(f); c.appendChild(d)
            } else if (a.image) { e = a.image; b.basePath && !qa(e) && (e = b.basePath + e); d = g.createElement('a'); d.href = I(a.URL ? a.URL : e, !0); d.target = '_blank'; c.appendChild(d); const h = g.createElement('img'); h.src = I(e); h.style.width = a.width + 'px'; h.style.paddingTop = '5px'; M.appendChild(f); d.appendChild(h); c.style.maxWidth = 'initial' } else if (a.URL) {
                d = g.createElement('a'); d.href = I(a.URL, !0); if (a.attributes) for (e in a.attributes) d.setAttribute(e, a.attributes[e])
                else d.target = '_blank'; M.appendChild(d); f.className += ' pnlm-pointer'; c.className += ' pnlm-pointer'; d.appendChild(f)
            } else a.sceneId && (f.onclick = f.ontouchend = function () { f.clicked || (f.clicked = !0, y(a.sceneId, a.targetPitch, a.targetYaw, a.targetHfov)); return !1 }, f.className += ' pnlm-pointer', c.className += ' pnlm-pointer'), M.appendChild(f); if (a.createTooltipFunc) a.createTooltipFunc(f, a.createTooltipArgs); else if (a.text || a.video || a.image) {
                f.classList.add('pnlm-tooltip'), f.appendChild(c), c.style.width = c.scrollWidth -
                    20 + 'px', c.style.marginLeft = -(c.scrollWidth - f.offsetWidth) / 2 + 'px', c.style.marginTop = -c.scrollHeight - 12 + 'px'
            } a.clickHandlerFunc && (f.addEventListener('click', function (b) { a.clickHandlerFunc(b, a.clickHandlerArgs) }, 'false'), f.className += ' pnlm-pointer', c.className += ' pnlm-pointer'); a.div = f
        } function L() { Ua || (b.hotSpots ? (b.hotSpots = b.hotSpots.sort(function (a, b) { return a.pitch < b.pitch }), b.hotSpots.forEach(La)) : b.hotSpots = [], Ua = !0, b.hotSpots.forEach(Ca)) } function e() {
            const a = b.hotSpots; Ua = !1; delete b.hotSpots
            if (a) for (let f = 0; f < a.length; f++) { let c = a[f].div; if (c) { for (; c.parentNode && c.parentNode != M;)c = c.parentNode; M.removeChild(c) } delete a[f].div }
        } function Ca(a) {
            var f = Math.sin(a.pitch * Math.PI / 180); var c = Math.cos(a.pitch * Math.PI / 180); var d = Math.sin(b.pitch * Math.PI / 180); const e = Math.cos(b.pitch * Math.PI / 180); const g = Math.cos((-a.yaw + b.yaw) * Math.PI / 180); const h = f * d + c * g * e; if (a.yaw <= 90 && a.yaw > -90 && h <= 0 || (a.yaw > 90 || a.yaw <= -90) && h <= 0) a.div.style.visibility = 'hidden'; else {
                const l = Math.sin((-a.yaw + b.yaw) * Math.PI / 180); const k = Math.tan(b.hfov * Math.PI /
                    360); a.div.style.visibility = 'visible'; var m = C.getCanvas(); let p = m.clientWidth; var m = m.clientHeight; var f = [-p / k * l * c / h / 2, -p / k * (f * e - c * g * d) / h / 2]; var c = Math.sin(b.roll * Math.PI / 180); var d = Math.cos(b.roll * Math.PI / 180); var f = [f[0] * d - f[1] * c, f[0] * c + f[1] * d]; f[0] += (p - a.div.offsetWidth) / 2; f[1] += (m - a.div.offsetHeight) / 2; p = 'translate(' + f[0] + 'px, ' + f[1] + 'px) translateZ(9999px) rotate(' + b.roll + 'deg)'; a.scale && (p += ' scale(' + ra / b.hfov / h + ')'); a.div.style.webkitTransform = p; a.div.style.MozTransform = p; a.div.style.transform = p
            }
        } function H(a) {
            b =
                {}; let f; let c; const d = 'haov vaov vOffset northOffset horizonPitch horizonRoll'.split(' '); aa = []; for (f in Va) Va.hasOwnProperty(f) && (b[f] = Va[f]); for (f in k.default) if (k.default.hasOwnProperty(f)) if (f == 'strings') for (c in k.default.strings) k.default.strings.hasOwnProperty(c) && (b.strings[c] = D(k.default.strings[c])); else b[f] = k.default[f], d.indexOf(f) >= 0 && aa.push(f); if (a !== null && a !== '' && k.scenes && k.scenes[a]) {
                const e = k.scenes[a]; for (f in e) {
                    if (e.hasOwnProperty(f)) {
                        if (f == 'strings') {
                            for (c in e.strings) {
                                e.strings.hasOwnProperty(c) &&
                                        (b.strings[c] = D(e.strings[c]))
                            }
                        } else b[f] = e[f], d.indexOf(f) >= 0 && aa.push(f)
                    }
                } b.scene = a
            } for (f in k) if (k.hasOwnProperty(f)) if (f == 'strings') for (c in k.strings) k.strings.hasOwnProperty(c) && (b.strings[c] = D(k.strings[c])); else b[f] = k[f], d.indexOf(f) >= 0 && aa.push(f)
        } function l(a) {
            if ((a = a || !1) && 'preview' in b) { var c = b.preview; b.basePath && !qa(c) && (c = b.basePath + c); sa = g.createElement('div'); sa.className = 'pnlm-preview-img'; sa.style.backgroundImage = 'url(\'' + I(c).replace(/"/g, '%22').replace(/'/g, '%27') + '\')'; M.appendChild(sa) } var c =
                b.title; const d = b.author; a && ('previewTitle' in b && (b.title = b.previewTitle), 'previewAuthor' in b && (b.author = b.previewAuthor)); b.hasOwnProperty('title') || (q.title.innerHTML = ''); b.hasOwnProperty('author') || (q.author.innerHTML = ''); b.hasOwnProperty('title') || b.hasOwnProperty('author') || (q.container.style.display = 'none'); v.load.innerHTML = '<p>' + b.strings.loadButtonLabel + '</p>'; q.load.boxp.innerHTML = b.strings.loadingLabel; for (const e in b) {
                if (b.hasOwnProperty(e)) {
                    switch (e) {
                            case 'title': q.title.innerHTML = D(b[e]); q.container.style.display =
                                'inline'; break; case 'author': var h = D(b[e]); b.authorURL && (h = g.createElement('a'), h.href = I(b.authorURL, !0), h.target = '_blank', h.innerHTML = D(b[e]), h = h.outerHTML); q.author.innerHTML = b.strings.bylineLabel.replace('%s', h); q.container.style.display = 'inline'; break; case 'fallback': h = g.createElement('a'); h.href = I(b[e], !0); h.target = '_blank'; h.textContent = 'Click here to view this panorama in an alternative viewer.'; var k = g.createElement('p'); k.textContent = 'Your browser does not support WebGL.'; k.appendChild(g.createElement('br'))
                                k.appendChild(h); q.errorMsg.innerHTML = ''; q.errorMsg.appendChild(k); break; case 'hfov': x(Number(b[e])); break; case 'autoLoad': !0 === b[e] && C === p && (q.load.box.style.display = 'inline', v.load.style.display = 'none', oa()); break; case 'showZoomCtrl': v.zoom.style.display = b[e] && !1 != b.showControls ? 'block' : 'none'; break; case 'showFullscreenCtrl': v.fullscreen.style.display = b[e] && !1 != b.showControls && ('fullscreen' in g || 'mozFullScreen' in g || 'webkitIsFullScreen' in g || 'msFullscreenElement' in g) ? 'block' : 'none'; break; case 'hotSpotDebug': Wa.style.display =
                                    b[e] ? 'block' : 'none'; break; case 'showControls': b[e] || (v.orientation.style.display = 'none', v.zoom.style.display = 'none', v.fullscreen.style.display = 'none'); break; case 'orientationOnByDefault': b[e] && Ra()
                    }
                }
            } a && (c ? b.title = c : delete b.title, d ? b.author = d : delete b.author)
        } function h() {
            if (G && !Na) {
                if (Aa) g.exitFullscreen ? g.exitFullscreen() : g.mozCancelFullScreen ? g.mozCancelFullScreen() : g.webkitCancelFullScreen ? g.webkitCancelFullScreen() : g.msExitFullscreen && g.msExitFullscreen(); else {
                    try {
                        s.requestFullscreen
                            ? s.requestFullscreen()
                            : s.mozRequestFullScreen ? s.mozRequestFullScreen() : s.msRequestFullscreen ? s.msRequestFullscreen() : s.webkitRequestFullScreen()
                    } catch (a) { }
                }
            }
        } function d(a) { g.fullscreenElement || g.fullscreen || g.mozFullScreen || g.webkitIsFullScreen || g.msFullscreenElement ? (v.fullscreen.classList.add('pnlm-fullscreen-toggle-button-active'), Aa = !0) : (v.fullscreen.classList.remove('pnlm-fullscreen-toggle-button-active'), Aa = !1); a !== 'resize' && B('fullscreenchange', Aa); C.resize(); x(b.hfov); F() } function u(a) {
            let c = b.minHfov; b.type ==
                'multires' && C && !b.multiResMinHfov && (c = Math.min(c, C.getCanvas().width / (b.multiRes.cubeResolution / 90 * 0.9))); if (c > b.maxHfov) return console.log('HFOV bounds do not make sense (minHfov > maxHfov).'), b.hfov; var d = b.hfov; var d = a < c ? c : a > b.maxHfov ? b.maxHfov : a; b.avoidShowingBackground && C && (a = C.getCanvas(), d = Math.min(d, 360 * Math.atan(Math.tan((b.maxPitch - b.minPitch) / 360 * Math.PI) / a.height * a.width) / Math.PI)); return d
        } function x(a) { b.hfov = u(a); B('zoomchange', b.hfov) } function t() {
            O = {}; Z = b.autoRotate ? b.autoRotate : Z; b.autoRotate =
                !1
        } function Ya() { Na && (q.load.box.style.display = 'none', q.errorMsg.style.display = 'none', Na = !1, M.style.display = 'block', B('errorcleared')); G = !1; v.load.style.display = 'none'; q.load.box.style.display = 'inline'; oa() } function y(a, c, d, h, g) {
            G || (g = !0); G = !1; O = {}; let m, q; if (b.sceneFadeDuration && !g && (m = C.render(b.pitch * Math.PI / 180, b.yaw * Math.PI / 180, b.hfov * Math.PI / 180, { returnImage: !0 }), m !== p)) {
                g = new Image(); g.className = 'pnlm-fade-img'; g.style.transition = 'opacity ' + b.sceneFadeDuration / 1E3 + 's'; g.style.width = '100%'; g.style.height =
                    '100%'; g.onload = function () { y(a, c, d, h, !0) }; g.src = m; M.appendChild(g); C.fadeImg = g; return
            } g = c === 'same' ? b.pitch : c; m = d === 'same' ? b.yaw : d === 'sameAzimuth' ? b.yaw + (b.northOffset || 0) - (k.scenes[a].northOffset || 0) : d; q = h === 'same' ? b.hfov : h; e(); H(a); w.yaw = w.pitch = w.hfov = 0; l(); g !== p && (b.pitch = g); m !== p && (b.yaw = m); q !== p && (b.hfov = q); B('scenechange', a); Ya()
        } function Da() { E.removeEventListener('deviceorientation', na); v.orientation.classList.remove('pnlm-orientation-button-active'); X = !1 } function Ra() {
            typeof DeviceMotionEvent.requestPermission === 'function'
                ? DeviceOrientationEvent.requestPermission().then(function (a) { a == 'granted' && (X = 1, E.addEventListener('deviceorientation', na), v.orientation.classList.add('pnlm-orientation-button-active')) })
                : (X = 1, E.addEventListener('deviceorientation', na), v.orientation.classList.add('pnlm-orientation-button-active'))
        } function D(a) {
            return k.escapeHTML
                ? String(a).split(/&/g).join('&amp;').split('"').join('&quot;').split('\'').join('&#39;').split('<').join('&lt;').split('>').join('&gt;').split('/').join('&#x2f;').split('\n').join('<br>')
                : String(a).split('\n').join('<br>')
        } function I(a, b) { try { var c = decodeURIComponent(ab(a)).replace(/[^\w:]/g, '').toLowerCase() } catch (d) { return 'about:blank' } return c.indexOf('javascript:') === 0 || c.indexOf('vbscript:') === 0 ? (console.log('Script URL removed.'), 'about:blank') : b && c.indexOf('data:') === 0 ? (console.log('Data URI removed from link.'), 'about:blank') : a } function ab(a) {
            return a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (a, b) {
                b = b.toLowerCase(); return b === 'colon'
                    ? ':'
                    : b.charAt(0) === '#'
                        ? b.charAt(1) === 'x' ? String.fromCharCode(parseInt(b.substring(2), 16)) : String.fromCharCode(+b.substring(1))
                        : ''
            })
        } function B(a) { if (a in T) for (let b = T[a].length; b > 0; b--)T[a][T[a].length - b].apply(null, [].slice.call(arguments, 1)) } var da = this; let b; let C; let sa; var ha = !1; var N = Date.now(); var xa = 0; var ya = 0; var Ha = -1; var Oa = 0; var Pa = 0; var r = Array(10); var Aa = !1; let G; var Na = !1; var Sa = !1; let P; let ba; var w = { yaw: 0, pitch: 0, hfov: 0 }; var Ta = !1; var X = !1; var $a = 0; let Qa; var Z = 0; let ra; let Ga; var O = {}; var T = {}; var aa = []; var Ma = !1; var Ua = !1; var Za = !1; var Va = {
            hfov: 100,
            minHfov: 50,
            multiResMinHfov: !1,
            maxHfov: 120,
            pitch: 0,
            minPitch: p,
            maxPitch: p,
            yaw: 0,
            minYaw: -180,
            maxYaw: 180,
            roll: 0,
            haov: 360,
            vaov: 180,
            vOffset: 0,
            autoRotate: !1,
            autoRotateInactivityDelay: -1,
            autoRotateStopDelay: p,
            type: 'equirectangular',
            northOffset: 0,
            showFullscreenCtrl: !0,
            dynamic: !1,
            dynamicUpdate: !1,
            doubleClickZoom: !0,
            keyboardZoom: !0,
            mouseZoom: !0,
            showZoomCtrl: !0,
            autoLoad: !1,
            showControls: !0,
            orientationOnByDefault: !1,
            hotSpotDebug: !1,
            backgroundColor: [0, 0, 0],
            avoidShowingBackground: !1,
            animationTimingFunction: function (a) { return a < 0.5 ? 2 * a * a : -1 + (4 - 2 * a) * a },
            draggable: !0,
            disableKeyboardCtrl: !1,
            crossOrigin: 'anonymous',
            touchPanSpeedCoeffFactor: 1,
            capturedKeyNumbers: [16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173, 187, 189],
            friction: 0.15,
            strings: {
                loadButtonLabel: 'Click to<br>Load<br>Panorama',
                loadingLabel: 'Loading...',
                bylineLabel: 'by %s',
                noPanoramaError: 'No panorama image was specified.',
                fileAccessError: 'The file %s could not be accessed.',
                malformedURLError: 'There is something wrong with the panorama URL.',
                iOS8WebGLError: 'Due to iOS 8\'s broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).',
                genericWebGLError: 'Your browser does not have the necessary WebGL support to display this panorama.',
                textureSizeError: 'This panorama is too big for your device! It\'s %spx wide, but your device only supports images up to %spx wide. Try another device. (If you\'re the author, try scaling down the image.)',
                unknownError: 'Unknown error. Check developer console.'
            }
        }; s = typeof s === 'string' ? g.getElementById(s) : s; s.classList.add('pnlm-container'); s.tabIndex = 0; var J = g.createElement('div'); J.className = 'pnlm-ui'
        s.appendChild(J); var M = g.createElement('div'); M.className = 'pnlm-render-container'; s.appendChild(M); var W = g.createElement('div'); W.className = 'pnlm-dragfix'; J.appendChild(W); var fa = g.createElement('span'); fa.className = 'pnlm-about-msg'; fa.innerHTML = '<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.5.6'; J.appendChild(fa); W.addEventListener('contextmenu', ja); var q = {}; var Wa = g.createElement('div'); Wa.className = 'pnlm-sprite pnlm-hot-spot-debug-indicator'; J.appendChild(Wa); q.container = g.createElement('div')
        q.container.className = 'pnlm-panorama-info'; q.title = g.createElement('div'); q.title.className = 'pnlm-title-box'; q.container.appendChild(q.title); q.author = g.createElement('div'); q.author.className = 'pnlm-author-box'; q.container.appendChild(q.author); J.appendChild(q.container); q.load = {}; q.load.box = g.createElement('div'); q.load.box.className = 'pnlm-load-box'; q.load.boxp = g.createElement('p'); q.load.box.appendChild(q.load.boxp); q.load.lbox = g.createElement('div'); q.load.lbox.className = 'pnlm-lbox'; q.load.lbox.innerHTML =
            '<div class="pnlm-loading"></div>'; q.load.box.appendChild(q.load.lbox); q.load.lbar = g.createElement('div'); q.load.lbar.className = 'pnlm-lbar'; q.load.lbarFill = g.createElement('div'); q.load.lbarFill.className = 'pnlm-lbar-fill'; q.load.lbar.appendChild(q.load.lbarFill); q.load.box.appendChild(q.load.lbar); q.load.msg = g.createElement('p'); q.load.msg.className = 'pnlm-lmsg'; q.load.box.appendChild(q.load.msg); J.appendChild(q.load.box); q.errorMsg = g.createElement('div'); q.errorMsg.className = 'pnlm-error-msg pnlm-info-box'
        J.appendChild(q.errorMsg); var v = {}; v.container = g.createElement('div'); v.container.className = 'pnlm-controls-container'; J.appendChild(v.container); v.load = g.createElement('div'); v.load.className = 'pnlm-load-button'; v.load.addEventListener('click', function () { l(); Ya() }); J.appendChild(v.load); v.zoom = g.createElement('div'); v.zoom.className = 'pnlm-zoom-controls pnlm-controls'; v.zoomIn = g.createElement('div'); v.zoomIn.className = 'pnlm-zoom-in pnlm-sprite pnlm-control'; v.zoomIn.addEventListener('click', function () {
            G &&
                (x(b.hfov - 5), F())
        }); v.zoom.appendChild(v.zoomIn); v.zoomOut = g.createElement('div'); v.zoomOut.className = 'pnlm-zoom-out pnlm-sprite pnlm-control'; v.zoomOut.addEventListener('click', function () { G && (x(b.hfov + 5), F()) }); v.zoom.appendChild(v.zoomOut); v.container.appendChild(v.zoom); v.fullscreen = g.createElement('div'); v.fullscreen.addEventListener('click', h); v.fullscreen.className = 'pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control'; (g.fullscreenEnabled ||
            g.mozFullScreenEnabled || g.webkitFullscreenEnabled || g.msFullscreenEnabled) && v.container.appendChild(v.fullscreen); v.orientation = g.createElement('div'); v.orientation.addEventListener('click', function (a) { X ? Da() : Ra() }); v.orientation.addEventListener('mousedown', function (a) { a.stopPropagation() }); v.orientation.addEventListener('touchstart', function (a) { a.stopPropagation() }); v.orientation.addEventListener('pointerdown', function (a) { a.stopPropagation() }); v.orientation.className = 'pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control'
        let Xa = !1; E.DeviceOrientationEvent && location.protocol == 'https:' && navigator.userAgent.toLowerCase().indexOf('mobi') >= 0 && (v.container.appendChild(v.orientation), Xa = !0); var Ia = g.createElement('div'); Ia.className = 'pnlm-compass pnlm-controls pnlm-control'; J.appendChild(Ia); k.firstScene ? H(k.firstScene) : k.default && k.default.firstScene ? H(k.default.firstScene) : H(null); l(!0); var ia = []; var za = []; Y.prototype.multiply = function (a) {
            return new Y(this.w * a.w - this.x * a.x - this.y * a.y - this.z * a.z, this.x * a.w + this.w * a.x + this.y *
                a.z - this.z * a.y, this.y * a.w + this.w * a.y + this.z * a.x - this.x * a.z, this.z * a.w + this.w * a.z + this.x * a.y - this.y * a.x)
        }; Y.prototype.toEulerAngles = function () { const a = Math.atan2(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (this.x * this.x + this.y * this.y)); const b = Math.asin(2 * (this.w * this.y - this.z * this.x)); const c = Math.atan2(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (this.y * this.y + this.z * this.z)); return [a, b, c] }; this.isLoaded = function () { return Boolean(G) }; this.getPitch = function () { return b.pitch }; this.setPitch = function (a, c, d, e) {
            N = Date.now(); if (Math.abs(a - b.pitch) <=
                1E-6) return typeof d === 'function' && d(e), this; (c = c == p ? 1E3 : Number(c)) ? (O.pitch = { startTime: Date.now(), startPosition: b.pitch, endPosition: a, duration: c }, typeof d === 'function' && setTimeout(function () { d(e) }, c)) : b.pitch = a; F(); return this
        }; this.getPitchBounds = function () { return [b.minPitch, b.maxPitch] }; this.setPitchBounds = function (a) { b.minPitch = Math.max(-90, Math.min(a[0], 90)); b.maxPitch = Math.max(-90, Math.min(a[1], 90)); return this }; this.getYaw = function () { return (b.yaw + 540) % 360 - 180 }; this.setYaw = function (a,
            c, d, e) { N = Date.now(); if (Math.abs(a - b.yaw) <= 1E-6) return typeof d === 'function' && d(e), this; c = c == p ? 1E3 : Number(c); a = (a + 180) % 360 - 180; c ? (b.yaw - a > 180 ? a += 360 : a - b.yaw > 180 && (a -= 360), O.yaw = { startTime: Date.now(), startPosition: b.yaw, endPosition: a, duration: c }, typeof d === 'function' && setTimeout(function () { d(e) }, c)) : b.yaw = a; F(); return this }; this.getYawBounds = function () { return [b.minYaw, b.maxYaw] }; this.setYawBounds = function (a) { b.minYaw = Math.max(-360, Math.min(a[0], 360)); b.maxYaw = Math.max(-360, Math.min(a[1], 360)); return this }
        this.getHfov = function () { return b.hfov }; this.setHfov = function (a, c, d, e) { N = Date.now(); if (Math.abs(a - b.hfov) <= 1E-6) return typeof d === 'function' && d(e), this; (c = c == p ? 1E3 : Number(c)) ? (O.hfov = { startTime: Date.now(), startPosition: b.hfov, endPosition: u(a), duration: c }, typeof d === 'function' && setTimeout(function () { d(e) }, c)) : x(a); F(); return this }; this.getHfovBounds = function () { return [b.minHfov, b.maxHfov] }; this.setHfovBounds = function (a) { b.minHfov = Math.max(0, a[0]); b.maxHfov = Math.max(0, a[1]); return this }; this.lookAt = function (a,
            c, d, e, g, h) { e = e == p ? 1E3 : Number(e); a !== p && Math.abs(a - b.pitch) > 1E-6 && (this.setPitch(a, e, g, h), g = p); c !== p && Math.abs(c - b.yaw) > 1E-6 && (this.setYaw(c, e, g, h), g = p); d !== p && Math.abs(d - b.hfov) > 1E-6 && (this.setHfov(d, e, g, h), g = p); typeof g === 'function' && g(h); return this }; this.getNorthOffset = function () { return b.northOffset }; this.setNorthOffset = function (a) { b.northOffset = Math.min(360, Math.max(0, a)); F(); return this }; this.getHorizonRoll = function () { return b.horizonRoll }; this.setHorizonRoll = function (a) {
            b.horizonRoll = Math.min(90,
                Math.max(-90, a)); C.setPose(b.horizonPitch * Math.PI / 180, b.horizonRoll * Math.PI / 180); F(); return this
        }; this.getHorizonPitch = function () { return b.horizonPitch }; this.setHorizonPitch = function (a) { b.horizonPitch = Math.min(90, Math.max(-90, a)); C.setPose(b.horizonPitch * Math.PI / 180, b.horizonRoll * Math.PI / 180); F(); return this }; this.startAutoRotate = function (a, c) { a = a || Z || 1; c = c === p ? Ga : c; b.autoRotate = a; da.lookAt(c, p, ra, 3E3); F(); return this }; this.stopAutoRotate = function () {
            Z = b.autoRotate ? b.autoRotate : Z; b.autoRotate = !1; b.autoRotateInactivityDelay =
                    -1; return this
        }; this.stopMovement = function () { t(); w = { yaw: 0, pitch: 0, hfov: 0 } }; this.getRenderer = function () { return C }; this.setUpdate = function (a) { Ma = !0 === a; C === p ? pa() : F(); return this }; this.mouseEventToCoords = function (a) { return ta(a) }; this.loadScene = function (a, b, c, d) { !1 !== G && y(a, b, c, d); return this }; this.getScene = function () { return b.scene }; this.addScene = function (a, b) { k.scenes[a] = b; return this }; this.removeScene = function (a) { if (b.scene === a || !k.scenes.hasOwnProperty(a)) return !1; delete k.scenes[a]; return !0 }; this.toggleFullscreen =
                function () { h(); return this }; this.getConfig = function () { return b }; this.getContainer = function () { return s }; this.addHotSpot = function (a, c) { if (c === p && b.scene === p) b.hotSpots.push(a); else { const d = c !== p ? c : b.scene; if (k.scenes.hasOwnProperty(d)) k.scenes[d].hasOwnProperty('hotSpots') || (k.scenes[d].hotSpots = [], d == b.scene && (b.hotSpots = k.scenes[d].hotSpots)), k.scenes[d].hotSpots.push(a); else throw 'Invalid scene ID!' } if (c === p || b.scene == c) La(a), G && Ca(a); return this }; this.removeHotSpot = function (a, c) {
            if (c === p || b.scene ==
                        c) { if (!b.hotSpots) return !1; for (var d = 0; d < b.hotSpots.length; d++) if (b.hotSpots[d].hasOwnProperty('id') && b.hotSpots[d].id === a) { for (var e = b.hotSpots[d].div; e.parentNode != M;)e = e.parentNode; M.removeChild(e); delete b.hotSpots[d].div; b.hotSpots.splice(d, 1); return !0 } } else if (k.scenes.hasOwnProperty(c)) {
                if (!k.scenes[c].hasOwnProperty('hotSpots')) return !1; for (d = 0; d < k.scenes[c].hotSpots.length; d++) {
                    if (k.scenes[c].hotSpots[d].hasOwnProperty('id') && k.scenes[c].hotSpots[d].id === a) {
                        return k.scenes[c].hotSpots.splice(d,
                            1), !0
                    }
                }
            } else return !1
        }; this.resize = function () { C && z() }; this.isLoaded = function () { return G }; this.isOrientationSupported = function () { return Xa || !1 }; this.stopOrientation = function () { Da() }; this.startOrientation = function () { Xa && Ra() }; this.isOrientationActive = function () { return Boolean(X) }; this.on = function (a, b) { T[a] = T[a] || []; T[a].push(b); return this }; this.off = function (a, b) { if (!a) return T = {}, this; if (b) { const c = T[a].indexOf(b); c >= 0 && T[a].splice(c, 1); T[a].length == 0 && delete T[a] } else delete T[a]; return this }; this.destroy =
                    function () {
                        Za = !0; clearTimeout(Qa); C && C.destroy(); Sa && (g.removeEventListener('mousemove', ua, !1), g.removeEventListener('mouseup', ma, !1), s.removeEventListener('mozfullscreenchange', d, !1), s.removeEventListener('webkitfullscreenchange', d, !1), s.removeEventListener('msfullscreenchange', d, !1), s.removeEventListener('fullscreenchange', d, !1), E.removeEventListener('resize', z, !1), E.removeEventListener('orientationchange', z, !1), s.removeEventListener('keydown', V, !1), s.removeEventListener('keyup', R, !1), s.removeEventListener('blur',
                            $, !1), g.removeEventListener('mouseleave', ma, !1)); s.innerHTML = ''; s.classList.remove('pnlm-container')
                    }
    } return { viewer: function (g, k) { return new Ba(g, k) } }
}(window, document))
