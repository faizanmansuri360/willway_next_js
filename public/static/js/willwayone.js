/*! For license information please see main.min.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {
            48: (t, e, i) => {
                var n, s;
                i.r(e), i.d(e, {
                        CssClasses: () => n,
                        Strings: () => s
                    }),
                    function (t) {
                        t.ROOT = "glue-modal", t.CLOSE_BTN = "glue-modal__close-btn", t.CLOSING = "glue-modal-closing", t.OPEN = "glue-modal-open", t.NO_SCROLL = "glue-no-scroll", t.DARK = "glue-modal--dark"
                    }(n || (n = {})),
                    function (t) {
                        t.OPENED_EVENT = "GlueModal:opened", t.CLOSED_EVENT = "GlueModal:closed", t.CLOSE_MODAL_LABEL = "Close the modal"
                    }(s || (s = {}))
            },
            283: (t, e, i) => {
                i.d(e, {
                    Y: () => n
                });
                var n = {
                    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
                    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
                }
            },
            298: (t, e, i) => {
                i.d(e, {
                    O: () => d
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(4265),
                    r = i(1234),
                    a = i(1887),
                    l = i(7783);
                class d extends n.u {
                    constructor(t) {
                        var e;
                        super(t), this.statusChangeHandler = () => {
                            this.updateToggleAllStatus()
                        }, this.clickHandler = t => {
                            t.preventDefault(), this.toggleAll()
                        }, this.keydownHandler = t => {
                            this.handleKeydown(t)
                        }, this.keyupHandler = t => {
                            this.handleKeyup(t)
                        }, this.model = l.M.get(null === (e = this.root.closest(`.${a.s7.GROUP}`)) || void 0 === e ? void 0 : e.dataset[a.uB.KEY]), this.init()
                    }
                    init() {
                        this.addA11yFeatures(), this.root.addEventListener(o.EventType.CLICK, this.clickHandler), this.root.addEventListener(o.EventType.KEYDOWN, this.keydownHandler), this.root.addEventListener(o.EventType.KEYUP, this.keyupHandler), this.model.listen(a.f7.PANELGROUP_STATUS_CHANGED, this.statusChangeHandler)
                    }
                    destroy() {
                        this.removeA11yFeatures(), this.root.removeEventListener(o.EventType.CLICK, this.clickHandler), this.root.removeEventListener(o.EventType.KEYDOWN, this.keydownHandler), this.root.removeEventListener(o.EventType.KEYUP, this.keyupHandler), this.model.unlisten(a.f7.PANELGROUP_STATUS_CHANGED, this.statusChangeHandler)
                    }
                    toggleAll() {
                        this.model.panelsStatus === a.DH.EXPANDED ? this.model.dispatchEvent(a.f7.COLLAPSE_ALL_CONTENT) : this.model.dispatchEvent(a.f7.EXPAND_ALL_CONTENT), this.model.updatePanelsStatus()
                    }
                    handleKeydown(t) {
                        t.key !== r.U.ENTER && t.key !== r.U.SPACE || (t.preventDefault(), this.toggleAll())
                    }
                    handleKeyup(t) {
                        t.key === r.U.SPACE && t.preventDefault()
                    }
                    addA11yFeatures() {
                        this.root.setAttribute(s.Attribute.ARIA_EXPANDED, this.model.panelsStatus === a.DH.EXPANDED ? "true" : "false");
                        const t = Array.from(this.root.querySelectorAll(`.${a.s7.TOGGLE_ALL_TEXT}`));
                        for (const e of t) e.setAttribute(s.Attribute.ARIA_HIDDEN, "true")
                    }
                    removeA11yFeatures() {
                        this.root.removeAttribute(s.Attribute.ARIA_EXPANDED);
                        const t = Array.from(this.root.querySelectorAll(`.${a.s7.TOGGLE_ALL_TEXT}`));
                        for (const e of t) e.removeAttribute(s.Attribute.ARIA_HIDDEN)
                    }
                    updateToggleAllStatus() {
                        this.model.panelsStatus === a.DH.EXPANDED ? this.root.setAttribute(s.Attribute.ARIA_EXPANDED, "true") : this.root.setAttribute(s.Attribute.ARIA_EXPANDED, "false")
                    }
                }
            },
            321: (t, e, i) => {
                i.d(e, {
                    P: () => n,
                    Y: () => s
                });
                var n = {
                        ARIA_HIDDEN: "aria-hidden",
                        ROLE: "role"
                    },
                    s = {
                        HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
                        HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
                    }
            },
            336: (t, e, i) => {
                i.d(e, {
                    P$: () => n,
                    Y7: () => o,
                    nL: () => s
                });
                var n = {
                        NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
                    },
                    s = {
                        NOTCH_ELEMENT_PADDING: 8
                    },
                    o = {
                        NO_LABEL: "mdc-notched-outline--no-label",
                        OUTLINE_NOTCHED: "mdc-notched-outline--notched",
                        OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
                    }
            },
            361: (t, e, i) => {
                i.d(e, {
                    O: () => o
                });
                var n = i(1635),
                    s = i(6009),
                    o = function () {
                        function t(t, e) {
                            for (var i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
                            this.root = t, this.initialize.apply(this, (0, n.fX)([], (0, n.zs)(i))), this.foundation = void 0 === e ? this.getDefaultFoundation() : e, this.foundation.init(), this.initialSyncWithDOM()
                        }
                        return t.attachTo = function (e) {
                            return new t(e, new s.I({}))
                        }, t.prototype.initialize = function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                        }, t.prototype.getDefaultFoundation = function () {
                            throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
                        }, t.prototype.initialSyncWithDOM = function () {}, t.prototype.destroy = function () {
                            this.foundation.destroy()
                        }, t.prototype.listen = function (t, e, i) {
                            this.root.addEventListener(t, e, i)
                        }, t.prototype.unlisten = function (t, e, i) {
                            this.root.removeEventListener(t, e, i)
                        }, t.prototype.emit = function (t, e, i) {
                            var n;
                            void 0 === i && (i = !1), "function" == typeof CustomEvent ? n = new CustomEvent(t, {
                                bubbles: i,
                                detail: e
                            }) : (n = document.createEvent("CustomEvent")).initCustomEvent(t, i, !1, e), this.root.dispatchEvent(n)
                        }, t
                    }()
            },
            407: (t, e, i) => {
                i.d(e, {
                    m: () => d
                });
                var n = i(7341),
                    s = i(9688),
                    o = i(4829),
                    r = i(4265),
                    a = i(1234),
                    l = i(6442);
                class d extends n.u {
                    constructor(t, e) {
                        super(t), this.handleOpen = t => {
                            const e = t.target;
                            e instanceof HTMLElement && this.isTooltipChild(e) && this.open()
                        }, this.handleClose = t => {
                            const e = t.target;
                            e instanceof HTMLElement && this.isTooltipChild(e) && this.close()
                        }, this.handleKeyup = t => {
                            const e = t.target;
                            t.key === a.U.ESC && (e instanceof HTMLElement && this.content.contains(e) && this.trigger.focus(), this.close())
                        }, this.handleClick = t => {
                            const e = t.target;
                            e instanceof HTMLElement && !this.isTooltipChild(e) && this.close()
                        }, this.handleTransitionStart = () => {
                            this.content.classList.contains(l.s7.SHOW_TOOLTIP) && this.content.classList.add(l.s7.ANIMATION)
                        }, this.handleTransitionEnd = () => {
                            this.content.classList.contains(l.s7.SHOW_TOOLTIP) || this.content.classList.remove(l.s7.ANIMATION)
                        }, this.handleResize = () => {
                            this.setTooltipPosition()
                        };
                        let i = this.root.querySelector(`.${l.s7.TRIGGER}`);
                        if (!i) throw new Error(l.Kw.MISSING_TRIGGER);
                        if (this.trigger = i, i = this.root.querySelector(`.${l.s7.CONTENT}`), !i) throw new Error(l.Kw.MISSING_CONTENT); {
                            this.content = i, this.content.setAttribute(o.Attribute.ARIA_HIDDEN, "true");
                            const t = [this.content.id, this.trigger.getAttribute(o.Attribute.ARIA_CONTROLS)];
                            this.trigger.setAttribute(o.Attribute.ARIA_CONTROLS, t.join(" ").trim()), this.content.getAttribute(o.Attribute.ROLE) === o.Role.DIALOG && (this.content.tabIndex = o.TabIndex.TABBABLE)
                        }
                        this.options = this.getAttributeOptions(e), this.registerEvents()
                    }
                    isTooltipChild(t) {
                        return !(!this.trigger.contains(t) && !this.content.contains(t))
                    }
                    getAttributeOptions(t) {
                        const e = {},
                            i = this.root.dataset;
                        if (l.rC.AUTO_POSITION in i) {
                            let t;
                            if ("false" === i[l.rC.AUTO_POSITION]) t = !1;
                            else {
                                if ("true" !== i[l.rC.AUTO_POSITION]) throw new Error(l.Kw.INCORRECT_POSITION);
                                t = !0
                            }
                            e.autoPosition = t
                        }
                        return Object.assign({}, d.defaultOptions, t, e)
                    }
                    static get defaultOptions() {
                        return {
                            autoPosition: !0
                        }
                    }
                    registerEvents() {
                        this.root.addEventListener(r.EventType.MOUSEENTER, this.handleOpen, !0), this.root.addEventListener(r.EventType.FOCUS, this.handleOpen, !0), this.root.addEventListener(r.EventType.MOUSELEAVE, this.handleClose, !0), this.root.addEventListener(r.EventType.BLUR, this.handleClose, !0), document.addEventListener(r.EventType.KEYUP, this.handleKeyup), document.addEventListener(r.EventType.CLICK, this.handleClick), window.addEventListener(r.EventType.RESIZE, this.handleResize), this.content.addEventListener(r.EventType.TRANSITIONSTART, this.handleTransitionStart), this.content.addEventListener(r.EventType.TRANSITIONEND, this.handleTransitionEnd)
                    }
                    setTooltipPosition() {
                        if (!0 === this.options.autoPosition) {
                            const t = (0, s.H)(this.root, this.content, this.trigger, this.options.placement);
                            if (t) {
                                const [e, i] = t;
                                this.content.style.left = `${e}px`, this.content.style.top = `${i}px`
                            }
                        }
                    }
                    open() {
                        this.content.classList.contains(l.s7.SHOW_TOOLTIP) || (this.setTooltipPosition(), this.content.classList.add(l.s7.SHOW_TOOLTIP), this.content.setAttribute(o.Attribute.ARIA_HIDDEN, "false"), this.emit(l.up.SHOW_EVENT, {}, !0))
                    }
                    close() {
                        this.content.classList.contains(l.s7.SHOW_TOOLTIP) && (this.content.classList.remove(l.s7.SHOW_TOOLTIP), this.content.setAttribute(o.Attribute.ARIA_HIDDEN, "true"), this.emit(l.up.CLOSE_EVENT, {}, !0))
                    }
                    destroy() {
                        this.close(), this.content.removeAttribute(o.Attribute.ARIA_HIDDEN), this.trigger.removeAttribute(o.Attribute.ARIA_CONTROLS), this.root.removeEventListener(r.EventType.MOUSEENTER, this.handleOpen, !0), this.root.removeEventListener(r.EventType.FOCUS, this.handleOpen, !0), this.root.removeEventListener(r.EventType.MOUSELEAVE, this.handleClose, !0), this.root.removeEventListener(r.EventType.BLUR, this.handleClose, !0), document.removeEventListener(r.EventType.KEYUP, this.handleKeyup), document.removeEventListener(r.EventType.CLICK, this.handleClick), window.removeEventListener(r.EventType.RESIZE, this.handleResize), this.content.removeEventListener(r.EventType.TRANSITIONSTART, this.handleTransitionStart), this.content.removeEventListener(r.EventType.TRANSITIONEND, this.handleTransitionEnd)
                    }
                }
            },
            436: (t, e, i) => {
                i.d(e, {
                    S: () => o
                });
                var n = i(2911),
                    s = i(1887);
                class o {
                    constructor(t) {
                        const e = Object.assign({}, o.defaults, t);
                        this.isAnimated = e.isAnimated, this.panelsCount = e.panelsCount, this.panelsCollapsed = this.panelsCount, this.panelsStatus = s.DH.COLLAPSED, this.eventTarget = new n.S
                    }
                    static get defaults() {
                        return {
                            isAnimated: !0,
                            panelsCount: 1
                        }
                    }
                    updatePanelsStatus() {
                        0 === this.panelsCount ? this.panelsStatus = "" : this.panelsCount === this.panelsCollapsed ? this.panelsStatus = s.DH.COLLAPSED : 0 === this.panelsCollapsed ? this.panelsStatus = s.DH.EXPANDED : this.panelsStatus = s.DH.MIXED, this.dispatchEvent(s.f7.PANELGROUP_STATUS_CHANGED)
                    }
                    listen(t, e) {
                        this.eventTarget.listen(t, e)
                    }
                    unlisten(t, e) {
                        this.eventTarget.unlisten(t, e)
                    }
                    dispatchEvent(t, e) {
                        this.eventTarget.dispatchEvent(t, e)
                    }
                }
            },
            477: (t, e, i) => {
                var n;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmVideo = e.IS_IOS = void 0;
                const s = i(8703);
                e.IS_IOS = !!navigator.platform && /(iPad|iPhone|iPod)/.test(navigator.platform);
                const o = {
                    rootMargin: "40px"
                };
                class r extends HTMLElement {
                    constructor() {
                        super(...arguments), this.hoverPlay = !1, this.isActive = !0, this.isAutoplay = !1, this.isInViewport = !1, this.isPlaying = !1, this.isTabActive = !0
                    }
                    get isActiveAndVisible() {
                        return this.isActive && this.isInViewport && this.isTabActive
                    }
                    connectedCallback() {
                        this.isPlaying = this.isPlaying || this.isAutoplay, n.observe(this)
                    }
                    disconnectedCallback() {
                        n.unobserve(this)
                    }
                    play() {
                        this.isPlaying && this.isActiveAndVisible && this.playInternal()
                    }
                    pause() {
                        this.pauseInternal()
                    }
                    seek(t) {
                        this.seekInternal(t)
                    }
                    playInternal() {}
                    pauseInternal() {}
                    seekInternal(t) {}
                    static observe(t) {
                        this.observer || (this.observer = new IntersectionObserver(this.onIntersectionChange, o), document.addEventListener("visibilitychange", this.onVisibilityChange)), this.videos.add(t), this.observer.observe(t)
                    }
                    static unobserve(t) {
                        this.videos.delete(t), this.observer.unobserve(t)
                    }
                }
                e.GdmVideo = r, n = r, r.videos = new Set, r.onIntersectionChange = t => {
                    for (const e of t) {
                        const t = e.target;
                        t instanceof n && (t.isInViewport = e.isIntersecting, (0, s.isTouchScreen)() ? t.isInViewport && t.play() : t.hoverPlay || (t.isInViewport ? t.play() : t.pause()))
                    }
                }, r.onVisibilityChange = () => {
                    for (const t of n.videos) t.isTabActive = "visible" === document.visibilityState, t.isTabActive ? (t.play(), e.IS_IOS && setTimeout(t.play, 100)) : t.pause()
                }
            },
            583: (t, e, i) => {
                i.d(e, {
                    r: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(321),
                    r = function (t) {
                        function e(i) {
                            return t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    hasClass: function () {
                                        return !1
                                    },
                                    setAttr: function () {},
                                    getAttr: function () {
                                        return null
                                    },
                                    removeAttr: function () {},
                                    setContent: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getId = function () {
                            return this.adapter.getAttr("id")
                        }, e.prototype.isVisible = function () {
                            return "true" !== this.adapter.getAttr(o.P.ARIA_HIDDEN)
                        }, e.prototype.setContent = function (t) {
                            this.adapter.setContent(t)
                        }, e.prototype.setValidation = function (t) {
                            t ? this.adapter.addClass(o.Y.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(o.Y.HELPER_TEXT_VALIDATION_MSG)
                        }, e.prototype.setValidationMsgPersistent = function (t) {
                            t ? this.adapter.addClass(o.Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(o.Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)
                        }, e.prototype.getIsValidation = function () {
                            return this.adapter.hasClass(o.Y.HELPER_TEXT_VALIDATION_MSG)
                        }, e.prototype.getIsValidationMsgPersistent = function () {
                            return this.adapter.hasClass(o.Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)
                        }, e.prototype.setValidity = function (t) {
                            if (this.adapter.hasClass(o.Y.HELPER_TEXT_VALIDATION_MSG)) {
                                var e = this.adapter.hasClass(o.Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
                                if (!t || e) return this.showToScreenReader(), void(t ? this.adapter.removeAttr(o.P.ROLE) : this.adapter.setAttr(o.P.ROLE, "alert"));
                                this.adapter.removeAttr(o.P.ROLE), this.hide()
                            }
                        }, e.prototype.showToScreenReader = function () {
                            this.adapter.removeAttr(o.P.ARIA_HIDDEN)
                        }, e.prototype.hide = function () {
                            this.adapter.setAttr(o.P.ARIA_HIDDEN, "true")
                        }, e
                    }(s.I)
            },
            605: (t, e, i) => {
                i.d(e, {
                    NZ: () => a,
                    P$: () => n,
                    Y7: () => s,
                    YU: () => r,
                    nL: () => o
                });
                var n = {
                        ARIA_CONTROLS: "aria-controls",
                        ARIA_DESCRIBEDBY: "aria-describedby",
                        INPUT_SELECTOR: ".mdc-text-field__input",
                        LABEL_SELECTOR: ".mdc-floating-label",
                        LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
                        LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
                        OUTLINE_SELECTOR: ".mdc-notched-outline",
                        PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
                        SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
                        TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
                    },
                    s = {
                        DISABLED: "mdc-text-field--disabled",
                        FOCUSED: "mdc-text-field--focused",
                        HELPER_LINE: "mdc-text-field-helper-line",
                        INVALID: "mdc-text-field--invalid",
                        LABEL_FLOATING: "mdc-text-field--label-floating",
                        NO_LABEL: "mdc-text-field--no-label",
                        OUTLINED: "mdc-text-field--outlined",
                        ROOT: "mdc-text-field",
                        TEXTAREA: "mdc-text-field--textarea",
                        WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
                        WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
                        WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
                    },
                    o = {
                        LABEL_SCALE: .75
                    },
                    r = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
                    a = ["color", "date", "datetime-local", "month", "range", "time", "week"]
            },
            671: (t, e, i) => {
                i.r(e), i.d(e, {
                    Social: () => E
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(9349),
                    r = i(5292),
                    a = i(6974),
                    l = i(1887),
                    d = i(3685),
                    u = i(4524),
                    c = i(407),
                    h = i(6442),
                    p = i(7538);
                class E extends n.u {
                    constructor(t) {
                        super(t), this.tooltipComponents = [], this.copyEl = this.root.querySelector(`.${p.s.COPY_ROOT}`), this.popoverEl = this.root.querySelector(`.${p.s.POPOVER_ROOT}`), this.panelsEl = this.root.querySelector(`.${p.s.SOCIAL_GROUP}`), this.panelTitleEl = this.root.querySelector(`.${p.s.SOCIAL_TITLE}`), this.socialListEl = this.root.querySelector(`.${p.s.SOCIAL_LIST}`), this.tooltipEls = Array.from(this.root.querySelectorAll(`.${p.s.TOOLTIP_ROOT}`)), this.initialize()
                    }
                    initialize() {
                        this.addCopy(), this.addPopover(), this.addPanels(), this.addTooltips()
                    }
                    destroy() {
                        this.removeCopy(), this.removePopover(), this.removePanels(), this.removeTooltips()
                    }
                    addCopy() {
                        var t, e;
                        const i = null === (t = this.copyEl) || void 0 === t ? void 0 : t.querySelector(`.${p.s.COPY_INPUT}`),
                            n = null === (e = this.copyEl) || void 0 === e ? void 0 : e.querySelector(`.${p.s.COPY_BUTTON}`);
                        this.copyEl && i && n && (this.copyEl.classList.add(r.s7.ROOT), i.classList.add(r.s7.VALUE), n.classList.add(r.s7.BUTTON), n.setAttribute(s.Attribute.ARIA_LIVE, "polite"), this.copyComponent = new o.Q(this.copyEl))
                    }
                    removeCopy() {
                        var t, e, i;
                        const n = null === (t = this.copyEl) || void 0 === t ? void 0 : t.querySelector(`.${p.s.COPY_INPUT}`),
                            o = null === (e = this.copyEl) || void 0 === e ? void 0 : e.querySelector(`.${p.s.COPY_BUTTON}`);
                        this.copyEl && n && o && (null === (i = this.copyComponent) || void 0 === i || i.destroy(), this.copyEl.classList.remove(r.s7.ROOT), n.classList.remove(r.s7.VALUE), o.classList.remove(r.s7.BUTTON), o.removeAttribute(s.Attribute.ARIA_LIVE))
                    }
                    addPopover() {
                        var t, e, i;
                        const n = null === (t = this.popoverEl) || void 0 === t ? void 0 : t.querySelector(`.${p.s.POPOVER_TRIGGER}`),
                            s = null === (e = this.popoverEl) || void 0 === e ? void 0 : e.querySelector(`.${p.s.POPOVER_DIALOG}`),
                            o = null === (i = this.popoverEl) || void 0 === i ? void 0 : i.querySelector(`.${p.s.POPOVER_CLOSE}`);
                        this.popoverEl && n && s && o && (this.popoverEl.classList.add(u.s7.ROOT), this.popoverEl.dataset[u.uB.TRIGGER] = "click", n.classList.add(u.s7.TRIGGER), s.classList.add(u.s7.DIALOG), o.classList.add(u.s7.CLOSE_BTN), this.popoverComponent = new d.A(this.popoverEl, {
                            placement: "right"
                        }))
                    }
                    removePopover() {
                        var t, e, i, n;
                        const s = null === (t = this.popoverEl) || void 0 === t ? void 0 : t.querySelector(`.${p.s.POPOVER_TRIGGER}`),
                            o = null === (e = this.popoverEl) || void 0 === e ? void 0 : e.querySelector(`.${p.s.POPOVER_DIALOG}`),
                            r = null === (i = this.popoverEl) || void 0 === i ? void 0 : i.querySelector(`.${p.s.POPOVER_CLOSE}`);
                        this.popoverEl && s && o && r && (null === (n = this.popoverComponent) || void 0 === n || n.destroy(), this.popoverEl.classList.remove(u.s7.ROOT), delete this.popoverEl.dataset[u.uB.TRIGGER], s.classList.remove(u.s7.TRIGGER), o.classList.remove(u.s7.DIALOG), r.classList.remove(u.s7.CLOSE_BTN))
                    }
                    addPanels() {
                        if (!(this.root.classList.contains(p.s.PANELS_VARIANT) && this.panelsEl && this.panelTitleEl && this.socialListEl)) return;
                        const t = this.root.id ? this.root.id : "social-panels";
                        this.root.classList.add(`${l.s7.GROUP}`), this.root.dataset[l.uB.KEY] = t, this.panelsEl.classList.add(`${l.s7.PANEL}`);
                        const e = document.createElement("button");
                        e.className = this.panelTitleEl.className, e.classList.add(`${l.s7.BUTTON}`), e.id = t + "-toggle", e.dataset[l.uB.TOGGLEFOR] = t + "-content", e.replaceChildren(...this.panelTitleEl.childNodes), this.panelTitleEl.replaceChildren(), this.panelTitleEl.className = "", this.panelTitleEl.appendChild(e), this.panelTitleEl.classList.add(`${l.s7.TOGGLE}`);
                        const i = document.createElement("div");
                        i.classList.add(`${l.s7.CONTENT}`), this.panelsEl.appendChild(i), i.appendChild(this.socialListEl), i.id = t + "-content", this.expanelsComponent = new a.ExpansionPanels(this.root)
                    }
                    removePanels() {
                        var t;
                        if (!(this.root.classList.contains(p.s.PANELS_VARIANT) && this.panelsEl && this.panelTitleEl && this.socialListEl)) return;
                        null === (t = this.expanelsComponent) || void 0 === t || t.destroy();
                        const e = this.panelsEl.querySelector(`.${l.s7.CONTENT}`);
                        this.panelsEl.appendChild(this.socialListEl), null == e || e.remove();
                        const i = this.panelTitleEl.querySelector(`.${l.s7.BUTTON}`);
                        i && (i.classList.remove(`${l.s7.BUTTON}`), this.panelTitleEl.className = i.className, this.panelTitleEl.replaceChildren(...i.childNodes), i.remove()), this.root.classList.remove(`${l.s7.GROUP}`), delete this.root.dataset[l.uB.KEY], this.panelsEl.classList.remove(`${l.s7.PANEL}`)
                    }
                    addTooltips() {
                        for (const t of this.tooltipEls) {
                            const e = t.querySelector(`.${p.s.TOOLTIP_TRIGGER}`),
                                i = t.querySelector(`.${p.s.TOOLTIP_CONTENT}`);
                            e && i && (t.classList.add(`${h.s7.ROOT}`), this.root.classList.contains(p.s.PERSISTENT_VARIANT) && (t.dataset[h.rC.AUTO_POSITION] = "false"), e.classList.add(`${h.s7.TRIGGER}`), i.classList.add(`${h.s7.CONTENT}`), i.setAttribute(s.Attribute.ROLE, s.Role.TOOLTIP), this.tooltipComponents.push(new c.m(t)))
                        }
                    }
                    removeTooltips() {
                        for (; this.tooltipComponents.length > 0;) {
                            const t = this.tooltipComponents.pop();
                            null == t || t.destroy()
                        }
                        for (const t of this.tooltipEls) {
                            const e = t.querySelector(`.${p.s.TOOLTIP_TRIGGER}`),
                                i = t.querySelector(`.${p.s.TOOLTIP_CONTENT}`);
                            t.classList.remove(`${h.s7.ROOT}`), delete t.dataset[h.rC.AUTO_POSITION], null == e || e.classList.remove(`${h.s7.TRIGGER}`), null == i || i.classList.remove(`${h.s7.CONTENT}`), null == i || i.removeAttribute(s.Attribute.ROLE)
                        }
                    }
                }
            },
            826: (t, e, i) => {
                i.d(e, {
                    Q: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(950),
                    r = function (t) {
                        function e(i) {
                            return t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    hasClass: function () {
                                        return !1
                                    },
                                    getAttr: function () {
                                        return null
                                    },
                                    setAttr: function () {},
                                    removeAttr: function () {},
                                    setContent: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getId = function () {
                            return this.adapter.getAttr("id")
                        }, e.prototype.isVisible = function () {
                            return "true" !== this.adapter.getAttr(o.P.ARIA_HIDDEN)
                        }, e.prototype.setContent = function (t) {
                            this.adapter.setContent(t)
                        }, e.prototype.isPersistent = function () {
                            return this.adapter.hasClass(o.Y.HELPER_TEXT_PERSISTENT)
                        }, e.prototype.setPersistent = function (t) {
                            t ? this.adapter.addClass(o.Y.HELPER_TEXT_PERSISTENT) : this.adapter.removeClass(o.Y.HELPER_TEXT_PERSISTENT)
                        }, e.prototype.isValidation = function () {
                            return this.adapter.hasClass(o.Y.HELPER_TEXT_VALIDATION_MSG)
                        }, e.prototype.setValidation = function (t) {
                            t ? this.adapter.addClass(o.Y.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(o.Y.HELPER_TEXT_VALIDATION_MSG)
                        }, e.prototype.showToScreenReader = function () {
                            this.adapter.removeAttr(o.P.ARIA_HIDDEN)
                        }, e.prototype.setValidity = function (t) {
                            var e = this.adapter.hasClass(o.Y.HELPER_TEXT_PERSISTENT),
                                i = this.adapter.hasClass(o.Y.HELPER_TEXT_VALIDATION_MSG) && !t;
                            i ? (this.showToScreenReader(), "alert" === this.adapter.getAttr(o.P.ROLE) ? this.refreshAlertRole() : this.adapter.setAttr(o.P.ROLE, "alert")) : this.adapter.removeAttr(o.P.ROLE), e || i || this.hide()
                        }, e.prototype.hide = function () {
                            this.adapter.setAttr(o.P.ARIA_HIDDEN, "true")
                        }, e.prototype.refreshAlertRole = function () {
                            var t = this;
                            this.adapter.removeAttr(o.P.ROLE), requestAnimationFrame((function () {
                                t.adapter.setAttr(o.P.ROLE, "alert")
                            }))
                        }, e
                    }(s.I)
            },
            837: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.PageCover = void 0;
                const n = i(4265);
                var s;
                ! function (t) {
                    t.CHAMELEON = "gdm--chameleon", t.CONTENT = "page-cover__content", t.MONO = "gdm--mono"
                }(s || (s = {}));
                const o = {
                        rootMargin: "40px",
                        threshold: [0]
                    },
                    r = window.matchMedia("(prefers-reduced-motion: reduce)");
                e.PageCover = class {
                    constructor(t) {
                        this.element = t, this.first = !0, this.toggleObserver = t => t.matches ? this.destroyObserver() : this.createObserver(), this.onIntersectionObserverChange = t => {
                            for (const e of t) {
                                const t = !e.isIntersecting && e.boundingClientRect.y >= 0;
                                document.body.classList.toggle(s.MONO, t), this.first && (document.body.classList.add(s.CHAMELEON), this.first = !1)
                            }
                        }, this.nextElement = this.element.nextElementSibling || this.element.parentElement && this.element.parentElement.nextElementSibling, r.addEventListener(n.EventType.CHANGE, this.toggleObserver), this.toggleObserver(r)
                    }
                    createObserver() {
                        this.nextElement && (this.observer = this.observer || new IntersectionObserver(this.onIntersectionObserverChange, o), this.observer.observe(this.nextElement))
                    }
                    destroyObserver() {
                        this.observer && this.nextElement && (this.observer.unobserve(this.nextElement), document.body.classList.remove(s.MONO, s.CHAMELEON), this.first = !0)
                    }
                }
            },
            880: (t, e, i) => {
                i.d(e, {
                    P$: () => s,
                    Y7: () => n,
                    nL: () => o
                });
                var n = {
                        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
                        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
                        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
                        ROOT: "mdc-ripple-upgraded",
                        UNBOUNDED: "mdc-ripple-upgraded--unbounded"
                    },
                    s = {
                        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
                        VAR_FG_SIZE: "--mdc-ripple-fg-size",
                        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
                        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
                        VAR_LEFT: "--mdc-ripple-left",
                        VAR_TOP: "--mdc-ripple-top"
                    },
                    o = {
                        DEACTIVATION_TIMEOUT_MS: 225,
                        FG_DEACTIVATION_MS: 150,
                        INITIAL_ORIGIN_SCALE: .6,
                        PADDING: 10,
                        TAP_DELAY_MS: 300
                    }
            },
            950: (t, e, i) => {
                i.d(e, {
                    P: () => s,
                    Y: () => n
                });
                var n = {
                        HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
                        HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
                        ROOT: "mdc-text-field-helper-text"
                    },
                    s = {
                        ARIA_HIDDEN: "aria-hidden",
                        ROLE: "role",
                        ROOT_SELECTOR: "." + n.ROOT
                    }
            },
            1162: (t, e, i) => {
                i.d(e, {
                    P$: () => s,
                    Y7: () => n,
                    nL: () => o
                });
                var n = {
                        ACTIVATED: "mdc-select--activated",
                        DISABLED: "mdc-select--disabled",
                        FOCUSED: "mdc-select--focused",
                        INVALID: "mdc-select--invalid",
                        MENU_INVALID: "mdc-select__menu--invalid",
                        OUTLINED: "mdc-select--outlined",
                        REQUIRED: "mdc-select--required",
                        ROOT: "mdc-select",
                        WITH_LEADING_ICON: "mdc-select--with-leading-icon"
                    },
                    s = {
                        ARIA_CONTROLS: "aria-controls",
                        ARIA_DESCRIBEDBY: "aria-describedby",
                        ARIA_SELECTED_ATTR: "aria-selected",
                        CHANGE_EVENT: "MDCSelect:change",
                        HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
                        LABEL_SELECTOR: ".mdc-floating-label",
                        LEADING_ICON_SELECTOR: ".mdc-select__icon",
                        LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
                        MENU_SELECTOR: ".mdc-select__menu",
                        OUTLINE_SELECTOR: ".mdc-notched-outline",
                        SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
                        SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
                        VALUE_ATTR: "data-value"
                    },
                    o = {
                        LABEL_SCALE: .75,
                        UNSET_INDEX: -1,
                        CLICK_DEBOUNCE_TIMEOUT_MS: 330
                    }
            },
            1223: (t, e, i) => {
                i.d(e, {
                    B: () => d
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(4265),
                    r = i(1234),
                    a = i(1887),
                    l = i(7783);
                class d extends n.u {
                    constructor(t) {
                        var e;
                        super(t), this.clickHandler = t => {
                            t.preventDefault(), this.toggle()
                        }, this.keydownHandler = t => {
                            this.handleKeydown(t)
                        };
                        const i = null === (e = this.root.closest(`.${a.s7.GROUP}`)) || void 0 === e ? void 0 : e.dataset[a.uB.KEY];
                        this.model = l.M.get(i);
                        const n = this.root.dataset[a.uB.TOGGLEFOR];
                        if (!n) throw new Error(a.f9.TOGGLE_MISSING_CONTENT_ID);
                        this.contentId = n, this.init()
                    }
                    init() {
                        const t = this.root.closest(`.${a.s7.PANEL}`);
                        if (!(null == t ? void 0 : t.querySelector("#" + this.contentId))) throw new Error(a.f9.TOGGLE_MISSING_CONTENT_ELEMENT);
                        this.addA11yFeatures(), this.root.addEventListener(o.EventType.CLICK, this.clickHandler), this.root.addEventListener(o.EventType.KEYDOWN, this.keydownHandler)
                    }
                    destroy() {
                        this.removeA11yFeatures(), this.root.removeEventListener(o.EventType.CLICK, this.clickHandler), this.root.removeEventListener(o.EventType.KEYDOWN, this.keydownHandler)
                    }
                    toggle() {
                        this.model.dispatchEvent(a.f7.TOGGLE_CONTENT, this.contentId)
                    }
                    handleKeydown(t) {
                        t.key !== r.U.ENTER && t.key !== r.U.SPACE || (t.preventDefault(), this.toggle())
                    }
                    addA11yFeatures() {
                        this.root.setAttribute(s.Attribute.ARIA_CONTROLS, this.contentId), this.root.setAttribute(s.Attribute.ROLE, s.Role.BUTTON), this.root.tabIndex = s.TabIndex.TABBABLE
                    }
                    removeA11yFeatures() {
                        this.root.removeAttribute(s.Attribute.ARIA_CONTROLS), this.root.removeAttribute(s.Attribute.ROLE), this.root.removeAttribute(s.Attribute.TAB_INDEX)
                    }
                }
            },
            1234: (t, e, i) => {
                var n, s;
                i.d(e, {
                        U: () => n
                    }),
                    function (t) {
                        t.ENTER = "Enter", t.SPACE = " ", t.TAB = "Tab", t.ESC = "Escape", t.LEFT = "ArrowLeft", t.UP = "ArrowUp", t.RIGHT = "ArrowRight", t.DOWN = "ArrowDown", t.HOME = "Home", t.END = "End", t.PAGEUP = "PageUp", t.PAGEDOWN = "PageDown"
                    }(n || (n = {})),
                    function (t) {
                        t[t.ENTER = 13] = "ENTER", t[t.SPACE = 32] = "SPACE", t[t.TAB = 9] = "TAB", t[t.ESC = 27] = "ESC", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN", t[t.HOME = 36] = "HOME", t[t.END = 35] = "END", t[t.PAGEUP = 33] = "PAGEUP", t[t.PAGEDOWN = 34] = "PAGEDOWN"
                    }(s || (s = {}))
            },
            1288: (t, e, i) => {
                i.d(e, {
                    P: () => n
                });
                var n = {
                    AUTO_INIT_ATTR: "data-mdc-auto-init",
                    AUTO_INIT_STATE_ATTR: "data-mdc-auto-init-state",
                    INITIALIZED_STATE: "initialized"
                }
            },
            1292: (t, e, i) => {
                function n(t, e) {
                    if (t.closest) return t.closest(e);
                    for (var i = t; i;) {
                        if (s(i, e)) return i;
                        i = i.parentElement
                    }
                    return null
                }

                function s(t, e) {
                    return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
                }

                function o(t) {
                    var e = t;
                    if (null !== e.offsetParent) return e.scrollWidth;
                    var i = e.cloneNode(!0);
                    i.style.setProperty("position", "absolute"), i.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(i);
                    var n = i.scrollWidth;
                    return document.documentElement.removeChild(i), n
                }
                i.d(e, {
                    cK: () => s,
                    et: () => o,
                    kp: () => n
                })
            },
            1341: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmPagination = e.ClassName = e.GdmPaginationSelector = e.GDM_PAGINATION_LOAD_EVENT_TYPE = void 0;
                const n = i(4829),
                    s = i(4265),
                    o = i(5190),
                    r = i(4109);
                var a, l, d;
                e.GDM_PAGINATION_LOAD_EVENT_TYPE = "gdm-pagination-load",
                    function (t) {
                        t.OBJECTS_TOTAL = "data-gdm-pagination-objects-total", t.START_INDEX = "data-gdm-pagination-start-index", t.ENDPOINT = "data-gdm-pagination-endpoint"
                    }(a || (a = {})),
                    function (t) {
                        t.LIST = ".gdm-pagination__list", t.NAVIGATION = ".gdm-pagination__nav", t.ROOT = "gdm-pagination", t.TOTAL = ".gdm-pagination__total", t.TRIGGER = ".gdm-pagination__trigger"
                    }(l || (e.GdmPaginationSelector = l = {})),
                    function (t) {
                        t.LOADING = "gdm-pagination--loading"
                    }(d || (e.ClassName = d = {}));
                class u extends HTMLElement {
                    constructor() {
                        super(...arguments), this.endpoint = null, this.listElement = null, this.navigation = null, this.isFetching = !1, this.onClick = t => {
                            t.currentTarget instanceof HTMLAnchorElement && (t.preventDefault(), this.load(new URL(t.currentTarget.href)))
                        }, this.onPopState = t => {
                            t.state && t.state.pagination && this.load(new URL(t.state.pagination), !1)
                        }
                    }
                    connectedCallback() {
                        this.endpoint = this.getAttribute(a.ENDPOINT), this.listElement = this.querySelector(l.LIST), this.listElement && (this.setPosInSet(this.listElement.children, this), this.listElement.setAttribute("aria-live", "polite")), this.navigation = this.querySelector(l.NAVIGATION);
                        const t = this.addNavigationListeners().find((t => t.hasAttribute(n.Attribute.ARIA_CURRENT))) || window.location;
                        window.history.replaceState({
                            pagination: t.href
                        }, ""), window.addEventListener("popstate", this.onPopState)
                    }
                    disconnectedCallback() {
                        this.removeNavigationListeners(), window.addEventListener("popstate", this.onPopState)
                    }
                    setLoadingState(t) {
                        this.listElement && (this.isFetching = t, this.listElement.setAttribute("aria-busy", t ? "true" : "false"), this.classList.toggle(d.LOADING, t))
                    }
                    addNavigationListeners() {
                        const t = this.navigation ? Array.from(this.navigation.querySelectorAll(l.TRIGGER)) : [];
                        for (const e of t) e.addEventListener(s.EventType.CLICK, this.onClick);
                        return t
                    }
                    removeNavigationListeners() {
                        const t = this.navigation ? this.navigation.querySelectorAll(l.TRIGGER) : [];
                        for (const e of t) e.removeEventListener(s.EventType.CLICK, this.onClick)
                    }
                    updateList(t) {
                        if (this.listElement) {
                            const e = (0, r.elementsToFragment)(t);
                            this.listElement.replaceChildren(e),
                                function (t) {
                                    const [e] = t;
                                    e && (e.tabIndex = -1, e.focus())
                                }(t), o.render(this.listElement.id)
                        }
                    }
                    setPosInSet(t, e) {
                        const i = Number(e.getAttribute(a.START_INDEX)),
                            n = Number(e.getAttribute(a.OBJECTS_TOTAL));
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            s.setAttribute("aria-setsize", `${n}`), s.setAttribute("aria-posinset", `${i+e}`)
                        }
                    }
                    async load(t, i = !0) {
                        if (this.isFetching) return;
                        this.setLoadingState(!0);
                        const [{
                            container: n,
                            list: s,
                            navigation: o
                        }] = await Promise.all([this.fetch(t), c(200)]);
                        if (n && s) {
                            const t = [...s.children];
                            this.setPosInSet(t, n), this.updateList(t)
                        }
                        this.navigation && o && (this.navigation.replaceChildren(...o.children), this.addNavigationListeners());
                        const r = this.querySelector(l.TOTAL),
                            a = n && n.querySelector(l.TOTAL);
                        if (r && a && r.innerHTML !== a.innerHTML && (r.innerHTML = a.innerHTML), i) {
                            const e = new URL(t);
                            if ("1" === e.searchParams.get("page")) {
                                const t = new URLSearchParams(e.searchParams);
                                t.delete("page"), e.search = t.toString()
                            }
                            window.history.pushState({
                                pagination: t.toString()
                            }, "", e)
                        }
                        const d = new CustomEvent(e.GDM_PAGINATION_LOAD_EVENT_TYPE, {
                            detail: t
                        });
                        this.dispatchEvent(d), await c(0), this.setLoadingState(!1)
                    }
                    async fetch(t) {
                        const e = new URL(t);
                        this.endpoint && (e.pathname = this.endpoint);
                        const i = (await (0, r.fetchXhrContent)(e)).querySelector(l.ROOT),
                            n = i && i.querySelector(l.LIST),
                            s = i && i.querySelector(l.NAVIGATION);
                        return {
                            container: i,
                            list: n,
                            navigation: s
                        }
                    }
                }

                function c(t) {
                    return new Promise((e => setTimeout(e, t)))
                }
                e.GdmPagination = u
            },
            1473: (t, e, i) => {
                i.d(e, {
                    C: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(283),
                    r = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.transitionEndHandler = function (t) {
                                s.handleTransitionEnd(t)
                            }, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    hasClass: function () {
                                        return !1
                                    },
                                    setStyle: function () {},
                                    registerEventHandler: function () {},
                                    deregisterEventHandler: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            this.adapter.registerEventHandler("transitionend", this.transitionEndHandler)
                        }, e.prototype.destroy = function () {
                            this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler)
                        }, e.prototype.activate = function () {
                            this.adapter.removeClass(o.Y.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(o.Y.LINE_RIPPLE_ACTIVE)
                        }, e.prototype.setRippleCenter = function (t) {
                            this.adapter.setStyle("transform-origin", t + "px center")
                        }, e.prototype.deactivate = function () {
                            this.adapter.addClass(o.Y.LINE_RIPPLE_DEACTIVATING)
                        }, e.prototype.handleTransitionEnd = function (t) {
                            var e = this.adapter.hasClass(o.Y.LINE_RIPPLE_DEACTIVATING);
                            "opacity" === t.propertyName && e && (this.adapter.removeClass(o.Y.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(o.Y.LINE_RIPPLE_DEACTIVATING))
                        }, e
                    }(s.I)
            },
            1533: (t, e, i) => {
                i.d(e, {
                    TT: () => s.T,
                    _X: () => o.P,
                    kv: () => n.k
                });
                var n = i(4166),
                    s = i(2056),
                    o = i(2468)
            },
            1543: (t, e, i) => {
                i.r(e), i.d(e, {
                    MDCSelect: () => n.R,
                    MDCSelectFoundation: () => o.A,
                    MDCSelectHelperText: () => r.y7,
                    MDCSelectHelperTextFoundation: () => r.r4,
                    MDCSelectIcon: () => a.kv,
                    MDCSelectIconFoundation: () => a.TT,
                    cssClasses: () => s.Y7,
                    helperTextCssClasses: () => r.js,
                    helperTextStrings: () => r.g9,
                    iconStrings: () => a._X,
                    numbers: () => s.nL,
                    strings: () => s.P$
                });
                var n = i(6832),
                    s = i(1162),
                    o = i(8446),
                    r = i(5804),
                    a = i(1533)
            },
            1635: (t, e, i) => {
                i.d(e, {
                    C6: () => s,
                    Cl: () => o,
                    Ju: () => a,
                    fX: () => d,
                    sH: () => r,
                    zs: () => l
                });
                var n = function (t, e) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }, n(t, e)
                };

                function s(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }
                var o = function () {
                    return o = Object.assign || function (t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                        return t
                    }, o.apply(this, arguments)
                };

                function r(t, e, i, n) {
                    return new(i || (i = Promise))((function (s, o) {
                        function r(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                t(e)
                            }))).then(r, a)
                        }
                        l((n = n.apply(t, e || [])).next())
                    }))
                }
                Object.create;

                function a(t) {
                    var e = "function" == typeof Symbol && Symbol.iterator,
                        i = e && t[e],
                        n = 0;
                    if (i) return i.call(t);
                    if (t && "number" == typeof t.length) return {
                        next: function () {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    };
                    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function l(t, e) {
                    var i = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!i) return t;
                    var n, s, o = i.call(t),
                        r = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = o.next()).done;) r.push(n.value)
                    } catch (t) {
                        s = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (i = o.return) && i.call(o)
                        } finally {
                            if (s) throw s.error
                        }
                    }
                    return r
                }

                function d(t, e, i) {
                    if (i || 2 === arguments.length)
                        for (var n, s = 0, o = e.length; s < o; s++) !n && s in e || (n || (n = Array.prototype.slice.call(e, 0, s)), n[s] = e[s]);
                    return t.concat(n || Array.prototype.slice.call(e))
                }
                Object.create;
                "function" == typeof SuppressedError && SuppressedError
            },
            1762: (t, e, i) => {
                i.d(e, {
                    N: () => d
                });
                var n = i(1635),
                    s = i(361),
                    o = i(5700),
                    r = i(1292),
                    a = i(9716),
                    l = i(6545),
                    d = function (t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.disabled = !1, e
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t, i) {
                            void 0 === i && (i = {
                                isUnbounded: void 0
                            });
                            var n = new e(t);
                            return void 0 !== i.isUnbounded && (n.unbounded = i.isUnbounded), n
                        }, e.createAdapter = function (t) {
                            return {
                                addClass: function (e) {
                                    return t.root.classList.add(e)
                                },
                                browserSupportsCssVars: function () {
                                    return l.d(window)
                                },
                                computeBoundingRect: function () {
                                    return t.root.getBoundingClientRect()
                                },
                                containsEventTarget: function (e) {
                                    return t.root.contains(e)
                                },
                                deregisterDocumentInteractionHandler: function (t, e) {
                                    return document.documentElement.removeEventListener(t, e, (0, o.E)())
                                },
                                deregisterInteractionHandler: function (e, i) {
                                    return t.root.removeEventListener(e, i, (0, o.E)())
                                },
                                deregisterResizeHandler: function (t) {
                                    return window.removeEventListener("resize", t)
                                },
                                getWindowPageOffset: function () {
                                    return {
                                        x: window.pageXOffset,
                                        y: window.pageYOffset
                                    }
                                },
                                isSurfaceActive: function () {
                                    return (0, r.cK)(t.root, ":active")
                                },
                                isSurfaceDisabled: function () {
                                    return Boolean(t.disabled)
                                },
                                isUnbounded: function () {
                                    return Boolean(t.unbounded)
                                },
                                registerDocumentInteractionHandler: function (t, e) {
                                    return document.documentElement.addEventListener(t, e, (0, o.E)())
                                },
                                registerInteractionHandler: function (e, i) {
                                    return t.root.addEventListener(e, i, (0, o.E)())
                                },
                                registerResizeHandler: function (t) {
                                    return window.addEventListener("resize", t)
                                },
                                removeClass: function (e) {
                                    return t.root.classList.remove(e)
                                },
                                updateCssVariable: function (e, i) {
                                    return t.root.style.setProperty(e, i)
                                }
                            }
                        }, Object.defineProperty(e.prototype, "unbounded", {
                            get: function () {
                                return Boolean(this.isUnbounded)
                            },
                            set: function (t) {
                                this.isUnbounded = Boolean(t), this.setUnbounded()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.activate = function () {
                            this.foundation.activate()
                        }, e.prototype.deactivate = function () {
                            this.foundation.deactivate()
                        }, e.prototype.layout = function () {
                            this.foundation.layout()
                        }, e.prototype.getDefaultFoundation = function () {
                            return new a.E(e.createAdapter(this))
                        }, e.prototype.initialSyncWithDOM = function () {
                            var t = this.root;
                            this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset
                        }, e.prototype.setUnbounded = function () {
                            this.foundation.setUnbounded(Boolean(this.isUnbounded))
                        }, e
                    }(s.O)
            },
            1887: (t, e, i) => {
                var n, s, o, r, a;
                i.d(e, {
                        DH: () => o,
                        f7: () => r,
                        f9: () => a,
                        s7: () => n,
                        uB: () => s
                    }),
                    function (t) {
                        t.GROUP = "glue-expansion-panels", t.PANEL = "glue-expansion-panel", t.CONTENT = "glue-expansion-panel__content", t.TOGGLE = "glue-expansion-panel__toggle", t.BUTTON = "glue-expansion-panel__button", t.HEADER = "glue-expansion-panels__header", t.HEADER_TEXT = "glue-expansion-panel__header-text", t.TOGGLE_ALL = "glue-expansion-panels__toggle-all", t.TOGGLE_ALL_TEXT = "glue-expansion-panels__toggle-text", t.ARROW = "glue-expansion-panel__header-arrow", t.IS_EXPANDED = "glue-is-expanded", t.IS_COLLAPSED = "glue-is-collapsed", t.IS_MIXED = "glue-is-mixed"
                    }(n || (n = {})),
                    function (t) {
                        t.KEY = "glueExpansionPanelsKey", t.SMOOTHANIMTIMING = "glueExpansionPanelsSmoothAnimTiming", t.TOGGLEFOR = "glueExpansionPanelToggleFor", t.INITIAL = "glueExpansionPanelInitial", t.EXPAND_TOOLTIP = "glueExpansionPanelExpandTooltip", t.COLLAPSE_TOOLTIP = "glueExpansionPanelCollapseTooltip"
                    }(s || (s = {})),
                    function (t) {
                        t.DEFAULT_INSTANCE_ID = "expansion_panels", t.EXPANDED = "expanded", t.COLLAPSED = "collapsed", t.MIXED = "mixed", t.TOOLTIP_EXPAND = "Press to expand", t.TOOLTIP_COLLAPSE = "Press to collapse"
                    }(o || (o = {})),
                    function (t) {
                        t.PANELGROUP_STATUS_CHANGED = "glueExpansionPanelsStatusChanged", t.TOGGLE_CONTENT = "glueExpansionPanelsToggleContent", t.EXPAND_ALL_CONTENT = "glueExpansionPanelsExpandAllContent", t.COLLAPSE_ALL_CONTENT = "glueExpansionPanelsCollapseAllContent"
                    }(r || (r = {})),
                    function (t) {
                        t.TOGGLE_MISSING_CONTENT_ID = "[Glue Expansion Panels Toggle] - Toggle is not linked to a content element.", t.TOGGLE_MISSING_CONTENT_ELEMENT = "[Glue Expansion Panels Toggle] - Cannot find content element to link toggle to.", t.MISSING_CONTENT_ID = "[Glue Expansion Panels Content] - An ID must be set on the content element."
                    }(a || (a = {}))
            },
            1949: (t, e, i) => {
                i.d(e, {
                    $: () => a
                });
                var n = i(1635),
                    s = i(361),
                    o = i(1292),
                    r = i(8813),
                    a = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.shake = function (t) {
                            this.foundation.shake(t)
                        }, e.prototype.float = function (t) {
                            this.foundation.float(t)
                        }, e.prototype.setRequired = function (t) {
                            this.foundation.setRequired(t)
                        }, e.prototype.getWidth = function () {
                            return this.foundation.getWidth()
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClass: function (e) {
                                        return t.root.classList.add(e)
                                    },
                                    removeClass: function (e) {
                                        return t.root.classList.remove(e)
                                    },
                                    getWidth: function () {
                                        return (0, o.et)(t.root)
                                    },
                                    registerInteractionHandler: function (e, i) {
                                        return t.listen(e, i)
                                    },
                                    deregisterInteractionHandler: function (e, i) {
                                        return t.unlisten(e, i)
                                    }
                                };
                            return new r.K(e)
                        }, e
                    }(s.O)
            },
            2056: (t, e, i) => {
                i.d(e, {
                    T: () => a
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(2468),
                    r = ["click", "keydown"],
                    a = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.savedTabIndex = null, s.interactionHandler = function (t) {
                                s.handleInteraction(t)
                            }, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    getAttr: function () {
                                        return null
                                    },
                                    setAttr: function () {},
                                    removeAttr: function () {},
                                    setContent: function () {},
                                    registerInteractionHandler: function () {},
                                    deregisterInteractionHandler: function () {},
                                    notifyIconAction: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            var t, e;
                            this.savedTabIndex = this.adapter.getAttr("tabindex");
                            try {
                                for (var i = (0, n.Ju)(r), s = i.next(); !s.done; s = i.next()) {
                                    var o = s.value;
                                    this.adapter.registerInteractionHandler(o, this.interactionHandler)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = i.return) && e.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, e.prototype.destroy = function () {
                            var t, e;
                            try {
                                for (var i = (0, n.Ju)(r), s = i.next(); !s.done; s = i.next()) {
                                    var o = s.value;
                                    this.adapter.deregisterInteractionHandler(o, this.interactionHandler)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = i.return) && e.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, e.prototype.setDisabled = function (t) {
                            this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", o.P.ICON_ROLE)))
                        }, e.prototype.setAriaLabel = function (t) {
                            this.adapter.setAttr("aria-label", t)
                        }, e.prototype.setContent = function (t) {
                            this.adapter.setContent(t)
                        }, e.prototype.handleInteraction = function (t) {
                            var e = "Enter" === t.key || 13 === t.keyCode;
                            ("click" === t.type || e) && this.adapter.notifyIconAction()
                        }, e
                    }(s.I)
            },
            2064: (t, e, i) => {
                i.r(e), i.d(e, {
                    FOCUSABLE_ELEMENT_SELECTORS: () => n,
                    getFocusableElements: () => o,
                    isElementFocusable: () => s
                });
                const n = ["input", "textarea", "select", "button", "iframe", '[role="button"]', "a", "[tabindex]", "md-checkbox", "md-radio", "md-switch", "md-outlined-select", "md-filled-select", "md-outlined-text-field", "md-filled-text-field"];

                function s(t) {
                    return n.filter((e => t.matches(e))).length > 0
                }

                function o(t) {
                    return [...t.querySelectorAll("input"), ...t.querySelectorAll("a"), ...t.querySelectorAll("textarea"), ...t.querySelectorAll("select"), ...t.querySelectorAll("button"), ...t.querySelectorAll("iframe"), ...t.querySelectorAll('[role="button"]:not(input):not(a):not(textarea):not(select):not(button):not(iframe)'), ...t.querySelectorAll('[tabindex="0"]:not([role="button"]):not(input):not(a):not(textarea):not(select):not(button):not(iframe):not(md-checkbox):not(md-radio):not(md-switch):not(md-outlined-select):not(md-filled-select):not(md-outlined-text-field):not(md-filled-text-field)'), ...t.querySelectorAll("md-checkbox"), ...t.querySelectorAll("md-radio"), ...t.querySelectorAll("md-switch"), ...t.querySelectorAll("md-outlined-select"), ...t.querySelectorAll("md-filled-select"), ...t.querySelectorAll("md-outlined-text-field"), ...t.querySelectorAll("md-filled-text-field")]
                }
            },
            2108: (t, e, i) => {
                var n, s, o, r;
                i.r(e), i.d(e, {
                        CssClasses: () => n,
                        DataAttr: () => r,
                        Numbers: () => o,
                        Strings: () => s
                    }),
                    function (t) {
                        t.BUTTON = "glue-jumplinks__button", t.BUTTON_LEFT = "glue-jumplinks__button--prev", t.BUTTON_RIGHT = "glue-jumplinks__button--next", t.BUTTON_ACTIVE = "glue-jumplinks__button--active", t.LIST = "glue-jumplinks__list", t.ITEMS = "glue-jumplinks__list-item", t.LINK = "glue-jumplinks__link", t.LINK_ACTIVE = "glue-jumplinks__link--active", t.VIEWPORT = "glue-jumplinks__viewport", t.REWIND = "glue-jumplinks--rewind", t.ROOT = "glue-jumplinks"
                    }(n || (n = {})),
                    function (t) {
                        t.LI_WIDTH = "liWidth", t.VIEWPORT = "viewport", t.PAGE_X = "pageX", t.SLIDES = "slides", t.ACTIVE_LINK = "activeLink", t.RTL = "rtl", t.TRANSFORM = "transform", t.BLOCK = "block", t.FIXED = "fixed", t.JUMPLINK_DEFAULT_LABEL = "Jump to section within page", t.NOT_FIXED = "absolute", t.NO_ANIMATION = "none"
                    }(s || (s = {})),
                    function (t) {
                        t[t.DEFAULT_OFFSET = 144] = "DEFAULT_OFFSET", t[t.JUMPLINKS_MARGIN = 16] = "JUMPLINKS_MARGIN", t[t.JUMPLINKS_HEIGHT = 48] = "JUMPLINKS_HEIGHT", t[t.SCROLL_THRESHOLD = 130] = "SCROLL_THRESHOLD"
                    }(o || (o = {})),
                    function (t) {
                        t.JUMPLINK_LABEL = "glueJumplinkLabel"
                    }(r || (r = {}))
            },
            2181: (t, e, i) => {
                function n(t) {
                    return 0 === t || 1 === t ? t : t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
                }

                function s(t) {
                    return 0 === t || 1 === t ? t : 1 - o(1 - t)
                }

                function o(t) {
                    return 0 === t || 1 === t ? t : t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75 : t < 2.5 / 2.75 ? 7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375 : 7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375
                }
                i.d(e, {
                    Z0: () => r,
                    hn: () => n
                });
                const r = {
                    easeInSine: function (t) {
                        return 0 === t || 1 === t ? t : 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function (t) {
                        return 0 === t || 1 === t ? t : Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function (t) {
                        return 0 === t || 1 === t ? t : -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInQuad: function (t) {
                        return 0 === t || 1 === t ? t : t * t
                    },
                    easeOutQuad: function (t) {
                        return 0 === t || 1 === t ? t : t * (2 - t)
                    },
                    easeInOutQuad: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
                    },
                    easeInCubic: function (t) {
                        return 0 === t || 1 === t ? t : t * t * t
                    },
                    easeOutCubic: function (t) {
                        return 0 === t || 1 === t ? t : --t * t * t + 1
                    },
                    easeInOutCubic: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                    },
                    easeInQuart: function (t) {
                        return 0 === t || 1 === t ? t : t * t * t * t
                    },
                    easeOutQuart: function (t) {
                        return 0 === t || 1 === t ? t : 1 - --t * t * t * t
                    },
                    easeInOutQuart: n,
                    easeInQuint: function (t) {
                        return 0 === t || 1 === t ? t : t * t * t * t * t
                    },
                    easeOutQuint: function (t) {
                        return 0 === t || 1 === t ? t : 1 + --t * t * t * t * t
                    },
                    easeInOutQuint: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
                    },
                    easeInExpo: function (t) {
                        return 0 === t || 1 === t ? t : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function (t) {
                        return 0 === t || 1 === t ? t : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)))
                    },
                    easeInCirc: function (t) {
                        return 0 === t || 1 === t ? t : 1 - Math.sqrt(1 - t * t)
                    },
                    easeOutCirc: function (t) {
                        return 0 === t || 1 === t ? t : Math.sqrt(1 - (t - 1) * (t - 1))
                    },
                    easeInOutCirc: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? -.5 * (Math.sqrt(1 - t * t * 4) - 1) : .5 * (Math.sqrt(1 - 4 * (t - 1) * (t - 1)) + 1)
                    },
                    easeInBack: function (t) {
                        return 0 === t || 1 === t ? t : t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function (t) {
                        return 0 === t || 1 === t ? t : (t - 1) * (t - 1) * (2.70158 * (t - 1) + 1.70158) + 1
                    },
                    easeInOutBack: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? 2 * t * .5 * (2 * t) * (2 * t * 3.5949095 - 2.5949095) : .5 * ((2 * t - 2) * (2 * t - 2) * (3.5949095 * (2 * t - 2) + 2.5949095) + 2)
                    },
                    easeInElastic: function (t) {
                        return 0 === t || 1 === t ? t : Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.075) * (2 * Math.PI) / .3) * -1
                    },
                    easeOutElastic: function (t) {
                        return 0 === t || 1 === t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                    },
                    easeInOutElastic: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? Math.pow(2, 10 * (2 * t - 1)) * Math.sin(2 * (2 * t - 1.1125) * Math.PI / .45) * -.5 : .5 * Math.pow(2, -10 * (2 * t - 1)) * Math.sin(2 * (2 * t - 1.1125) * Math.PI / .45) + 1
                    },
                    easeInBounce: s,
                    easeOutBounce: o,
                    easeInOutBounce: function (t) {
                        return 0 === t || 1 === t ? t : t < .5 ? .5 * s(2 * t) : .5 * o(2 * t - 1) + .5
                    },
                    linear: function (t) {
                        return t
                    }
                }
            },
            2332: (t, e, i) => {
                i.d(e, {
                    y: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(5160),
                    r = function (t) {
                        function e(i) {
                            return t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    setContent: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.setCounterValue = function (t, e) {
                            t = Math.min(t, e), this.adapter.setContent(t + " / " + e)
                        }, e
                    }(s.I)
            },
            2423: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmAccordion = e.GdmAccordionSelector = void 0;
                const n = i(6974);
                var s;
                ! function (t) {
                    t.ROOT = "gdm-accordion"
                }(s || (e.GdmAccordionSelector = s = {}));
                class o extends HTMLElement {
                    connectedCallback() {
                        this.classList.contains("glue-social") || window.requestAnimationFrame((() => {
                            this.glueExpansionPanel && this.glueExpansionPanel.destroy(), this.glueExpansionPanel = new n.ExpansionPanels(this)
                        }))
                    }
                    disconnectedCallback() {
                        this.glueExpansionPanel && this.glueExpansionPanel.destroy()
                    }
                }
                e.GdmAccordion = o
            },
            2468: (t, e, i) => {
                i.d(e, {
                    P: () => n
                });
                var n = {
                    ICON_EVENT: "MDCSelect:icon",
                    ICON_ROLE: "button"
                }
            },
            2613: (t, e, i) => {
                i.r(e), i.d(e, {
                    Jumplinks: () => h
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(2181),
                    r = i(4265),
                    a = i(2064),
                    l = i(2950),
                    d = i(7854),
                    u = i(2887),
                    c = i(2108);
                class h extends n.u {
                    constructor(t, e) {
                        super(t), this.linkTargets = [], this.lastScrollPosition = 0, this.isScrolling = !1, this.handleClick = t => {
                            this.clickHandler(t)
                        }, this.handleActiveLinkChange = () => {
                            this.activeLinkChangeHandler()
                        }, this.handleScroll = () => {
                            this.scrollHandler()
                        }, this.handleResize = () => {
                            this.resizeHandler()
                        }, this.handleLinkFocus = t => {
                            this.focusLinkHandler(t)
                        }, this.handleHorizontalScroll = () => {
                            this.updateButtons()
                        };
                        let i = this.root.querySelector(`.${c.CssClasses.LIST}`);
                        if (this.list = i, i = this.root.querySelector(`.${c.CssClasses.BUTTON_LEFT}`), !i)
                        if (this.prevButton = i, i = this.root.querySelector(`.${c.CssClasses.BUTTON_RIGHT}`), !i) 
                        if (this.nextButton = i, this.listItems = Array.from(this.root.querySelectorAll(`.${c.CssClasses.ITEMS}`)), 0 === this.listItems.length)
                        if (this.links = Array.from(this.root.querySelectorAll(`.${c.CssClasses.LINK}`)), 0 === this.links.length) 
                        this.options = Object.assign({}, {
                            offset: c.Numbers.DEFAULT_OFFSET,
                            belowHeader: !1
                        }, e), this.smoothScroll = new u.p, this.observer = new l.n({
                            activeLink: ""
                        }), this.leftWatchPoint = this.root.getBoundingClientRect().x + this.prevButton.offsetWidth, this.rightWatchPoint = this.leftWatchPoint + this.list.offsetWidth, this.initialize()
                    }
                    initialize() {
                        this.setAttributes(), this.updateButtons(), this.getLinkTargets(), this.registerListeners(), this.createIntersectionObserver()
                    }
                    createIntersectionObserver() {
                        const t = {
                                root: null,
                                rootMargin: `-${Math.floor(window.innerHeight/2)}px 0px`,
                                threshold: 0
                            },
                            e = new IntersectionObserver((t => {
                                for (const e of t) e.isIntersecting ? this.setActiveLink(e.target.id) : e.target.id === this.getActiveLink() && this.reset()
                            }), t);
                        for (const t of this.linkTargets) e.observe(t)
                    }
                    destroy() {
                        this.deregisterListeners()
                    }
                    setAttributes() {
                        const t = this.root.querySelector(`.${c.CssClasses.LIST}`).dataset[c.DataAttr.JUMPLINK_LABEL] || c.Strings.JUMPLINK_DEFAULT_LABEL;
                        this.root.setAttribute(s.Attribute.ROLE, "navigation");
                        for (const e of this.links) e.setAttribute(s.Attribute.ARIA_LABEL, `${e.text} - ${t}`);
                        for (const t of [this.prevButton, this.nextButton]) t.tabIndex = s.TabIndex.NOT_TABBABLE, t.setAttribute(s.Attribute.ARIA_HIDDEN, "true")
                    }
                    setActiveLink(t) {
                        this.observer.data.activeLink = t
                    }
                    getActiveLink() {
                        return this.observer.data.activeLink
                    }
                    getLinkTargets() {
                        for (const t of this.links) {
                            const e = t.hash.substring(1),
                                i = document.querySelector(`#${e}`);
                            if (!i) throw new Error(`Element with id "${e}" does not exist.`);
                            this.linkTargets.push(i)
                        }
                    }
                    registerListeners() {
                        this.root.addEventListener(r.EventType.CLICK, this.handleClick);
                        this.list.addEventListener(r.EventType.SCROLL, this.handleHorizontalScroll), document.addEventListener(r.EventType.SCROLL, ((t, e) => {
                            let i;
                            return (...n) => {
                                i || (t.apply(this, n), i = !0, setTimeout((() => i = !1), e))
                            }
                        })(this.handleScroll, 16)), window.addEventListener(r.EventType.RESIZE, this.handleResize), this.observer.listen(c.Strings.ACTIVE_LINK, this.handleActiveLinkChange), document.addEventListener(d.ScrollEventType.ENDSCROLL, (() => {
                            this.isScrolling = !1, this.updateTopOffset()
                        }));
                        for (const t of this.links) t.addEventListener(r.EventType.FOCUS, this.handleLinkFocus)
                    }
                    deregisterListeners() {
                        // this.root.removeEventListener(r.EventType.CLICK, this.handleClick), this.list.removeEventListener(r.EventType.SCROLL, this.handleHorizontalScroll), window.removeEventListener(r.EventType.SCROLL, this.handleScroll), window.removeEventListener(r.EventType.RESIZE, this.handleResize), this.observer.unlisten(c.Strings.ACTIVE_LINK, this.handleActiveLinkChange);
                        // for (const t of this.links) t.removeEventListener(r.EventType.FOCUS, this.handleLinkFocus)
                    }
                    focusLinkHandler(t) {
                        t.target && t.target instanceof Element && this.updateButtons()
                    }
                    clickHandler(t) {
                        t.preventDefault();
                        const e = t.target;
                        let i;
                        if (e === this.prevButton) i = this.isRTL() ? this.getPartialLink("next") : this.getPartialLink("prev"), i.scrollIntoView({
                            behavior: "auto",
                            block: "nearest",
                            inline: "end"
                        });
                        else if (e === this.nextButton) i = this.isRTL() ? this.getPartialLink("prev") : this.getPartialLink("next"), i.scrollIntoView({
                            behavior: "auto",
                            block: "nearest",
                            inline: "start"
                        });
                        else if (e instanceof HTMLAnchorElement && this.links.includes(e)) {
                            i = e;
                            const t = i.hash.substring(1),
                                n = this.options.offset + c.Numbers.JUMPLINKS_HEIGHT + c.Numbers.JUMPLINKS_MARGIN,
                                r = Math.floor(window.innerHeight / 2),
                                l = n > r ? r : n,
                                d = document.querySelector(`#${t}`);
                            this.smoothScroll.startScroll(d, {
                                duration: 600,
                                easing: o.hn,
                                direction: "both",
                                hash: !0,
                                offset: {
                                    x: 0,
                                    y: l
                                }
                            }), this.isScrolling = !0;
                            a.isElementFocusable(d) || (d.tabIndex = s.TabIndex.NOT_TABBABLE), d.focus()
                        }
                        this.updateButtons()
                    }
                    getPartialLink(t) {
                        let e;
                        e = "prev" === t ? this.leftWatchPoint : this.rightWatchPoint;
                        for (const t of this.links) {
                            const i = t.getBoundingClientRect();
                            if (i.x < e && i.x + i.width > e) return t
                        }
                        return this.links[0]
                    }
                    reset() {
                        this.setActiveLink("")
                    }
                    activeLinkChangeHandler() {
                        this.renderActiveLink();
                        const t = this.getActiveLink();
                        if ("" !== t) {
                            const e = this.links.find((e => e.hash === `#${t}`));
                            null == e || e.scrollIntoView({
                                behavior: "auto",
                                block: "nearest",
                                inline: "center"
                            })
                        }
                        this.updateButtons()
                    }
                    scrollHandler() {
                        !0 !== this.isScrolling && this.updateTopOffset()
                    }
                    resizeHandler() {
                        this.leftWatchPoint = this.root.getBoundingClientRect().x + this.prevButton.offsetWidth, this.rightWatchPoint = this.leftWatchPoint + this.list.offsetWidth, this.updateButtons()
                    }
                    updateButtons() {
                        this.prevButton.classList.remove(c.CssClasses.BUTTON_ACTIVE), this.nextButton.classList.remove(c.CssClasses.BUTTON_ACTIVE), this.isRTL() ? (this.list.scrollLeft < 0 && this.prevButton.classList.add(c.CssClasses.BUTTON_ACTIVE), this.list.scrollWidth + this.list.scrollLeft - this.list.clientWidth > 10 && this.nextButton.classList.add(c.CssClasses.BUTTON_ACTIVE)) : (this.list.scrollLeft > 0 && this.prevButton.classList.add(c.CssClasses.BUTTON_ACTIVE), this.list.scrollWidth - this.list.scrollLeft - this.list.clientWidth > 10 && this.nextButton.classList.add(c.CssClasses.BUTTON_ACTIVE))
                    }
                    renderActiveLink() {
                        const t = this.getActiveLink(),
                            e = this.links.find((e => e.hash === `#${t}`)),
                            i = this.root.querySelector(`.${c.CssClasses.LINK_ACTIVE}`);
                        null == i || i.classList.remove(c.CssClasses.LINK_ACTIVE), null == i || i.removeAttribute(s.Attribute.ARIA_CURRENT), null == e || e.classList.add(c.CssClasses.LINK_ACTIVE), null == e || e.setAttribute(s.Attribute.ARIA_CURRENT, "true")
                    }
                    updateTopOffset() {
                        if (this.lastScrollPosition === window.scrollY) return;
                        if (document.body.clientHeight - window.scrollY - window.innerHeight <= c.Numbers.SCROLL_THRESHOLD) return this.root.classList.remove(c.CssClasses.REWIND), void this.unsetOffset();
                        const t = this.options.offset - c.Numbers.JUMPLINKS_MARGIN;
                        if (window.scrollY <= t) return this.root.classList.remove(c.CssClasses.REWIND), void this.unsetOffset();
                        if (window.scrollY > t)
                            if (window.scrollY < this.lastScrollPosition)
                                if (this.root.classList.add(c.CssClasses.REWIND), this.options.belowHeader) {
                                    const t = document.querySelector("header");
                                    this.setOffset(((null == t ? void 0 : t.clientHeight) || 0) + c.Numbers.JUMPLINKS_MARGIN)
                                } else this.setOffset(this.options.offset);
                        else this.root.classList.remove(c.CssClasses.REWIND), this.unsetOffset();
                        this.lastScrollPosition = window.scrollY
                    }
                    setOffset(t) {
                        this.root.style.top = `${t}px`
                    }
                    unsetOffset() {
                        this.root.style.top = ""
                    }
                    isRTL() {
                        return document.documentElement.dir === c.Strings.RTL
                    }
                }
            },
            2836: (t, e, i) => {
                i.d(e, {
                    z: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(336),
                    r = function (t) {
                        function e(i) {
                            return t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P$
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y7
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "numbers", {
                            get: function () {
                                return o.nL
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    setNotchWidthProperty: function () {},
                                    removeNotchWidthProperty: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.notch = function (t) {
                            var i = e.cssClasses.OUTLINE_NOTCHED;
                            t > 0 && (t += o.nL.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i)
                        }, e.prototype.closeNotch = function () {
                            var t = e.cssClasses.OUTLINE_NOTCHED;
                            this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty()
                        }, e
                    }(s.I)
            },
            2864: (t, e, i) => {
                i.d(e, {
                    C$: () => s.C,
                    _X: () => o.P,
                    jQ: () => n.j,
                    p4: () => o.Y
                });
                var n = i(4287),
                    s = i(9019),
                    o = i(6933)
            },
            2887: (t, e, i) => {
                i.d(e, {
                    p: () => r
                });
                var n = i(2181),
                    s = i(4265),
                    o = i(7854);
                class r {
                    constructor() {
                        this.elapsedTime = 0, this.startTime = 0, this.animationFrame = 0, this.position = {
                            x: 0,
                            y: 0
                        }, this.distance = this.position, this.startPosition = this.position, this.endPosition = this.position, this.config = o.defaultOptions, this.mousewheelHandlerFunc = () => {
                            this.mousewheelHandler()
                        }
                    }
                    startScroll(t, e) {
                        var i;
                        if (0 === this.animationFrame) {
                            if (!(t instanceof Element)) throw new Error(o.Strings.MISSING_PAGE_ELEMENT);
                            document.dispatchEvent(new Event(o.ScrollEventType.STARTSCROLL, {
                                bubbles: !0,
                                cancelable: !1
                            })), e && (this.config = e), this.scrollElement = t, this.startPosition = this.getScrollPosition(), this.endPosition = this.getEndPosition(this.scrollElement), this.distance = {
                                x: this.endPosition.x - this.startPosition.x - this.config.offset.x,
                                y: this.endPosition.y - this.startPosition.y - this.config.offset.y
                            }, this.easingFunction = "string" == typeof this.config.easing ? n.Z0[this.config.easing] : null !== (i = this.config.easing) && void 0 !== i ? i : n.Z0.linear, this.elapsedTime = 0, this.position = {
                                x: 0,
                                y: 0
                            }, window.addEventListener(s.EventType.MOUSEWHEEL, this.mousewheelHandlerFunc), this.animateScroll()
                        }
                    }
                    stopScroll() {
                        document.dispatchEvent(new Event(o.ScrollEventType.ENDSCROLL, {
                            bubbles: !0,
                            cancelable: !1
                        })), window.cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, this.startTime = 0, this.removeMousewheelListener(), this.config = o.defaultOptions
                    }
                    animateScroll() {
                        this.startTime || (this.startTime = Date.now());
                        const t = Date.now();
                        this.elapsedTime = t - this.startTime, this.calculatePosition(), this.updatePosition(), this.elapsedTime < this.config.duration ? this.animationFrame = window.requestAnimationFrame((() => {
                            this.animateScroll()
                        })) : this.stopScroll()
                    }
                    calculatePosition() {
                        var t, e;
                        if (this.config.duration > 0) {
                            const i = Math.min(this.elapsedTime / this.config.duration, 1),
                                n = this.easingFunction(i);
                            this.position.x = this.startPosition.x + (null === (t = this.distance) || void 0 === t ? void 0 : t.x) * n, this.position.y = this.startPosition.y + (null === (e = this.distance) || void 0 === e ? void 0 : e.y) * n
                        } else this.position = this.endPosition
                    }
                    getScrollPosition() {
                        return window.pageYOffset ? {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        } : {
                            x: document.documentElement.scrollLeft,
                            y: document.documentElement.scrollTop
                        }
                    }
                    getEndPosition(t) {
                        let e = {
                            left: 0,
                            top: 0
                        };
                        return t && "getBoundingClientRect" in t && (e = t.getBoundingClientRect()), {
                            x: e.left + this.getScrollPosition().x,
                            y: e.top + this.getScrollPosition().y
                        }
                    }
                    updatePosition() {
                        switch (this.config.direction) {
                            case "x":
                                this.updateScrollLeft();
                                break;
                            case "y":
                                this.updateScrollTop();
                                break;
                            case "both":
                                this.updateScrollLeft(), this.updateScrollTop();
                                break;
                            default:
                                throw new Error
                        }
                    }
                    updateScrollLeft() {
                        const t = this.position.x;
                        document.body.scrollLeft = t, document.documentElement.scrollLeft = t
                    }
                    updateScrollTop() {
                        const t = this.position.y;
                        document.body.scrollTop = t, document.documentElement.scrollTop = t
                    }
                    mousewheelHandler() {
                        this.animationFrame && this.stopScroll()
                    }
                    removeMousewheelListener() {
                        window.removeEventListener(s.EventType.MOUSEWHEEL, this.mousewheelHandlerFunc)
                    }
                    destroy() {
                        this.stopScroll()
                    }
                }
            },
            2911: (t, e, i) => {
                i.d(e, {
                    S: () => n
                });
                class n {
                    constructor() {
                        this.listeners = {}
                    }
                    dispatchEvent(t, e) {
                        const i = this.getListenersList(t);
                        let n;
                        for (let t = 0; t < i.length; t++) n = i[t], n(e)
                    }
                    listen(t, e) {
                        this.getListenersList(t).push(e)
                    }
                    unlisten(t, e) {
                        const i = this.getListenersList(t);
                        for (let t = i.length - 1; t >= 0; t--) {
                            i[t] === e && i.splice(t, 1)
                        }
                    }
                    getListenersList(t) {
                        return this.listeners[t] || (this.listeners[t] = []), this.listeners[t]
                    }
                    removeAllListeners() {
                        for (const t of Object.keys(this.listeners)) Object.prototype.hasOwnProperty.call(this.listeners, t) && this.listeners[t].forEach((e => {
                            this.unlisten(t, e)
                        }))
                    }
                }
            },
            2950: (t, e, i) => {
                i.d(e, {
                    n: () => n
                });
                class n {
                    constructor(t) {
                        this.data = t, this.watchers = new Map, this.walk(this.data)
                    }
                    walk(t) {
                        const e = Object.keys(t);
                        for (let i = 0; i < e.length; i++) this.defineReactive(t, e[i])
                    }
                    defineReactive(t, e, i) {
                        const n = Object.getOwnPropertyDescriptor(t, e);
                        if (n && !1 === n.configurable) return;
                        const s = n && n.get,
                            o = n && n.set;
                        s && !o || 2 !== arguments.length || (i = t[e]), Object.defineProperty(t, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: () => {
                                const n = s ? s.call(t) : i;
                                return this.watchers.has(e) || this.watchers.set(e, []), n
                            },
                            set: n => {
                                n !== (s ? s.call(t) : i) && (o ? o.call(t, n) : i = n, this.notify(e))
                            }
                        })
                    }
                    listen(t, e) {
                        if ("object" == typeof t) Object.keys(t).forEach((t => {
                            this.watchers.has(t) || this.watchers.set(t, []);
                            const i = this.watchers.get(t);
                            i && i.push(e)
                        }));
                        else {
                            this.watchers.has(t) || this.watchers.set(t, []);
                            const i = this.watchers.get(t);
                            i && i.push(e)
                        }
                    }
                    unlisten(t, e) {
                        "object" == typeof t ? Object.keys(t).forEach((t => {
                            this.watchers.has(t) && this.watchers.set(t, this.watchers.get(t).filter((t => t !== e)))
                        })) : this.watchers.get(t) && this.watchers.set(t, this.watchers.get(t).filter((t => t !== e)))
                    }
                    notify(t) {
                        this.watchers.get(t) && this.watchers.get(t).forEach((t => {
                            t.call(null)
                        }))
                    }
                }
            },
            3017: (t, e, i) => {
                var n, s, o;
                i.r(e), i.d(e, {
                        CssClasses: () => s,
                        DataAttrs: () => n,
                        ErrorMessages: () => o
                    }),
                    function (t) {
                        t.VIDEO_ID = "glueYtVideoVid", t.PLAYER_ID = "glueYtPlayerId", t.HEIGHT = "glueYtVideoHeight", t.WIDTH = "glueYtVideoWidth", t.PLAYER_VARS = "glueYtVideoPlayerVars"
                    }(n || (n = {})),
                    function (t) {
                        t.BASE = "glue-video", t.PREVIEW_CONTAINER = "glue-video__preview-container", t.DURATION = "glue-video__timestamp-duration", t.HIDE_ELEMENT = "glue-video--hidden", t.IMAGE_CONTAINER = "glue-video__preview-image", t.TIMESTAMP = "glue-video__timestamp", t.TIMESTAMP_SHOW = "glue-video__timestamp--visible", t.VIDEO_CONTAINER = "glue-video__container", t.INLINE_VIDEO = "glue-video__preview-container--inline", t.LABEL = "glue-video__label"
                    }(s || (s = {})),
                    function (t) {
                        t.MISSING_VIDEO = "The video element is missing"
                    }(o || (o = {}))
            },
            3142: (t, e, i) => {
                i.d(e, {
                    Y: () => c
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(8116),
                    r = i(6834),
                    a = i(9846),
                    l = i(7142);
                var d = ["Alt", "Control", "Meta", "Shift"];

                function u(t) {
                    var e = new Set(t ? d.filter((function (e) {
                        return t.getModifierState(e)
                    })) : []);
                    return function (t) {
                        return t.every((function (t) {
                            return e.has(t)
                        })) && t.length === e.size
                    }
                }
                var c = function (t) {
                    function e(i) {
                        var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                        return s.wrapFocus = !1, s.isVertical = !0, s.isSingleSelectionList = !1, s.areDisabledItemsFocusable = !0, s.selectedIndex = r.nL.UNSET_INDEX, s.focusedItemIndex = r.nL.UNSET_INDEX, s.useActivatedClass = !1, s.useSelectedAttr = !1, s.ariaCurrentAttrValue = null, s.isCheckboxList = !1, s.isRadioList = !1, s.lastSelectedIndex = null, s.hasTypeahead = !1, s.typeaheadState = l.Ws(), s.sortedIndexByFirstChar = new Map, s
                    }
                    return (0, n.C6)(e, t), Object.defineProperty(e, "strings", {
                        get: function () {
                            return r.P$
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e, "cssClasses", {
                        get: function () {
                            return r.Y7
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e, "numbers", {
                        get: function () {
                            return r.nL
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e, "defaultAdapter", {
                        get: function () {
                            return {
                                addClassForElementIndex: function () {},
                                focusItemAtIndex: function () {},
                                getAttributeForElementIndex: function () {
                                    return null
                                },
                                getFocusedElementIndex: function () {
                                    return 0
                                },
                                getListItemCount: function () {
                                    return 0
                                },
                                hasCheckboxAtIndex: function () {
                                    return !1
                                },
                                hasRadioAtIndex: function () {
                                    return !1
                                },
                                isCheckboxCheckedAtIndex: function () {
                                    return !1
                                },
                                isFocusInsideList: function () {
                                    return !1
                                },
                                isRootFocused: function () {
                                    return !1
                                },
                                listItemAtIndexHasClass: function () {
                                    return !1
                                },
                                notifyAction: function () {},
                                notifySelectionChange: function () {},
                                removeClassForElementIndex: function () {},
                                setAttributeForElementIndex: function () {},
                                setCheckedCheckboxOrRadioAtIndex: function () {},
                                setTabIndexForListItemChildren: function () {},
                                getPrimaryTextAtIndex: function () {
                                    return ""
                                }
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.layout = function () {
                        0 !== this.adapter.getListItemCount() && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()))
                    }, e.prototype.getFocusedItemIndex = function () {
                        return this.focusedItemIndex
                    }, e.prototype.setWrapFocus = function (t) {
                        this.wrapFocus = t
                    }, e.prototype.setVerticalOrientation = function (t) {
                        this.isVertical = t
                    }, e.prototype.setSingleSelection = function (t) {
                        this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM())
                    }, e.prototype.setDisabledItemsFocusable = function (t) {
                        this.areDisabledItemsFocusable = t
                    }, e.prototype.maybeInitializeSingleSelection = function () {
                        var t = this.getSelectedIndexFromDOM();
                        t !== r.nL.UNSET_INDEX && (this.adapter.listItemAtIndexHasClass(t, r.Y7.LIST_ITEM_ACTIVATED_CLASS) && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t)
                    }, e.prototype.getSelectedIndexFromDOM = function () {
                        for (var t = r.nL.UNSET_INDEX, e = this.adapter.getListItemCount(), i = 0; i < e; i++) {
                            var n = this.adapter.listItemAtIndexHasClass(i, r.Y7.LIST_ITEM_SELECTED_CLASS),
                                s = this.adapter.listItemAtIndexHasClass(i, r.Y7.LIST_ITEM_ACTIVATED_CLASS);
                            if (n || s) {
                                t = i;
                                break
                            }
                        }
                        return t
                    }, e.prototype.setHasTypeahead = function (t) {
                        this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex())
                    }, e.prototype.isTypeaheadInProgress = function () {
                        return this.hasTypeahead && l._B(this.typeaheadState)
                    }, e.prototype.setUseActivatedClass = function (t) {
                        this.useActivatedClass = t
                    }, e.prototype.setUseSelectedAttribute = function (t) {
                        this.useSelectedAttr = t
                    }, e.prototype.getSelectedIndex = function () {
                        return this.selectedIndex
                    }, e.prototype.setSelectedIndex = function (t, e) {
                        void 0 === e && (e = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, e) : this.isRadioList ? this.setRadioAtIndex(t, e) : this.setSingleSelectionAtIndex(t, e))
                    }, e.prototype.handleFocusIn = function (t) {
                        t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"))
                    }, e.prototype.handleFocusOut = function (t) {
                        var e = this;
                        t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout((function () {
                            e.adapter.isFocusInsideList() || e.setTabindexToFirstSelectedOrFocusedItem()
                        }), 0)
                    }, e.prototype.isIndexDisabled = function (t) {
                        return this.adapter.listItemAtIndexHasClass(t, r.Y7.LIST_ITEM_DISABLED_CLASS)
                    }, e.prototype.handleKeydown = function (t, e, i) {
                        var n, s = this,
                            d = "ArrowLeft" === (0, o.l5)(t),
                            c = "ArrowUp" === (0, o.l5)(t),
                            h = "ArrowRight" === (0, o.l5)(t),
                            p = "ArrowDown" === (0, o.l5)(t),
                            E = "Home" === (0, o.l5)(t),
                            f = "End" === (0, o.l5)(t),
                            m = "Enter" === (0, o.l5)(t),
                            T = "Spacebar" === (0, o.l5)(t),
                            g = this.isVertical && p || !this.isVertical && h,
                            I = this.isVertical && c || !this.isVertical && d,
                            v = "A" === t.key || "a" === t.key,
                            A = u(t);
                        if (this.adapter.isRootFocused()) {
                            if ((I || f) && A([])) t.preventDefault(), this.focusLastElement();
                            else if ((g || E) && A([])) t.preventDefault(), this.focusFirstElement();
                            else if (I && A(["Shift"]) && this.isCheckboxList) {
                                t.preventDefault(), -1 !== (L = this.focusLastElement()) && this.setSelectedIndexOnAction(L, !1)
                            } else if (g && A(["Shift"]) && this.isCheckboxList) {
                                t.preventDefault(), -1 !== (L = this.focusFirstElement()) && this.setSelectedIndexOnAction(L, !1)
                            }
                            if (this.hasTypeahead) {
                                var C = {
                                    event: t,
                                    focusItemAtIndex: function (t) {
                                        s.focusItemAtIndex(t)
                                    },
                                    focusedItemIndex: -1,
                                    isTargetListItem: e,
                                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                                    isItemAtIndexDisabled: function (t) {
                                        return s.isIndexDisabled(t)
                                    }
                                };
                                l.y9(C, this.typeaheadState)
                            }
                        } else {
                            var y = this.adapter.getFocusedElementIndex();
                            if (!(-1 === y && (y = i) < 0)) {
                                if (g && A([]))(0, a.C)(t), this.focusNextElement(y);
                                else if (I && A([]))(0, a.C)(t), this.focusPrevElement(y);
                                else if (g && A(["Shift"]) && this.isCheckboxList) {
                                    (0, a.C)(t), -1 !== (L = this.focusNextElement(y)) && this.setSelectedIndexOnAction(L, !1)
                                } else if (I && A(["Shift"]) && this.isCheckboxList) {
                                    var L;
                                    (0, a.C)(t), -1 !== (L = this.focusPrevElement(y)) && this.setSelectedIndexOnAction(L, !1)
                                } else if (E && A([]))(0, a.C)(t), this.focusFirstElement();
                                else if (f && A([]))(0, a.C)(t), this.focusLastElement();
                                else if (E && A(["Control", "Shift"]) && this.isCheckboxList) {
                                    if ((0, a.C)(t), this.isIndexDisabled(y)) return;
                                    this.focusFirstElement(), this.toggleCheckboxRange(0, y, y)
                                } else if (f && A(["Control", "Shift"]) && this.isCheckboxList) {
                                    if ((0, a.C)(t), this.isIndexDisabled(y)) return;
                                    this.focusLastElement(), this.toggleCheckboxRange(y, this.adapter.getListItemCount() - 1, y)
                                } else if (v && A(["Control"]) && this.isCheckboxList) t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === r.nL.UNSET_INDEX ? [] : this.selectedIndex, !0);
                                else if ((m || T) && A([])) {
                                    if (e) {
                                        if ((O = t.target) && "A" === O.tagName && m) return;
                                        if ((0, a.C)(t), this.isIndexDisabled(y)) return;
                                        this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(y, !1), this.adapter.notifyAction(y))
                                    }
                                } else if ((m || T) && A(["Shift"]) && this.isCheckboxList) {
                                    var O;
                                    if ((O = t.target) && "A" === O.tagName && m) return;
                                    if ((0, a.C)(t), this.isIndexDisabled(y)) return;
                                    this.isTypeaheadInProgress() || (this.toggleCheckboxRange(null !== (n = this.lastSelectedIndex) && void 0 !== n ? n : y, y, y), this.adapter.notifyAction(y))
                                }
                                if (this.hasTypeahead) {
                                    C = {
                                        event: t,
                                        focusItemAtIndex: function (t) {
                                            s.focusItemAtIndex(t)
                                        },
                                        focusedItemIndex: this.focusedItemIndex,
                                        isTargetListItem: e,
                                        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                                        isItemAtIndexDisabled: function (t) {
                                            return s.isIndexDisabled(t)
                                        }
                                    };
                                    l.y9(C, this.typeaheadState)
                                }
                            }
                        }
                    }, e.prototype.handleClick = function (t, e, i) {
                        var n, s = u(i);
                        t !== r.nL.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, e), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange(null !== (n = this.lastSelectedIndex) && void 0 !== n ? n : t, t, t), this.adapter.notifyAction(t))))
                    }, e.prototype.focusNextElement = function (t) {
                        var e = this.adapter.getListItemCount(),
                            i = t,
                            n = null;
                        do {
                            if (++i >= e) {
                                if (!this.wrapFocus) return t;
                                i = 0
                            }
                            if (i === n) return -1;
                            n = null != n ? n : i
                        } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
                        return this.focusItemAtIndex(i), i
                    }, e.prototype.focusPrevElement = function (t) {
                        var e = this.adapter.getListItemCount(),
                            i = t,
                            n = null;
                        do {
                            if (--i < 0) {
                                if (!this.wrapFocus) return t;
                                i = e - 1
                            }
                            if (i === n) return -1;
                            n = null != n ? n : i
                        } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
                        return this.focusItemAtIndex(i), i
                    }, e.prototype.focusFirstElement = function () {
                        return this.focusNextElement(-1)
                    }, e.prototype.focusLastElement = function () {
                        return this.focusPrevElement(this.adapter.getListItemCount())
                    }, e.prototype.focusInitialElement = function () {
                        var t = this.getFirstSelectedOrFocusedItemIndex();
                        return this.focusItemAtIndex(t), t
                    }, e.prototype.setEnabled = function (t, e) {
                        this.isIndexValid(t, !1) && (e ? (this.adapter.removeClassForElementIndex(t, r.Y7.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, r.P$.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, r.Y7.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, r.P$.ARIA_DISABLED, "true")))
                    }, e.prototype.setSingleSelectionAtIndex = function (t, e) {
                        if (void 0 === e && (e = {}), this.selectedIndex !== t || e.forceUpdate) {
                            var i = r.Y7.LIST_ITEM_SELECTED_CLASS;
                            this.useActivatedClass && (i = r.Y7.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== r.nL.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== r.nL.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, e.isUserInteraction && !e.forceUpdate && this.adapter.notifySelectionChange([t])
                        }
                    }, e.prototype.setAriaForSingleSelectionAtIndex = function (t) {
                        this.selectedIndex === r.nL.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, r.P$.ARIA_CURRENT));
                        var e = null !== this.ariaCurrentAttrValue,
                            i = e ? r.P$.ARIA_CURRENT : r.P$.ARIA_SELECTED;
                        if (this.selectedIndex !== r.nL.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== r.nL.UNSET_INDEX) {
                            var n = e ? this.ariaCurrentAttrValue : "true";
                            this.adapter.setAttributeForElementIndex(t, i, n)
                        }
                    }, e.prototype.getSelectionAttribute = function () {
                        return this.useSelectedAttr ? r.P$.ARIA_SELECTED : r.P$.ARIA_CHECKED
                    }, e.prototype.setRadioAtIndex = function (t, e) {
                        void 0 === e && (e = {});
                        var i = this.getSelectionAttribute();
                        this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), (this.selectedIndex !== t || e.forceUpdate) && (this.selectedIndex !== r.nL.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, e.isUserInteraction && !e.forceUpdate && this.adapter.notifySelectionChange([t]))
                    }, e.prototype.setCheckboxAtIndex = function (t, e) {
                        void 0 === e && (e = {});
                        for (var i = this.selectedIndex, n = e.isUserInteraction ? new Set(i === r.nL.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), o = [], a = 0; a < this.adapter.getListItemCount(); a++) {
                            var l = null == n ? void 0 : n.has(a),
                                d = t.indexOf(a) >= 0;
                            d !== l && o.push(a), this.adapter.setCheckedCheckboxOrRadioAtIndex(a, d), this.adapter.setAttributeForElementIndex(a, s, d ? "true" : "false")
                        }
                        this.selectedIndex = t, e.isUserInteraction && o.length && this.adapter.notifySelectionChange(o)
                    }, e.prototype.toggleCheckboxRange = function (t, e, i) {
                        this.lastSelectedIndex = i;
                        for (var s = new Set(this.selectedIndex === r.nL.UNSET_INDEX ? [] : this.selectedIndex), o = !(null == s ? void 0 : s.has(i)), a = (0, n.zs)([t, e].sort(), 2), l = a[0], d = a[1], u = this.getSelectionAttribute(), c = [], h = l; h <= d; h++) {
                            if (!this.isIndexDisabled(h)) o !== s.has(h) && (c.push(h), this.adapter.setCheckedCheckboxOrRadioAtIndex(h, o), this.adapter.setAttributeForElementIndex(h, u, "" + o), o ? s.add(h) : s.delete(h))
                        }
                        c.length && (this.selectedIndex = (0, n.fX)([], (0, n.zs)(s)), this.adapter.notifySelectionChange(c))
                    }, e.prototype.setTabindexAtIndex = function (t) {
                        this.focusedItemIndex === r.nL.UNSET_INDEX && 0 !== t ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), this.selectedIndex instanceof Array || this.selectedIndex === t || this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== r.nL.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0")
                    }, e.prototype.isSelectableList = function () {
                        return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList
                    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
                        var t = this.getFirstSelectedOrFocusedItemIndex();
                        this.setTabindexAtIndex(t)
                    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function () {
                        return this.isSelectableList() ? "number" == typeof this.selectedIndex && this.selectedIndex !== r.nL.UNSET_INDEX ? this.selectedIndex : this.selectedIndex instanceof Array && this.selectedIndex.length > 0 ? this.selectedIndex.reduce((function (t, e) {
                            return Math.min(t, e)
                        })) : 0 : Math.max(this.focusedItemIndex, 0)
                    }, e.prototype.isIndexValid = function (t, e) {
                        var i = this;
                        if (void 0 === e && (e = !0), t instanceof Array) {
                            if (!this.isCheckboxList && e) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                            return 0 === t.length || t.some((function (t) {
                                return i.isIndexInRange(t)
                            }))
                        }
                        if ("number" == typeof t) {
                            if (this.isCheckboxList && e) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
                            return this.isIndexInRange(t) || this.isSingleSelectionList && t === r.nL.UNSET_INDEX
                        }
                        return !1
                    }, e.prototype.isIndexInRange = function (t) {
                        var e = this.adapter.getListItemCount();
                        return t >= 0 && t < e
                    }, e.prototype.setSelectedIndexOnAction = function (t, e) {
                        this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, e), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, {
                            isUserInteraction: !0
                        })
                    }, e.prototype.toggleCheckboxAtIndex = function (t, e) {
                        var i, n = this.getSelectionAttribute(),
                            s = this.adapter.isCheckboxCheckedAtIndex(t);
                        e ? i = s : (i = !s, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, i)), this.adapter.setAttributeForElementIndex(t, n, i ? "true" : "false");
                        var o = this.selectedIndex === r.nL.UNSET_INDEX ? [] : this.selectedIndex.slice();
                        i ? o.push(t) : o = o.filter((function (e) {
                            return e !== t
                        })), this.selectedIndex = o
                    }, e.prototype.focusItemAtIndex = function (t) {
                        this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t
                    }, e.prototype.checkboxListToggleAll = function (t, e) {
                        var i = this.adapter.getListItemCount();
                        if (t.length === i) this.setCheckboxAtIndex([], {
                            isUserInteraction: e
                        });
                        else {
                            for (var n = [], s = 0; s < i; s++)(!this.isIndexDisabled(s) || t.indexOf(s) > -1) && n.push(s);
                            this.setCheckboxAtIndex(n, {
                                isUserInteraction: e
                            })
                        }
                    }, e.prototype.typeaheadMatchItem = function (t, e, i) {
                        var n = this;
                        void 0 === i && (i = !1);
                        var s = {
                            focusItemAtIndex: function (t) {
                                n.focusItemAtIndex(t)
                            },
                            focusedItemIndex: e || this.focusedItemIndex,
                            nextChar: t,
                            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                            skipFocus: i,
                            isItemAtIndexDisabled: function (t) {
                                return n.isIndexDisabled(t)
                            }
                        };
                        return l.N0(s, this.typeaheadState)
                    }, e.prototype.typeaheadInitSortedIndex = function () {
                        return l.mT(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex)
                    }, e.prototype.clearTypeaheadBuffer = function () {
                        l.iI(this.typeaheadState)
                    }, e
                }(s.I)
            },
            3150: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmVideoSelector = e.GdmYouTube = e.GdmVideoEmbed = e.GdmVideo = void 0;
                var n = i(477);
                Object.defineProperty(e, "GdmVideo", {
                    enumerable: !0,
                    get: function () {
                        return n.GdmVideo
                    }
                });
                var s = i(3323);
                Object.defineProperty(e, "GdmVideoEmbed", {
                    enumerable: !0,
                    get: function () {
                        return s.GdmVideoEmbed
                    }
                });
                var o, r = i(8163);
                Object.defineProperty(e, "GdmYouTube", {
                        enumerable: !0,
                        get: function () {
                            return r.GdmYouTube
                        }
                    }),
                    function (t) {
                        t.ALL = "gdm-video-embed, gdm-youtube", t.VIDEO_EMBED = "gdm-video-embed", t.YOUTUBE = "gdm-youtube"
                    }(o || (e.GdmVideoSelector = o = {}))
            },
            3323: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmVideoEmbed = e.CssClasses = e.Selector = void 0;
                const n = i(4265),
                    s = i(4839),
                    o = i(477);
                var r, a;
                ! function (t) {
                    t.MUTE_TOGGLE = ".gdm-video-embed__mute-toggle", t.PLAY_TOGGLE = ".gdm-video-embed__play-toggle", t.POSTER = ".gdm-video-embed__poster", t.VIDEO = ".gdm-video-embed__player", t.VIDEO_TEMPLATE = "template", t.HOVER_PLAY = "gdm-video-embed--hover-play"
                }(r || (e.Selector = r = {})),
                function (t) {
                    t.HAS_PLAYED = "gdm-video-embed--has-played", t.MUTED = "gdm-video-embed--muted", t.PAUSED = "gdm-video-embed--paused"
                }(a || (e.CssClasses = a = {}));
                class l extends o.GdmVideo {
                    // constructor() {
                    //     super(...arguments), this.muteToggle = null, this.playToggle = null, this.poster = null, this.video = null, this.isMuted = !1, this.onPlayStateChange = () => {
                    //         this.video && this.classList.toggle(a.PAUSED, this.video.paused)
                    //     }, this.onVolumeChange = () => {
                    //         this.video && this.classList.toggle(a.MUTED, this.video.muted)
                    //     }, this.onFirstPlay = () => {
                    //         this.video && (this.video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE && (this.video.load(), this.play()), this.classList.add(a.HAS_PLAYED), this.video.removeEventListener("play", this.onFirstPlay))
                    //     }, this.onPlayToggleClick = t => {
                    //         (0, s.isPointWithinElementFromEvent)(t) && (!this.video || this.video.paused ? (this.isPlaying = !0, this.play()) : (this.isPlaying = !1, this.pause()))
                    //     }, this.onMuteToggleClick = t => {
                    //         this.video && (0, s.isPointWithinElementFromEvent)(t) && (this.isMuted = !this.video.muted, this.video.muted = this.isMuted)
                    //     }, this.playInternal = () => {
                    //         this.poster && this.replacePosterWithVideo(), this.video && this.video.play()
                    //     }, this.pauseInternal = () => {
                    //         this.video && this.video.pause()
                    //     }
                    // }
                    // connectedCallback() {
                    //     this.isAutoplay = "true" === this.dataset.autoplay, this.muteToggle = this.querySelector(r.MUTE_TOGGLE), this.muteToggle && this.muteToggle.addEventListener(n.EventType.CLICK, this.onMuteToggleClick), this.playToggle = this.querySelector(r.PLAY_TOGGLE), this.playToggle && this.playToggle.addEventListener(n.EventType.CLICK, this.onPlayToggleClick), this.poster = this.querySelector(r.POSTER);
                    //     const t = this.querySelector(r.VIDEO);
                    //     t && this.setupVideo(t), this.hoverPlay = this.classList.contains(r.HOVER_PLAY), this.hoverPlay && (this.addEventListener(n.EventType.MOUSEENTER, (() => {
                    //         this.isPlaying = !0, this.play()
                    //     })), this.addEventListener(n.EventType.MOUSELEAVE, (() => {
                    //         this.isPlaying = !1, this.video && (this.video.currentTime = 0), this.pause()
                    //     }))), super.connectedCallback()
                    // }
                    disconnectedCallback() {
                        this.muteToggle && this.muteToggle.removeEventListener(n.EventType.CLICK, this.onMuteToggleClick), this.playToggle && this.playToggle.removeEventListener(n.EventType.CLICK, this.onPlayToggleClick), this.video && (this.video.removeEventListener("play", this.onFirstPlay), this.video.removeEventListener("play", this.onPlayStateChange), this.video.removeEventListener("pause", this.onPlayStateChange), this.video.removeEventListener("ended", this.onPlayStateChange), this.video.removeEventListener("volumechange", this.onVolumeChange)), super.disconnectedCallback()
                    }
                    // setupVideo(t) {
                    //     this.video = t, this.isAutoplay && !o.IS_IOS && (this.video.autoplay = !0), this.video.addEventListener("play", this.onFirstPlay), this.video.addEventListener("play", this.onPlayStateChange), this.video.addEventListener("pause", this.onPlayStateChange), this.video.addEventListener("ended", this.onPlayStateChange), this.onPlayStateChange(), this.video.addEventListener("volumechange", this.onVolumeChange), this.onVolumeChange()
                    // }
                    replacePosterWithVideo() {
                        if (!this.poster) return;
                        const t = this.querySelector(r.VIDEO_TEMPLATE),
                            e = t && t.content.querySelector(r.VIDEO);
                        if (!e) return;
                        const i = this.poster.querySelector("img");
                        i && (e.poster = i.currentSrc), this.poster.after(e), this.setupVideo(e), this.poster = null
                    }
                    seekInternal(t) {
                        this.video && (this.video.currentTime = t)
                    }
                }
                e.GdmVideoEmbed = l
            },
            3393: (t, e, i) => {
                i.d(e, {
                    P$: () => o,
                    Y7: () => s,
                    hf: () => n,
                    nL: () => r
                });
                var n, s = {
                        MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
                        MENU_SELECTION_GROUP: "mdc-menu__selection-group",
                        ROOT: "mdc-menu"
                    },
                    o = {
                        ARIA_CHECKED_ATTR: "aria-checked",
                        ARIA_DISABLED_ATTR: "aria-disabled",
                        CHECKBOX_SELECTOR: 'input[type="checkbox"]',
                        LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
                        SELECTED_EVENT: "MDCMenu:selected",
                        SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
                    },
                    r = {
                        FOCUS_ROOT_INDEX: -1
                    };
                ! function (t) {
                    t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM"
                }(n || (n = {}))
            },
            3446: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmEvaluations = e.GdmEvaluationsSelector = void 0;
                const n = i(1543);
                var s;
                ! function (t) {
                    t.ROOT = "gdm-evaluations", t.PANEL = ".gdm-evaluations__panel", t.SELECT = ".mdc-select"
                }(s || (e.GdmEvaluationsSelector = s = {}));
                class o extends HTMLElement {
                    constructor() {
                        super(...arguments), this.currentIndex = 0, this.onSelect = () => {
                            if (this.select && this.panels) {
                                const t = this.currentIndex;
                                this.currentIndex = this.select.selectedIndex, this.panels[t].hidden = !0, this.panels[this.currentIndex].hidden = !1, this.panels[this.currentIndex].focus()
                            }
                        }
                    }
                    connectedCallback() {
                        this.select && this.select.destroy();
                        const t = this.querySelector(s.SELECT);
                        t && (this.select = n.MDCSelect.attachTo(t), this.select.listen("MDCSelect:change", this.onSelect)), this.panels = this.querySelectorAll(s.PANEL)
                    }
                    disconnectedCallback() {
                        this.select && this.select.destroy()
                    }
                }
                e.GdmEvaluations = o
            },
            3463: (t, e, i) => {
                var n, s, o, r, a;
                i.r(e), i.d(e, {
                        CarouselType: () => a,
                        CssClasses: () => n,
                        Icons: () => s,
                        Numbers: () => o,
                        Strings: () => r
                    }),
                    function (t) {
                        t.ACTIVE = "glue-is-active", t.BUTTON = "glue-carousel__button", t.BUTTON_NEXT = "glue-carousel__button--next", t.BUTTON_PREV = "glue-carousel__button--prev", t.CARDS = "glue-carousel--cards", t.CAROUSEL = "glue-carousel", t.DISABLE_GRAB = "glue-carousel__list--disable-grab", t.HAS_NAVIGATION = "glue-carousel--has-navigation", t.INACTIVE = "glue-is-inactive", t.ITEM = "glue-carousel__item", t.LIST = "glue-carousel__list", t.MODALS = "glue-carousel__modals", t.NAVIGATION = "glue-carousel__navigation", t.NAVIGATION_DOT = "glue-carousel__dot", t.PEEK_OUT = "glue-carousel--peek-out", t.VIEWPORT = "glue-carousel__viewport"
                    }(n || (n = {})),
                    function (t) {
                        t.CHEVRON_RIGHT = "chevron-right", t.CHEVRON_LEFT = "chevron-left"
                    }(s || (s = {})),
                    function (t) {
                        t[t.DRAG_THRESHOLD = .2] = "DRAG_THRESHOLD", t[t.DRAGSTART_THRESHOLD_PX = 10] = "DRAGSTART_THRESHOLD_PX", t[t.PEEK_DISTANCE = 24] = "PEEK_DISTANCE", t[t.ROUNDING_THRESHOLD = .05] = "ROUNDING_THRESHOLD"
                    }(o || (o = {})),
                    function (t) {
                        t.DATA_CAROUSEL_ANIMATION_ATTR = "data-glue-carousel-animation", t.DATA_CAROUSEL_NAVIGATION_LABEL_ATTR = "data-glue-carousel-navigation-label", t.DATA_DOT = "dot", t.DATA_NAVIGATION_LABEL = "glueCarouselNavigationLabel", t.NAVIGATION_ARIA_LABEL_DEFAULT = "Choose slide to display", t.NAVIGATION_LABEL_DEFAULT = "Selected tab $glue_carousel_page_number$ of $glue_carousel_page_total$", t.NAVIGATION_LABEL_NUMBER_VAR_NAME = "$glue_carousel_page_number$", t.NAVIGATION_LABEL_TOTAL_VAR_NAME = "$glue_carousel_page_total$", t.NAVIGATION_NEXT_LABEL_DEFAULT = "Go to the next slide", t.NAVIGATION_PREV_LABEL_DEFAULT = "Go to the previous slide", t.RTL = "rtl", t.SLIDE_CHANGE = "gluecarouselslidechange", t.TRANSITION_NONE = "none"
                    }(r || (r = {})),
                    function (t) {
                        t.CARDS = "cards", t.IMAGE = "image", t.CUSTOM = "custom"
                    }(a || (a = {}))
            },
            3618: (t, e, i) => {
                i.d(e, {
                    i: () => l
                });
                var n = i(1635),
                    s = i(361),
                    o = i(8813),
                    r = i(336),
                    a = i(2836),
                    l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.initialSyncWithDOM = function () {
                            this.notchElement = this.root.querySelector(r.P$.NOTCH_ELEMENT_SELECTOR);
                            var t = this.root.querySelector("." + o.K.cssClasses.ROOT);
                            t ? (t.style.transitionDuration = "0s", this.root.classList.add(r.Y7.OUTLINE_UPGRADED), requestAnimationFrame((function () {
                                t.style.transitionDuration = ""
                            }))) : this.root.classList.add(r.Y7.NO_LABEL)
                        }, e.prototype.notch = function (t) {
                            this.foundation.notch(t)
                        }, e.prototype.closeNotch = function () {
                            this.foundation.closeNotch()
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClass: function (e) {
                                        return t.root.classList.add(e)
                                    },
                                    removeClass: function (e) {
                                        return t.root.classList.remove(e)
                                    },
                                    setNotchWidthProperty: function (e) {
                                        t.notchElement.style.setProperty("width", e + "px")
                                    },
                                    removeNotchWidthProperty: function () {
                                        t.notchElement.style.removeProperty("width")
                                    }
                                };
                            return new a.z(e)
                        }, e
                    }(s.O)
            },
            3685: (t, e, i) => {
                i.d(e, {
                    A: () => u
                });
                var n = i(7341),
                    s = i(9688),
                    o = i(4829),
                    r = i(8591),
                    a = i(4265),
                    l = i(1234),
                    d = i(4524);
                class u extends n.u {
                    constructor(t, e = {}, i, n) {
                        if (super(t), this.handleResize = () => {
                                this.setPopoverPosition()
                            }, this.handleResizeDebounce = () => {
                                this.resizeDebounce.debounce()
                            }, this.options = Object.assign({}, u.defaults, e, this.getAttributeOptions()), !["top", "bottom", "left", "right"].includes(this.options.placement)) throw new Error(d.DH.INCORRECT_PLACEMENT);
                        this.clickOutsideDialogHandler = t => {
                            this.handleClickOutsideDialog(t)
                        }, this.initInteractiveElements(i, n), this.resizeDebounce = new r.S(this.handleResize, d.IT)
                    }
                    initInteractiveElements(t, e) {
                        if (this.buttonEl = t || this.root.querySelector(`.${d.s7.TRIGGER}`), !this.buttonEl) throw new Error(d.DH.MISSING_TRIGGER);
                        if (e) this.dialogEl = e;
                        else if (this.dialogEl = this.root.querySelector(`.${d.s7.DIALOG}`), !this.dialogEl) throw new Error(d.DH.MISSING_DIALOG);
                        this.closeEl = this.dialogEl.querySelector(`.${d.s7.CLOSE_BTN}`), this.buttonClickHandler = t => {
                            this.handleButtonClick(t)
                        }, this.keyDownHandler = t => {
                            this.handleKeyDown(t)
                        }, this.buttonEl.addEventListener(a.EventType.CLICK, this.buttonClickHandler), this.buttonEl.addEventListener(a.EventType.KEYDOWN, this.keyDownHandler), this.dialogEl.addEventListener(a.EventType.KEYDOWN, this.keyDownHandler), this.dialogEl.addEventListener(a.EventType.CLICK, this.buttonClickHandler), window.addEventListener(a.EventType.RESIZE, this.handleResizeDebounce), this.setDefaultElAttr()
                    }
                    destroy() {
                        this.close(), this.buttonEl.removeEventListener(a.EventType.CLICK, this.buttonClickHandler), document.removeEventListener(a.EventType.CLICK, this.clickOutsideDialogHandler), this.dialogEl.removeEventListener(a.EventType.KEYDOWN, this.keyDownHandler), this.buttonEl.removeEventListener(a.EventType.KEYDOWN, this.keyDownHandler), this.dialogEl.removeEventListener(a.EventType.CLICK, this.buttonClickHandler), this.mouseLeaveHandler && (this.buttonEl.removeEventListener(a.EventType.MOUSELEAVE, this.mouseLeaveHandler), this.dialogEl.removeEventListener(a.EventType.MOUSELEAVE, this.mouseLeaveHandler)), this.blurHandler && window.removeEventListener(a.EventType.BLUR, this.blurHandler), window.removeEventListener(a.EventType.RESIZE, this.handleResizeDebounce)
                    }
                    checkEventFromChild(t, e) {
                        return e.target instanceof Node && t.contains(e.target)
                    }
                    getAttributeOptions() {
                        const {
                            PREFIX: t
                        } = d.s7, {
                            PLACEMENT: e,
                            FOCUS: i
                        } = d.DH, n = {}, s = this.root.getAttribute(`${t}-${e}`), o = this.root.getAttribute(`${t}-${i}`);
                        return s && (n[e] = s), o && (n[i] = s), n
                    }
                    setDefaultElAttr() {
                        this.dialogEl.setAttribute(o.Attribute.ROLE, o.Role.DIALOG), this.dialogEl.tabIndex = o.TabIndex.NOT_TABBABLE, this.dialogEl.setAttribute(o.Attribute.ARIA_HIDDEN, "true"), this.buttonEl.setAttribute(o.Attribute.ROLE, o.Role.BUTTON), this.buttonEl.tabIndex = o.TabIndex.TABBABLE, this.buttonEl.setAttribute(o.Attribute.ARIA_EXPANDED, "false"), this.dialogEl.id && 0 !== this.dialogEl.id.length || (this.dialogEl.id = `glue-popover-${Math.round(99999999*Math.random())}`);
                        const t = [this.dialogEl.id, this.buttonEl.getAttribute(o.Attribute.ARIA_CONTROLS)];
                        this.buttonEl.setAttribute(o.Attribute.ARIA_CONTROLS, t.join(" ").trim()), this.closeEl && (this.closeEl.setAttribute(o.Attribute.ROLE, o.Role.BUTTON), this.closeEl.tabIndex = o.TabIndex.TABBABLE)
                    }
                    setElementFocus() {
                        var t;
                        this.options.takeFocus && (null === (t = this.buttonEl) || void 0 === t || t.focus())
                    }
                    open() {
                        this.isOpen() || (this.setPopoverPosition(), this.dialogEl.setAttribute(o.Attribute.ARIA_HIDDEN, "false"), this.buttonEl.setAttribute(o.Attribute.ARIA_EXPANDED, "true"), this.root.classList.add(d.s7.IS_SHOWN), document.addEventListener(a.EventType.CLICK, this.clickOutsideDialogHandler), this.setElementFocus(), this.emit(d.up.OPEN_EVENT, {}, !0))
                    }
                    close() {
                        this.isOpen() && (this.dialogEl.setAttribute(o.Attribute.ARIA_HIDDEN, "true"), this.buttonEl.setAttribute(o.Attribute.ARIA_EXPANDED, "false"), this.root.classList.remove(d.s7.IS_SHOWN), this.closeEl && this.closeEl.classList.remove(d.s7.IS_SHOWN), this.setElementFocus(), this.emit(d.up.CLOSE_EVENT, {}, !0), document.removeEventListener(a.EventType.CLICK, this.clickOutsideDialogHandler))
                    }
                    isOpen() {
                        return this.root.classList.contains(d.s7.IS_SHOWN)
                    }
                    handleButtonClick(t) {
                        this.isOpen() ? this.checkEventFromChild(this.buttonEl, t) ? this.close() : !this.closeEl || !this.checkEventFromChild(this.closeEl, t) || t.key && t.key !== l.U.ENTER && t.key !== l.U.SPACE || this.close() : this.open()
                    }
                    handleKeyDown(t) {
                        var e, i;
                        t.stopPropagation(), t.key === l.U.ESC ? this.close() : this.closeEl && this.checkEventFromChild(this.closeEl, t) || this.isOpen() && this.checkEventFromChild(this.buttonEl, t) && t.shiftKey && t.key === l.U.TAB ? (t.preventDefault(), this.close()) : this.isOpen() || !this.checkEventFromChild(this.buttonEl, t) || t.key !== l.U.ENTER && t.key !== l.U.SPACE || (t.preventDefault(), null === (e = this.closeEl) || void 0 === e || e.classList.add(d.s7.IS_SHOWN), this.open()), t.key === l.U.TAB && this.checkEventFromChild(this.dialogEl, t) && (null === (i = this.closeEl) || void 0 === i || i.classList.add(d.s7.IS_SHOWN))
                    }
                    handleClickOutsideDialog(t) {
                        const e = t.target instanceof Node && this.root.contains(t.target);
                        this.checkEventFromChild(this.dialogEl, t) || this.checkEventFromChild(this.buttonEl, t) || e || t.type !== a.EventType.CLICK || this.close()
                    }
                    setPopoverPosition() {
                        const t = (0, s.H)(this.root, this.dialogEl, this.buttonEl, this.options.placement);
                        if (t) {
                            const [e, i] = t;
                            this.dialogEl.style.left = `${e}px`, this.dialogEl.style.top = `${i}px`
                        }
                    }
                    static get defaults() {
                        return {
                            placement: d.g2.BOTTOM,
                            takeFocus: !0
                        }
                    }
                }
            },
            3881: (t, e, i) => {
                i.d(e, {
                    O: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(9891),
                    r = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.isSurfaceOpen = !1, s.isQuickOpen = !1, s.isHoistedElement = !1, s.isFixedPosition = !1, s.isHorizontallyCenteredOnViewport = !1, s.maxHeight = 0, s.openBottomBias = 0, s.openAnimationEndTimerId = 0, s.closeAnimationEndTimerId = 0, s.animationRequestId = 0, s.anchorCorner = o.OK.TOP_START, s.originCorner = o.OK.TOP_START, s.anchorMargin = {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, s.position = {
                                x: 0,
                                y: 0
                            }, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y7
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P$
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "numbers", {
                            get: function () {
                                return o.nL
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "Corner", {
                            get: function () {
                                return o.OK
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    hasClass: function () {
                                        return !1
                                    },
                                    hasAnchor: function () {
                                        return !1
                                    },
                                    isElementInContainer: function () {
                                        return !1
                                    },
                                    isFocused: function () {
                                        return !1
                                    },
                                    isRtl: function () {
                                        return !1
                                    },
                                    getInnerDimensions: function () {
                                        return {
                                            height: 0,
                                            width: 0
                                        }
                                    },
                                    getAnchorDimensions: function () {
                                        return null
                                    },
                                    getWindowDimensions: function () {
                                        return {
                                            height: 0,
                                            width: 0
                                        }
                                    },
                                    getBodyDimensions: function () {
                                        return {
                                            height: 0,
                                            width: 0
                                        }
                                    },
                                    getWindowScroll: function () {
                                        return {
                                            x: 0,
                                            y: 0
                                        }
                                    },
                                    setPosition: function () {},
                                    setMaxHeight: function () {},
                                    setTransformOrigin: function () {},
                                    saveFocus: function () {},
                                    restoreFocus: function () {},
                                    notifyClose: function () {},
                                    notifyClosing: function () {},
                                    notifyOpen: function () {},
                                    notifyOpening: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            var t = e.cssClasses,
                                i = t.ROOT,
                                n = t.OPEN;
                            if (!this.adapter.hasClass(i)) throw new Error(i + " class required in root element.");
                            this.adapter.hasClass(n) && (this.isSurfaceOpen = !0)
                        }, e.prototype.destroy = function () {
                            clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId)
                        }, e.prototype.setAnchorCorner = function (t) {
                            this.anchorCorner = t
                        }, e.prototype.flipCornerHorizontally = function () {
                            this.originCorner = this.originCorner ^ o.Jv.RIGHT
                        }, e.prototype.setAnchorMargin = function (t) {
                            this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0
                        }, e.prototype.setIsHoisted = function (t) {
                            this.isHoistedElement = t
                        }, e.prototype.setFixedPosition = function (t) {
                            this.isFixedPosition = t
                        }, e.prototype.isFixed = function () {
                            return this.isFixedPosition
                        }, e.prototype.setAbsolutePosition = function (t, e) {
                            this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(e) ? e : 0
                        }, e.prototype.setIsHorizontallyCenteredOnViewport = function (t) {
                            this.isHorizontallyCenteredOnViewport = t
                        }, e.prototype.setQuickOpen = function (t) {
                            this.isQuickOpen = t
                        }, e.prototype.setMaxHeight = function (t) {
                            this.maxHeight = t
                        }, e.prototype.setOpenBottomBias = function (t) {
                            this.openBottomBias = t
                        }, e.prototype.isOpen = function () {
                            return this.isSurfaceOpen
                        }, e.prototype.open = function () {
                            var t = this;
                            this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame((function () {
                                t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout((function () {
                                    t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen()
                                }), o.nL.TRANSITION_OPEN_DURATION)
                            })), this.isSurfaceOpen = !0))
                        }, e.prototype.close = function (t) {
                            var i = this;
                            if (void 0 === t && (t = !1), this.isSurfaceOpen) {
                                if (this.adapter.notifyClosing(), this.isQuickOpen) return this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), void this.adapter.notifyClose();
                                this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame((function () {
                                    i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout((function () {
                                        i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose()
                                    }), o.nL.TRANSITION_CLOSE_DURATION)
                                })), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus()
                            }
                        }, e.prototype.handleBodyClick = function (t) {
                            var e = t.target;
                            this.adapter.isElementInContainer(e) || this.close()
                        }, e.prototype.handleKeydown = function (t) {
                            var e = t.keyCode;
                            ("Escape" === t.key || 27 === e) && this.close()
                        }, e.prototype.autoposition = function () {
                            var t;
                            this.measurements = this.getAutoLayoutmeasurements();
                            var i = this.getoriginCorner(),
                                n = this.getMenuSurfaceMaxHeight(i),
                                s = this.hasBit(i, o.Jv.BOTTOM) ? "bottom" : "top",
                                r = this.hasBit(i, o.Jv.RIGHT) ? "right" : "left",
                                a = this.getHorizontalOriginOffset(i),
                                l = this.getVerticalOriginOffset(i),
                                d = this.measurements,
                                u = d.anchorSize,
                                c = d.surfaceSize,
                                h = ((t = {})[r] = a, t[s] = l, t);
                            u.width / c.width > o.nL.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (r = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(h), this.adapter.setTransformOrigin(r + " " + s), this.adapter.setPosition(h), this.adapter.setMaxHeight(n ? n + "px" : ""), this.hasBit(i, o.Jv.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)
                        }, e.prototype.getAutoLayoutmeasurements = function () {
                            var t = this.adapter.getAnchorDimensions(),
                                e = this.adapter.getBodyDimensions(),
                                i = this.adapter.getWindowDimensions(),
                                n = this.adapter.getWindowScroll();
                            return t || (t = {
                                top: this.position.y,
                                right: this.position.x,
                                bottom: this.position.y,
                                left: this.position.x,
                                width: 0,
                                height: 0
                            }), {
                                anchorSize: t,
                                bodySize: e,
                                surfaceSize: this.dimensions,
                                viewportDistance: {
                                    top: t.top,
                                    right: i.width - t.right,
                                    bottom: i.height - t.bottom,
                                    left: t.left
                                },
                                viewportSize: i,
                                windowScroll: n
                            }
                        }, e.prototype.getoriginCorner = function () {
                            var t, i, n = this.originCorner,
                                s = this.measurements,
                                r = s.viewportDistance,
                                a = s.anchorSize,
                                l = s.surfaceSize,
                                d = e.numbers.MARGIN_TO_EDGE;
                            this.hasBit(this.anchorCorner, o.Jv.BOTTOM) ? (t = r.top - d + this.anchorMargin.bottom, i = r.bottom - d - this.anchorMargin.bottom) : (t = r.top - d + this.anchorMargin.top, i = r.bottom - d + a.height - this.anchorMargin.top), !(i - l.height > 0) && t > i + this.openBottomBias && (n = this.setBit(n, o.Jv.BOTTOM));
                            var u, c, h = this.adapter.isRtl(),
                                p = this.hasBit(this.anchorCorner, o.Jv.FLIP_RTL),
                                E = this.hasBit(this.anchorCorner, o.Jv.RIGHT) || this.hasBit(n, o.Jv.RIGHT),
                                f = !1;
                            (f = h && p ? !E : E) ? (u = r.left + a.width + this.anchorMargin.right, c = r.right - this.anchorMargin.right) : (u = r.left + this.anchorMargin.left, c = r.right + a.width - this.anchorMargin.left);
                            var m = u - l.width > 0,
                                T = c - l.width > 0,
                                g = this.hasBit(n, o.Jv.FLIP_RTL) && this.hasBit(n, o.Jv.RIGHT);
                            return T && g && h || !m && g ? n = this.unsetBit(n, o.Jv.RIGHT) : (m && f && h || m && !f && E || !T && u >= c) && (n = this.setBit(n, o.Jv.RIGHT)), n
                        }, e.prototype.getMenuSurfaceMaxHeight = function (t) {
                            if (this.maxHeight > 0) return this.maxHeight;
                            var i = this.measurements.viewportDistance,
                                n = 0,
                                s = this.hasBit(t, o.Jv.BOTTOM),
                                r = this.hasBit(this.anchorCorner, o.Jv.BOTTOM),
                                a = e.numbers.MARGIN_TO_EDGE;
                            return s ? (n = i.top + this.anchorMargin.top - a, r || (n += this.measurements.anchorSize.height)) : (n = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - a, r && (n -= this.measurements.anchorSize.height)), n
                        }, e.prototype.getHorizontalOriginOffset = function (t) {
                            var e = this.measurements.anchorSize,
                                i = this.hasBit(t, o.Jv.RIGHT),
                                n = this.hasBit(this.anchorCorner, o.Jv.RIGHT);
                            if (i) {
                                var s = n ? e.width - this.anchorMargin.left : this.anchorMargin.right;
                                return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s
                            }
                            return n ? e.width - this.anchorMargin.right : this.anchorMargin.left
                        }, e.prototype.getVerticalOriginOffset = function (t) {
                            var e = this.measurements.anchorSize,
                                i = this.hasBit(t, o.Jv.BOTTOM),
                                n = this.hasBit(this.anchorCorner, o.Jv.BOTTOM);
                            return i ? n ? e.height - this.anchorMargin.top : -this.anchorMargin.bottom : n ? e.height + this.anchorMargin.bottom : this.anchorMargin.top
                        }, e.prototype.adjustPositionForHoistedElement = function (t) {
                            var e, i, s = this.measurements,
                                o = s.windowScroll,
                                r = s.viewportDistance,
                                a = s.surfaceSize,
                                l = s.viewportSize,
                                d = Object.keys(t);
                            try {
                                for (var u = (0, n.Ju)(d), c = u.next(); !c.done; c = u.next()) {
                                    var h = c.value,
                                        p = t[h] || 0;
                                    !this.isHorizontallyCenteredOnViewport || "left" !== h && "right" !== h ? (p += r[h], this.isFixedPosition || ("top" === h ? p += o.y : "bottom" === h ? p -= o.y : "left" === h ? p += o.x : p -= o.x), t[h] = p) : t[h] = (l.width - a.width) / 2
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    c && !c.done && (i = u.return) && i.call(u)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                        }, e.prototype.maybeRestoreFocus = function () {
                            var t = this,
                                e = this.adapter.isFocused(),
                                i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document,
                                n = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
                            (e || n) && setTimeout((function () {
                                t.adapter.restoreFocus()
                            }), o.nL.TOUCH_EVENT_WAIT_MS)
                        }, e.prototype.hasBit = function (t, e) {
                            return Boolean(t & e)
                        }, e.prototype.setBit = function (t, e) {
                            return t | e
                        }, e.prototype.unsetBit = function (t, e) {
                            return t ^ e
                        }, e.prototype.isFinite = function (t) {
                            return "number" == typeof t && isFinite(t)
                        }, e
                    }(s.I)
            },
            4073: (t, e, i) => {
                i.r(e), i.d(e, {
                    Modal: () => d
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(4265),
                    r = i(1234),
                    a = i(2064),
                    l = i(48);
                class d extends n.u {
                    constructor(t, e, i = null) {
                        super(t), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1, this.ariaHiddenElements = [], this.handleTransitionEnds = () => {
                            this.root.classList.remove(l.CssClasses.CLOSING), this.focusAfterClosed.focus(), this.root.removeEventListener(o.EventType.TRANSITIONEND, this.handleTransitionEnds)
                        }, this.closeBtn = this.root.querySelector(`.${l.CssClasses.CLOSE_BTN}`), this.focusAfterClosed = e, this.focusFirst = i, this.handleCloseBtnClick = t => {
                            t.stopPropagation(), this.close()
                        }, this.handleKeyDown = t => {
                            t.stopPropagation();
                            t.code === r.U.ESC && this.close()
                        }, this.handleFocus = t => {
                            this.trapFocus(t)
                        }, this.init()
                    }
                    init() {
                        this.root.setAttribute(s.Attribute.ROLE, s.Role.DIALOG), this.root.setAttribute(s.Attribute.ARIA_MODAL, "true")
                    }
                    focusFirstDescendant(t) {
                        for (let e = 0; e < t.children.length; e++) {
                            const i = t.children[e];
                            if (this.attemptFocus(i) || this.focusFirstDescendant(i)) return !0
                        }
                        return !1
                    }
                    focusLastDescendant(t) {
                        for (let e = t.children.length - 1; e >= 0; e--) {
                            const i = t.children[e];
                            if (this.attemptFocus(i) || this.focusLastDescendant(i)) return !0
                        }
                        return !1
                    }
                    attemptFocus(t) {
                        if (!(0, a.isElementFocusable)(t)) return !1;
                        this.ignoreFocusChange = !0;
                        try {
                            t.focus()
                        } catch (t) {
                            throw new Error(`${t}`)
                        }
                        return this.ignoreFocusChange = !1, t === document.activeElement
                    }
                    trapFocus(t) {
                        this.ignoreFocusChange || (this.root.contains(t.target) ? this.lastFocus = t.target : (this.focusFirstDescendant(this.root), this.lastFocus === document.activeElement && this.focusLastDescendant(this.root), this.lastFocus = document.activeElement))
                    }
                    open() {
                        var t;
                        this.root.classList.add(l.CssClasses.OPEN), this.emit(l.Strings.OPENED_EVENT, {}), null === (t = this.closeBtn) || void 0 === t || t.addEventListener(o.EventType.CLICK, this.handleCloseBtnClick), document.body.classList.add(l.CssClasses.NO_SCROLL), document.addEventListener(o.EventType.KEYDOWN, this.handleKeyDown), document.addEventListener(o.EventType.FOCUS, this.handleFocus, !0), this.focusFirst ? this.focusFirst.focus() : this.focusFirstDescendant(this.root), this.ariaHideElements()
                    }
                    close() {
                        var t;
                        this.root.classList.remove(l.CssClasses.OPEN), this.root.classList.add(l.CssClasses.CLOSING), this.emit(l.Strings.CLOSED_EVENT, {}), document.body.classList.remove(l.CssClasses.NO_SCROLL), document.removeEventListener(o.EventType.FOCUS, this.handleFocus, !0), null === (t = this.closeBtn) || void 0 === t || t.removeEventListener(o.EventType.CLICK, this.handleCloseBtnClick), document.removeEventListener(o.EventType.KEYDOWN, this.handleKeyDown), this.root.addEventListener(o.EventType.TRANSITIONEND, this.handleTransitionEnds), this.ariaUnhideElements()
                    }
                    ariaHideElements() {
                        let t = this.root;
                        for (; t && t.parentNode;)[...t.parentNode.children].forEach((e => {
                            e !== t && "true" !== e.getAttribute("aria-hidden") && (this.ariaHiddenElements.push(e), e.setAttribute("aria-hidden", "true"))
                        })), t = t.parentNode
                    }
                    ariaUnhideElements() {
                        this.ariaHiddenElements.forEach((t => {
                            t.removeAttribute("aria-hidden")
                        })), this.ariaHiddenElements = []
                    }
                    setFocusAfterClosed(t) {
                        this.focusAfterClosed = t
                    }
                    destroy() {
                        this.root.removeAttribute(s.Attribute.ROLE), this.root.removeAttribute(s.Attribute.ARIA_MODAL)
                    }
                }
            },
            4108: (t, e, i) => {
                i.d(e, {
                    n: () => r
                });
                var n = i(1635),
                    s = i(361),
                    o = i(826),
                    r = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, Object.defineProperty(e.prototype, "foundationForTextField", {
                            get: function () {
                                return this.foundation
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClass: function (e) {
                                        return t.root.classList.add(e)
                                    },
                                    removeClass: function (e) {
                                        return t.root.classList.remove(e)
                                    },
                                    hasClass: function (e) {
                                        return t.root.classList.contains(e)
                                    },
                                    getAttr: function (e) {
                                        return t.root.getAttribute(e)
                                    },
                                    setAttr: function (e, i) {
                                        return t.root.setAttribute(e, i)
                                    },
                                    removeAttr: function (e) {
                                        return t.root.removeAttribute(e)
                                    },
                                    setContent: function (e) {
                                        t.root.textContent = e
                                    }
                                };
                            return new o.Q(e)
                        }, e
                    }(s.O)
            },
            4109: (t, e) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.debounce = e.elementsToFragment = e.fetchXhrContent = e.parser = void 0, e.parser = new DOMParser;
                const i = {
                    "X-Requested-With": "XMLHttpRequest"
                };
                e.fetchXhrContent = async function (t) {
                    const n = t instanceof URL ? t : new URL(t);
                    n.searchParams.set("fetch", "true");
                    const s = await fetch(n, {
                            headers: i
                        }),
                        o = await s.text();
                    return e.parser.parseFromString(o, "text/html")
                }, e.elementsToFragment = function (t) {
                    const e = document.createDocumentFragment();
                    for (let i = 0; i < t.length; i++) {
                        const n = t[i];
                        e.appendChild(n)
                    }
                    return e
                }, e.debounce = function (t, e = 350) {
                    let i = null;
                    return (...n) => {
                        null !== i && clearTimeout(i), i = setTimeout((() => {
                            t(...n), i = null
                        }), e)
                    }
                }
            },
            4166: (t, e, i) => {
                i.d(e, {
                    k: () => r
                });
                var n = i(1635),
                    s = i(361),
                    o = i(2056),
                    r = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, Object.defineProperty(e.prototype, "foundationForSelect", {
                            get: function () {
                                return this.foundation
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    getAttr: function (e) {
                                        return t.root.getAttribute(e)
                                    },
                                    setAttr: function (e, i) {
                                        return t.root.setAttribute(e, i)
                                    },
                                    removeAttr: function (e) {
                                        return t.root.removeAttribute(e)
                                    },
                                    setContent: function (e) {
                                        t.root.textContent = e
                                    },
                                    registerInteractionHandler: function (e, i) {
                                        return t.listen(e, i)
                                    },
                                    deregisterInteractionHandler: function (e, i) {
                                        return t.unlisten(e, i)
                                    },
                                    notifyIconAction: function () {
                                        return t.emit(o.T.strings.ICON_EVENT, {}, !0)
                                    }
                                };
                            return new o.T(e)
                        }, e
                    }(s.O)
            },
            4265: (t, e, i) => {
                var n;
                i.r(e), i.d(e, {
                        EventType: () => n
                    }),
                    function (t) {
                        t.CLICK = "click", t.FOCUS = "focus", t.MOUSEENTER = "mouseenter", t.MOUSEOVER = "mouseover", t.MOUSELEAVE = "mouseleave", t.MOUSEOUT = "mouseout", t.MOUSEWHEEL = "mousewheel", t.HOVER = "hover", t.NONE = "none", t.MOUSEDOWN = "mousedown", t.MOUSEMOVE = "mousemove", t.MOUSEUP = "mouseup", t.KEYDOWN = "keydown", t.KEYPRESS = "keypress", t.KEYUP = "keyup", t.BLUR = "blur", t.LOAD = "load", t.PAN = "pan", t.PAN_LEFT = "panleft", t.PAN_RIGHT = "panright", t.PAN_END = "panend", t.PAN_START = "panstart", t.PAN_MOVE = "panmove", t.SCROLL = "scroll", t.CHANGE = "change", t.FOCUS_IN = "focusin", t.FOCUS_OUT = "focusout", t.TRANSITIONEND = "transitionend", t.TRANSITIONSTART = "transitionstart", t.RESIZE = "resize", t.ORIENTATION_CHANGE = "orientationchange", t.DOM_CONTENT_READY = "DOMContentReady", t.HASHCHANGE = "hashchange", t.POINTERDOWN = "pointerdown", t.POINTERMOVE = "pointermove", t.POINTERUP = "pointerup", t.POINTERCANCEL = "pointercancel", t.TOUCHSTART = "touchstart", t.TOUCHMOVE = "touchmove", t.TOUCHEND = "touchend", t.TOUCHCANCEL = "touchcancel"
                    }(n || (n = {}))
            },
            4287: (t, e, i) => {
                i.d(e, {
                    j: () => r
                });
                var n = i(1635),
                    s = i(361),
                    o = i(9019),
                    r = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, Object.defineProperty(e.prototype, "foundationForTextField", {
                            get: function () {
                                return this.foundation
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    getAttr: function (e) {
                                        return t.root.getAttribute(e)
                                    },
                                    setAttr: function (e, i) {
                                        return t.root.setAttribute(e, i)
                                    },
                                    removeAttr: function (e) {
                                        return t.root.removeAttribute(e)
                                    },
                                    setContent: function (e) {
                                        t.root.textContent = e
                                    },
                                    registerInteractionHandler: function (e, i) {
                                        return t.listen(e, i)
                                    },
                                    deregisterInteractionHandler: function (e, i) {
                                        return t.unlisten(e, i)
                                    },
                                    notifyIconAction: function () {
                                        return t.emit(o.C.strings.ICON_EVENT, {}, !0)
                                    }
                                };
                            return new o.C(e)
                        }, e
                    }(s.O)
            },
            4452: (t, e, i) => {
                i.r(e), i.d(e, {
                    YoutubeVideo: () => h
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(4265),
                    r = i(1234),
                    a = i(2064),
                    l = i(48),
                    d = i(4073),
                    u = i(3017),
                    c = i(8140);
                class h extends n.u {
                    constructor(t, e) {
                        var i, n;
                        super(t), this.id = "", this.hidePosterAndPlay = t => {
                            var e, i;
                            this.videoElement.contains(t.target) || t instanceof KeyboardEvent && t.key !== r.U.ENTER && t.key !== r.U.SPACE || (this.modal ? (t.preventDefault(), this.modal.open()) : (null === (e = this.previewElement) || void 0 === e || e.classList.add(u.CssClasses.HIDE_ELEMENT), this.videoElement.classList.remove(u.CssClasses.HIDE_ELEMENT), this.root.blur()), null === (i = this.getPlayer()) || void 0 === i || i.playVideo())
                        }, this.previewElement = this.root.querySelector(`.${u.CssClasses.PREVIEW_CONTAINER}`), this.root.addEventListener(o.EventType.CLICK, this.hidePosterAndPlay), this.root.addEventListener(o.EventType.KEYDOWN, this.hidePosterAndPlay), (0, a.isElementFocusable)(t) || (this.root.tabIndex = 0), "A" !== this.root.tagName && this.root.setAttribute(s.Attribute.ROLE, s.Role.BUTTON);
                        const h = (null == e ? void 0 : e.modalElement) ? null == e ? void 0 : e.modalElement.querySelector(`.${u.CssClasses.VIDEO_CONTAINER}`) : this.root.querySelector(`.${u.CssClasses.VIDEO_CONTAINER}`);
                        if (!h) throw new Error(u.ErrorMessages.MISSING_VIDEO);
                        this.videoElement = h, (null === (i = this.previewElement) || void 0 === i ? void 0 : i.classList.contains(u.CssClasses.INLINE_VIDEO)) && this.videoElement.classList.add(u.CssClasses.HIDE_ELEMENT), this.modalCloseHandler = () => {
                            var t;
                            null === (t = this.getPlayer()) || void 0 === t || t.pauseVideo()
                        }, this.options = this.setPlayerOptions(e), this.modalElement = (null == e ? void 0 : e.modalElement) ? null == e ? void 0 : e.modalElement : this.root.querySelector(`.${l.CssClasses.ROOT}`), this.modalElement && (this.modal = new d.Modal(this.modalElement, this.root), this.modalElement.addEventListener(l.Strings.CLOSED_EVENT, this.modalCloseHandler)), this.manager = c.s.getManager(), YT.ready((() => {
                            this.initializeVideo()
                        })), this.posterImageElement = this.root.querySelector(`.${u.CssClasses.IMAGE_CONTAINER}`);
                        const p = null === (n = this.posterImageElement) || void 0 === n ? void 0 : n.getAttribute("src");
                        this.posterImageElement && 0 === (null == p ? void 0 : p.length) && (this.posterImageElement.src = `https://i.ytimg.com/vi_webp/${this.options.videoId}/maxresdefault.webp`)
                    }
                    destroy() {
                        var t, e, i, n, s;
                        super.destroy(), null === (t = this.modal) || void 0 === t || t.close(), null === (e = this.modal) || void 0 === e || e.destroy(), null === (i = this.modalElement) || void 0 === i || i.removeEventListener(l.Strings.CLOSED_EVENT, this.modalCloseHandler), null === (n = this.root) || void 0 === n || n.removeEventListener(o.EventType.CLICK, this.hidePosterAndPlay), null === (s = this.root) || void 0 === s || s.removeEventListener(o.EventType.KEYDOWN, this.hidePosterAndPlay), this.destroyPlayer()
                    }
                    static get defaultOptions() {
                        return {
                            playerId: "",
                            width: "",
                            height: "",
                            videoId: "",
                            playerVars: {},
                            events: {}
                        }
                    }
                    initId() {
                        var t;
                        let e = null !== (t = this.videoElement.id) && void 0 !== t ? t : "";
                        this.isValidPlayerId(e) && (e = this.options.playerId || `youtube-player-${Math.round(Math.random()*Math.pow(10,6))}`, this.videoElement.id = e), this.id = e
                    }
                    refreshPlayerOptions(t) {
                        this.destroyPlayer(), this.options = Object.assign({}, h.defaultOptions, t), this.options.playerId && (this.id = this.options.playerId), this.initializeVideo()
                    }
                    setPlayerOptions(t) {
                        const e = {},
                            i = this.videoElement.dataset;
                        u.DataAttrs.VIDEO_ID in i && (e.videoId = i[u.DataAttrs.VIDEO_ID]), u.DataAttrs.PLAYER_ID in i && (e.playerId = i[u.DataAttrs.PLAYER_ID]), u.DataAttrs.HEIGHT in i && (e.height = i[u.DataAttrs.HEIGHT]), u.DataAttrs.WIDTH in i && (e.width = i[u.DataAttrs.WIDTH]), u.DataAttrs.PLAYER_VARS in i && (e.playerVars = i[u.DataAttrs.PLAYER_VARS]);
                        const n = Object.assign({}, h.defaultOptions, t, e);
                        return n.playerId && (this.id = n.playerId), n
                    }
                    initializeVideo() {
                        this.isValidPlayerId(this.id) && this.initId(), this.options.playerId = this.id;
                        const t = this.videoElement.appendChild(document.createElement("div"));
                        if (this.options.events)
                            if (void 0 === this.options.events.onReady) this.options.events.onReady = () => {
                                this.setVideoTimestamp()
                            };
                            else {
                                const t = this.options.events.onReady;
                                this.options.events.onReady = e => {
                                    this.setVideoTimestamp(), t(e)
                                }
                            } const e = new window.YT.Player(t, this.options);
                        this.manager.registerYtPlayer(this.id, e)
                    }
                    setVideoTimestamp() {
                        var t, e, i, n;
                        const s = this.root.querySelector(`.${u.CssClasses.DURATION}`);
                        if (s) {
                            const o = null !== (e = null === (t = this.getPlayer()) || void 0 === t ? void 0 : t.getDuration()) && void 0 !== e ? e : 0,
                                r = new Date(1e3 * o).toISOString(),
                                a = "00" === r.substring(11, 13) ? r.substring(14, 19) : r.substring(11, 19);
                            s.textContent = a, null === (n = null === (i = this.root) || void 0 === i ? void 0 : i.querySelector(`.${u.CssClasses.TIMESTAMP}`)) || void 0 === n || n.classList.add(`${u.CssClasses.TIMESTAMP_SHOW}`)
                        }
                    }
                    getPlayer() {
                        return this.manager.getYtPlayer(this.id)
                    }
                    destroyPlayer() {
                        this.manager.unregisterYtPlayer(this.id)
                    }
                    getPlayerId() {
                        return this.isValidPlayerId(this.id) && this.initId(), this.id
                    }
                    isValidPlayerId(t) {
                        return /^[\s\xa0]*$/.test(t)
                    }
                }
            },
            4524: (t, e, i) => {
                var n, s, o, r, a;
                i.d(e, {
                        DH: () => o,
                        IT: () => l,
                        g2: () => n,
                        s7: () => s,
                        uB: () => r,
                        up: () => a
                    }),
                    function (t) {
                        t.LEFT = "left", t.RIGHT = "right", t.TOP = "top", t.BOTTOM = "bottom"
                    }(n || (n = {})),
                    function (t) {
                        t.PREFIX = "data-glue-popover", t.ROOT = "glue-popover", t.TRIGGER = "glue-popover__trigger", t.DIALOG = "glue-popover__dialog", t.CLOSE_BTN = "glue-popover__close-btn", t.IS_SHOWN = "glue-is-shown", t.COPY = "glue-copy"
                    }(s || (s = {})),
                    function (t) {
                        t.TRIGGER = "trigger", t.PLACEMENT = "placement", t.FOCUS = "takeFocus", t.ROOT = "root", t.MISSING_ID = "Missing or invalid ID. Popover requires a unique ID", t.MISSING_TRIGGER = "Popover trigger element is missing", t.MISSING_DIALOG = "Popover dialog element is missing", t.INCORRECT_PLACEMENT = "Placement value needs to be one of these: left, right, top, bottom."
                    }(o || (o = {})),
                    function (t) {
                        t.TRIGGER = "gluePopoverTrigger"
                    }(r || (r = {})),
                    function (t) {
                        t.OPEN_EVENT = "gluepopovershow", t.CLOSE_EVENT = "gluepopoverclose"
                    }(a || (a = {}));
                const l = 250
            },
            4648: (t, e, i) => {
                i.d(e, {
                    f: () => l
                });
                var n = i(1635),
                    s = i(361),
                    o = i(1292),
                    r = i(6834),
                    a = i(3142),
                    l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e.prototype, "vertical", {
                            set: function (t) {
                                this.foundation.setVerticalOrientation(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "listElements", {
                            get: function () {
                                return Array.from(this.root.querySelectorAll("." + this.classNameMap[r.Y7.LIST_ITEM_CLASS]))
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "wrapFocus", {
                            set: function (t) {
                                this.foundation.setWrapFocus(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "typeaheadInProgress", {
                            get: function () {
                                return this.foundation.isTypeaheadInProgress()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "hasTypeahead", {
                            set: function (t) {
                                this.foundation.setHasTypeahead(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "singleSelection", {
                            set: function (t) {
                                this.foundation.setSingleSelection(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "disabledItemsFocusable", {
                            set: function (t) {
                                this.foundation.setDisabledItemsFocusable(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "selectedIndex", {
                            get: function () {
                                return this.foundation.getSelectedIndex()
                            },
                            set: function (t) {
                                this.foundation.setSelectedIndex(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.initialSyncWithDOM = function () {
                            this.isEvolutionEnabled = r.iP in this.root.dataset, this.isEvolutionEnabled ? this.classNameMap = r.$z : (0, o.cK)(this.root, r.P$.DEPRECATED_SELECTOR) ? this.classNameMap = r.PY : this.classNameMap = Object.values(r.Y7).reduce((function (t, e) {
                                return t[e] = e, t
                            }), {}), this.handleClick = this.handleClickEvent.bind(this), this.handleKeydown = this.handleKeydownEvent.bind(this), this.focusInEventListener = this.handleFocusInEvent.bind(this), this.focusOutEventListener = this.handleFocusOutEvent.bind(this), this.listen("keydown", this.handleKeydown), this.listen("click", this.handleClick), this.listen("focusin", this.focusInEventListener), this.listen("focusout", this.focusOutEventListener), this.layout(), this.initializeListType(), this.ensureFocusable()
                        }, e.prototype.destroy = function () {
                            this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.focusInEventListener), this.unlisten("focusout", this.focusOutEventListener)
                        }, e.prototype.layout = function () {
                            var t = this.root.getAttribute(r.P$.ARIA_ORIENTATION);
                            this.vertical = t !== r.P$.ARIA_ORIENTATION_HORIZONTAL;
                            var e = "." + this.classNameMap[r.Y7.LIST_ITEM_CLASS] + ":not([tabindex])",
                                i = r.P$.FOCUSABLE_CHILD_ELEMENTS,
                                n = this.root.querySelectorAll(e);
                            n.length && Array.prototype.forEach.call(n, (function (t) {
                                t.setAttribute("tabindex", "-1")
                            }));
                            var s = this.root.querySelectorAll(i);
                            s.length && Array.prototype.forEach.call(s, (function (t) {
                                t.setAttribute("tabindex", "-1")
                            })), this.isEvolutionEnabled && this.foundation.setUseSelectedAttribute(!0), this.foundation.layout()
                        }, e.prototype.getPrimaryText = function (t) {
                            var e, i = t.querySelector("." + this.classNameMap[r.Y7.LIST_ITEM_PRIMARY_TEXT_CLASS]);
                            if (this.isEvolutionEnabled || i) return null !== (e = null == i ? void 0 : i.textContent) && void 0 !== e ? e : "";
                            var n = t.querySelector("." + this.classNameMap[r.Y7.LIST_ITEM_TEXT_CLASS]);
                            return n && n.textContent || ""
                        }, e.prototype.initializeListType = function () {
                            var t = this;
                            if (this.isInteractive = (0, o.cK)(this.root, r.P$.ARIA_INTERACTIVE_ROLES_SELECTOR), this.isEvolutionEnabled && this.isInteractive) {
                                var e = Array.from(this.root.querySelectorAll(r.P$.SELECTED_ITEM_SELECTOR), (function (e) {
                                    return t.listElements.indexOf(e)
                                }));
                                (0, o.cK)(this.root, r.P$.ARIA_MULTI_SELECTABLE_SELECTOR) ? this.selectedIndex = e: e.length > 0 && (this.selectedIndex = e[0])
                            } else {
                                var i = this.root.querySelectorAll(r.P$.ARIA_ROLE_CHECKBOX_SELECTOR),
                                    n = this.root.querySelector(r.P$.ARIA_CHECKED_RADIO_SELECTOR);
                                if (i.length) {
                                    var s = this.root.querySelectorAll(r.P$.ARIA_CHECKED_CHECKBOX_SELECTOR);
                                    this.selectedIndex = Array.from(s, (function (e) {
                                        return t.listElements.indexOf(e)
                                    }))
                                } else n && (this.selectedIndex = this.listElements.indexOf(n))
                            }
                        }, e.prototype.setEnabled = function (t, e) {
                            this.foundation.setEnabled(t, e)
                        }, e.prototype.typeaheadMatchItem = function (t, e) {
                            return this.foundation.typeaheadMatchItem(t, e, !0)
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClassForElementIndex: function (e, i) {
                                        var n = t.listElements[e];
                                        n && n.classList.add(t.classNameMap[i])
                                    },
                                    focusItemAtIndex: function (e) {
                                        var i = t.listElements[e];
                                        i && i.focus()
                                    },
                                    getAttributeForElementIndex: function (e, i) {
                                        return t.listElements[e].getAttribute(i)
                                    },
                                    getFocusedElementIndex: function () {
                                        return t.listElements.indexOf(document.activeElement)
                                    },
                                    getListItemCount: function () {
                                        return t.listElements.length
                                    },
                                    getPrimaryTextAtIndex: function (e) {
                                        return t.getPrimaryText(t.listElements[e])
                                    },
                                    hasCheckboxAtIndex: function (e) {
                                        return !!t.listElements[e].querySelector(r.P$.CHECKBOX_SELECTOR)
                                    },
                                    hasRadioAtIndex: function (e) {
                                        return !!t.listElements[e].querySelector(r.P$.RADIO_SELECTOR)
                                    },
                                    isCheckboxCheckedAtIndex: function (e) {
                                        return t.listElements[e].querySelector(r.P$.CHECKBOX_SELECTOR).checked
                                    },
                                    isFocusInsideList: function () {
                                        return t.root !== document.activeElement && t.root.contains(document.activeElement)
                                    },
                                    isRootFocused: function () {
                                        return document.activeElement === t.root
                                    },
                                    listItemAtIndexHasClass: function (e, i) {
                                        return t.listElements[e].classList.contains(t.classNameMap[i])
                                    },
                                    notifyAction: function (e) {
                                        t.emit(r.P$.ACTION_EVENT, {
                                            index: e
                                        }, !0)
                                    },
                                    notifySelectionChange: function (e) {
                                        t.emit(r.P$.SELECTION_CHANGE_EVENT, {
                                            changedIndices: e
                                        }, !0)
                                    },
                                    removeClassForElementIndex: function (e, i) {
                                        var n = t.listElements[e];
                                        n && n.classList.remove(t.classNameMap[i])
                                    },
                                    setAttributeForElementIndex: function (e, i, n) {
                                        var s = t.listElements[e];
                                        s && s.setAttribute(i, n)
                                    },
                                    setCheckedCheckboxOrRadioAtIndex: function (e, i) {
                                        var n = t.listElements[e].querySelector(r.P$.CHECKBOX_RADIO_SELECTOR);
                                        n.checked = i;
                                        var s = document.createEvent("Event");
                                        s.initEvent("change", !0, !0), n.dispatchEvent(s)
                                    },
                                    setTabIndexForListItemChildren: function (e, i) {
                                        var n = t.listElements[e],
                                            s = r.P$.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
                                        Array.prototype.forEach.call(n.querySelectorAll(s), (function (t) {
                                            t.setAttribute("tabindex", i)
                                        }))
                                    }
                                };
                            return new a.Y(e)
                        }, e.prototype.ensureFocusable = function () {
                            if (this.isEvolutionEnabled && this.isInteractive && !this.root.querySelector("." + this.classNameMap[r.Y7.LIST_ITEM_CLASS] + '[tabindex="0"]')) {
                                var t = this.initialFocusIndex(); - 1 !== t && (this.listElements[t].tabIndex = 0)
                            }
                        }, e.prototype.initialFocusIndex = function () {
                            if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) return this.selectedIndex[0];
                            if ("number" == typeof this.selectedIndex && this.selectedIndex !== r.nL.UNSET_INDEX) return this.selectedIndex;
                            var t = this.root.querySelector("." + this.classNameMap[r.Y7.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[r.Y7.LIST_ITEM_DISABLED_CLASS] + ")");
                            return null === t ? -1 : this.getListItemIndex(t)
                        }, e.prototype.getListItemIndex = function (t) {
                            var e = (0, o.kp)(t, "." + this.classNameMap[r.Y7.LIST_ITEM_CLASS] + ", ." + this.classNameMap[r.Y7.ROOT]);
                            return e && (0, o.cK)(e, "." + this.classNameMap[r.Y7.LIST_ITEM_CLASS]) ? this.listElements.indexOf(e) : -1
                        }, e.prototype.handleFocusInEvent = function (t) {
                            var e = this.getListItemIndex(t.target);
                            this.foundation.handleFocusIn(e)
                        }, e.prototype.handleFocusOutEvent = function (t) {
                            var e = this.getListItemIndex(t.target);
                            this.foundation.handleFocusOut(e)
                        }, e.prototype.handleKeydownEvent = function (t) {
                            var e = this.getListItemIndex(t.target),
                                i = t.target;
                            this.foundation.handleKeydown(t, i.classList.contains(this.classNameMap[r.Y7.LIST_ITEM_CLASS]), e)
                        }, e.prototype.handleClickEvent = function (t) {
                            var e = this.getListItemIndex(t.target),
                                i = t.target,
                                n = !(0, o.cK)(i, r.P$.CHECKBOX_RADIO_SELECTOR);
                            this.foundation.handleClick(e, n, t)
                        }, e
                    }(s.O)
            },
            4829: (t, e, i) => {
                var n, s, o, r, a;
                i.r(e), i.d(e, {
                        Attribute: () => n,
                        DataAttrs: () => s,
                        Direction: () => o,
                        Role: () => r,
                        TabIndex: () => a
                    }),
                    function (t) {
                        t.ARIA_CONTROLS = "aria-controls", t.ARIA_CURRENT = "aria-current", t.ARIA_DESCRIBEDBY = "aria-describedby", t.ARIA_EXPANDED = "aria-expanded", t.ARIA_HASPOPUP = "aria-haspopup", t.ARIA_HIDDEN = "aria-hidden", t.ARIA_LABELLEDBY = "aria-labelledby", t.ARIA_LABEL = "aria-label", t.ARIA_LIVE = "aria-live", t.ARIA_MODAL = "aria-modal", t.ARIA_SELECTED = "aria-selected", t.INERT = "inert", t.ROLE = "role", t.TAB_INDEX = "tabindex", t.TYPE = "type"
                    }(n || (n = {})),
                    function (t) {
                        t.NO_SNIPPET = "nosnippet"
                    }(s || (s = {})),
                    function (t) {
                        t.LTR = "ltr", t.RTL = "rtl"
                    }(o || (o = {})),
                    function (t) {
                        t.COMPLEMENTARY = "complementary", t.BUTTON = "button", t.DIALOG = "dialog", t.REGION = "region", t.TABPANEL = "tabpanel", t.TABLIST = "tablist", t.NAVIGATION = "navigation", t.TAB = "tab", t.MENU = "menu", t.MENUITEM = "menuitem", t.MENUBAR = "menubar", t.TOOLTIP = "tooltip", t.GRIDCELL = "gridcell", t.ROW = "row", t.PRESENTATION = "presentation", t.NONE = "none"
                    }(r || (r = {})),
                    function (t) {
                        t[t.TABBABLE = 0] = "TABBABLE", t[t.NOT_TABBABLE = -1] = "NOT_TABBABLE"
                    }(a || (a = {}))
            },
            4839: (t, e) => {
                function i(t, e, i) {
                    return e >= 0 && e <= t.clientWidth && i >= 0 && i <= t.clientHeight
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.isPointWithinElementFromEvent = e.isPointWithinElement = void 0, e.isPointWithinElement = i, e.isPointWithinElementFromEvent = function (t) {
                    return t instanceof MouseEvent && t.currentTarget instanceof HTMLElement && i(t.currentTarget, t.offsetX, t.offsetY)
                }
            },
            5015: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmFilter = e.GdmFilterSelector = e.GdmFilterDataAttribute = void 0;
                const n = i(4829),
                    s = i(4265),
                    o = i(1543),
                    r = i(1341);
                var a, l;
                ! function (t) {
                    t.ID = "data-gdm-filter-id"
                }(a || (e.GdmFilterDataAttribute = a = {})),
                function (t) {
                    t.RESET = ".gdm-filter__reset", t.ROOT = "gdm-filter", t.SELECT = ".mdc-select"
                }(l || (e.GdmFilterSelector = l = {}));
                class d extends HTMLElement {
                    constructor() {
                        super(...arguments), this.pagination = null, this.reset = null, this.selects = new Map, this.onPaginationLoad = t => {
                            this.updateUi(t.detail.searchParams)
                        }, this.onResetClick = t => {
                            t.preventDefault(), this.load("")
                        }, this.onSelectChange = () => {
                            this.load()
                        }
                    }
                    connectedCallback() {
                        this.pagination = this.querySelector(r.GdmPaginationSelector.ROOT), this.pagination && this.pagination.addEventListener(r.GDM_PAGINATION_LOAD_EVENT_TYPE, this.onPaginationLoad);
                        const t = this.querySelectorAll(l.SELECT);
                        for (const e of t) {
                            const t = o.MDCSelect.attachTo(e);
                            t.listen("MDCSelect:change", this.onSelectChange);
                            const i = e.getAttribute(a.ID);
                            i && this.selects.set(i, t)
                        }
                        this.reset = this.querySelector(l.RESET), this.reset && (this.reset.addEventListener(s.EventType.CLICK, this.onResetClick), this.updateUi(new URLSearchParams(location.search)))
                    }
                    disconnectedCallback() {
                        this.pagination && (this.pagination.removeEventListener(r.GDM_PAGINATION_LOAD_EVENT_TYPE, this.onPaginationLoad), this.pagination = null);
                        for (const [t, e] of this.selects) this.selects.delete(t), e.destroy();
                        this.reset && (this.reset.removeEventListener(s.EventType.CLICK, this.onResetClick), this.reset = null)
                    }
                    load(t) {
                        if (!this.pagination) return;
                        const e = new URL(location.href),
                            i = new URLSearchParams(e.search);
                        i.set("page", "1");
                        for (const [e, n] of this.selects) {
                            const s = void 0 === t ? n.value : t;
                            s ? i.set(e, s) : i.delete(e)
                        }
                        e.search = i.toString(), this.pagination.load(e)
                    }
                    updateUi(t) {
                        for (const [e, i] of this.selects) {
                            const n = t.get(e) || "";
                            i.setValue(n, !0)
                        }
                        if (this.reset) {
                            Array.from(this.selects.values()).some((t => !!t.value)) ? (this.reset.removeAttribute(n.Attribute.ARIA_HIDDEN), this.reset.tabIndex = n.TabIndex.TABBABLE) : (this.reset.setAttribute(n.Attribute.ARIA_HIDDEN, "true"), this.reset.tabIndex = n.TabIndex.NOT_TABBABLE)
                        }
                    }
                }
                e.GdmFilter = d
            },
            5034: (t, e, i) => {
                i.d(e, {
                    N: () => r
                });
                var n = i(1635),
                    s = i(361),
                    o = i(2332),
                    r = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, Object.defineProperty(e.prototype, "foundationForTextField", {
                            get: function () {
                                return this.foundation
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    setContent: function (e) {
                                        t.root.textContent = e
                                    }
                                };
                            return new o.y(e)
                        }, e
                    }(s.O)
            },
            5160: (t, e, i) => {
                i.d(e, {
                    P: () => s,
                    Y: () => n
                });
                var n = {
                        ROOT: "mdc-text-field-character-counter"
                    },
                    s = {
                        ROOT_SELECTOR: "." + n.ROOT
                    }
            },
            5163: (t, e, i) => {
                i.d(e, {
                    y: () => r
                });
                var n = i(1635),
                    s = i(361),
                    o = i(583),
                    r = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, Object.defineProperty(e.prototype, "foundationForSelect", {
                            get: function () {
                                return this.foundation
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClass: function (e) {
                                        return t.root.classList.add(e)
                                    },
                                    removeClass: function (e) {
                                        return t.root.classList.remove(e)
                                    },
                                    hasClass: function (e) {
                                        return t.root.classList.contains(e)
                                    },
                                    getAttr: function (e) {
                                        return t.root.getAttribute(e)
                                    },
                                    setAttr: function (e, i) {
                                        return t.root.setAttribute(e, i)
                                    },
                                    removeAttr: function (e) {
                                        return t.root.removeAttribute(e)
                                    },
                                    setContent: function (e) {
                                        t.root.textContent = e
                                    }
                                };
                            return new o.r(e)
                        }, e
                    }(s.O)
            },
            5190: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.render = e.init = void 0;
                const n = i(4265),
                    s = ["publication-page", "publications-list", "search-results-list"],
                    o = [...s, "search-desktop-autocomplete", "search-mobile-autocomplete"];
                let r;

                function a(t) {
                    return !!document.getElementById(t)
                }

                function l() {
                    return new Promise((t => {
                        const e = document.createElement("script");
                        e.addEventListener(n.EventType.LOAD, (() => {
                            window.MathJax.Hub.Config({
                                extensions: ["tex2jax.js"],
                                jax: ["input/TeX", "output/HTML-CSS"],
                                messageStyle: "none",
                                tex2jax: {
                                    inlineMath: [
                                        ["$", "$"],
                                        ["\\(", "\\)"]
                                    ]
                                },
                                elements: o.filter(a),
                                skipStartupTypeset: !0
                            }), t()
                        })), e.src = "https://www.gstatic.com/external_hosted/mathjax/latest/MathJax.js", document.documentElement.appendChild(e)
                    }))
                }
                async function d(t) {
                    if (o.includes(t)) return r || (r = l()), await r, new Promise((e => {
                        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, t]), window.MathJax.Hub.Queue([e])
                    }))
                }
                async function u(t) {
                    const e = document.querySelector(`#${t} h1`),
                        i = e && e.innerText;
                    if (await d(t), i) {
                        const t = e.innerText.replace(/\n/g, "");
                        i !== t && (document.title = document.title.replace(i, t))
                    }
                }
                e.init = async function () {
                    return Promise.all(s.filter(a).map(u))
                }, e.render = d
            },
            5270: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmNewsletter = e.GdmNewsletterSelector = void 0;
                const n = i(4829),
                    s = i(7560);
                var o, r, a, l;
                ! function (t) {
                    t.ACCEPTED = "accepted", t.INVALID = "invalid"
                }(o || (o = {})),
                function (t) {
                    t.ERROR = "error", t.INVALID = "invalid", t.SUCCESS = "success"
                }(r || (r = {})),
                function (t) {
                    t.FORM = ".gdm-sign-up", t.INPUT = ".mdc-text-field__input", t.OPT_IN_FIELD = "[data-gdm-optin]", t.RESPONSE_ALERT = ".gdm-sign-up__response", t.ROOT = "gdm-newsletter", t.TEXT_FIELD = ".mdc-text-field"
                }(a || (e.GdmNewsletterSelector = a = {})),
                function (t) {
                    t.RESPONSE_ERROR = "gdm-sign-up__response--error"
                }(l || (l = {}));
                class d extends HTMLElement {
                    constructor() {
                        super(...arguments), this.response = !1, this.onInput = () => {
                            this.input && this.mdcTextField && this.response && this.responseAlert && (this.response = !1, this.input.removeAttribute(n.Attribute.ARIA_DESCRIBEDBY), this.responseAlert.setAttribute(n.Attribute.ARIA_HIDDEN, "true"), this.responseAlert.classList.remove(l.RESPONSE_ERROR), this.responseAlert.innerHTML = "")
                        }, this.onSubmit = async t => {
                            t.preventDefault();
                            const e = t.target,
                                i = new FormData(e),
                                n = e.querySelector(a.OPT_IN_FIELD);
                            n && await this.addOptInStatus(i, n.name);
                            try {
                                const t = await fetch(e.action, {
                                    method: e.method,
                                    body: i
                                });
                                if (!t.ok) return void console.error(`Error: ${t.statusText}`);
                                const n = await t.json();
                                if (!this.mdcTextField || !this.form) return;
                                switch (n.result) {
                                    case o.ACCEPTED: {
                                        this.mdcTextField.valid = !0, this.setResponseMessage(r.SUCCESS);
                                        const t = this.form.dataset.gdmGtmMethod;
                                        window.gtag("event", "sign_up", {
                                            method: t
                                        });
                                        break
                                    }
                                    case o.INVALID:
                                        this.setResponseMessage(r.INVALID), this.mdcTextField.focus();
                                        break;
                                    default:
                                        this.setResponseMessage(r.ERROR)
                                }
                            } catch (t) {
                                console.error(`error: ${t}`), this.setResponseMessage(r.ERROR)
                            }
                        }
                    }
                    connectedCallback() {
                        this.destroy();
                        const t = this.querySelector(a.FORM),
                            e = this.querySelector(a.INPUT),
                            i = this.querySelector(a.RESPONSE_ALERT),
                            n = this.querySelector(a.TEXT_FIELD);
                        t && e && i && n && (this.form = t, this.input = e, this.mdcTextField = s.MDCTextField.attachTo(n), this.responseAlert = i, this.form.addEventListener("submit", this.onSubmit), this.form.addEventListener("input", this.onInput))
                    }
                    disconnectedCallback() {
                        this.destroy()
                    }
                    destroy() {
                        this.input = void 0, this.responseAlert = void 0, this.form && (this.form.removeEventListener("submit", this.onSubmit), this.form.removeEventListener("input", this.onInput), this.form = void 0), this.mdcTextField && (this.mdcTextField.destroy(), this.mdcTextField = void 0)
                    }
                    async addOptInStatus(t, e) {
                        try {
                            const i = await fetch("/api/double-opt-in/");
                            if (!i.ok) return;
                            const {
                                double_opt_in: n
                            } = await i.json();
                            n || t.set(e, "true")
                        } catch (t) {}
                    }
                    setResponseMessage(t) {
                        if (this.input && this.mdcTextField && this.responseAlert) {
                            const e = this.responseAlert.id,
                                i = t !== r.SUCCESS;
                            this.response = t, this.responseAlert.classList.toggle(l.RESPONSE_ERROR, i), this.responseAlert.innerHTML = this.responseAlert.dataset[t] || "", this.input.setAttribute(n.Attribute.ARIA_DESCRIBEDBY, e), this.responseAlert.removeAttribute(n.Attribute.ARIA_HIDDEN)
                        }
                    }
                }
                e.GdmNewsletter = d
            },
            5281: (t, e, i) => {
                i.d(e, {
                    l: () => r
                });
                var n = i(1635),
                    s = i(361),
                    o = i(1473),
                    r = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.activate = function () {
                            this.foundation.activate()
                        }, e.prototype.deactivate = function () {
                            this.foundation.deactivate()
                        }, e.prototype.setRippleCenter = function (t) {
                            this.foundation.setRippleCenter(t)
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClass: function (e) {
                                        return t.root.classList.add(e)
                                    },
                                    removeClass: function (e) {
                                        return t.root.classList.remove(e)
                                    },
                                    hasClass: function (e) {
                                        return t.root.classList.contains(e)
                                    },
                                    setStyle: function (e, i) {
                                        return t.root.style.setProperty(e, i)
                                    },
                                    registerEventHandler: function (e, i) {
                                        return t.listen(e, i)
                                    },
                                    deregisterEventHandler: function (e, i) {
                                        return t.unlisten(e, i)
                                    }
                                };
                            return new o.C(e)
                        }, e
                    }(s.O)
            },
            5292: (t, e, i) => {
                var n, s, o, r;
                i.d(e, {
                        DH: () => r,
                        QB: () => o,
                        s7: () => n
                    }),
                    function (t) {
                        t.ROOT = "glue-copy", t.VALUE = "glue-copy-value", t.BUTTON = "glue-copy-button", t.IS_COPIED = "glue-is-copied", t.POPOVER_ROOT = "glue-popover", t.SOCIAL_POPOVER_ROOT = "glue-social__popover"
                    }(n || (n = {})),
                    function (t) {
                        t.BASE = "base", t.SOCIAL = "social"
                    }(s || (s = {})),
                    function (t) {
                        t.SUCCESS = "glue-copy-success", t.FAIL = "glue-copy-fail"
                    }(o || (o = {})),
                    function (t) {
                        t.MISSING_INPUT = "Input element is missing", t.MISSING_COPY_BUTTON = "Copy button is missing", t.SUCCESS_MESSAGE = "Copied to clipboard", t.FAIL_MESSAGE = "Press Ctrl+C or âŒ˜+C to copy"
                    }(r || (r = {}))
            },
            5527: (t, e, i) => {
                i.d(e, {
                    d: () => l
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(6834),
                    r = i(3881),
                    a = i(3393),
                    l = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.closeAnimationEndTimerId = 0, s.defaultFocusState = a.hf.LIST_ROOT, s.selectedIndex = -1, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return a.Y7
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return a.P$
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "numbers", {
                            get: function () {
                                return a.nL
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClassToElementAtIndex: function () {},
                                    removeClassFromElementAtIndex: function () {},
                                    addAttributeToElementAtIndex: function () {},
                                    removeAttributeFromElementAtIndex: function () {},
                                    getAttributeFromElementAtIndex: function () {
                                        return null
                                    },
                                    elementContainsClass: function () {
                                        return !1
                                    },
                                    closeSurface: function () {},
                                    getElementIndex: function () {
                                        return -1
                                    },
                                    notifySelected: function () {},
                                    getMenuItemCount: function () {
                                        return 0
                                    },
                                    focusItemAtIndex: function () {},
                                    focusListRoot: function () {},
                                    getSelectedSiblingOfItemAtIndex: function () {
                                        return -1
                                    },
                                    isSelectableItemAtIndex: function () {
                                        return !1
                                    }
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.destroy = function () {
                            this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface()
                        }, e.prototype.handleKeydown = function (t) {
                            var e = t.key,
                                i = t.keyCode;
                            ("Tab" === e || 9 === i) && this.adapter.closeSurface(!0)
                        }, e.prototype.handleItemAction = function (t) {
                            var e = this,
                                i = this.adapter.getElementIndex(t);
                            if (!(i < 0)) {
                                this.adapter.notifySelected({
                                    index: i
                                });
                                var n = "true" === this.adapter.getAttributeFromElementAtIndex(i, a.P$.SKIP_RESTORE_FOCUS);
                                this.adapter.closeSurface(n), this.closeAnimationEndTimerId = setTimeout((function () {
                                    var i = e.adapter.getElementIndex(t);
                                    i >= 0 && e.adapter.isSelectableItemAtIndex(i) && e.setSelectedIndex(i)
                                }), r.O.numbers.TRANSITION_CLOSE_DURATION)
                            }
                        }, e.prototype.handleMenuSurfaceOpened = function () {
                            switch (this.defaultFocusState) {
                                case a.hf.FIRST_ITEM:
                                    this.adapter.focusItemAtIndex(0);
                                    break;
                                case a.hf.LAST_ITEM:
                                    this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
                                    break;
                                case a.hf.NONE:
                                    break;
                                default:
                                    this.adapter.focusListRoot()
                            }
                        }, e.prototype.setDefaultFocusState = function (t) {
                            this.defaultFocusState = t
                        }, e.prototype.getSelectedIndex = function () {
                            return this.selectedIndex
                        }, e.prototype.setSelectedIndex = function (t) {
                            if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t)) throw new Error("MDCMenuFoundation: No selection group at specified index.");
                            var e = this.adapter.getSelectedSiblingOfItemAtIndex(t);
                            e >= 0 && (this.adapter.removeAttributeFromElementAtIndex(e, a.P$.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(e, a.Y7.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, a.Y7.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, a.P$.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t
                        }, e.prototype.setEnabled = function (t, e) {
                            this.validatedIndex(t), e ? (this.adapter.removeClassFromElementAtIndex(t, o.Y7.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, a.P$.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, o.Y7.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, a.P$.ARIA_DISABLED_ATTR, "true"))
                        }, e.prototype.validatedIndex = function (t) {
                            var e = this.adapter.getMenuItemCount();
                            if (!(t >= 0 && t < e)) throw new Error("MDCMenuFoundation: No list item at specified index.")
                        }, e
                    }(s.I)
            },
            5651: (t, e, i) => {
                i.d(e, {
                    r: () => l
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(605),
                    r = ["mousedown", "touchstart"],
                    a = ["click", "keydown"],
                    l = function (t) {
                        function e(i, s) {
                            void 0 === s && (s = {});
                            var o = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return o.isFocused = !1, o.receivedUserInput = !1, o.valid = !0, o.useNativeValidation = !0, o.validateOnValueChange = !0, o.helperText = s.helperText, o.characterCounter = s.characterCounter, o.leadingIcon = s.leadingIcon, o.trailingIcon = s.trailingIcon, o.inputFocusHandler = function () {
                                o.activateFocus()
                            }, o.inputBlurHandler = function () {
                                o.deactivateFocus()
                            }, o.inputInputHandler = function () {
                                o.handleInput()
                            }, o.setPointerXOffset = function (t) {
                                o.setTransformOrigin(t)
                            }, o.textFieldInteractionHandler = function () {
                                o.handleTextFieldInteraction()
                            }, o.validationAttributeChangeHandler = function (t) {
                                o.handleValidationAttributeChange(t)
                            }, o
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y7
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P$
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "numbers", {
                            get: function () {
                                return o.nL
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
                            get: function () {
                                var t = this.getNativeInput().type;
                                return o.NZ.indexOf(t) >= 0
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "shouldFloat", {
                            get: function () {
                                return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "shouldShake", {
                            get: function () {
                                return !this.isFocused && !this.isValid() && !!this.getValue()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    hasClass: function () {
                                        return !0
                                    },
                                    setInputAttr: function () {},
                                    removeInputAttr: function () {},
                                    registerTextFieldInteractionHandler: function () {},
                                    deregisterTextFieldInteractionHandler: function () {},
                                    registerInputInteractionHandler: function () {},
                                    deregisterInputInteractionHandler: function () {},
                                    registerValidationAttributeChangeHandler: function () {
                                        return new MutationObserver((function () {}))
                                    },
                                    deregisterValidationAttributeChangeHandler: function () {},
                                    getNativeInput: function () {
                                        return null
                                    },
                                    isFocused: function () {
                                        return !1
                                    },
                                    activateLineRipple: function () {},
                                    deactivateLineRipple: function () {},
                                    setLineRippleTransformOrigin: function () {},
                                    shakeLabel: function () {},
                                    floatLabel: function () {},
                                    setLabelRequired: function () {},
                                    hasLabel: function () {
                                        return !1
                                    },
                                    getLabelWidth: function () {
                                        return 0
                                    },
                                    hasOutline: function () {
                                        return !1
                                    },
                                    notchOutline: function () {},
                                    closeOutline: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            var t, e, i, s;
                            this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
                            try {
                                for (var o = (0, n.Ju)(r), l = o.next(); !l.done; l = o.next()) {
                                    var d = l.value;
                                    this.adapter.registerInputInteractionHandler(d, this.setPointerXOffset)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    l && !l.done && (e = o.return) && e.call(o)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            try {
                                for (var u = (0, n.Ju)(a), c = u.next(); !c.done; c = u.next()) {
                                    d = c.value;
                                    this.adapter.registerTextFieldInteractionHandler(d, this.textFieldInteractionHandler)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    c && !c.done && (s = u.return) && s.call(u)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                            this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length)
                        }, e.prototype.destroy = function () {
                            var t, e, i, s;
                            this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
                            try {
                                for (var o = (0, n.Ju)(r), l = o.next(); !l.done; l = o.next()) {
                                    var d = l.value;
                                    this.adapter.deregisterInputInteractionHandler(d, this.setPointerXOffset)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    l && !l.done && (e = o.return) && e.call(o)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            try {
                                for (var u = (0, n.Ju)(a), c = u.next(); !c.done; c = u.next()) {
                                    d = c.value;
                                    this.adapter.deregisterTextFieldInteractionHandler(d, this.textFieldInteractionHandler)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    c && !c.done && (s = u.return) && s.call(u)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                            this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)
                        }, e.prototype.handleTextFieldInteraction = function () {
                            var t = this.adapter.getNativeInput();
                            t && t.disabled || (this.receivedUserInput = !0)
                        }, e.prototype.handleValidationAttributeChange = function (t) {
                            var e = this;
                            t.some((function (t) {
                                return o.YU.indexOf(t) > -1 && (e.styleValidity(!0), e.adapter.setLabelRequired(e.getNativeInput().required), !0)
                            })), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length)
                        }, e.prototype.notchOutline = function (t) {
                            if (this.adapter.hasOutline() && this.adapter.hasLabel())
                                if (t) {
                                    var e = this.adapter.getLabelWidth() * o.nL.LABEL_SCALE;
                                    this.adapter.notchOutline(e)
                                } else this.adapter.closeOutline()
                        }, e.prototype.activateFocus = function () {
                            this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), !this.helperText || !this.helperText.isPersistent() && this.helperText.isValidation() && this.valid || this.helperText.showToScreenReader()
                        }, e.prototype.setTransformOrigin = function (t) {
                            if (!this.isDisabled() && !this.adapter.hasOutline()) {
                                var e = t.touches,
                                    i = e ? e[0] : t,
                                    n = i.target.getBoundingClientRect(),
                                    s = i.clientX - n.left;
                                this.adapter.setLineRippleTransformOrigin(s)
                            }
                        }, e.prototype.handleInput = function () {
                            this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length)
                        }, e.prototype.autoCompleteFocus = function () {
                            this.receivedUserInput || this.activateFocus()
                        }, e.prototype.deactivateFocus = function () {
                            this.isFocused = !1, this.adapter.deactivateLineRipple();
                            var t = this.isValid();
                            this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1)
                        }, e.prototype.getValue = function () {
                            return this.getNativeInput().value
                        }, e.prototype.setValue = function (t) {
                            if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
                                var e = this.isValid();
                                this.styleValidity(e)
                            }
                            this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake))
                        }, e.prototype.isValid = function () {
                            return this.useNativeValidation ? this.isNativeInputValid() : this.valid
                        }, e.prototype.setValid = function (t) {
                            this.valid = t, this.styleValidity(t);
                            var e = !t && !this.isFocused && !!this.getValue();
                            this.adapter.hasLabel() && this.adapter.shakeLabel(e)
                        }, e.prototype.setValidateOnValueChange = function (t) {
                            this.validateOnValueChange = t
                        }, e.prototype.getValidateOnValueChange = function () {
                            return this.validateOnValueChange
                        }, e.prototype.setUseNativeValidation = function (t) {
                            this.useNativeValidation = t
                        }, e.prototype.isDisabled = function () {
                            return this.getNativeInput().disabled
                        }, e.prototype.setDisabled = function (t) {
                            this.getNativeInput().disabled = t, this.styleDisabled(t)
                        }, e.prototype.setHelperTextContent = function (t) {
                            this.helperText && this.helperText.setContent(t)
                        }, e.prototype.setLeadingIconAriaLabel = function (t) {
                            this.leadingIcon && this.leadingIcon.setAriaLabel(t)
                        }, e.prototype.setLeadingIconContent = function (t) {
                            this.leadingIcon && this.leadingIcon.setContent(t)
                        }, e.prototype.setTrailingIconAriaLabel = function (t) {
                            this.trailingIcon && this.trailingIcon.setAriaLabel(t)
                        }, e.prototype.setTrailingIconContent = function (t) {
                            this.trailingIcon && this.trailingIcon.setContent(t)
                        }, e.prototype.setcharacterCounter = function (t) {
                            if (this.characterCounter) {
                                var e = this.getNativeInput().maxLength;
                                if (-1 === e) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
                                this.characterCounter.setCounterValue(t, e)
                            }
                        }, e.prototype.isBadInput = function () {
                            return this.getNativeInput().validity.badInput || !1
                        }, e.prototype.isNativeInputValid = function () {
                            return this.getNativeInput().validity.valid
                        }, e.prototype.styleValidity = function (t) {
                            var i = e.cssClasses.INVALID;
                            if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
                                if (this.helperText.setValidity(t), !this.helperText.isValidation()) return;
                                var n = this.helperText.isVisible(),
                                    s = this.helperText.getId();
                                n && s ? this.adapter.setInputAttr(o.P$.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(o.P$.ARIA_DESCRIBEDBY)
                            }
                        }, e.prototype.styleFocused = function (t) {
                            var i = e.cssClasses.FOCUSED;
                            t ? this.adapter.addClass(i) : this.adapter.removeClass(i)
                        }, e.prototype.styleDisabled = function (t) {
                            var i = e.cssClasses,
                                n = i.DISABLED,
                                s = i.INVALID;
                            t ? (this.adapter.addClass(n), this.adapter.removeClass(s)) : this.adapter.removeClass(n), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t)
                        }, e.prototype.styleFloating = function (t) {
                            var i = e.cssClasses.LABEL_FLOATING;
                            t ? this.adapter.addClass(i) : this.adapter.removeClass(i)
                        }, e.prototype.getNativeInput = function () {
                            return (this.adapter ? this.adapter.getNativeInput() : null) || {
                                disabled: !1,
                                maxLength: -1,
                                required: !1,
                                type: "input",
                                validity: {
                                    badInput: !1,
                                    valid: !0
                                },
                                value: ""
                            }
                        }, e
                    }(s.I)
            },
            5659: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ModalManager = e.CssClasses = void 0;
                const n = i(4829),
                    s = i(48),
                    o = i(6678),
                    r = i(9252);
                var a, l;
                ! function (t) {
                    t.VISIBLE = "gdm-modal-container--visible", t.LOADING = "gdm-modal-container--loading"
                }(a || (e.CssClasses = a = {})),
                function (t) {
                    t.CONTAINER = ".gdm-modal-container", t.TRIGGER = "[data-gdm-modal-trigger]"
                }(l || (l = {}));
                class d {
                    constructor(t) {
                        this.container = t, this.pageRoute = window.location.href, this.modals = new Map, this.onPopState = () => {
                            const t = (0, r.getModalIdFromUrl)(window.location),
                                e = this.modals.get(t);
                            this.setActiveModal(e)
                        }, this.onTriggerClick = t => {
                            if (!(t.currentTarget instanceof HTMLAnchorElement) || t.metaKey) return;
                            t.preventDefault();
                            const e = (0, r.getModalIdFromAnchor)(t.currentTarget),
                                i = this.modals.get(e);
                            if (this.setActiveModal(i), i && i.isRoute) {
                                const e = t.currentTarget.href;
                                window.history.pushState({
                                    path: e
                                }, "", e)
                            }
                        }, this.onModalClosed = () => {
                            const t = this.activeModal;
                            this.setActiveModal(), t && t.isRoute && window.history.pushState({
                                path: this.pageRoute
                            }, "", this.pageRoute)
                        }, this.onCookieNotificationBarRendered = async t => {
                            t && (this.cookieNotificationBarElement = t, this.activeModal && this.moveCookieNotificationBar())
                        }, window.addEventListener("popstate", this.onPopState), window.glue.CookieNotificationBar.instance && window.glue.CookieNotificationBar.instance.rendered.then(this.onCookieNotificationBarRendered)
                    }
                    register(t) {
                        const e = (0, r.getModalIdFromAnchor)(t),
                            i = !(0, r.getModalIdFromDataset)(t);
                        if (t.addEventListener("click", this.onTriggerClick), i && t.setAttribute(n.Attribute.ROLE, n.Role.BUTTON), !this.modals.get(e)) {
                            const n = new o.GdmModal(t, e, i);
                            this.modals.set(e, n), n.isRoute && n.isInitialised && (this.pageRoute = window.location.href.replace(`${e}/`, ""), this.setActiveModal(n))
                        }
                    }
                    async setActiveModal(t) {
                        if (this.activeModal === t) return;
                        const e = this.activeModal;
                        if (this.activeModal = t, e && e.glueModal && (e.glueModal.root.removeEventListener(s.Strings.CLOSED_EVENT, this.onModalClosed), e.glueModal.close()), !t) return this.container.classList.remove(a.VISIBLE), void this.moveCookieNotificationBar();
                        this.container.classList.add(a.VISIBLE), t.isInitialised || (this.container.classList.toggle(a.LOADING, !0), await t.initialise(!0), this.container.classList.toggle(a.LOADING, !1)), this.moveCookieNotificationBar(), t.glueModal && (t.glueModal.root.addEventListener(s.Strings.CLOSED_EVENT, this.onModalClosed), t.glueModal.open())
                    }
                    moveCookieNotificationBar() {
                        if (!this.cookieNotificationBarElement) return;
                        const t = this.activeModal && this.activeModal.glueModal && this.activeModal.glueModal.root.querySelector(o.Selector.INNER);
                        t ? t.append(this.cookieNotificationBarElement) : document.body.prepend(this.cookieNotificationBarElement)
                    }
                    static register(t = document.body) {
                        const e = t.querySelectorAll(l.TRIGGER);
                        if (!d.singleton) {
                            const t = document.querySelector(l.CONTAINER);
                            if (!t) throw new Error("Container element not present");
                            d.singleton = new d(t)
                        }
                        for (const t of e) d.triggers.has(t) || (d.singleton.register(t), d.triggers.add(t))
                    }
                }
                e.ModalManager = d, d.triggers = new Set
            },
            5700: (t, e, i) => {
                function n(t) {
                    return void 0 === t && (t = window), !! function (t) {
                        void 0 === t && (t = window);
                        var e = !1;
                        try {
                            var i = {
                                    get passive() {
                                        return e = !0, !1
                                    }
                                },
                                n = function () {};
                            t.document.addEventListener("test", n, i), t.document.removeEventListener("test", n, i)
                        } catch (t) {
                            e = !1
                        }
                        return e
                    }(t) && {
                        passive: !0
                    }
                }
                i.d(e, {
                    E: () => n
                })
            },
            5804: (t, e, i) => {
                i.d(e, {
                    g9: () => o.P,
                    js: () => o.Y,
                    r4: () => s.r,
                    y7: () => n.y
                });
                var n = i(5163),
                    s = i(583),
                    o = i(321)
            },
            6009: (t, e, i) => {
                i.d(e, {
                    I: () => n
                });
                var n = function () {
                    function t(t) {
                        void 0 === t && (t = {}), this.adapter = t
                    }
                    return Object.defineProperty(t, "cssClasses", {
                        get: function () {
                            return {}
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "strings", {
                        get: function () {
                            return {}
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "numbers", {
                        get: function () {
                            return {}
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "defaultAdapter", {
                        get: function () {
                            return {}
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.init = function () {}, t.prototype.destroy = function () {}, t
                }()
            },
            6279: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmCaptionSelector = e.GdmCaption = void 0;
                const n = i(4829),
                    s = i(4265);
                var o, r;
                ! function (t) {
                    t.ANIMATING = "caption--animating", t.CLONES = "caption__clones", t.COLLAPSED = "caption--collapsed", t.EXPANDED = "caption--expanded", t.TRUNCATED = "caption--truncated"
                }(o || (o = {})),
                function (t) {
                    t.COLLAPSE = ".caption__collapse", t.EXPAND = ".caption__expand", t.ROOT = "gdm-caption", t.TEXT = ".caption__text"
                }(r || (e.GdmCaptionSelector = r = {}));
                class a extends HTMLElement {
                    constructor() {
                        super(...arguments), this.ctas = new Set, this.isActiveInternal = !0, this.isExpandable = !1, this.isExpanded = !1, this.words = [], this.onClick = t => {
                            this.isActive && (t.preventDefault(), this.isExpanded ? this.collapse(!0) : this.expand(!0))
                        }, this.onResize = () => {
                            this.containers && 1.5 * d(this.containers.collapsed) < d(this.containers.expanded) ? this.enable() : this.disable()
                        }, this.onTransitionEnd = () => {
                            this.timeout && (clearTimeout(this.timeout), this.timeout = void 0);
                            const t = this.isExpanded ? o.EXPANDED : o.COLLAPSED;
                            this.reset(), this.classList.add(t)
                        }
                    }
                    connectedCallback() {
                        const t = this.querySelector(r.COLLAPSE),
                            e = this.querySelector(r.EXPAND),
                            i = this.querySelector(r.TEXT);
                        t && e && i && this.init(i, e, t)
                    }
                    disconnectedCallback() {
                        this.teardown()
                    }
                    init(t, e, i) {
                        const r = document.createElement("div");
                        r.classList.add(o.CLONES), r.setAttribute(n.Attribute.ARIA_HIDDEN, "true"), this.appendChild(r), t.tabIndex = n.TabIndex.NOT_TABBABLE;
                        const a = l(t, r);
                        a.classList.add(o.COLLAPSED);
                        const d = l(t, r);
                        d.classList.add(o.EXPANDED);
                        const u = l(t, r);
                        u.classList.add(o.EXPANDED, o.TRUNCATED), this.containers = {
                            clones: r,
                            collapsed: a,
                            expanded: d,
                            text: t,
                            truncated: u
                        };
                        const c = this.containers.truncated.querySelector("p");
                        if (c) {
                            const t = c.innerText.split(/\s+/);
                            c.innerHTML = "";
                            for (const e of t) {
                                const t = document.createElement("span");
                                t.innerText = e, c.append(t, document.createTextNode(" ")), this.words.push(t)
                            }
                        }
                        t.lastElementChild && t.lastElementChild.appendChild(i), i.addEventListener(s.EventType.CLICK, this.onClick), i.addEventListener(s.EventType.TOUCHSTART, this.onClick), this.ctas.add(i), e.addEventListener(s.EventType.CLICK, this.onClick), e.addEventListener(s.EventType.TOUCHSTART, this.onClick), this.ctas.add(e), window.addEventListener(s.EventType.RESIZE, this.onResize), this.onResize(), this.isExpandable || this.reset()
                    }
                    teardown() {
                        for (const t of this.ctas) t.removeEventListener(s.EventType.CLICK, this.onClick), t.removeEventListener(s.EventType.TOUCHSTART, this.onClick), this.appendChild(t), this.ctas.delete(t);
                        this.containers && (this.containers.clones.remove(), this.containers.text.removeAttribute(n.Attribute.TAB_INDEX), this.containers = void 0), window.removeEventListener(s.EventType.RESIZE, this.onResize), this.disable()
                    }
                    enable() {
                        this.isExpandable || (this.isExpandable = !0, this.updateAriaAttributes(), this.addEventListener(s.EventType.TRANSITIONEND, this.onTransitionEnd), this.onTransitionEnd())
                    }
                    disable() {
                        this.isExpandable && (this.isExpandable = !1, this.updateAriaAttributes(), this.removeEventListener(s.EventType.TRANSITIONEND, this.onTransitionEnd), this.reset())
                    }
                    collapse(t = !1) {
                        this.isExpanded && this.containers && (this.isExpanded = !1, this.updateAriaAttributes(), this.transition(`${d(this.containers.expanded)}px`, ""), t && this.containers.text.focus())
                    }
                    expand(t = !1) {
                        !this.isExpanded && this.containers && (this.isExpanded = !0, this.updateAriaAttributes(), this.transition("", `${d(this.containers.expanded)}px`), t && this.containers.text.focus())
                    }
                    get isActive() {
                        return this.isActiveInternal
                    }
                    set isActive(t) {
                        t !== this.isActive && (this.isActiveInternal = t, t || this.collapse())
                    }
                    reset(t = "") {
                        this.style.height = t, this.classList.remove(o.ANIMATING, o.COLLAPSED, o.EXPANDED)
                    }
                    transition(t, e) {
                        this.reset(t), requestAnimationFrame((() => {
                            this.classList.add(o.ANIMATING), this.timeout = setTimeout(this.onTransitionEnd, 250), this.style.height = e
                        }))
                    }
                    updateAriaAttributes() {
                        if (this.containers) {
                            const e = this.containers.text,
                                i = this.isExpandable && !this.isExpanded;
                            if (i) {
                                let t = "",
                                    i = 0;
                                const s = this.words[i].offsetTop;
                                for (; this.words[i] && this.words[i].offsetTop === s;) t += `${this.words[i].innerText} `, i += 1;
                                e.setAttribute(n.Attribute.ARIA_LABEL, `${t}(truncated)`)
                            } else e.removeAttribute(n.Attribute.ARIA_LABEL);
                            for (const s of e.children) t = s, i ? t.setAttribute(n.Attribute.ARIA_HIDDEN, "true") : t.removeAttribute(n.Attribute.ARIA_HIDDEN)
                        }
                        var t;
                        for (const t of this.ctas) t.setAttribute(n.Attribute.ARIA_EXPANDED, `${this.isExpanded}`)
                    }
                }

                function l(t, e) {
                    const i = t.cloneNode(!0);
                    return i.removeAttribute("id"), e.appendChild(i), i
                }

                function d(t) {
                    return t ? t.clientHeight : 0
                }
                e.GdmCaption = a
            },
            6442: (t, e, i) => {
                var n, s, o, r;
                i.d(e, {
                        Kw: () => o,
                        rC: () => r,
                        s7: () => n,
                        up: () => s
                    }),
                    function (t) {
                        t.ROOT = "glue-tooltip", t.ANIMATION = "glue-tooltip__content--animation", t.BODY = "glue-tooltip__body", t.CONTENT = "glue-tooltip__content", t.HEADER = "glue-tooltip__header", t.LINK = "glue-tooltip__link", t.RICH = "glue-tooltip--rich", t.SHOW_TOOLTIP = "glue-tooltip__content--shown", t.TRIGGER = "glue-tooltip__trigger", t.TRIGGER_LINK = "glue-tooltip__trigger--link", t.TRIGGER_ICON = "glue-tooltip__trigger--icon", t.TRIGGER_ICONAFTER = "glue-tooltip__trigger--icon-after", t.TONAL_LINK = "glue-inline-tonal-link"
                    }(n || (n = {})),
                    function (t) {
                        t.CLOSE_EVENT = "gluetooltipclose", t.SHOW_EVENT = "gluetooltipshow"
                    }(s || (s = {})),
                    function (t) {
                        t.MISSING_CONTENT = "The tooltip content element is missing", t.MISSING_TRIGGER = "The tooltip trigger element is missing", t.INCORRECT_POSITION = "data-glue-tooltip-auto-position attribute only accepts true or false value."
                    }(o || (o = {})),
                    function (t) {
                        t.AUTO_POSITION = "glueTooltipAutoPosition"
                    }(r || (r = {}))
            },
            6545: (t, e, i) => {
                var n;

                function s(t, e) {
                    void 0 === e && (e = !1);
                    var i, s = t.CSS;
                    if ("boolean" == typeof n && !e) return n;
                    if (!(s && "function" == typeof s.supports)) return !1;
                    var o = s.supports("--css-vars", "yes"),
                        r = s.supports("(--css-vars: yes)") && s.supports("color", "#00000000");
                    return i = o || r, e || (n = i), i
                }

                function o(t, e, i) {
                    if (!t) return {
                        x: 0,
                        y: 0
                    };
                    var n, s, o = e.x,
                        r = e.y,
                        a = o + i.left,
                        l = r + i.top;
                    if ("touchstart" === t.type) {
                        var d = t;
                        n = d.changedTouches[0].pageX - a, s = d.changedTouches[0].pageY - l
                    } else {
                        var u = t;
                        n = u.pageX - a, s = u.pageY - l
                    }
                    return {
                        x: n,
                        y: s
                    }
                }
                i.d(e, {
                    d: () => s,
                    y: () => o
                })
            },
            6678: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmModal = e.Selector = void 0;
                const n = i(4073),
                    s = i(48),
                    o = i(4109),
                    r = i(5659),
                    a = i(3150),
                    l = i(6743),
                    d = document.querySelector(".gdm-modal-container");
                var u;
                ! function (t) {
                    t.BACKDROP = ".gdm-modal__backdrop", t.GLUE_MODAL = ".glue-modal", t.INNER = ".gdm-modal__inner", t.ROOT = ".gdm-modal"
                }(u || (e.Selector = u = {}));
                e.GdmModal = class {
                    constructor(t, e, i) {
                        this.trigger = t, this.id = e, this.isRoute = i, this.isInitialised = !1, this.videos = [], this.onBackdropClick = () => {
                            this.glueModal && this.glueModal.close()
                        }, this.onClose = () => {
                            for (const t of this.videos) t.isActive = !1, t.pause()
                        }, this.onOpen = () => {
                            for (const t of this.videos) t.isActive = !0, t.isPlaying = t.isAutoplay, t.seek(0), t.play();
                            const t = this.glueModal ? this.glueModal.root.querySelectorAll("willway-border-gradient") : [];
                            for (const e of t) e.handleResize()
                        }, this.isRoute && this.initialise(!1)
                    }
                    async initialise(t = !0) {
                        let e = document.getElementById(this.id);
                        if (e instanceof HTMLTemplateElement && (e = e.content.querySelector(u.GLUE_MODAL)), !e && t) {
                            e = (await (0, o.fetchXhrContent)(this.trigger.href)).querySelector(u.GLUE_MODAL)
                        }
                        if (!e) return;
                        d && t && d.appendChild(e), this.glueModal = new n.Modal(e, this.trigger), e.addEventListener(s.Strings.CLOSED_EVENT, this.onClose), e.addEventListener(s.Strings.OPENED_EVENT, this.onOpen), r.ModalManager.register(e), l.observe(e), this.videos = e.querySelectorAll(a.GdmVideoSelector.ALL);
                        for (const t of this.videos) t.isActive = !1;
                        const i = e.querySelector(u.BACKDROP);
                        i && i.addEventListener("click", this.onBackdropClick), this.isInitialised = !0
                    }
                }
            },
            6743: (t, e) => {
                var i;
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.observe = void 0,
                    function (t) {
                        t.BLUE = "gdm--blue", t.GEMINI = "gdm--willway", t.GREEN = "gdm--green", t.RED = "gdm--red", t.YELLOW = "gdm--yellow", t.NO_IN_VIEW = "no-in-view"
                    }(i || (i = {}));
                const n = [i.BLUE, i.GEMINI, i.GREEN, i.RED, i.YELLOW].some((t => document.body.classList.contains(t)));
                let s;
                e.observe = function (t = document.body) {
                    if (!n) return;
                    const e = (s || (s = new IntersectionObserver((t => {
                            t.forEach((t => {
                                const e = t.boundingClientRect.y <= 0 ? "top" : "bottom";
                                t.isIntersecting && t.intersectionRatio >= 0 ? (t.target.classList.add("willway-in-view-element--in-view"), t.target.classList.remove(`willway-in-view-element--out-view-${e}`)) : !t.isIntersecting && t.intersectionRatio <= 0 && (t.target.classList.remove("willway-in-view-element--in-view"), t.target.classList.add(`willway-in-view-element--out-view-${e}`))
                            }))
                        }), {
                            rootMargin: "10px",
                            threshold: [0, 1]
                        })), s),
                        o = t.querySelectorAll("[data-in-view]");
                    for (const t of o) t.classList.add("willway-in-view-element"), e.observe(t);
                    t.classList.remove(i.NO_IN_VIEW)
                }
            },
            6785: (t, e, i) => {
                i.d(e, {
                    DE: () => o.P,
                    NF: () => n.N,
                    g: () => o.Y,
                    yh: () => s.y
                });
                var n = i(5034),
                    s = i(2332),
                    o = i(5160)
            },
            6832: (t, e, i) => {
                i.d(e, {
                    R: () => T
                });
                var n = i(1635),
                    s = i(361),
                    o = i(1949),
                    r = i(5281),
                    a = i(9891),
                    l = i(8283),
                    d = i(3393),
                    u = i(3618),
                    c = i(1762),
                    h = i(9716),
                    p = i(1162),
                    E = i(8446),
                    f = i(5163),
                    m = i(4166),
                    T = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.initialize = function (t, e, i, n, s, a) {
                            if (void 0 === t && (t = function (t) {
                                    return new o.$(t)
                                }), void 0 === e && (e = function (t) {
                                    return new r.l(t)
                                }), void 0 === i && (i = function (t) {
                                    return new u.i(t)
                                }), void 0 === n && (n = function (t) {
                                    return new l.C(t)
                                }), void 0 === s && (s = function (t) {
                                    return new m.k(t)
                                }), void 0 === a && (a = function (t) {
                                    return new f.y(t)
                                }), this.selectAnchor = this.root.querySelector(p.P$.SELECT_ANCHOR_SELECTOR), this.selectedText = this.root.querySelector(p.P$.SELECTED_TEXT_SELECTOR), this.hiddenInput = this.root.querySelector(p.P$.HIDDEN_INPUT_SELECTOR), !this.selectedText) throw new Error("MDCSelect: Missing required element: The following selector must be present: '" + p.P$.SELECTED_TEXT_SELECTOR + "'");
                            if (this.selectAnchor.hasAttribute(p.P$.ARIA_CONTROLS)) {
                                var d = document.getElementById(this.selectAnchor.getAttribute(p.P$.ARIA_CONTROLS));
                                d && (this.helperText = a(d))
                            }
                            this.menuSetup(n);
                            var c = this.root.querySelector(p.P$.LABEL_SELECTOR);
                            this.label = c ? t(c) : null;
                            var h = this.root.querySelector(p.P$.LINE_RIPPLE_SELECTOR);
                            this.lineRipple = h ? e(h) : null;
                            var E = this.root.querySelector(p.P$.OUTLINE_SELECTOR);
                            this.outline = E ? i(E) : null;
                            var T = this.root.querySelector(p.P$.LEADING_ICON_SELECTOR);
                            T && (this.leadingIcon = s(T)), this.root.classList.contains(p.Y7.OUTLINED) || (this.ripple = this.createRipple())
                        }, e.prototype.initialSyncWithDOM = function () {
                            var t = this;
                            if (this.handleFocus = function () {
                                    t.foundation.handleFocus()
                                }, this.handleBlur = function () {
                                    t.foundation.handleBlur()
                                }, this.handleClick = function (e) {
                                    t.selectAnchor.focus(), t.foundation.handleClick(t.getNormalizedXCoordinate(e))
                                }, this.handleKeydown = function (e) {
                                    t.foundation.handleKeydown(e)
                                }, this.handleMenuItemAction = function (e) {
                                    t.foundation.handleMenuItemAction(e.detail.index)
                                }, this.handleMenuOpened = function () {
                                    t.foundation.handleMenuOpened()
                                }, this.handleMenuClosed = function () {
                                    t.foundation.handleMenuClosed()
                                }, this.handleMenuClosing = function () {
                                    t.foundation.handleMenuClosing()
                                }, this.selectAnchor.addEventListener("focus", this.handleFocus), this.selectAnchor.addEventListener("blur", this.handleBlur), this.selectAnchor.addEventListener("click", this.handleClick), this.selectAnchor.addEventListener("keydown", this.handleKeydown), this.menu.listen(a.P$.CLOSED_EVENT, this.handleMenuClosed), this.menu.listen(a.P$.CLOSING_EVENT, this.handleMenuClosing), this.menu.listen(a.P$.OPENED_EVENT, this.handleMenuOpened), this.menu.listen(d.P$.SELECTED_EVENT, this.handleMenuItemAction), this.hiddenInput) {
                                if (this.hiddenInput.value) return this.foundation.setValue(this.hiddenInput.value, !0), void this.foundation.layout();
                                this.hiddenInput.value = this.value
                            }
                        }, e.prototype.destroy = function () {
                            this.selectAnchor.removeEventListener("focus", this.handleFocus), this.selectAnchor.removeEventListener("blur", this.handleBlur), this.selectAnchor.removeEventListener("keydown", this.handleKeydown), this.selectAnchor.removeEventListener("click", this.handleClick), this.menu.unlisten(a.P$.CLOSED_EVENT, this.handleMenuClosed), this.menu.unlisten(a.P$.OPENED_EVENT, this.handleMenuOpened), this.menu.unlisten(d.P$.SELECTED_EVENT, this.handleMenuItemAction), this.menu.destroy(), this.ripple && this.ripple.destroy(), this.outline && this.outline.destroy(), this.leadingIcon && this.leadingIcon.destroy(), this.helperText && this.helperText.destroy(), t.prototype.destroy.call(this)
                        }, Object.defineProperty(e.prototype, "value", {
                            get: function () {
                                return this.foundation.getValue()
                            },
                            set: function (t) {
                                this.foundation.setValue(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.setValue = function (t, e) {
                            void 0 === e && (e = !1), this.foundation.setValue(t, e)
                        }, Object.defineProperty(e.prototype, "selectedIndex", {
                            get: function () {
                                return this.foundation.getSelectedIndex()
                            },
                            set: function (t) {
                                this.foundation.setSelectedIndex(t, !0)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.setSelectedIndex = function (t, e) {
                            void 0 === e && (e = !1), this.foundation.setSelectedIndex(t, !0, e)
                        }, Object.defineProperty(e.prototype, "disabled", {
                            get: function () {
                                return this.foundation.getDisabled()
                            },
                            set: function (t) {
                                this.foundation.setDisabled(t), this.hiddenInput && (this.hiddenInput.disabled = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "leadingIconAriaLabel", {
                            set: function (t) {
                                this.foundation.setLeadingIconAriaLabel(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "leadingIconContent", {
                            set: function (t) {
                                this.foundation.setLeadingIconContent(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "helperTextContent", {
                            set: function (t) {
                                this.foundation.setHelperTextContent(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "useDefaultValidation", {
                            set: function (t) {
                                this.foundation.setUseDefaultValidation(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "valid", {
                            get: function () {
                                return this.foundation.isValid()
                            },
                            set: function (t) {
                                this.foundation.setValid(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "required", {
                            get: function () {
                                return this.foundation.getRequired()
                            },
                            set: function (t) {
                                this.foundation.setRequired(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.layout = function () {
                            this.foundation.layout()
                        }, e.prototype.layoutOptions = function () {
                            this.foundation.layoutOptions(), this.menu.layout(), this.menuItemValues = this.menu.items.map((function (t) {
                                return t.getAttribute(p.P$.VALUE_ATTR) || ""
                            })), this.hiddenInput && (this.hiddenInput.value = this.value)
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = (0, n.Cl)((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
                            return new E.A(t, this.getFoundationMap())
                        }, e.prototype.menuSetup = function (t) {
                            this.menuElement = this.root.querySelector(p.P$.MENU_SELECTOR), this.menu = t(this.menuElement), this.menu.hasTypeahead = !0, this.menu.singleSelection = !0, this.menuItemValues = this.menu.items.map((function (t) {
                                return t.getAttribute(p.P$.VALUE_ATTR) || ""
                            }))
                        }, e.prototype.createRipple = function () {
                            var t = this,
                                e = (0, n.Cl)((0, n.Cl)({}, c.N.createAdapter({
                                    root: this.selectAnchor
                                })), {
                                    registerInteractionHandler: function (e, i) {
                                        t.selectAnchor.addEventListener(e, i)
                                    },
                                    deregisterInteractionHandler: function (e, i) {
                                        t.selectAnchor.removeEventListener(e, i)
                                    }
                                });
                            return new c.N(this.selectAnchor, new h.E(e))
                        }, e.prototype.getSelectAdapterMethods = function () {
                            var t = this;
                            return {
                                getMenuItemAttr: function (t, e) {
                                    return t.getAttribute(e)
                                },
                                setSelectedText: function (e) {
                                    t.selectedText.textContent = e
                                },
                                isSelectAnchorFocused: function () {
                                    return document.activeElement === t.selectAnchor
                                },
                                getSelectAnchorAttr: function (e) {
                                    return t.selectAnchor.getAttribute(e)
                                },
                                setSelectAnchorAttr: function (e, i) {
                                    t.selectAnchor.setAttribute(e, i)
                                },
                                removeSelectAnchorAttr: function (e) {
                                    t.selectAnchor.removeAttribute(e)
                                },
                                addMenuClass: function (e) {
                                    t.menuElement.classList.add(e)
                                },
                                removeMenuClass: function (e) {
                                    t.menuElement.classList.remove(e)
                                },
                                openMenu: function () {
                                    t.menu.open = !0
                                },
                                closeMenu: function () {
                                    t.menu.open = !1
                                },
                                getAnchorElement: function () {
                                    return t.root.querySelector(p.P$.SELECT_ANCHOR_SELECTOR)
                                },
                                setMenuAnchorElement: function (e) {
                                    t.menu.setAnchorElement(e)
                                },
                                setMenuAnchorCorner: function (e) {
                                    t.menu.setAnchorCorner(e)
                                },
                                setMenuWrapFocus: function (e) {
                                    t.menu.wrapFocus = e
                                },
                                getSelectedIndex: function () {
                                    var e = t.menu.selectedIndex;
                                    return e instanceof Array ? e[0] : e
                                },
                                setSelectedIndex: function (e) {
                                    t.menu.selectedIndex = e
                                },
                                focusMenuItemAtIndex: function (e) {
                                    t.menu.items[e].focus()
                                },
                                getMenuItemCount: function () {
                                    return t.menu.items.length
                                },
                                getMenuItemValues: function () {
                                    return t.menuItemValues
                                },
                                getMenuItemTextAtIndex: function (e) {
                                    return t.menu.getPrimaryTextAtIndex(e)
                                },
                                isTypeaheadInProgress: function () {
                                    return t.menu.typeaheadInProgress
                                },
                                typeaheadMatchItem: function (e, i) {
                                    return t.menu.typeaheadMatchItem(e, i)
                                }
                            }
                        }, e.prototype.getCommonAdapterMethods = function () {
                            var t = this;
                            return {
                                addClass: function (e) {
                                    t.root.classList.add(e)
                                },
                                removeClass: function (e) {
                                    t.root.classList.remove(e)
                                },
                                hasClass: function (e) {
                                    return t.root.classList.contains(e)
                                },
                                setRippleCenter: function (e) {
                                    t.lineRipple && t.lineRipple.setRippleCenter(e)
                                },
                                activateBottomLine: function () {
                                    t.lineRipple && t.lineRipple.activate()
                                },
                                deactivateBottomLine: function () {
                                    t.lineRipple && t.lineRipple.deactivate()
                                },
                                notifyChange: function (e) {
                                    t.hiddenInput && (t.hiddenInput.value = e);
                                    var i = t.selectedIndex;
                                    t.emit(p.P$.CHANGE_EVENT, {
                                        value: e,
                                        index: i
                                    }, !0)
                                }
                            }
                        }, e.prototype.getOutlineAdapterMethods = function () {
                            var t = this;
                            return {
                                hasOutline: function () {
                                    return Boolean(t.outline)
                                },
                                notchOutline: function (e) {
                                    t.outline && t.outline.notch(e)
                                },
                                closeOutline: function () {
                                    t.outline && t.outline.closeNotch()
                                }
                            }
                        }, e.prototype.getLabelAdapterMethods = function () {
                            var t = this;
                            return {
                                hasLabel: function () {
                                    return !!t.label
                                },
                                floatLabel: function (e) {
                                    t.label && t.label.float(e)
                                },
                                getLabelWidth: function () {
                                    return t.label ? t.label.getWidth() : 0
                                },
                                setLabelRequired: function (e) {
                                    t.label && t.label.setRequired(e)
                                }
                            }
                        }, e.prototype.getNormalizedXCoordinate = function (t) {
                            var e = t.target.getBoundingClientRect();
                            return (this.isTouchEvent(t) ? t.touches[0].clientX : t.clientX) - e.left
                        }, e.prototype.isTouchEvent = function (t) {
                            return Boolean(t.touches)
                        }, e.prototype.getFoundationMap = function () {
                            return {
                                helperText: this.helperText ? this.helperText.foundationForSelect : void 0,
                                leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForSelect : void 0
                            }
                        }, e
                    }(s.O)
            },
            6834: (t, e, i) => {
                var n, s;
                i.d(e, {
                    $z: () => r,
                    P$: () => l,
                    PY: () => a,
                    Y7: () => o,
                    iP: () => u,
                    nL: () => d
                });
                var o = {
                        LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
                        LIST_ITEM_CLASS: "mdc-list-item",
                        LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
                        LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
                        LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
                        LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
                        ROOT: "mdc-list"
                    },
                    r = ((n = {})["" + o.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", n["" + o.LIST_ITEM_CLASS] = "mdc-list-item", n["" + o.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", n["" + o.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", n["" + o.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", n["" + o.ROOT] = "mdc-list", n),
                    a = ((s = {})["" + o.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", s["" + o.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", s["" + o.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", s["" + o.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", s["" + o.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", s["" + o.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", s["" + o.ROOT] = "mdc-deprecated-list", s),
                    l = {
                        ACTION_EVENT: "MDCList:action",
                        SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
                        ARIA_CHECKED: "aria-checked",
                        ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
                        ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
                        ARIA_CURRENT: "aria-current",
                        ARIA_DISABLED: "aria-disabled",
                        ARIA_ORIENTATION: "aria-orientation",
                        ARIA_ORIENTATION_HORIZONTAL: "horizontal",
                        ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
                        ARIA_SELECTED: "aria-selected",
                        ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
                        ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
                        CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
                        CHECKBOX_SELECTOR: 'input[type="checkbox"]',
                        CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + o.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + o.LIST_ITEM_CLASS + " a,\n    ." + a[o.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + a[o.LIST_ITEM_CLASS] + " a\n  ",
                        DEPRECATED_SELECTOR: ".mdc-deprecated-list",
                        FOCUSABLE_CHILD_ELEMENTS: "\n    ." + o.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + o.LIST_ITEM_CLASS + " a,\n    ." + o.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + o.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + a[o.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + a[o.LIST_ITEM_CLASS] + " a,\n    ." + a[o.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + a[o.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
                        RADIO_SELECTOR: 'input[type="radio"]',
                        SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
                    },
                    d = {
                        UNSET_INDEX: -1,
                        TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
                    },
                    u = "evolution"
            },
            6879: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmCarousel = e.GdmCarouselSelector = void 0;
                const n = i(7190),
                    s = i(3463),
                    o = i(2064),
                    r = i(4839),
                    a = i(6279),
                    l = i(3150),
                    d = i(4829),
                    u = i(4265);
                var c;
                ! function (t) {
                    t.ROOT = "gdm-carousel", t.DOT = ".glue-carousel__dot"
                }(c || (e.GdmCarouselSelector = c = {}));
                class h extends HTMLElement {
                    constructor() {
                        super(), this.isDragging = !1, this.focusableElements = new Set, this.currentSlide = 0, this.list = this.querySelector(`.${s.CssClasses.LIST}`), this.previousTransform, this.captions = new Map, this.videos = new Map, this.onClick = t => {
                            !this.isDragging && (0, r.isPointWithinElementFromEvent)(t) || t.preventDefault()
                        }, this.onCurrentSlideChange = () => {
                            if (!this.glueCarousel) return;
                            const t = this.currentSlide;
                            this.currentSlide = this.glueCarousel.observer.data.currentSlide;
                            const e = this.captions.get(t);
                            e && (e.isActive = !1);
                            const i = this.videos.get(t);
                            i && (i.isActive = !1, i.pause())
                        }, this.onTransformChange = () => {
                            const {
                                transition: t,
                                transform: e
                            } = this.list.style, i = this.previousTransform;
                            this.previousTransform = e;
                            const n = this.videos.get(this.currentSlide),
                                s = "initial" === t,
                                o = e !== i;
                            o && s && (this.isDragging = !0, n && (n.isActive = !1)), o || s || (this.isDragging = !1, n && (n.isActive = !0))
                        }, this.onTransitionEnd = t => {
                            if (t.target !== this.list) return;
                            this.isDragging = !1;
                            const e = this.captions.get(this.currentSlide);
                            e && (e.isActive = !0);
                            const i = this.videos.get(this.currentSlide);
                            i && (i.isActive = !0, i.play(), i.role === d.Role.BUTTON && (i.tabIndex = d.TabIndex.TABBABLE))
                        }, this.transformObserver = new MutationObserver(this.onTransformChange)
                    }
                    connectedCallback() {
                        window.requestAnimationFrame((() => {
                            this.glueCarousel = new n.Carousel(this, {
                                peekOut: !1
                            }), this.currentSlide = this.glueCarousel.observer.data.currentSlide, this.initChildGdmComponents(), this.preventPropagationOnFocusableElements(), this.list.addEventListener(u.EventType.TRANSITIONEND, this.onTransitionEnd), this.transformObserver.observe(this.list, {
                                attributes: !0,
                                attributeFilter: ["style"]
                            })
                        }))
                    }
                    disconnectedCallback() {
                        this.reset()
                    }
                    preventPropagationOnFocusableElements() {
                        const t = (0, o.getFocusableElements)(this);
                        for (const e of t) this.focusableElements.has(e) || (e.addEventListener(u.EventType.CLICK, this.onClick), this.focusableElements.add(e))
                    }
                    
                    initChildGdmComponents() {
                        if (!this.glueCarousel) return;
                        const t = this.querySelectorAll(`.${s.CssClasses.ITEM}`);
                        for (const [e, i] of t.entries()) {
                            const t = e + 1,
                                n = t === this.currentSlide,
                                s = i.querySelector(a.GdmCaptionSelector.ROOT);
                            s && (this.captions.set(t, s), s.isActive = n);
                            const o = i.querySelector(l.GdmVideoSelector.ALL);
                            o && (this.videos.set(t, o), o.isActive = n, o.isPlaying = o instanceof l.GdmVideoEmbed, o.role === d.Role.BUTTON && o.isActive && (o.tabIndex = d.TabIndex.TABBABLE))
                        }(this.captions.size || this.videos.size) && this.glueCarousel.observer.listen("currentSlide", this.onCurrentSlideChange)
                    }
                }
                e.GdmCarousel = h
            },
            6933: (t, e, i) => {
                i.d(e, {
                    P: () => n,
                    Y: () => s
                });
                var n = {
                        ICON_EVENT: "MDCTextField:icon",
                        ICON_ROLE: "button"
                    },
                    s = {
                        ROOT: "mdc-text-field__icon"
                    }
            },
            6974: (t, e, i) => {
                i.r(e), i.d(e, {
                    ExpansionPanels: () => u
                });
                var n = i(7341),
                    s = i(1887),
                    o = i(8640),
                    r = i(436),
                    a = i(7783),
                    l = i(1223),
                    d = i(298);
                class u extends n.u {
                    constructor(t, e) {
                        super(t), this.toggleAllComponents = [], this.panelContentComponents = [], this.panelToggleComponents = [], this.options = Object.assign({}, r.S.defaults, e), this.statusChangeHandler = () => {
                            this.updateStatus()
                        }, this.modelKey = this.root.dataset[s.uB.KEY] || s.DH.DEFAULT_INSTANCE_ID, this.model = a.M.get(this.modelKey, this.options), this.init()
                    }
                    init() {
                        this.model.panelsCount = this.root.getElementsByClassName(s.s7.PANEL).length, this.model.panelsCollapsed = this.model.panelsCount;
                        for (const t of this.root.querySelectorAll(`.${s.s7.TOGGLE_ALL}`)) this.toggleAllComponents.push(new d.O(t));
                        for (const t of this.root.querySelectorAll(`.${s.s7.CONTENT}`)) this.panelContentComponents.push(new o.U(t));
                        for (const t of this.root.querySelectorAll(`.${s.s7.BUTTON}`)) this.panelToggleComponents.push(new l.B(t));
                        this.model.listen(s.f7.PANELGROUP_STATUS_CHANGED, this.statusChangeHandler), this.model.updatePanelsStatus()
                    }
                    destroy() {
                        let t;
                        for (; this.toggleAllComponents.length > 0;) t = this.toggleAllComponents.pop(), t.destroy();
                        for (; this.panelContentComponents.length > 0;) t = this.panelContentComponents.pop(), t.destroy();
                        for (; this.panelToggleComponents.length > 0;) t = this.panelToggleComponents.pop(), t.destroy();
                        this.model.panelsCount = 0, this.model.updatePanelsStatus(), this.model.unlisten(s.f7.PANELGROUP_STATUS_CHANGED, this.statusChangeHandler), a.M.clearSingle(this.modelKey)
                    }
                    updateStatus() {
                        this.root.classList.remove(s.s7.IS_COLLAPSED, s.s7.IS_MIXED, s.s7.IS_EXPANDED), this.model.panelsStatus && this.root.classList.add(`glue-is-${this.model.panelsStatus}`)
                    }
                }
            },
            7142: (t, e, i) => {
                i.d(e, {
                    N0: () => l,
                    Ws: () => r,
                    _B: () => d,
                    iI: () => u,
                    mT: () => a,
                    y9: () => c
                });
                var n = i(8116),
                    s = i(6834),
                    o = i(9846);

                function r() {
                    return {
                        bufferClearTimeout: 0,
                        currentFirstChar: "",
                        sortedIndexCursor: 0,
                        typeaheadBuffer: ""
                    }
                }

                function a(t, e) {
                    for (var i = new Map, n = 0; n < t; n++) {
                        var s = e(n).trim();
                        if (s) {
                            var o = s[0].toLowerCase();
                            i.has(o) || i.set(o, []), i.get(o).push({
                                text: s.toLowerCase(),
                                index: n
                            })
                        }
                    }
                    return i.forEach((function (t) {
                        t.sort((function (t, e) {
                            return t.index - e.index
                        }))
                    })), i
                }

                function l(t, e) {
                    var i, n = t.nextChar,
                        o = t.focusItemAtIndex,
                        r = t.sortedIndexByFirstChar,
                        a = t.focusedItemIndex,
                        l = t.skipFocus,
                        d = t.isItemAtIndexDisabled;
                    return clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout((function () {
                        u(e)
                    }), s.nL.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n, i = 1 === e.typeaheadBuffer.length ? function (t, e, i, n) {
                        var s = n.typeaheadBuffer[0],
                            o = t.get(s);
                        if (!o) return -1;
                        if (s === n.currentFirstChar && o[n.sortedIndexCursor].index === e) {
                            n.sortedIndexCursor = (n.sortedIndexCursor + 1) % o.length;
                            var r = o[n.sortedIndexCursor].index;
                            if (!i(r)) return r
                        }
                        n.currentFirstChar = s;
                        var a, l = -1;
                        for (a = 0; a < o.length; a++)
                            if (!i(o[a].index)) {
                                l = a;
                                break
                            } for (; a < o.length; a++)
                            if (o[a].index > e && !i(o[a].index)) {
                                l = a;
                                break
                            } if (-1 !== l) return n.sortedIndexCursor = l, o[n.sortedIndexCursor].index;
                        return -1
                    }(r, a, d, e) : function (t, e, i) {
                        var n = i.typeaheadBuffer[0],
                            s = t.get(n);
                        if (!s) return -1;
                        var o = s[i.sortedIndexCursor];
                        if (0 === o.text.lastIndexOf(i.typeaheadBuffer, 0) && !e(o.index)) return o.index;
                        var r = (i.sortedIndexCursor + 1) % s.length,
                            a = -1;
                        for (; r !== i.sortedIndexCursor;) {
                            var l = s[r],
                                d = 0 === l.text.lastIndexOf(i.typeaheadBuffer, 0),
                                u = !e(l.index);
                            if (d && u) {
                                a = r;
                                break
                            }
                            r = (r + 1) % s.length
                        }
                        if (-1 !== a) return i.sortedIndexCursor = a, s[i.sortedIndexCursor].index;
                        return -1
                    }(r, d, e), -1 === i || l || o(i), i
                }

                function d(t) {
                    return t.typeaheadBuffer.length > 0
                }

                function u(t) {
                    t.typeaheadBuffer = ""
                }

                function c(t, e) {
                    var i = t.event,
                        s = t.isTargetListItem,
                        r = t.focusedItemIndex,
                        a = t.focusItemAtIndex,
                        u = t.sortedIndexByFirstChar,
                        c = t.isItemAtIndexDisabled,
                        h = "ArrowLeft" === (0, n.l5)(i),
                        p = "ArrowUp" === (0, n.l5)(i),
                        E = "ArrowRight" === (0, n.l5)(i),
                        f = "ArrowDown" === (0, n.l5)(i),
                        m = "Home" === (0, n.l5)(i),
                        T = "End" === (0, n.l5)(i),
                        g = "Enter" === (0, n.l5)(i),
                        I = "Spacebar" === (0, n.l5)(i);
                    return i.altKey || i.ctrlKey || i.metaKey || h || p || E || f || m || T || g ? -1 : I || 1 !== i.key.length ? I ? (s && (0, o.C)(i), s && d(e) ? l({
                        focusItemAtIndex: a,
                        focusedItemIndex: r,
                        nextChar: " ",
                        sortedIndexByFirstChar: u,
                        skipFocus: !1,
                        isItemAtIndexDisabled: c
                    }, e) : -1) : -1 : ((0, o.C)(i), l({
                        focusItemAtIndex: a,
                        focusedItemIndex: r,
                        nextChar: i.key.toLowerCase(),
                        sortedIndexByFirstChar: u,
                        skipFocus: !1,
                        isItemAtIndexDisabled: c
                    }, e))
                }
            },
            7190: (t, e, i) => {
                i.r(e), i.d(e, {
                    Carousel: () => u
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(4265),
                    r = i(1234),
                    a = i(2064),
                    l = i(2950),
                    d = i(3463);
                class u extends n.u {
                    constructor(t, e) {
                        super(t), this.dots = [], this.totalPages = 1, this.slidesPerPage = 1, this.animateOnInitialLoad = !1, this.containerWidth = 0, this.slideWidth = 0, this.isRtl = document.documentElement.dir === d.Strings.RTL, this.isTabModel = !0, this.isShowingNavigation = !0, this.pagesX = [], this.initialTouchPos = null, this.isDragging = !1, this.lastTouchPos = null, this.rafPending = !1, this.currentXPosition = 0, this.enableDragging = null, this.handleCurrentSlideChange = () => {
                            this.emit(d.Strings.SLIDE_CHANGE, this.getCurrentSlide()), this.render()
                        }, this.handleResize = () => {
                            this.animateOnInitialLoad = !1, this.calculate(), this.render(), this.updateTouchEvents()
                        }, this.handleClick = t => {
                            const e = t.target;
                            if (e instanceof HTMLElement || e instanceof window.SVGElement)
                                if (e.closest(`.${d.CssClasses.BUTTON_NEXT}`) === this.nextBtn) this.next();
                                else if (e.closest(`.${d.CssClasses.BUTTON_PREV}`) === this.prevBtn) this.previous();
                            else if (e instanceof HTMLButtonElement && this.dots.includes(e)) {
                                const t = Number(e.dataset[d.Strings.DATA_DOT]);
                                this.setCurrentPage(t)
                            } else this.isCards && this.isDragging && t.preventDefault()
                        }, this.handleKeydown = t => {
                            const e = t.code === r.U.LEFT,
                                i = t.code === r.U.RIGHT;
                            if (e || i) {
                                const n = this.isRtl ? e : i;
                                if (t.target instanceof HTMLButtonElement && this.dots.includes(t.target)) n ? this.next() : this.previous();
                                else if (t.target instanceof HTMLElement && this.slides.includes(t.target)) {
                                    const t = n ? 1 : -1;
                                    this.setCurrentSlide(this.getCurrentSlide() + t)
                                }
                            }
                        }, this.handleTransitionEnd = t => {
                            if (t.target === this.slidesContainer && this.options.cyclical) {
                                const t = this.getCurrentSlide();
                                t > this.totalPages ? (this.animateOnInitialLoad = !1, this.setCurrentSlide(1)) : t < 1 && (this.animateOnInitialLoad = !1, this.setCurrentSlide(this.totalPages))
                            }
                        }, this.handleGestureStart = t => {
                            t.preventDefault(), this.isTouchEvent(t) && t.touches.length > 1 || t instanceof PointerEvent && 0 !== t.button || (window.PointerEvent && t instanceof PointerEvent && t.target instanceof Element ? t.target.setPointerCapture(t.pointerId) : (document.addEventListener(o.EventType.MOUSEMOVE, this.handleGestureMove, !0), document.addEventListener(o.EventType.MOUSEUP, this.handleGestureEnd, !0)), this.initialTouchPos = this.getGesturePointFromEvent(t), this.slidesContainer.style.transition = "initial")
                        }, this.handleGestureMove = t => {
                            if (t.preventDefault(), !this.initialTouchPos) return;
                            const e = this.getGesturePointFromEvent(t);
                            if (!this.isDragging) {
                                if (Math.abs(this.getXDistance(this.initialTouchPos, e)) < d.Numbers.DRAGSTART_THRESHOLD_PX) return
                            }
                            this.isDragging = !0, this.lastTouchPos = e, this.rafPending || (this.rafPending = !0, window.requestAnimationFrame((() => {
                                this.onAnimFrame()
                            })))
                        }, this.handleGestureEnd = t => {
                            var e;
                            t.preventDefault(), this.isTouchEvent(t) && (null === (e = t.touches) || void 0 === e ? void 0 : e.length) > 0 || (this.rafPending = !1, window.PointerEvent && t instanceof PointerEvent && t.target instanceof Element ? t.target.releasePointerCapture(t.pointerId) : (document.removeEventListener(o.EventType.MOUSEMOVE, this.handleGestureMove, !0), document.removeEventListener(o.EventType.MOUSEUP, this.handleGestureEnd, !0)), this.updateSwipeRestPosition(), this.initialTouchPos = null, this.lastTouchPos = null, setTimeout((() => {
                                this.isDragging = !1
                            }), 0))
                        }, this.isCards = this.root.classList.contains(d.CssClasses.CARDS), this.viewport = this.root.querySelector(`.${d.CssClasses.VIEWPORT}`), this.slidesContainer = this.root.querySelector(`.${d.CssClasses.LIST}`), this.slides = Array.from(this.slidesContainer.querySelectorAll(`.${d.CssClasses.ITEM}`)), this.slidesRef = Array.from(this.slides), this.navigation = this.root.querySelector(`.${d.CssClasses.NAVIGATION}`), this.prevBtn = this.root.querySelector(`.${d.CssClasses.BUTTON_PREV}`), this.nextBtn = this.root.querySelector(`.${d.CssClasses.BUTTON_NEXT}`), this.options = Object.assign(Object.assign(Object.assign({}, u.defaults), e), this.getDataAttrs()), this.observer = new l.n({
                            currentSlide: this.options.currentSlide
                        }), this.setup(), this.registerEvents()
                    }
                    static get defaults() {
                        return {
                            currentSlide: 1,
                            peekOut: !0,
                            navigation: !0,
                            animation: !0,
                            cyclical: !1,
                            cardsPerPage: 3,
                            dragging: !0
                        }
                    }
                    setup() {
                        this.options.peekOut && this.root.classList.add(d.CssClasses.PEEK_OUT), this.options.cyclical && this.copyDummySlides(), this.slidesContainer.setAttribute(s.Attribute.ARIA_LIVE, "polite"), this.nextBtn.setAttribute(s.Attribute.ARIA_CONTROLS, this.root.id), this.prevBtn.setAttribute(s.Attribute.ARIA_CONTROLS, this.root.id), this.calculate(), this.currentXPosition = -1 * this.pagesX[this.getCurrentPage()], this.render()
                    }
                    registerEvents() {
                        this.root.addEventListener(o.EventType.CLICK, this.handleClick), this.root.addEventListener(o.EventType.KEYDOWN, this.handleKeydown), this.slidesContainer.addEventListener(o.EventType.TRANSITIONEND, this.handleTransitionEnd), window.addEventListener(o.EventType.RESIZE, this.handleResize), this.updateTouchEvents(), this.observer.listen("currentSlide", this.handleCurrentSlideChange)
                    }
                    destroy() {
                        for (const t of this.slides) t.removeAttribute(s.Attribute.TAB_INDEX), t.removeAttribute(s.Attribute.ROLE), t.removeAttribute(s.Attribute.ARIA_HIDDEN);
                        this.slidesContainer.style.removeProperty("transform"), this.root.removeEventListener(o.EventType.CLICK, this.handleClick), this.root.removeEventListener(o.EventType.KEYDOWN, this.handleKeydown), this.slidesContainer.removeEventListener(o.EventType.TRANSITIONEND, this.handleTransitionEnd), this.destroyNavigation(), window.removeEventListener(o.EventType.RESIZE, this.handleResize), this.enableDragging && this.deregisterTouchEvents(), this.observer.unlisten("currentSlide", this.handleCurrentSlideChange)
                    }
                    reset() {
                        this.setCurrentSlide(this.options.currentSlide)
                    }
                    calculate() {
                        this.isCards ? this.calculateCardsProperties() : this.calculateProperties(), this.calcScrollValue()
                    }
                    calculateProperties() {
                        this.containerWidth = c(getComputedStyle(this.slidesContainer).width), this.slideWidth = c(getComputedStyle(this.slides[0]).width);
                        const t = this.containerWidth / this.slideWidth;
                        this.slidesPerPage = 1 - t % 1 < d.Numbers.ROUNDING_THRESHOLD ? Math.ceil(t) : Math.floor(t), this.totalPages = Math.ceil(this.slidesRef.length / this.slidesPerPage), this.isShowingNavigation = this.options.navigation, this.isTabModel = this.isShowingNavigation && 1 === this.slidesPerPage
                    }
                    calculateCardsProperties() {
                        const t = this.getCurrentBreakpoint();
                        let e;
                        switch (t) {
                            case "sm":
                                e = 1;
                                break;
                            case "md":
                                e = Math.max(1, this.options.cardsPerPage - 1);
                                break;
                            default:
                                e = this.options.cardsPerPage
                        }
                        const i = getComputedStyle(this.viewport);
                        let n = c(i.width) - c(i.paddingLeft) - c(i.paddingRight);
                        this.options.peekOut && "sm" === t && (n -= d.Numbers.PEEK_DISTANCE);
                        const s = c(getComputedStyle(this.slidesContainer).columnGap),
                            o = this.slides.length / e,
                            r = Math.floor(n * o + (o - 1) * s);
                        this.slidesContainer.style.width = `${r}px`, this.slidesContainer.style.gridTemplateColumns = `repeat(${this.slides.length}, 1fr)`, this.containerWidth = n + s, this.slidesPerPage = e, this.slideWidth = this.containerWidth / e, this.totalPages = Math.ceil(o), this.isShowingNavigation = this.options.navigation && "sm" !== t, this.isTabModel = !1
                    }
                    render() {
                        this.renderSlides(), this.renderButtons(), this.renderNavigation()
                    }
                    getCurrentSlide() {
                        return this.observer.data.currentSlide
                    }
                    getCurrentPage() {
                        return Math.ceil(this.getCurrentSlide() / this.slidesPerPage)
                    }
                    setCurrentSlide(t) {
                        const e = this.options.cyclical && this.options.animation ? 1 : 0,
                            i = 1 - e,
                            n = this.slidesRef.length + e;
                        this.observer.data.currentSlide = this.options.cyclical ? h(t, i, n) : function (t, e, i) {
                            return Math.max(e, Math.min(i, t))
                        }(t, i, n)
                    }
                    setCurrentPage(t) {
                        const e = (t - 1) * this.slidesPerPage + 1;
                        this.setCurrentSlide(e)
                    }
                    previous() {
                        const t = this.getCurrentPage() - 1;
                        this.setCurrentPage(t)
                    }
                    next() {
                        const t = this.getCurrentPage() + 1;
                        this.setCurrentPage(t)
                    }
                    renderSlides() {
                        this.transit();
                        const t = h(this.getCurrentSlide(), 1, this.slidesRef.length) - 1,
                            e = this.getCurrentPage(),
                            i = e - 1,
                            n = document.activeElement instanceof HTMLElement && this.slides.includes(document.activeElement);
                        for (const [o, r] of this.slidesRef.entries()) {
                            const a = o === t;
                            a || Math.floor(o / this.slidesPerPage) === i || e === this.totalPages && o >= this.slidesRef.length - this.slidesPerPage || this.isCards && document.documentElement.clientWidth < 600 ? r.removeAttribute(s.Attribute.ARIA_HIDDEN) : r.setAttribute(s.Attribute.ARIA_HIDDEN, "true"), this.isTabModel ? r.setAttribute(s.Attribute.ROLE, s.Role.TABPANEL) : r.removeAttribute(s.Attribute.ROLE), this.isCards && (r.tabIndex = a ? s.TabIndex.TABBABLE : s.TabIndex.NOT_TABBABLE), a && n && (r.focus({
                                preventScroll: !0
                            }), setTimeout((() => {
                                this.viewport.scrollLeft = 0
                            }), 0))
                        }
                        this.removeFocusOnHiddenElements()
                    }
                    removeFocusOnHiddenElements() {
                        const t = h(this.getCurrentSlide(), 1, this.slidesRef.length) - 1,
                            e = this.options.cyclical ? t + 1 : t;
                        for (const [t, i] of this.slides.entries()) {
                            const n = a.getFocusableElements(i);
                            for (const i of n) t === e ? i.removeAttribute(s.Attribute.TAB_INDEX) : i.tabIndex = s.TabIndex.NOT_TABBABLE
                        }
                    }
                    updateTouchEvents() {
                        const t = this.getCurrentBreakpoint();
                        this.options.dragging || "sm" === t ? (this.enableDragging || this.registerTouchEvents(), this.slidesContainer.classList.remove(d.CssClasses.DISABLE_GRAB), this.enableDragging = !0) : (this.enableDragging && this.deregisterTouchEvents(), this.slidesContainer.classList.add(d.CssClasses.DISABLE_GRAB), this.enableDragging = !1)
                    }
                    transit() {
                        this.animateOnInitialLoad && this.options.animation || (this.slidesContainer.style.transition = "initial");
                        const t = this.pagesX[this.getCurrentPage()];
                        this.slidesContainer.style.transform = `translate3d(${t}px, 0, 0)`, this.currentXPosition = t, this.options.animation && !this.animateOnInitialLoad && this.turnOnAnimation()
                    }
                    turnOnAnimation() {
                        this.animateOnInitialLoad = !0, setTimeout((() => {
                            this.slidesContainer.style.transition = ""
                        }), 10)
                    }
                    renderNavigation() {
                        if (!this.isShowingNavigation) return void this.root.classList.remove(d.CssClasses.HAS_NAVIGATION);
                        this.root.classList.add(d.CssClasses.HAS_NAVIGATION), this.isTabModel ? this.navigation.setAttribute(s.Attribute.ROLE, s.Role.TABLIST) : this.navigation.removeAttribute(s.Attribute.ROLE), this.dots.length !== this.totalPages && this.buildNavigation();
                        const t = h(this.getCurrentPage(), 1, this.totalPages) - 1,
                            e = document.activeElement instanceof HTMLButtonElement && this.dots.includes(document.activeElement);
                        for (const [i, n] of this.dots.entries()) {
                            const o = i === t;
                            n.classList.toggle(d.CssClasses.ACTIVE, o), n.tabIndex = o ? s.TabIndex.TABBABLE : s.TabIndex.NOT_TABBABLE, this.isTabModel ? n.setAttribute(s.Attribute.ARIA_SELECTED, `${o}`) : n.setAttribute(s.Attribute.ARIA_CURRENT, `${o}`), o && e && n.focus()
                        }
                    }
                    renderButtons() {
                        if (this.options.cyclical) return;
                        const t = document.activeElement,
                            e = this.getCurrentPage(),
                            i = 1 === e,
                            n = e === this.totalPages;
                        this.prevBtn.classList.toggle(d.CssClasses.INACTIVE, i), this.nextBtn.classList.toggle(d.CssClasses.INACTIVE, n), n && t === this.nextBtn ? this.prevBtn.focus() : i && t === this.prevBtn && this.nextBtn.focus()
                    }
                    buildNavigation() {
                        var t;
                        this.destroyNavigation();
                        for (let e = 0; e < this.totalPages; e++) {
                            const i = document.createElement("button");
                            if (i.classList.add(d.CssClasses.NAVIGATION_DOT), i.dataset[d.Strings.DATA_DOT] = `${e+1}`, this.isTabModel) {
                                const n = null === (t = this.slidesRef[e * this.slidesPerPage]) || void 0 === t ? void 0 : t.id;
                                i.setAttribute(s.Attribute.ARIA_CONTROLS, n), i.setAttribute(s.Attribute.ARIA_LABELLEDBY, n), i.setAttribute(s.Attribute.ROLE, s.Role.TAB)
                            } else {
                                const t = (this.navigation.dataset[d.Strings.DATA_NAVIGATION_LABEL] || d.Strings.NAVIGATION_LABEL_DEFAULT).replace(d.Strings.NAVIGATION_LABEL_NUMBER_VAR_NAME, `${e+1}`).replace(d.Strings.NAVIGATION_LABEL_TOTAL_VAR_NAME, `${this.totalPages}`);
                                i.setAttribute(s.Attribute.ARIA_CONTROLS, this.root.id), i.setAttribute(s.Attribute.ARIA_LABEL, t)
                            }
                            this.navigation.appendChild(i), this.dots.push(i)
                        }
                    }
                    destroyNavigation() {
                        for (var t; this.dots.length;) null === (t = this.dots.pop()) || void 0 === t || t.remove()
                    }
                    copyDummySlides() {
                        const t = this.cloneSlide(this.slides[0]),
                            e = this.cloneSlide(this.slides[this.slides.length - 1]);
                        this.slidesContainer.append(t), this.slidesContainer.prepend(e), this.slides = [e, ...this.slides, t]
                    }
                    cloneSlide(t) {
                        const e = t.cloneNode(!0);
                        return e.id = `${t.id}-copy`, e.setAttribute(s.Attribute.ARIA_HIDDEN, "true"), e.tabIndex = s.TabIndex.NOT_TABBABLE, e
                    }
                    calcScrollValue() {
                        const t = this.options.cyclical ? 1 : 0,
                            e = 1 - t,
                            i = this.totalPages + t,
                            n = this.isRtl ? 1 : -1;
                        this.pagesX = [];
                        for (let s = e; s <= i; s++) {
                            const e = s < i ? (s - 1 + t) * this.slidesPerPage * this.slideWidth : this.slides.length * this.slideWidth - this.containerWidth;
                            this.pagesX[s] = e * n
                        }
                    }
                    registerTouchEvents() {
                        window.PointerEvent ? (this.viewport.addEventListener(o.EventType.POINTERDOWN, this.handleGestureStart, !0), this.viewport.addEventListener(o.EventType.POINTERMOVE, this.handleGestureMove, !0), this.viewport.addEventListener(o.EventType.POINTERUP, this.handleGestureEnd, !0), this.viewport.addEventListener(o.EventType.POINTERCANCEL, this.handleGestureEnd, !0)) : (this.viewport.addEventListener(o.EventType.TOUCHSTART, this.handleGestureStart, !0), this.viewport.addEventListener(o.EventType.TOUCHMOVE, this.handleGestureMove, !0), this.viewport.addEventListener(o.EventType.TOUCHEND, this.handleGestureEnd, !0), this.viewport.addEventListener(o.EventType.TOUCHCANCEL, this.handleGestureEnd, !0), this.viewport.addEventListener(o.EventType.MOUSEDOWN, this.handleGestureStart, !0))
                    }
                    deregisterTouchEvents() {
                        window.PointerEvent ? (this.viewport.removeEventListener(o.EventType.POINTERDOWN, this.handleGestureStart, !0), this.viewport.removeEventListener(o.EventType.POINTERMOVE, this.handleGestureMove, !0), this.viewport.removeEventListener(o.EventType.POINTERUP, this.handleGestureEnd, !0), this.viewport.removeEventListener(o.EventType.POINTERCANCEL, this.handleGestureEnd, !0)) : (this.viewport.removeEventListener(o.EventType.TOUCHSTART, this.handleGestureStart, !0), this.viewport.removeEventListener(o.EventType.TOUCHMOVE, this.handleGestureMove, !0), this.viewport.removeEventListener(o.EventType.TOUCHEND, this.handleGestureEnd, !0), this.viewport.removeEventListener(o.EventType.TOUCHCANCEL, this.handleGestureEnd, !0), this.viewport.removeEventListener(o.EventType.MOUSEDOWN, this.handleGestureStart, !0))
                    }
                    updateSwipeRestPosition() {
                        const t = this.getXDistance(this.initialTouchPos, this.lastTouchPos);
                        this.slidesContainer.style.transition = "";
                        Math.abs(t) >= this.containerWidth * d.Numbers.DRAG_THRESHOLD && ((t > 0 && !this.isRtl || t < 0 && this.isRtl) && this.next(), (t < 0 && !this.isRtl || t > 0 && this.isRtl) && this.previous()), this.transit()
                    }
                    getXDistance(t, e) {
                        return t && e ? t.x - e.x : 0
                    }
                    getGesturePointFromEvent(t) {
                        const e = {
                            x: 0,
                            y: 0
                        };
                        return this.isTouchEvent(t) ? t.targetTouches && (e.x = t.targetTouches[0].clientX, e.y = t.targetTouches[0].clientY) : (e.x = t.clientX, e.y = t.clientY), e
                    }
                    onAnimFrame() {
                        if (!this.rafPending) return;
                        const t = this.getXDistance(this.initialTouchPos, this.lastTouchPos),
                            e = `translate3d(${this.currentXPosition-t}px, 0, 0)`;
                        this.slidesContainer.style.transform = e, this.rafPending = !1
                    }
                    isTouchEvent(t) {
                        return window.TouchEvent && t instanceof TouchEvent
                    }
                    getDataAttrs() {
                        const t = {};
                        for (const e of Object.keys(u.defaults)) {
                            const i = `glueCarousel${e.toUpperCase().slice(0,1)}${e.slice(1)}`;
                            if (this.root.dataset[i])
                                if ("currentSlide" === e || "cardsPerPage" === e) {
                                    const n = Number(this.root.dataset[i]);
                                    isNaN(n) || (t[e] = n)
                                } else t[e] = "true" === this.root.dataset[i]
                        }
                        return t
                    }
                    getCurrentBreakpoint() {
                        return window.getComputedStyle(document.body, ":after").getPropertyValue("content").replace(/["']/g, "")
                    }
                }

                function c(t) {
                    return Number(t.replace("px", ""))
                }

                function h(t, e, i) {
                    const n = i + 1 - e,
                        s = e + (t - e) % n;
                    return s < e ? s + n : s
                }
            },
            7341: (t, e, i) => {
                i.d(e, {
                    u: () => n
                });
                class n {
                    constructor(t) {
                        this.root = t
                    }
                    destroy() {}
                    emit(t, e, i = !1) {
                        const n = new CustomEvent(t, {
                            detail: e,
                            bubbles: i
                        });
                        this.root.dispatchEvent(n)
                    }
                }
            },
            7475: (t, e, i) => {
                i.d(e, {
                    Q3: () => s.Q,
                    g9: () => o.P,
                    js: () => o.Y,
                    nh: () => n.n
                });
                var n = i(4108),
                    s = i(826),
                    o = i(950)
            },
            7538: (t, e, i) => {
                var n;
                i.d(e, {
                        s: () => n
                    }),
                    function (t) {
                        t.SOCIAL_ROOT = "glue-social", t.PERSISTENT_VARIANT = "glue-social--persistent", t.COLOR_VARIANT = "glue-social--color", t.MONOCHROME_VARIANT = "glue-social--monochrome", t.PARTIAL_MONOCHROME_VARIANT = "glue-social--partialmonochrome", t.PANELS_VARIANT = "glue-social--zippy", t.PANELS_OPPOSITE_VARIANT = "glue-social--zippy-opposite", t.SOCIAL_GROUP = "glue-social__group", t.SOCIAL_LIST = "glue-social__list", t.SOCIAL_TITLE = "glue-social__title", t.SOCIAL_TITLE_INLINE = "glue-social__title--inline", t.SOCIAL_TITLE_ZIPPY = "glue-social__title--zippy", t.SOCIAL_ITEM = "glue-social__item", t.COPY_ROOT = "glue-social__copy", t.COPY_BUTTON = "glue-social__copy-btn", t.COPY_INPUT = "glue-social__copy-input", t.PANELS_SHARE_ICON = "glue-social__share-icon", t.LINK_ROOT = "glue-social__link", t.ICON_CLASSES = "glue-icon glue-icon--social glue-icon--24px", t.POPOVER_ROOT = "glue-social__popover", t.POPOVER_CLOSE = "glue-social__close-btn", t.POPOVER_DIALOG = "glue-social__dialog", t.POPOVER_TRIGGER = "glue-social__icon-trigger", t.TOOLTIP_ROOT = "glue-social__tooltip", t.TOOLTIP_TRIGGER = "glue-social__tooltip-trigger", t.TOOLTIP_CONTENT = "glue-social__tooltip-content", t.VISUALLY_HIDDEN = "glue-visually-hidden"
                    }(n || (n = {}))
            },
            7560: (t, e, i) => {
                i.r(e), i.d(e, {
                    ALWAYS_FLOAT_TYPES: () => s.NZ,
                    MDCTextField: () => n.g,
                    MDCTextFieldCharacterCounter: () => r.NF,
                    MDCTextFieldCharacterCounterFoundation: () => r.yh,
                    MDCTextFieldFoundation: () => o.r,
                    MDCTextFieldHelperText: () => a.nh,
                    MDCTextFieldHelperTextFoundation: () => a.Q3,
                    MDCTextFieldIcon: () => l.jQ,
                    MDCTextFieldIconFoundation: () => l.C$,
                    VALIDATION_ATTR_WHITELIST: () => s.YU,
                    characterCountCssClasses: () => r.g,
                    characterCountStrings: () => r.DE,
                    cssClasses: () => s.Y7,
                    helperTextCssClasses: () => a.js,
                    helperTextStrings: () => a.g9,
                    iconCssClasses: () => l.p4,
                    iconStrings: () => l._X,
                    numbers: () => s.nL,
                    strings: () => s.P$
                });
                var n = i(8567),
                    s = i(605),
                    o = i(5651),
                    r = i(6785),
                    a = i(7475),
                    l = i(2864)
            },
            7607: (t, e, i) => {
                i.d(e, {
                    Y: () => n
                });
                var n = {
                    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
                    LABEL_REQUIRED: "mdc-floating-label--required",
                    LABEL_SHAKE: "mdc-floating-label--shake",
                    ROOT: "mdc-floating-label"
                }
            },
            7617: (t, e, i) => {
                i.r(e), i.d(e, {
                    default: () => c,
                    mdcAutoInit: () => u
                });
                var n = i(1635),
                    s = i(1288),
                    o = s.P.AUTO_INIT_ATTR,
                    r = s.P.AUTO_INIT_STATE_ATTR,
                    a = s.P.INITIALIZED_STATE,
                    l = {},
                    d = console.warn.bind(console);

                function u(t) {
                    var e, i;
                    void 0 === t && (t = document);
                    var s, d, u, c, h = [],
                        p = [].slice.call(t.querySelectorAll("[" + o + "]"));
                    p = p.filter((function (t) {
                        return t.getAttribute(r) !== a
                    }));
                    try {
                        for (var E = (0, n.Ju)(p), f = E.next(); !f.done; f = E.next()) {
                            var m = f.value,
                                T = m.getAttribute(o);
                            if (!T) throw new Error("(mdc-auto-init) Constructor name must be given.");
                            var g = l[T];
                            if ("function" != typeof g) throw new Error("(mdc-auto-init) Could not find constructor in registry for " + T);
                            var I = g.attachTo(m);
                            Object.defineProperty(m, T, {
                                configurable: !0,
                                enumerable: !1,
                                value: I,
                                writable: !1
                            }), h.push(I), m.setAttribute(r, a)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            f && !f.done && (i = E.return) && i.call(E)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return s = "MDCAutoInit:End", d = {}, void 0 === u && (u = !1), "function" == typeof CustomEvent ? c = new CustomEvent(s, {
                        bubbles: u,
                        detail: d
                    }) : (c = document.createEvent("CustomEvent")).initCustomEvent(s, u, !1, d), document.dispatchEvent(c), h
                }
                u.register = function (t, e, i) {
                    if (void 0 === i && (i = d), "function" != typeof e) throw new Error("(mdc-auto-init) Invalid Constructor value: " + e + ". Expected function.");
                    var n = l[t];
                    n && i("(mdc-auto-init) Overriding registration for " + t + " with " + e + ". Was: " + n), l[t] = e
                }, u.deregister = function (t) {
                    delete l[t]
                }, u.deregisterAll = function () {
                    var t, e;
                    try {
                        for (var i = (0, n.Ju)(Object.keys(l)), s = i.next(); !s.done; s = i.next()) {
                            var o = s.value;
                            u.deregister(o)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (e = i.return) && e.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                };
                const c = u
            },
            7719: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmJumplinks = e.GdmJumplinksClassName = e.GdmJumplinksSelector = void 0;
                const n = i(4829),
                    s = i(4265),
                    o = i(2064),
                    r = i(2613),
                    a = i(9252);
                var l, d;
                ! function (t) {
                    t.HEADER = ".glue-header", t.ROOT = "gdm-jumplinks", t.LINK = ".glue-jumplinks__link"
                }(l || (e.GdmJumplinksSelector = l = {})),
                function (t) {
                    t.STATIC = "jumplinks--static"
                }(d || (e.GdmJumplinksClassName = d = {}));
                class u extends HTMLElement {
                    constructor() {
                        super(...arguments), this.header = document.querySelector(l.HEADER), this.links = new Set, this.onResize = () => {
                            window.innerHeight >= 500 ? this.initGlueJumplinks() : this.destroyGlueJumplinks()
                        }, this.onClick = t => {
                            if (!(t.target instanceof HTMLAnchorElement)) return;
                            const e = t.target.hash.substring(1);
                            if (!e) return;
                            const i = document.querySelector(`#${e}`);
                            if (!i) return;
                            t.stopPropagation();
                            (0, o.isElementFocusable)(i) || (i.tabIndex = n.TabIndex.NOT_TABBABLE), i.focus()
                        }
                    }
                    connectedCallback() {
                        window.addEventListener(s.EventType.RESIZE, this.onResize), this.onResize()
                    }
                    disconnectedCallback() {
                        window.removeEventListener(s.EventType.RESIZE, this.onResize), this.destroyGlueJumplinks()
                    }
                    initGlueJumplinks() {
                        if (this.glueJumplinks) return;
                        let t = !1,
                            e = 0;
                        if ((0, a.getParentModal)(this)) {
                            const t = this.querySelectorAll(l.LINK);
                            for (const e of t) e.addEventListener(s.EventType.CLICK, this.onClick), this.links.add(e)
                        } else {
                            e = (this.header ? this.header.clientHeight : 0) + 16, t = !!this.header
                        }
                        this.classList.remove(d.STATIC), this.glueJumplinks = new r.Jumplinks(this, {
                            belowHeader: t,
                            offset: e
                        })
                    }
                    destroyGlueJumplinks() {
                        if (this.glueJumplinks) {
                            for (const t of this.links) t.removeEventListener(s.EventType.CLICK, this.onClick);
                            this.links.clear(), this.classList.add(d.STATIC), this.glueJumplinks.destroy(), this.glueJumplinks = void 0
                        }
                    }
                }
                e.GdmJumplinks = u
            },
            7783: (t, e, i) => {
                i.d(e, {
                    M: () => o
                });
                var n = i(1887),
                    s = i(436);
                class o {
                    static get(t = n.DH.DEFAULT_INSTANCE_ID, e = s.S.defaults) {
                        let i = o.instances[t];
                        return i || (i = new s.S(e), o.instances[t] = i), i
                    }
                    static clearSingle(t) {
                        delete o.instances[t]
                    }
                    static clearAll() {
                        o.instances = {}
                    }
                }
                o.instances = {}
            },
            7823: (t, e, i) => {
                i.d(e, {
                    d: () => o
                });
                var n = {
                    animation: {
                        prefixed: "-webkit-animation",
                        standard: "animation"
                    },
                    transform: {
                        prefixed: "-webkit-transform",
                        standard: "transform"
                    },
                    transition: {
                        prefixed: "-webkit-transition",
                        standard: "transition"
                    }
                };

                function s(t) {
                    return Boolean(t.document) && "function" == typeof t.document.createElement
                }

                function o(t, e) {
                    if (s(t) && e in n) {
                        var i = t.document.createElement("div"),
                            o = n[e],
                            r = o.standard,
                            a = o.prefixed;
                        return r in i.style ? r : a
                    }
                    return e
                }
            },
            7854: (t, e, i) => {
                i.r(e), i.d(e, {
                    ScrollEventType: () => n,
                    Strings: () => s,
                    defaultOptions: () => r
                });
                var n, s, o = i(2181);
                ! function (t) {
                    t.STARTSCROLL = "glue.smoothScroll.start", t.ENDSCROLL = "glue.smoothScroll.end"
                }(n || (n = {})),
                function (t) {
                    t.MISSING_PAGE_ELEMENT = "Smooth Scrolling requires a valid page element.", t.DIRECTION_MALFORMED = 'Scroll direction value only accepts "x", "y" or "both"'
                }(s || (s = {}));
                const r = {
                    duration: 600,
                    offset: {
                        x: 0,
                        y: 0
                    },
                    easing: o.hn,
                    hash: !0,
                    direction: "both"
                }
            },
            7876: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmScroll = void 0;
                const n = i(4829),
                    s = i(2064),
                    o = i(2108),
                    r = i(8811),
                    a = i(7854);
                var l;
                ! function (t) {
                    t.SCROLLING = "glue-is-scrolling"
                }(l || (l = {}));
                const d = new r.SmoothScroll;
                e.GdmScroll = class {
                    constructor(t) {
                        this.links = t, this.onClick = t => {
                            if (t.metaKey) return;
                            const e = t.target.hash.substring(1),
                                i = document.getElementById(e);
                            if (!i) return;
                            t.preventDefault();
                            const r = o.Numbers.DEFAULT_OFFSET + o.Numbers.JUMPLINKS_HEIGHT + o.Numbers.JUMPLINKS_MARGIN,
                                a = Math.floor(window.innerHeight / 2),
                                l = r > a ? a : r;
                            d.scrollToId(e, {
                                duration: 600,
                                easing: "easeInOutQuart",
                                direction: "both",
                                hash: !0,
                                offset: {
                                    x: 0,
                                    y: l
                                }
                            });
                            (0, s.isElementFocusable)(i) || (i.tabIndex = n.TabIndex.NOT_TABBABLE), i.focus()
                        }, this.onStartScroll = () => {
                            document.documentElement.classList.add(l.SCROLLING)
                        }, this.onEndScroll = () => {
                            document.documentElement.classList.remove(l.SCROLLING)
                        }, document.addEventListener(a.ScrollEventType.STARTSCROLL, this.onStartScroll), document.addEventListener(a.ScrollEventType.ENDSCROLL, this.onEndScroll);
                        for (const e of t) e.pathname === window.location.pathname && e.hash && e.addEventListener("click", this.onClick)
                    }
                }
            },
            8116: (t, e, i) => {
                i.d(e, {
                    _: () => n,
                    l5: () => A
                });
                var n = {
                        UNKNOWN: "Unknown",
                        BACKSPACE: "Backspace",
                        ENTER: "Enter",
                        SPACEBAR: "Spacebar",
                        PAGE_UP: "PageUp",
                        PAGE_DOWN: "PageDown",
                        END: "End",
                        HOME: "Home",
                        ARROW_LEFT: "ArrowLeft",
                        ARROW_UP: "ArrowUp",
                        ARROW_RIGHT: "ArrowRight",
                        ARROW_DOWN: "ArrowDown",
                        DELETE: "Delete",
                        ESCAPE: "Escape",
                        TAB: "Tab"
                    },
                    s = new Set;
                s.add(n.BACKSPACE), s.add(n.ENTER), s.add(n.SPACEBAR), s.add(n.PAGE_UP), s.add(n.PAGE_DOWN), s.add(n.END), s.add(n.HOME), s.add(n.ARROW_LEFT), s.add(n.ARROW_UP), s.add(n.ARROW_RIGHT), s.add(n.ARROW_DOWN), s.add(n.DELETE), s.add(n.ESCAPE), s.add(n.TAB);
                var o = 8,
                    r = 13,
                    a = 32,
                    l = 33,
                    d = 34,
                    u = 35,
                    c = 36,
                    h = 37,
                    p = 38,
                    E = 39,
                    f = 40,
                    m = 46,
                    T = 27,
                    g = 9,
                    I = new Map;
                I.set(o, n.BACKSPACE), I.set(r, n.ENTER), I.set(a, n.SPACEBAR), I.set(l, n.PAGE_UP), I.set(d, n.PAGE_DOWN), I.set(u, n.END), I.set(c, n.HOME), I.set(h, n.ARROW_LEFT), I.set(p, n.ARROW_UP), I.set(E, n.ARROW_RIGHT), I.set(f, n.ARROW_DOWN), I.set(m, n.DELETE), I.set(T, n.ESCAPE), I.set(g, n.TAB);
                var v = new Set;

                function A(t) {
                    var e = t.key;
                    if (s.has(e)) return e;
                    var i = I.get(t.keyCode);
                    return i || n.UNKNOWN
                }
                v.add(n.PAGE_UP), v.add(n.PAGE_DOWN), v.add(n.END), v.add(n.HOME), v.add(n.ARROW_LEFT), v.add(n.ARROW_UP), v.add(n.ARROW_RIGHT), v.add(n.ARROW_DOWN)
            },
            8140: (t, e, i) => {
                i.d(e, {
                    s: () => n
                });
                class n {
                    constructor() {
                        this.videoObjects = new Map
                    }
                    static getManager() {
                        return n.instance || (n.instance = new n), n.instance
                    }
                    static destroyManager() {
                        n.instance = void 0
                    }
                    registerYtPlayer(t, e) {
                        this.videoObjects.set(t, e)
                    }
                    unregisterYtPlayer(t) {
                        const e = this.videoObjects.get(t);
                        null == e || e.destroy(), this.videoObjects.delete(t), 0 === this.videoObjects.size && n.destroyManager()
                    }
                    getYtPlayer(t) {
                        return this.videoObjects.get(t)
                    }
                }
                n.instance = void 0
            },
            8163: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmYouTube = void 0;
                const n = i(4829),
                    s = i(4265),
                    o = i(4452),
                    r = i(3017),
                    a = i(477);
                class l extends a.GdmVideo {
                    constructor() {
                        super(...arguments), this.onClick = t => {
                            this.isActiveAndVisible || (t.preventDefault(), t.stopImmediatePropagation())
                        }, this.onFirstPlay = t => {
                            if (!this.player || t.data !== YT.PlayerState.PLAYING) return;
                            this.player.removeEventListener("onStateChange", this.onFirstPlay), this.isActiveAndVisible || this.pause(), this.hidePreviewContainer();
                            const e = this.player.getIframe();
                            document.activeElement === e && e.contentWindow && e.contentWindow.focus()
                        }, this.onReady = () => {
                            this.player = this.glueVideo && this.glueVideo.getPlayer(), this.player && (this.player.addEventListener("onStateChange", this.onFirstPlay), this.player.addEventListener("onStateChange", this.onStateChange))
                        }, this.onStateChange = t => {
                            if (this.isActiveAndVisible) switch (t.data) {
                                case YT.PlayerState.PLAYING:
                                    this.isPlaying = !0;
                                    break;
                                case YT.PlayerState.PAUSED:
                                    this.isPlaying = !1
                            }
                        }, this.playInternal = () => {
                            this.player && this.player.playVideo()
                        }, this.pauseInternal = () => {
                            this.player && this.player.pauseVideo()
                        }
                    }
                    connectedCallback() {
                        const t = "true" === this.dataset.autoplay;
                        this.addEventListener(s.EventType.CLICK, this.onClick), this.glueVideo = this.glueVideo || new o.YoutubeVideo(this, {
                            events: {
                                onReady: this.onReady
                            },
                            playerVars: {
                                autoplay: t ? 1 : 0,
                                mute: t && a.IS_IOS ? 1 : void 0,
                                playsinline: 1,
                                rel: 0
                            }
                        }), this.isAutoplay = t, this.isAutoplay && this.hidePreviewContainer(), super.connectedCallback()
                    }
                    disconnectedCallback() {
                        this.removeEventListener(s.EventType.CLICK, this.onClick), super.disconnectedCallback()
                    }
                    hidePreviewContainer() {
                        this.removeAttribute(n.Attribute.ROLE), this.removeAttribute(n.Attribute.TAB_INDEX);
                        const t = this.querySelector(`.${r.CssClasses.PREVIEW_CONTAINER}`);
                        t && t.classList.add(r.CssClasses.HIDE_ELEMENT);
                        const e = this.querySelector(`.${r.CssClasses.VIDEO_CONTAINER}`);
                        e && e.classList.remove(r.CssClasses.HIDE_ELEMENT)
                    }
                    seekInternal(t) {
                        this.player && this.player.getCurrentTime() !== t && this.player.seekTo(t, !0)
                    }
                }
                e.GdmYouTube = l
            },
            8283: (t, e, i) => {
                i.d(e, {
                    C: () => p
                });
                var n = i(1635),
                    s = i(361),
                    o = i(1292),
                    r = i(4648),
                    a = i(6834),
                    l = i(3142),
                    d = i(8313),
                    u = i(3881),
                    c = i(3393),
                    h = i(5527),
                    p = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.initialize = function (t, e) {
                            void 0 === t && (t = function (t) {
                                return new d.X(t)
                            }), void 0 === e && (e = function (t) {
                                return new r.f(t)
                            }), this.menuSurfaceFactory = t, this.listFactory = e
                        }, e.prototype.initialSyncWithDOM = function () {
                            var t = this;
                            this.menuSurface = this.menuSurfaceFactory(this.root);
                            var e = this.root.querySelector(c.P$.LIST_SELECTOR);
                            e ? (this.list = this.listFactory(e), this.list.wrapFocus = !0) : this.list = null, this.handleKeydown = function (e) {
                                t.foundation.handleKeydown(e)
                            }, this.handleItemAction = function (e) {
                                t.foundation.handleItemAction(t.items[e.detail.index])
                            }, this.handleMenuSurfaceOpened = function () {
                                t.foundation.handleMenuSurfaceOpened()
                            }, this.menuSurface.listen(u.O.strings.OPENED_EVENT, this.handleMenuSurfaceOpened), this.listen("keydown", this.handleKeydown), this.listen(l.Y.strings.ACTION_EVENT, this.handleItemAction)
                        }, e.prototype.destroy = function () {
                            this.list && this.list.destroy(), this.menuSurface.destroy(), this.menuSurface.unlisten(u.O.strings.OPENED_EVENT, this.handleMenuSurfaceOpened), this.unlisten("keydown", this.handleKeydown), this.unlisten(l.Y.strings.ACTION_EVENT, this.handleItemAction), t.prototype.destroy.call(this)
                        }, Object.defineProperty(e.prototype, "open", {
                            get: function () {
                                return this.menuSurface.isOpen()
                            },
                            set: function (t) {
                                t ? this.menuSurface.open() : this.menuSurface.close()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "wrapFocus", {
                            get: function () {
                                return !!this.list && this.list.wrapFocus
                            },
                            set: function (t) {
                                this.list && (this.list.wrapFocus = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "hasTypeahead", {
                            set: function (t) {
                                this.list && (this.list.hasTypeahead = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "typeaheadInProgress", {
                            get: function () {
                                return !!this.list && this.list.typeaheadInProgress
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.typeaheadMatchItem = function (t, e) {
                            return this.list ? this.list.typeaheadMatchItem(t, e) : -1
                        }, e.prototype.layout = function () {
                            this.list && this.list.layout()
                        }, Object.defineProperty(e.prototype, "items", {
                            get: function () {
                                return this.list ? this.list.listElements : []
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "singleSelection", {
                            set: function (t) {
                                this.list && (this.list.singleSelection = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "selectedIndex", {
                            get: function () {
                                return this.list ? this.list.selectedIndex : a.nL.UNSET_INDEX
                            },
                            set: function (t) {
                                this.list && (this.list.selectedIndex = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "quickOpen", {
                            set: function (t) {
                                this.menuSurface.quickOpen = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.setDefaultFocusState = function (t) {
                            this.foundation.setDefaultFocusState(t)
                        }, e.prototype.setAnchorCorner = function (t) {
                            this.menuSurface.setAnchorCorner(t)
                        }, e.prototype.setAnchorMargin = function (t) {
                            this.menuSurface.setAnchorMargin(t)
                        }, e.prototype.setSelectedIndex = function (t) {
                            this.foundation.setSelectedIndex(t)
                        }, e.prototype.setEnabled = function (t, e) {
                            this.foundation.setEnabled(t, e)
                        }, e.prototype.getOptionByIndex = function (t) {
                            return t < this.items.length ? this.items[t] : null
                        }, e.prototype.getPrimaryTextAtIndex = function (t) {
                            var e = this.getOptionByIndex(t);
                            return e && this.list && this.list.getPrimaryText(e) || ""
                        }, e.prototype.setFixedPosition = function (t) {
                            this.menuSurface.setFixedPosition(t)
                        }, e.prototype.setIsHoisted = function (t) {
                            this.menuSurface.setIsHoisted(t)
                        }, e.prototype.setAbsolutePosition = function (t, e) {
                            this.menuSurface.setAbsolutePosition(t, e)
                        }, e.prototype.setAnchorElement = function (t) {
                            this.menuSurface.anchorElement = t
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClassToElementAtIndex: function (e, i) {
                                        t.items[e].classList.add(i)
                                    },
                                    removeClassFromElementAtIndex: function (e, i) {
                                        t.items[e].classList.remove(i)
                                    },
                                    addAttributeToElementAtIndex: function (e, i, n) {
                                        t.items[e].setAttribute(i, n)
                                    },
                                    removeAttributeFromElementAtIndex: function (e, i) {
                                        t.items[e].removeAttribute(i)
                                    },
                                    getAttributeFromElementAtIndex: function (e, i) {
                                        return t.items[e].getAttribute(i)
                                    },
                                    elementContainsClass: function (t, e) {
                                        return t.classList.contains(e)
                                    },
                                    closeSurface: function (e) {
                                        t.menuSurface.close(e)
                                    },
                                    getElementIndex: function (e) {
                                        return t.items.indexOf(e)
                                    },
                                    notifySelected: function (e) {
                                        t.emit(c.P$.SELECTED_EVENT, {
                                            index: e.index,
                                            item: t.items[e.index]
                                        })
                                    },
                                    getMenuItemCount: function () {
                                        return t.items.length
                                    },
                                    focusItemAtIndex: function (e) {
                                        t.items[e].focus()
                                    },
                                    focusListRoot: function () {
                                        t.root.querySelector(c.P$.LIST_SELECTOR).focus()
                                    },
                                    isSelectableItemAtIndex: function (e) {
                                        return !!(0, o.kp)(t.items[e], "." + c.Y7.MENU_SELECTION_GROUP)
                                    },
                                    getSelectedSiblingOfItemAtIndex: function (e) {
                                        var i = (0, o.kp)(t.items[e], "." + c.Y7.MENU_SELECTION_GROUP).querySelector("." + c.Y7.MENU_SELECTED_LIST_ITEM);
                                        return i ? t.items.indexOf(i) : -1
                                    }
                                };
                            return new h.d(e)
                        }, e
                    }(s.O)
            },
            8313: (t, e, i) => {
                i.d(e, {
                    X: () => l
                });
                var n = i(1635),
                    s = i(361),
                    o = i(9891),
                    r = i(3881),
                    a = i(7823),
                    l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.initialSyncWithDOM = function () {
                            var t = this,
                                e = this.root.parentElement;
                            this.anchorElement = e && e.classList.contains(o.Y7.ANCHOR) ? e : null, this.root.classList.contains(o.Y7.FIXED) && this.setFixedPosition(!0), this.handleKeydown = function (e) {
                                t.foundation.handleKeydown(e)
                            }, this.handleBodyClick = function (e) {
                                t.foundation.handleBodyClick(e)
                            }, this.registerBodyClickListener = function () {
                                document.body.addEventListener("click", t.handleBodyClick, {
                                    capture: !0
                                })
                            }, this.deregisterBodyClickListener = function () {
                                document.body.removeEventListener("click", t.handleBodyClick, {
                                    capture: !0
                                })
                            }, this.listen("keydown", this.handleKeydown), this.listen(o.P$.OPENED_EVENT, this.registerBodyClickListener), this.listen(o.P$.CLOSED_EVENT, this.deregisterBodyClickListener)
                        }, e.prototype.destroy = function () {
                            this.unlisten("keydown", this.handleKeydown), this.unlisten(o.P$.OPENED_EVENT, this.registerBodyClickListener), this.unlisten(o.P$.CLOSED_EVENT, this.deregisterBodyClickListener), t.prototype.destroy.call(this)
                        }, e.prototype.isOpen = function () {
                            return this.foundation.isOpen()
                        }, e.prototype.open = function () {
                            this.foundation.open()
                        }, e.prototype.close = function (t) {
                            void 0 === t && (t = !1), this.foundation.close(t)
                        }, Object.defineProperty(e.prototype, "quickOpen", {
                            set: function (t) {
                                this.foundation.setQuickOpen(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.setIsHoisted = function (t) {
                            this.foundation.setIsHoisted(t)
                        }, e.prototype.setMenuSurfaceAnchorElement = function (t) {
                            this.anchorElement = t
                        }, e.prototype.setFixedPosition = function (t) {
                            t ? this.root.classList.add(o.Y7.FIXED) : this.root.classList.remove(o.Y7.FIXED), this.foundation.setFixedPosition(t)
                        }, e.prototype.setAbsolutePosition = function (t, e) {
                            this.foundation.setAbsolutePosition(t, e), this.setIsHoisted(!0)
                        }, e.prototype.setAnchorCorner = function (t) {
                            this.foundation.setAnchorCorner(t)
                        }, e.prototype.setAnchorMargin = function (t) {
                            this.foundation.setAnchorMargin(t)
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = this,
                                e = {
                                    addClass: function (e) {
                                        return t.root.classList.add(e)
                                    },
                                    removeClass: function (e) {
                                        return t.root.classList.remove(e)
                                    },
                                    hasClass: function (e) {
                                        return t.root.classList.contains(e)
                                    },
                                    hasAnchor: function () {
                                        return !!t.anchorElement
                                    },
                                    notifyClose: function () {
                                        return t.emit(r.O.strings.CLOSED_EVENT, {})
                                    },
                                    notifyClosing: function () {
                                        t.emit(r.O.strings.CLOSING_EVENT, {})
                                    },
                                    notifyOpen: function () {
                                        return t.emit(r.O.strings.OPENED_EVENT, {})
                                    },
                                    notifyOpening: function () {
                                        return t.emit(r.O.strings.OPENING_EVENT, {})
                                    },
                                    isElementInContainer: function (e) {
                                        return t.root.contains(e)
                                    },
                                    isRtl: function () {
                                        return "rtl" === getComputedStyle(t.root).getPropertyValue("direction")
                                    },
                                    setTransformOrigin: function (e) {
                                        var i = (0, a.d)(window, "transform") + "-origin";
                                        t.root.style.setProperty(i, e)
                                    },
                                    isFocused: function () {
                                        return document.activeElement === t.root
                                    },
                                    saveFocus: function () {
                                        t.previousFocus = document.activeElement
                                    },
                                    restoreFocus: function () {
                                        t.root.contains(document.activeElement) && t.previousFocus && t.previousFocus.focus && t.previousFocus.focus()
                                    },
                                    getInnerDimensions: function () {
                                        return {
                                            width: t.root.offsetWidth,
                                            height: t.root.offsetHeight
                                        }
                                    },
                                    getAnchorDimensions: function () {
                                        return t.anchorElement ? t.anchorElement.getBoundingClientRect() : null
                                    },
                                    getWindowDimensions: function () {
                                        return {
                                            width: window.innerWidth,
                                            height: window.innerHeight
                                        }
                                    },
                                    getBodyDimensions: function () {
                                        return {
                                            width: document.body.clientWidth,
                                            height: document.body.clientHeight
                                        }
                                    },
                                    getWindowScroll: function () {
                                        return {
                                            x: window.pageXOffset,
                                            y: window.pageYOffset
                                        }
                                    },
                                    setPosition: function (e) {
                                        var i = t.root;
                                        i.style.left = "left" in e ? e.left + "px" : "", i.style.right = "right" in e ? e.right + "px" : "", i.style.top = "top" in e ? e.top + "px" : "", i.style.bottom = "bottom" in e ? e.bottom + "px" : ""
                                    },
                                    setMaxHeight: function (e) {
                                        t.root.style.maxHeight = e
                                    }
                                };
                            return new r.O(e)
                        }, e
                    }(s.O)
            },
            8446: (t, e, i) => {
                i.d(e, {
                    A: () => l
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(8116),
                    r = i(9891),
                    a = i(1162),
                    l = function (t) {
                        function e(i, s) {
                            void 0 === s && (s = {});
                            var o = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return o.disabled = !1, o.isMenuOpen = !1, o.useDefaultValidation = !0, o.customValidity = !0, o.lastSelectedIndex = a.nL.UNSET_INDEX, o.clickDebounceTimeout = 0, o.recentlyClicked = !1, o.leadingIcon = s.leadingIcon, o.helperText = s.helperText, o
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return a.Y7
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "numbers", {
                            get: function () {
                                return a.nL
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return a.P$
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    hasClass: function () {
                                        return !1
                                    },
                                    activateBottomLine: function () {},
                                    deactivateBottomLine: function () {},
                                    getSelectedIndex: function () {
                                        return -1
                                    },
                                    setSelectedIndex: function () {},
                                    hasLabel: function () {
                                        return !1
                                    },
                                    floatLabel: function () {},
                                    getLabelWidth: function () {
                                        return 0
                                    },
                                    setLabelRequired: function () {},
                                    hasOutline: function () {
                                        return !1
                                    },
                                    notchOutline: function () {},
                                    closeOutline: function () {},
                                    setRippleCenter: function () {},
                                    notifyChange: function () {},
                                    setSelectedText: function () {},
                                    isSelectAnchorFocused: function () {
                                        return !1
                                    },
                                    getSelectAnchorAttr: function () {
                                        return ""
                                    },
                                    setSelectAnchorAttr: function () {},
                                    removeSelectAnchorAttr: function () {},
                                    addMenuClass: function () {},
                                    removeMenuClass: function () {},
                                    openMenu: function () {},
                                    closeMenu: function () {},
                                    getAnchorElement: function () {
                                        return null
                                    },
                                    setMenuAnchorElement: function () {},
                                    setMenuAnchorCorner: function () {},
                                    setMenuWrapFocus: function () {},
                                    focusMenuItemAtIndex: function () {},
                                    getMenuItemCount: function () {
                                        return 0
                                    },
                                    getMenuItemValues: function () {
                                        return []
                                    },
                                    getMenuItemTextAtIndex: function () {
                                        return ""
                                    },
                                    isTypeaheadInProgress: function () {
                                        return !1
                                    },
                                    typeaheadMatchItem: function () {
                                        return -1
                                    }
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getSelectedIndex = function () {
                            return this.adapter.getSelectedIndex()
                        }, e.prototype.setSelectedIndex = function (t, e, i) {
                            void 0 === e && (e = !1), void 0 === i && (i = !1), t >= this.adapter.getMenuItemCount() || (t === a.nL.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), e && this.adapter.closeMenu(), i || this.lastSelectedIndex === t || this.handleChange(), this.lastSelectedIndex = t)
                        }, e.prototype.setValue = function (t, e) {
                            void 0 === e && (e = !1);
                            var i = this.adapter.getMenuItemValues().indexOf(t);
                            this.setSelectedIndex(i, !1, e)
                        }, e.prototype.getValue = function () {
                            var t = this.adapter.getSelectedIndex(),
                                e = this.adapter.getMenuItemValues();
                            return t !== a.nL.UNSET_INDEX ? e[t] : ""
                        }, e.prototype.getDisabled = function () {
                            return this.disabled
                        }, e.prototype.setDisabled = function (t) {
                            this.disabled = t, this.disabled ? (this.adapter.addClass(a.Y7.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(a.Y7.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString())
                        }, e.prototype.openMenu = function () {
                            this.adapter.addClass(a.Y7.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true")
                        }, e.prototype.setHelperTextContent = function (t) {
                            this.helperText && this.helperText.setContent(t)
                        }, e.prototype.layout = function () {
                            if (this.adapter.hasLabel()) {
                                var t = this.getValue().length > 0,
                                    e = this.adapter.hasClass(a.Y7.FOCUSED),
                                    i = t || e,
                                    n = this.adapter.hasClass(a.Y7.REQUIRED);
                                this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(n)
                            }
                        }, e.prototype.layoutOptions = function () {
                            var t = this.adapter.getMenuItemValues().indexOf(this.getValue());
                            this.setSelectedIndex(t, !1, !0)
                        }, e.prototype.handleMenuOpened = function () {
                            if (0 !== this.adapter.getMenuItemValues().length) {
                                var t = this.getSelectedIndex(),
                                    e = t >= 0 ? t : 0;
                                this.adapter.focusMenuItemAtIndex(e)
                            }
                        }, e.prototype.handleMenuClosing = function () {
                            this.adapter.setSelectAnchorAttr("aria-expanded", "false")
                        }, e.prototype.handleMenuClosed = function () {
                            this.adapter.removeClass(a.Y7.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur()
                        }, e.prototype.handleChange = function () {
                            this.layout(), this.adapter.notifyChange(this.getValue()), this.adapter.hasClass(a.Y7.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid())
                        }, e.prototype.handleMenuItemAction = function (t) {
                            this.setSelectedIndex(t, !0)
                        }, e.prototype.handleFocus = function () {
                            this.adapter.addClass(a.Y7.FOCUSED), this.layout(), this.adapter.activateBottomLine()
                        }, e.prototype.handleBlur = function () {
                            this.isMenuOpen || this.blur()
                        }, e.prototype.handleClick = function (t) {
                            this.disabled || this.recentlyClicked || (this.setClickDebounceTimeout(), this.isMenuOpen ? this.adapter.closeMenu() : (this.adapter.setRippleCenter(t), this.openMenu()))
                        }, e.prototype.handleKeydown = function (t) {
                            if (!this.isMenuOpen && this.adapter.hasClass(a.Y7.FOCUSED)) {
                                var e = (0, o.l5)(t) === o._.ENTER,
                                    i = (0, o.l5)(t) === o._.SPACEBAR,
                                    n = (0, o.l5)(t) === o._.ARROW_UP,
                                    s = (0, o.l5)(t) === o._.ARROW_DOWN;
                                if (!(t.ctrlKey || t.metaKey) && (!i && t.key && 1 === t.key.length || i && this.adapter.isTypeaheadInProgress())) {
                                    var r = i ? " " : t.key,
                                        l = this.adapter.typeaheadMatchItem(r, this.getSelectedIndex());
                                    return l >= 0 && this.setSelectedIndex(l), void t.preventDefault()
                                }(e || i || n || s) && (this.openMenu(), t.preventDefault())
                            }
                        }, e.prototype.notchOutline = function (t) {
                            if (this.adapter.hasOutline()) {
                                var e = this.adapter.hasClass(a.Y7.FOCUSED);
                                if (t) {
                                    var i = a.nL.LABEL_SCALE,
                                        n = this.adapter.getLabelWidth() * i;
                                    this.adapter.notchOutline(n)
                                } else e || this.adapter.closeOutline()
                            }
                        }, e.prototype.setLeadingIconAriaLabel = function (t) {
                            this.leadingIcon && this.leadingIcon.setAriaLabel(t)
                        }, e.prototype.setLeadingIconContent = function (t) {
                            this.leadingIcon && this.leadingIcon.setContent(t)
                        }, e.prototype.getUseDefaultValidation = function () {
                            return this.useDefaultValidation
                        }, e.prototype.setUseDefaultValidation = function (t) {
                            this.useDefaultValidation = t
                        }, e.prototype.setValid = function (t) {
                            this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(a.Y7.INVALID), this.adapter.removeMenuClass(a.Y7.MENU_INVALID)) : (this.adapter.addClass(a.Y7.INVALID), this.adapter.addMenuClass(a.Y7.MENU_INVALID)), this.syncHelperTextValidity(t)
                        }, e.prototype.isValid = function () {
                            return this.useDefaultValidation && this.adapter.hasClass(a.Y7.REQUIRED) && !this.adapter.hasClass(a.Y7.DISABLED) ? this.getSelectedIndex() !== a.nL.UNSET_INDEX && (0 !== this.getSelectedIndex() || Boolean(this.getValue())) : this.customValidity
                        }, e.prototype.setRequired = function (t) {
                            t ? this.adapter.addClass(a.Y7.REQUIRED) : this.adapter.removeClass(a.Y7.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t)
                        }, e.prototype.getRequired = function () {
                            return "true" === this.adapter.getSelectAnchorAttr("aria-required")
                        }, e.prototype.init = function () {
                            var t = this.adapter.getAnchorElement();
                            t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(r.OK.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(a.Y7.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(a.Y7.INVALID)), this.layout(), this.layoutOptions()
                        }, e.prototype.blur = function () {
                            this.adapter.removeClass(a.Y7.FOCUSED), this.layout(), this.adapter.deactivateBottomLine(), this.adapter.hasClass(a.Y7.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid())
                        }, e.prototype.syncHelperTextValidity = function (t) {
                            if (this.helperText) {
                                this.helperText.setValidity(t);
                                var e = this.helperText.isVisible(),
                                    i = this.helperText.getId();
                                e && i ? this.adapter.setSelectAnchorAttr(a.P$.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(a.P$.ARIA_DESCRIBEDBY)
                            }
                        }, e.prototype.setClickDebounceTimeout = function () {
                            var t = this;
                            clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout((function () {
                                t.recentlyClicked = !1
                            }), a.nL.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0
                        }, e
                    }(s.I)
            },
            8567: (t, e, i) => {
                i.d(e, {
                    g: () => I
                });
                var n = i(1635),
                    s = i(361),
                    o = i(5700),
                    r = i(1292),
                    a = i(1949),
                    l = i(5281),
                    d = i(3618),
                    u = i(1762),
                    c = i(9716),
                    h = i(5034),
                    p = i(2332),
                    E = i(605),
                    f = i(5651),
                    m = i(4108),
                    T = i(826),
                    g = i(4287),
                    I = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return (0, n.C6)(e, t), e.attachTo = function (t) {
                            return new e(t)
                        }, e.prototype.initialize = function (t, e, i, n, s, o, r) {
                            void 0 === t && (t = function (t, e) {
                                return new u.N(t, e)
                            }), void 0 === e && (e = function (t) {
                                return new l.l(t)
                            }), void 0 === i && (i = function (t) {
                                return new m.n(t)
                            }), void 0 === n && (n = function (t) {
                                return new h.N(t)
                            }), void 0 === s && (s = function (t) {
                                return new g.j(t)
                            }), void 0 === o && (o = function (t) {
                                return new a.$(t)
                            }), void 0 === r && (r = function (t) {
                                return new d.i(t)
                            }), this.input = this.root.querySelector(E.P$.INPUT_SELECTOR);
                            var c = this.root.querySelector(E.P$.LABEL_SELECTOR);
                            this.label = c ? o(c) : null;
                            var f = this.root.querySelector(E.P$.LINE_RIPPLE_SELECTOR);
                            this.lineRipple = f ? e(f) : null;
                            var I = this.root.querySelector(E.P$.OUTLINE_SELECTOR);
                            this.outline = I ? r(I) : null;
                            var v = T.Q.strings,
                                A = this.root.nextElementSibling,
                                C = A && A.classList.contains(E.Y7.HELPER_LINE),
                                y = C && A && A.querySelector(v.ROOT_SELECTOR);
                            this.helperText = y ? i(y) : null;
                            var L = p.y.strings,
                                O = this.root.querySelector(L.ROOT_SELECTOR);
                            !O && C && A && (O = A.querySelector(L.ROOT_SELECTOR)), this.characterCounter = O ? n(O) : null;
                            var S = this.root.querySelector(E.P$.LEADING_ICON_SELECTOR);
                            this.leadingIcon = S ? s(S) : null;
                            var b = this.root.querySelector(E.P$.TRAILING_ICON_SELECTOR);
                            this.trailingIcon = b ? s(b) : null, this.prefix = this.root.querySelector(E.P$.PREFIX_SELECTOR), this.suffix = this.root.querySelector(E.P$.SUFFIX_SELECTOR), this.ripple = this.createRipple(t)
                        }, e.prototype.destroy = function () {
                            this.ripple && this.ripple.destroy(), this.lineRipple && this.lineRipple.destroy(), this.helperText && this.helperText.destroy(), this.characterCounter && this.characterCounter.destroy(), this.leadingIcon && this.leadingIcon.destroy(), this.trailingIcon && this.trailingIcon.destroy(), this.label && this.label.destroy(), this.outline && this.outline.destroy(), t.prototype.destroy.call(this)
                        }, e.prototype.initialSyncWithDOM = function () {
                            this.disabled = this.input.disabled
                        }, Object.defineProperty(e.prototype, "value", {
                            get: function () {
                                return this.foundation.getValue()
                            },
                            set: function (t) {
                                this.foundation.setValue(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "disabled", {
                            get: function () {
                                return this.foundation.isDisabled()
                            },
                            set: function (t) {
                                this.foundation.setDisabled(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "valid", {
                            get: function () {
                                return this.foundation.isValid()
                            },
                            set: function (t) {
                                this.foundation.setValid(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "required", {
                            get: function () {
                                return this.input.required
                            },
                            set: function (t) {
                                this.input.required = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "pattern", {
                            get: function () {
                                return this.input.pattern
                            },
                            set: function (t) {
                                this.input.pattern = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "minLength", {
                            get: function () {
                                return this.input.minLength
                            },
                            set: function (t) {
                                this.input.minLength = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "maxLength", {
                            get: function () {
                                return this.input.maxLength
                            },
                            set: function (t) {
                                t < 0 ? this.input.removeAttribute("maxLength") : this.input.maxLength = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "min", {
                            get: function () {
                                return this.input.min
                            },
                            set: function (t) {
                                this.input.min = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "max", {
                            get: function () {
                                return this.input.max
                            },
                            set: function (t) {
                                this.input.max = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "step", {
                            get: function () {
                                return this.input.step
                            },
                            set: function (t) {
                                this.input.step = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "helperTextContent", {
                            set: function (t) {
                                this.foundation.setHelperTextContent(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "leadingIconAriaLabel", {
                            set: function (t) {
                                this.foundation.setLeadingIconAriaLabel(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "leadingIconContent", {
                            set: function (t) {
                                this.foundation.setLeadingIconContent(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "trailingIconAriaLabel", {
                            set: function (t) {
                                this.foundation.setTrailingIconAriaLabel(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "trailingIconContent", {
                            set: function (t) {
                                this.foundation.setTrailingIconContent(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "useNativeValidation", {
                            set: function (t) {
                                this.foundation.setUseNativeValidation(t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "prefixText", {
                            get: function () {
                                return this.prefix ? this.prefix.textContent : null
                            },
                            set: function (t) {
                                this.prefix && (this.prefix.textContent = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "suffixText", {
                            get: function () {
                                return this.suffix ? this.suffix.textContent : null
                            },
                            set: function (t) {
                                this.suffix && (this.suffix.textContent = t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.focus = function () {
                            this.input.focus()
                        }, e.prototype.layout = function () {
                            var t = this.foundation.shouldFloat;
                            this.foundation.notchOutline(t)
                        }, e.prototype.getDefaultFoundation = function () {
                            var t = (0, n.Cl)((0, n.Cl)((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
                            return new f.r(t, this.getFoundationMap())
                        }, e.prototype.getRootAdapterMethods = function () {
                            var t = this;
                            return {
                                addClass: function (e) {
                                    return t.root.classList.add(e)
                                },
                                removeClass: function (e) {
                                    return t.root.classList.remove(e)
                                },
                                hasClass: function (e) {
                                    return t.root.classList.contains(e)
                                },
                                registerTextFieldInteractionHandler: function (e, i) {
                                    t.listen(e, i)
                                },
                                deregisterTextFieldInteractionHandler: function (e, i) {
                                    t.unlisten(e, i)
                                },
                                registerValidationAttributeChangeHandler: function (e) {
                                    var i = new MutationObserver((function (t) {
                                        return e(function (t) {
                                            return t.map((function (t) {
                                                return t.attributeName
                                            })).filter((function (t) {
                                                return t
                                            }))
                                        }(t))
                                    }));
                                    return i.observe(t.input, {
                                        attributes: !0
                                    }), i
                                },
                                deregisterValidationAttributeChangeHandler: function (t) {
                                    t.disconnect()
                                }
                            }
                        }, e.prototype.getInputAdapterMethods = function () {
                            var t = this;
                            return {
                                getNativeInput: function () {
                                    return t.input
                                },
                                setInputAttr: function (e, i) {
                                    t.input.setAttribute(e, i)
                                },
                                removeInputAttr: function (e) {
                                    t.input.removeAttribute(e)
                                },
                                isFocused: function () {
                                    return document.activeElement === t.input
                                },
                                registerInputInteractionHandler: function (e, i) {
                                    t.input.addEventListener(e, i, (0, o.E)())
                                },
                                deregisterInputInteractionHandler: function (e, i) {
                                    t.input.removeEventListener(e, i, (0, o.E)())
                                }
                            }
                        }, e.prototype.getLabelAdapterMethods = function () {
                            var t = this;
                            return {
                                floatLabel: function (e) {
                                    t.label && t.label.float(e)
                                },
                                getLabelWidth: function () {
                                    return t.label ? t.label.getWidth() : 0
                                },
                                hasLabel: function () {
                                    return Boolean(t.label)
                                },
                                shakeLabel: function (e) {
                                    t.label && t.label.shake(e)
                                },
                                setLabelRequired: function (e) {
                                    t.label && t.label.setRequired(e)
                                }
                            }
                        }, e.prototype.getLineRippleAdapterMethods = function () {
                            var t = this;
                            return {
                                activateLineRipple: function () {
                                    t.lineRipple && t.lineRipple.activate()
                                },
                                deactivateLineRipple: function () {
                                    t.lineRipple && t.lineRipple.deactivate()
                                },
                                setLineRippleTransformOrigin: function (e) {
                                    t.lineRipple && t.lineRipple.setRippleCenter(e)
                                }
                            }
                        }, e.prototype.getOutlineAdapterMethods = function () {
                            var t = this;
                            return {
                                closeOutline: function () {
                                    t.outline && t.outline.closeNotch()
                                },
                                hasOutline: function () {
                                    return Boolean(t.outline)
                                },
                                notchOutline: function (e) {
                                    t.outline && t.outline.notch(e)
                                }
                            }
                        }, e.prototype.getFoundationMap = function () {
                            return {
                                characterCounter: this.characterCounter ? this.characterCounter.foundationForTextField : void 0,
                                helperText: this.helperText ? this.helperText.foundationForTextField : void 0,
                                leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForTextField : void 0,
                                trailingIcon: this.trailingIcon ? this.trailingIcon.foundationForTextField : void 0
                            }
                        }, e.prototype.createRipple = function (t) {
                            var e = this,
                                i = this.root.classList.contains(E.Y7.TEXTAREA),
                                s = this.root.classList.contains(E.Y7.OUTLINED);
                            if (i || s) return null;
                            var a = (0, n.Cl)((0, n.Cl)({}, u.N.createAdapter(this)), {
                                isSurfaceActive: function () {
                                    return r.cK(e.input, ":active")
                                },
                                registerInteractionHandler: function (t, i) {
                                    e.input.addEventListener(t, i, (0, o.E)())
                                },
                                deregisterInteractionHandler: function (t, i) {
                                    e.input.removeEventListener(t, i, (0, o.E)())
                                }
                            });
                            return t(this.root, new c.E(a))
                        }, e
                    }(s.O)
            },
            8591: (t, e, i) => {
                i.d(e, {
                    S: () => n
                });
                class n {
                    constructor(t, e) {
                        this.fn = t, this.delay = e
                    }
                    debounce() {
                        clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(this.fn, this.delay)
                    }
                    cancel() {
                        clearTimeout(this.timeoutId)
                    }
                }
            },
            8640: (t, e, i) => {
                i.d(e, {
                    U: () => d
                });
                var n = i(7341),
                    s = i(4829),
                    o = i(4265),
                    r = i(2064),
                    a = i(1887),
                    l = i(7783);
                class d extends n.u {
                    constructor(t) {
                        var e, i, n;
                        super(t), this.tabIndexArr = [], this.isCollapsed = !0, this.panelHeight = 0, this.groupEl = this.root.closest(`.${a.s7.GROUP}`), this.panelEl = this.root.closest(`.${a.s7.PANEL}`), this.toggleButton = null !== (i = null === (e = this.panelEl) || void 0 === e ? void 0 : e.querySelector(`.${a.s7.BUTTON}`)) && void 0 !== i ? i : null, this.toggleContentHandler = t => {
                            this.toggleContent(t)
                        }, this.expandHandler = () => {
                            this.expand()
                        }, this.collapseHandler = () => {
                            this.collapse()
                        }, this.transitionendHandler = () => {
                            this.unsetPanelHeight()
                        };
                        const s = null === (n = this.root.closest(`.${a.s7.GROUP}`)) || void 0 === n ? void 0 : n.dataset[a.uB.KEY];
                        if (this.model = l.M.get(s), !this.root.id) throw new Error(a.f9.MISSING_CONTENT_ID);
                        this.init()
                    }
                    init() {
                        this.tabIndexArr = this.getTabIndexArray(), "expanded" === this.root.dataset[a.uB.INITIAL] ? (this.isCollapsed = !1, this.updateHtmlAttributes(!1), this.setPanelHeight(""), this.updateStatus(!1)) : (this.isCollapsed = !0, this.updateHtmlAttributes(!0), this.setPanelHeight("0px")), this.model.listen(a.f7.TOGGLE_CONTENT, this.toggleContentHandler), this.model.listen(a.f7.EXPAND_ALL_CONTENT, this.expandHandler), this.model.listen(a.f7.COLLAPSE_ALL_CONTENT, this.collapseHandler), !0 === this.model.isAnimated && this.root.addEventListener(o.EventType.TRANSITIONEND, this.transitionendHandler), this.addA11yFeatures()
                    }
                    destroy() {
                        var t;
                        null === (t = this.panelEl) || void 0 === t || t.classList.remove(a.s7.IS_COLLAPSED, a.s7.IS_EXPANDED), this.setPanelHeight(""), this.removeAriaAttributes(), this.setFocusableElements(!1, this.tabIndexArr), this.tabIndexArr = [], this.model.unlisten(a.f7.TOGGLE_CONTENT, this.toggleContentHandler), this.model.unlisten(a.f7.EXPAND_ALL_CONTENT, this.expandHandler), this.model.unlisten(a.f7.COLLAPSE_ALL_CONTENT, this.collapseHandler), !0 === this.model.isAnimated && this.root.removeEventListener(o.EventType.TRANSITIONEND, this.transitionendHandler), this.removeA11yFeatures()
                    }
                    expand() {
                        !1 !== this.isCollapsed && (this.updateHtmlAttributes(!1), this.updateHeight(!1), this.updateStatus(!1))
                    }
                    collapse() {
                        !0 !== this.isCollapsed && (this.updateHtmlAttributes(!0), this.updateHeight(!0), this.updateStatus(!0))
                    }
                    toggleContent(t) {
                        t === this.root.id && (this.isCollapsed ? this.expand() : this.collapse())
                    }
                    updateHtmlAttributes(t) {
                        var e, i;
                        this.setAriaAttributes(t), this.setFocusableElements(t, this.tabIndexArr);
                        const n = t ? a.s7.IS_COLLAPSED : a.s7.IS_EXPANDED,
                            s = t ? a.s7.IS_EXPANDED : a.s7.IS_COLLAPSED;
                        null === (e = this.panelEl) || void 0 === e || e.classList.add(n), null === (i = this.panelEl) || void 0 === i || i.classList.remove(s)
                    }
                    updateHeight(t) {
                        this.panelHeight = this.root.scrollHeight, !0 === this.model.isAnimated ? (this.setPanelHeight(`${this.panelHeight}px`), t && (this.panelHeight = this.root.scrollHeight, window.setTimeout(this.setPanelHeight.bind(this), 1, "0px"))) : this.setPanelHeight(t ? "0px" : "")
                    }
                    updateStatus(t) {
                        t ? this.model.panelsCollapsed++ : this.model.panelsCollapsed--, this.model.updatePanelsStatus(), this.isCollapsed = t
                    }
                    getTabIndexArray() {
                        return r.getFocusableElements(this.root).map((t => t.tabIndex))
                    }
                    setPanelHeight(t) {
                        this.root.style.height = t
                    }
                    unsetPanelHeight() {
                        "0px" !== this.root.style.height && (this.root.style.height = "")
                    }
                    getTooltipText(t = !1) {
                        var e, i, n, s;
                        return t ? null !== (i = null === (e = this.groupEl) || void 0 === e ? void 0 : e.dataset[a.uB.EXPAND_TOOLTIP]) && void 0 !== i ? i : a.DH.TOOLTIP_EXPAND : null !== (s = null === (n = this.groupEl) || void 0 === n ? void 0 : n.dataset[a.uB.COLLAPSE_TOOLTIP]) && void 0 !== s ? s : a.DH.TOOLTIP_COLLAPSE
                    }
                    setAriaAttributes(t) {
                        this.root.hidden = t, this.toggleButton && (this.toggleButton.title = this.getTooltipText(t), this.toggleButton.setAttribute(s.Attribute.ARIA_EXPANDED, String(!t))), t ? this.root.setAttribute(s.Attribute.ARIA_HIDDEN, String(t)) : this.root.removeAttribute(s.Attribute.ARIA_HIDDEN)
                    }
                    removeAriaAttributes() {
                        var t, e;
                        null === (t = this.toggleButton) || void 0 === t || t.removeAttribute(s.Attribute.ARIA_EXPANDED), null === (e = this.toggleButton) || void 0 === e || e.removeAttribute("title"), this.root.removeAttribute(s.Attribute.ARIA_HIDDEN), this.root.hidden = !1
                    }
                    setFocusableElements(t, e) {
                        const i = r.getFocusableElements(this.root);
                        if (t)
                            for (const t of i) t.tabIndex = s.TabIndex.NOT_TABBABLE;
                        else
                            for (let t = 0; t < i.length; t++) {
                                i[t].tabIndex = e[t]
                            }
                    }
                    addA11yFeatures() {
                        var t, e;
                        this.root.setAttribute(s.Attribute.ARIA_LABELLEDBY, null !== (e = null === (t = this.toggleButton) || void 0 === t ? void 0 : t.id) && void 0 !== e ? e : ""), this.root.setAttribute(s.Attribute.ROLE, s.Role.REGION)
                    }
                    removeA11yFeatures() {
                        this.root.removeAttribute(s.Attribute.ARIA_LABELLEDBY), this.root.removeAttribute(s.Attribute.ROLE)
                    }
                }
            },
            8703: (t, e) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.stripVideoAutoplay = e.forceVideoAutoplay = e.isTouchScreen = void 0;
                e.isTouchScreen = () => window.matchMedia("(pointer: coarse)").matches;
                e.forceVideoAutoplay = t => {
                    t.classList.remove("gdm-video-embed--paused"), t.classList.remove("gdm-video-embed--hover-play");
                    const e = t.querySelector("video");
                    e && (e.classList.add("visible-video"), e.autoplay = !0, e.loop = !0, e.play())
                };
                e.stripVideoAutoplay = t => {
                    t.classList.add("gdm-video-embed--paused"), t.classList.add("gdm-video-embed--hover-play");
                    const e = t.querySelector("video");
                    e && (e.classList.remove("visible-video"), e.autoplay = !1, e.pause(), e.currentTime = 0)
                }
            },
            8811: (t, e, i) => {
                i.r(e), i.d(e, {
                    SmoothScroll: () => o,
                    defaultOptions: () => n.defaultOptions
                });
                var n = i(7854),
                    s = i(2887);
                class o {
                    constructor(t) {
                        this.currentScrollElementId = "", this.scrollManager = new s.p, this.globalConfig = Object.assign({}, n.defaultOptions, t)
                    }
                    scrollToId(t = "", e) {
                        let i;
                        if ("" === t || "#" === t) i = document.body.firstElementChild;
                        else if (i = document.getElementById(t), !i) throw new Error(`The target element for id "${t}" does not exist.`);
                        this.currentScrollElementId = t, this.currentScrollElement = i, e = Object.assign({}, this.globalConfig, e), this.scrollManager.startScroll(this.currentScrollElement, e);
                        const n = window.scrollY;
                        e.hash && window.location.hash !== `#${this.currentScrollElementId}` && (window.location.hash = `#${this.currentScrollElementId}`), document.documentElement.scrollTop = n
                    }
                    destroy() {
                        this.scrollManager.destroy()
                    }
                }
            },
            8813: (t, e, i) => {
                i.d(e, {
                    K: () => r
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(7607),
                    r = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.shakeAnimationEndHandler = function () {
                                s.handleShakeAnimationEnd()
                            }, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    removeClass: function () {},
                                    getWidth: function () {
                                        return 0
                                    },
                                    registerInteractionHandler: function () {},
                                    deregisterInteractionHandler: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler)
                        }, e.prototype.destroy = function () {
                            this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler)
                        }, e.prototype.getWidth = function () {
                            return this.adapter.getWidth()
                        }, e.prototype.shake = function (t) {
                            var i = e.cssClasses.LABEL_SHAKE;
                            t ? this.adapter.addClass(i) : this.adapter.removeClass(i)
                        }, e.prototype.float = function (t) {
                            var i = e.cssClasses,
                                n = i.LABEL_FLOAT_ABOVE,
                                s = i.LABEL_SHAKE;
                            t ? this.adapter.addClass(n) : (this.adapter.removeClass(n), this.adapter.removeClass(s))
                        }, e.prototype.setRequired = function (t) {
                            var i = e.cssClasses.LABEL_REQUIRED;
                            t ? this.adapter.addClass(i) : this.adapter.removeClass(i)
                        }, e.prototype.handleShakeAnimationEnd = function () {
                            var t = e.cssClasses.LABEL_SHAKE;
                            this.adapter.removeClass(t)
                        }, e
                    }(s.I)
            },
            8918: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GdmVisualList = e.GdmVisualListSelector = void 0;
                const n = i(3150);
                var s;
                ! function (t) {
                    t.ITEM = ".visual-list-item", t.ROOT = "gdm-visual-list"
                }(s || (e.GdmVisualListSelector = s = {}));
                class o extends HTMLElement {
                    constructor() {
                        super(...arguments), this.videos = new Map, this.onPointerEnter = t => {
                            const e = this.videos.get(t.target);
                            e && (e.seek(0), e.play())
                        }, this.onPointerLeave = t => {
                            const e = this.videos.get(t.target);
                            e && e.pause()
                        }
                    }
                    connectedCallback() {
                        this.destroy(), this.init()
                    }
                    disconnectedCallback() {
                        this.destroy()
                    }
                    init() {
                        const t = this.querySelectorAll(n.GdmVideoSelector.VIDEO_EMBED);
                        for (const e of t) {
                            e.pause();
                            const t = e.closest(s.ITEM);
                            t && (t.addEventListener("pointerenter", this.onPointerEnter), t.addEventListener("pointerleave", this.onPointerLeave), this.videos.set(t, e))
                        }
                    }
                    destroy() {
                        for (const t of this.videos.keys()) t.removeEventListener("pointerenter", this.onPointerEnter), t.removeEventListener("pointerleave", this.onPointerLeave), this.videos.delete(t)
                    }
                }
                e.GdmVisualList = o
            },
            9019: (t, e, i) => {
                i.d(e, {
                    C: () => a
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(6933),
                    r = ["click", "keydown"],
                    a = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.savedTabIndex = null, s.interactionHandler = function (t) {
                                s.handleInteraction(t)
                            }, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    getAttr: function () {
                                        return null
                                    },
                                    setAttr: function () {},
                                    removeAttr: function () {},
                                    setContent: function () {},
                                    registerInteractionHandler: function () {},
                                    deregisterInteractionHandler: function () {},
                                    notifyIconAction: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            var t, e;
                            this.savedTabIndex = this.adapter.getAttr("tabindex");
                            try {
                                for (var i = (0, n.Ju)(r), s = i.next(); !s.done; s = i.next()) {
                                    var o = s.value;
                                    this.adapter.registerInteractionHandler(o, this.interactionHandler)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = i.return) && e.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, e.prototype.destroy = function () {
                            var t, e;
                            try {
                                for (var i = (0, n.Ju)(r), s = i.next(); !s.done; s = i.next()) {
                                    var o = s.value;
                                    this.adapter.deregisterInteractionHandler(o, this.interactionHandler)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = i.return) && e.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, e.prototype.setDisabled = function (t) {
                            this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", o.P.ICON_ROLE)))
                        }, e.prototype.setAriaLabel = function (t) {
                            this.adapter.setAttr("aria-label", t)
                        }, e.prototype.setContent = function (t) {
                            this.adapter.setContent(t)
                        }, e.prototype.handleInteraction = function (t) {
                            var e = "Enter" === t.key || 13 === t.keyCode;
                            ("click" === t.type || e) && (t.preventDefault(), this.adapter.notifyIconAction())
                        }, e
                    }(s.I)
            },
            9252: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getParentModal = e.getModalIdFromUrl = e.getModalIdFromAnchor = e.getModalIdFromDataset = e.getLastUrlSegment = void 0;
                const n = i(6678);

                function s(t) {
                    const e = new URL(t).pathname.split("/");
                    return e[e.length - 1] || e[e.length - 2]
                }
                e.getLastUrlSegment = s;

                function o(t) {
                    return t.dataset.gdmModalTrigger
                }

                function r(t) {
                    return s(t.href)
                }
                e.getModalIdFromDataset = o, e.getModalIdFromAnchor = function (t) {
                    return o(t) || r(t)
                }, e.getModalIdFromUrl = r, e.getParentModal = function (t) {
                    return t.closest(n.Selector.ROOT)
                }
            },
            9349: (t, e, i) => {
                i.d(e, {
                    Q: () => d
                });
                var n = i(1635),
                    s = i(7341),
                    o = i(4265),
                    r = i(1234),
                    a = i(4524),
                    l = i(5292);
                class d extends s.u {
                    constructor(t) {
                        var e;
                        super(t), this.successMsg = l.DH.SUCCESS_MESSAGE, this.failMsg = l.DH.FAIL_MESSAGE, this.originalLabel = "";
                        const i = this.root.querySelector(`.${l.s7.VALUE}`),
                            n = this.root.querySelector(`.${l.s7.BUTTON}`);
                        if (this.popoverParentEl = null !== (e = this.root.closest(`.${l.s7.POPOVER_ROOT}`)) && void 0 !== e ? e : this.root.closest(`.${l.s7.SOCIAL_POPOVER_ROOT}`), !i) throw new Error(l.DH.MISSING_INPUT);
                        if (!n) throw new Error(l.DH.MISSING_COPY_BUTTON);
                        this.copyValueEl = i, this.copyButtonEl = n, this.selection = window.getSelection(), this.clickHandler = t => {
                            this.copy(), t.preventDefault()
                        }, this.keyDownHandler = t => {
                            t.key === r.U.ENTER && (this.copy(), t.preventDefault())
                        }, this.closeHandler = () => {
                            this.reset()
                        }, this.init()
                    }
                    init() {
                        var t;
                        const e = this.root.getAttribute(l.QB.SUCCESS),
                            i = this.root.getAttribute(l.QB.FAIL);
                        this.successMsg = e || this.successMsg, this.failMsg = i || this.failMsg, this.originalLabel = this.copyButtonEl.textContent ? this.copyButtonEl.textContent : "", this.copyButtonEl.addEventListener(o.EventType.CLICK, this.clickHandler), this.copyButtonEl.addEventListener(o.EventType.KEYDOWN, this.keyDownHandler), null === (t = this.popoverParentEl) || void 0 === t || t.addEventListener(a.up.CLOSE_EVENT, this.closeHandler)
                    }
                    destroy() {
                        var t;
                        this.reset(), this.copyButtonEl.removeEventListener(o.EventType.CLICK, this.clickHandler), this.copyButtonEl.removeEventListener(o.EventType.KEYDOWN, this.keyDownHandler), null === (t = this.popoverParentEl) || void 0 === t || t.removeEventListener(a.up.CLOSE_EVENT, this.closeHandler)
                    }
                    copy() {
                        return (0, n.sH)(this, void 0, void 0, (function* () {
                            var t, e;
                            if (this.copyValueEl && this.copyValueEl.select) {
                                this.copyValueEl.select();
                                if (navigator.userAgent.match(/ipad|iphone/i)) {
                                    const i = document.createRange();
                                    i.selectNodeContents(this.copyValueEl), null === (t = this.selection) || void 0 === t || t.removeAllRanges(), null === (e = this.selection) || void 0 === e || e.addRange(i), this.copyValueEl.setSelectionRange(0, 999999)
                                }
                            }
                            yield navigator.clipboard.writeText(this.copyValueEl.value).then((() => {
                                this.copyButtonEl.textContent = this.successMsg, this.copyButtonEl.classList.add(l.s7.IS_COPIED), this.copyButtonEl.disabled = !0, this.copyValueEl.blur()
                            }), (() => {
                                this.copyButtonEl.textContent = this.failMsg
                            })), this.copyValueEl.focus()
                        }))
                    }
                    reset() {
                        var t;
                        this.copyButtonEl.textContent = this.originalLabel, this.copyButtonEl.classList.remove(l.s7.IS_COPIED), this.copyButtonEl.disabled = !1, this.copyValueEl.setSelectionRange(0, 0), null === (t = this.selection) || void 0 === t || t.removeAllRanges()
                    }
                }
            },
            9688: (t, e, i) => {
                i.d(e, {
                    H: () => o
                });
                var n = i(4829);

                function s(t) {
                    return Number(t.slice(0, -2))
                }

                function o(t, e, i, o = "bottom") {
                    const a = getComputedStyle(e);
                    if ("fixed" === a.position) return null;
                    const l = getComputedStyle(i),
                        d = i.getBoundingClientRect(),
                        u = e.getBoundingClientRect(),
                        c = r(t),
                        h = c.getBoundingClientRect(),
                        p = c === document.body ? window.innerHeight : h.bottom;
                    (l.direction === n.Direction.RTL || document.documentElement.dir === n.Direction.RTL) && ("left" === o ? o = "right" : "right" === o && (o = "left"));
                    let E = !1,
                        f = !1,
                        m = !1,
                        T = !1;
                    const g = "top" === o || "bottom" === o ? Math.abs(d.width - u.width) / 2 : u.width;
                    if (f = d.left - g < h.left, E = d.right + g > h.right, T = d.top + d.height + u.height >= p, m = d.top - u.height < h.top, f && E) {
                        const t = (d.width - u.width) / 2;
                        return m ? [t, d.height + s(a.marginTop)] : [t, -u.height - s(a.marginTop)]
                    }
                    return "left" === o || "right" === o ? function (t, e, i, n, o, r, a, l, d) {
                        let u = 0,
                            c = 0;
                        if (r || a) c = r ? 0 : e.height - i.height, c += s(n.marginTop) - s(o.marginTop);
                        else {
                            c = (e.height + s(n.marginTop) + s(n.marginBottom) - (i.height + s(o.marginTop) + s(o.marginBottom))) / 2
                        }
                        const h = e.width + s(n.marginRight),
                            p = i.width + s(o.marginRight);
                        u = "left" === t ? l ? h : -p : d ? -p : h;
                        return [u, c]
                    }(o, d, u, l, a, m, T, f, E) : function (t, e, i, n, o, r, a, l, d) {
                        let u = 0,
                            c = 0;
                        if (l || d) {
                            let t = s(n.marginLeft),
                                r = s(o.marginLeft);
                            d && (t += e.width, r += i.width), u = t - r
                        } else u = (e.width - i.width) / 2;
                        const h = e.height + s(o.marginTop),
                            p = i.height + s(o.marginTop);
                        c = "top" === t ? r ? h : -p : a ? -p : h;
                        return [u, c]
                    }(o, d, u, l, a, m, T, f, E)
                }

                function r(t) {
                    const e = t => /auto|hidden|scroll|overlay/.test(t),
                        i = getComputedStyle(t);
                    return t === document.documentElement ? document.body : e(i.overflow) || e(i.overflowY) || e(i.overflowX) ? t : r(t.parentElement)
                }
            },
            9716: (t, e, i) => {
                i.d(e, {
                    E: () => u
                });
                var n = i(1635),
                    s = i(6009),
                    o = i(880),
                    r = i(6545),
                    a = ["touchstart", "pointerdown", "mousedown", "keydown"],
                    l = ["touchend", "pointerup", "mouseup", "contextmenu"],
                    d = [],
                    u = function (t) {
                        function e(i) {
                            var s = t.call(this, (0, n.Cl)((0, n.Cl)({}, e.defaultAdapter), i)) || this;
                            return s.activationAnimationHasEnded = !1, s.activationTimer = 0, s.fgDeactivationRemovalTimer = 0, s.fgScale = "0", s.frame = {
                                width: 0,
                                height: 0
                            }, s.initialSize = 0, s.layoutFrame = 0, s.maxRadius = 0, s.unboundedCoords = {
                                left: 0,
                                top: 0
                            }, s.activationState = s.defaultActivationState(), s.activationTimerCallback = function () {
                                s.activationAnimationHasEnded = !0, s.runDeactivationUXLogicIfReady()
                            }, s.activateHandler = function (t) {
                                s.activateImpl(t)
                            }, s.deactivateHandler = function () {
                                s.deactivateImpl()
                            }, s.focusHandler = function () {
                                s.handleFocus()
                            }, s.blurHandler = function () {
                                s.handleBlur()
                            }, s.resizeHandler = function () {
                                s.layout()
                            }, s
                        }
                        return (0, n.C6)(e, t), Object.defineProperty(e, "cssClasses", {
                            get: function () {
                                return o.Y7
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "strings", {
                            get: function () {
                                return o.P$
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "numbers", {
                            get: function () {
                                return o.nL
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e, "defaultAdapter", {
                            get: function () {
                                return {
                                    addClass: function () {},
                                    browserSupportsCssVars: function () {
                                        return !0
                                    },
                                    computeBoundingRect: function () {
                                        return {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0,
                                            width: 0,
                                            height: 0
                                        }
                                    },
                                    containsEventTarget: function () {
                                        return !0
                                    },
                                    deregisterDocumentInteractionHandler: function () {},
                                    deregisterInteractionHandler: function () {},
                                    deregisterResizeHandler: function () {},
                                    getWindowPageOffset: function () {
                                        return {
                                            x: 0,
                                            y: 0
                                        }
                                    },
                                    isSurfaceActive: function () {
                                        return !0
                                    },
                                    isSurfaceDisabled: function () {
                                        return !0
                                    },
                                    isUnbounded: function () {
                                        return !0
                                    },
                                    registerDocumentInteractionHandler: function () {},
                                    registerInteractionHandler: function () {},
                                    registerResizeHandler: function () {},
                                    removeClass: function () {},
                                    updateCssVariable: function () {}
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function () {
                            var t = this,
                                i = this.supportsPressRipple();
                            if (this.registerRootHandlers(i), i) {
                                var n = e.cssClasses,
                                    s = n.ROOT,
                                    o = n.UNBOUNDED;
                                requestAnimationFrame((function () {
                                    t.adapter.addClass(s), t.adapter.isUnbounded() && (t.adapter.addClass(o), t.layoutInternal())
                                }))
                            }
                        }, e.prototype.destroy = function () {
                            var t = this;
                            if (this.supportsPressRipple()) {
                                this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
                                var i = e.cssClasses,
                                    n = i.ROOT,
                                    s = i.UNBOUNDED;
                                requestAnimationFrame((function () {
                                    t.adapter.removeClass(n), t.adapter.removeClass(s), t.removeCssVars()
                                }))
                            }
                            this.deregisterRootHandlers(), this.deregisterDeactivationHandlers()
                        }, e.prototype.activate = function (t) {
                            this.activateImpl(t)
                        }, e.prototype.deactivate = function () {
                            this.deactivateImpl()
                        }, e.prototype.layout = function () {
                            var t = this;
                            this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame((function () {
                                t.layoutInternal(), t.layoutFrame = 0
                            }))
                        }, e.prototype.setUnbounded = function (t) {
                            var i = e.cssClasses.UNBOUNDED;
                            t ? this.adapter.addClass(i) : this.adapter.removeClass(i)
                        }, e.prototype.handleFocus = function () {
                            var t = this;
                            requestAnimationFrame((function () {
                                return t.adapter.addClass(e.cssClasses.BG_FOCUSED)
                            }))
                        }, e.prototype.handleBlur = function () {
                            var t = this;
                            requestAnimationFrame((function () {
                                return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)
                            }))
                        }, e.prototype.supportsPressRipple = function () {
                            return this.adapter.browserSupportsCssVars()
                        }, e.prototype.defaultActivationState = function () {
                            return {
                                activationEvent: void 0,
                                hasDeactivationUXRun: !1,
                                isActivated: !1,
                                isProgrammatic: !1,
                                wasActivatedByPointer: !1,
                                wasElementMadeActive: !1
                            }
                        }, e.prototype.registerRootHandlers = function (t) {
                            var e, i;
                            if (t) {
                                try {
                                    for (var s = (0, n.Ju)(a), o = s.next(); !o.done; o = s.next()) {
                                        var r = o.value;
                                        this.adapter.registerInteractionHandler(r, this.activateHandler)
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (i = s.return) && i.call(s)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler)
                            }
                            this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler)
                        }, e.prototype.registerDeactivationHandlers = function (t) {
                            var e, i;
                            if ("keydown" === t.type) this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
                            else try {
                                for (var s = (0, n.Ju)(l), o = s.next(); !o.done; o = s.next()) {
                                    var r = o.value;
                                    this.adapter.registerDocumentInteractionHandler(r, this.deactivateHandler)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (i = s.return) && i.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                        }, e.prototype.deregisterRootHandlers = function () {
                            var t, e;
                            try {
                                for (var i = (0, n.Ju)(a), s = i.next(); !s.done; s = i.next()) {
                                    var o = s.value;
                                    this.adapter.deregisterInteractionHandler(o, this.activateHandler)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = i.return) && e.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler)
                        }, e.prototype.deregisterDeactivationHandlers = function () {
                            var t, e;
                            this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
                            try {
                                for (var i = (0, n.Ju)(l), s = i.next(); !s.done; s = i.next()) {
                                    var o = s.value;
                                    this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = i.return) && e.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, e.prototype.removeCssVars = function () {
                            var t = this,
                                i = e.strings;
                            Object.keys(i).forEach((function (e) {
                                0 === e.indexOf("VAR_") && t.adapter.updateCssVariable(i[e], null)
                            }))
                        }, e.prototype.activateImpl = function (t) {
                            var e = this;
                            if (!this.adapter.isSurfaceDisabled()) {
                                var i = this.activationState;
                                if (!i.isActivated) {
                                    var n = this.previousActivationEvent;
                                    if (!(n && void 0 !== t && n.type !== t.type)) i.isActivated = !0, i.isProgrammatic = void 0 === t, i.activationEvent = t, i.wasActivatedByPointer = !i.isProgrammatic && (void 0 !== t && ("mousedown" === t.type || "touchstart" === t.type || "pointerdown" === t.type)), void 0 !== t && d.length > 0 && d.some((function (t) {
                                        return e.adapter.containsEventTarget(t)
                                    })) ? this.resetActivationState() : (void 0 !== t && (d.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame((function () {
                                        d = [], i.wasElementMadeActive || void 0 === t || " " !== t.key && 32 !== t.keyCode || (i.wasElementMadeActive = e.checkElementMadeActive(t), i.wasElementMadeActive && e.animateActivation()), i.wasElementMadeActive || (e.activationState = e.defaultActivationState())
                                    })))
                                }
                            }
                        }, e.prototype.checkElementMadeActive = function (t) {
                            return void 0 === t || "keydown" !== t.type || this.adapter.isSurfaceActive()
                        }, e.prototype.animateActivation = function () {
                            var t = this,
                                i = e.strings,
                                n = i.VAR_FG_TRANSLATE_START,
                                s = i.VAR_FG_TRANSLATE_END,
                                o = e.cssClasses,
                                r = o.FG_DEACTIVATION,
                                a = o.FG_ACTIVATION,
                                l = e.numbers.DEACTIVATION_TIMEOUT_MS;
                            this.layoutInternal();
                            var d = "",
                                u = "";
                            if (!this.adapter.isUnbounded()) {
                                var c = this.getFgTranslationCoordinates(),
                                    h = c.startPoint,
                                    p = c.endPoint;
                                d = h.x + "px, " + h.y + "px", u = p.x + "px, " + p.y + "px"
                            }
                            this.adapter.updateCssVariable(n, d), this.adapter.updateCssVariable(s, u), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout((function () {
                                t.activationTimerCallback()
                            }), l)
                        }, e.prototype.getFgTranslationCoordinates = function () {
                            var t, e = this.activationState,
                                i = e.activationEvent;
                            return {
                                startPoint: t = {
                                    x: (t = e.wasActivatedByPointer ? (0, r.y)(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : {
                                        x: this.frame.width / 2,
                                        y: this.frame.height / 2
                                    }).x - this.initialSize / 2,
                                    y: t.y - this.initialSize / 2
                                },
                                endPoint: {
                                    x: this.frame.width / 2 - this.initialSize / 2,
                                    y: this.frame.height / 2 - this.initialSize / 2
                                }
                            }
                        }, e.prototype.runDeactivationUXLogicIfReady = function () {
                            var t = this,
                                i = e.cssClasses.FG_DEACTIVATION,
                                n = this.activationState,
                                s = n.hasDeactivationUXRun,
                                r = n.isActivated;
                            (s || !r) && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout((function () {
                                t.adapter.removeClass(i)
                            }), o.nL.FG_DEACTIVATION_MS))
                        }, e.prototype.rmBoundedActivationClasses = function () {
                            var t = e.cssClasses.FG_ACTIVATION;
                            this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect()
                        }, e.prototype.resetActivationState = function () {
                            var t = this;
                            this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout((function () {
                                return t.previousActivationEvent = void 0
                            }), e.numbers.TAP_DELAY_MS)
                        }, e.prototype.deactivateImpl = function () {
                            var t = this,
                                e = this.activationState;
                            if (e.isActivated) {
                                var i = (0, n.Cl)({}, e);
                                e.isProgrammatic ? (requestAnimationFrame((function () {
                                    t.animateDeactivation(i)
                                })), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame((function () {
                                    t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(i), t.resetActivationState()
                                })))
                            }
                        }, e.prototype.animateDeactivation = function (t) {
                            var e = t.wasActivatedByPointer,
                                i = t.wasElementMadeActive;
                            (e || i) && this.runDeactivationUXLogicIfReady()
                        }, e.prototype.layoutInternal = function () {
                            var t = this;
                            this.frame = this.adapter.computeBoundingRect();
                            var i = Math.max(this.frame.height, this.frame.width);
                            this.maxRadius = this.adapter.isUnbounded() ? i : Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2)) + e.numbers.PADDING;
                            var n = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
                            this.adapter.isUnbounded() && n % 2 != 0 ? this.initialSize = n - 1 : this.initialSize = n, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars()
                        }, e.prototype.updateLayoutCssVars = function () {
                            var t = e.strings,
                                i = t.VAR_FG_SIZE,
                                n = t.VAR_LEFT,
                                s = t.VAR_TOP,
                                o = t.VAR_FG_SCALE;
                            this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
                                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                                top: Math.round(this.frame.height / 2 - this.initialSize / 2)
                            }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"))
                        }, e
                    }(s.I)
            },
            9846: (t, e, i) => {
                i.d(e, {
                    C: () => s
                });
                var n = ["input", "button", "textarea", "select"],
                    s = function (t) {
                        var e = t.target;
                        if (e) {
                            var i = ("" + e.tagName).toLowerCase(); - 1 === n.indexOf(i) && t.preventDefault()
                        }
                    }
            },
            9891: (t, e, i) => {
                i.d(e, {
                    Jv: () => n,
                    OK: () => s,
                    P$: () => r,
                    Y7: () => o,
                    nL: () => a
                });
                var n, s, o = {
                        ANCHOR: "mdc-menu-surface--anchor",
                        ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
                        ANIMATING_OPEN: "mdc-menu-surface--animating-open",
                        FIXED: "mdc-menu-surface--fixed",
                        IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
                        OPEN: "mdc-menu-surface--open",
                        ROOT: "mdc-menu-surface"
                    },
                    r = {
                        CLOSED_EVENT: "MDCMenuSurface:closed",
                        CLOSING_EVENT: "MDCMenuSurface:closing",
                        OPENED_EVENT: "MDCMenuSurface:opened",
                        OPENING_EVENT: "MDCMenuSurface:opening",
                        FOCUSABLE_ELEMENTS: ["button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")
                    },
                    a = {
                        TRANSITION_OPEN_DURATION: 120,
                        TRANSITION_CLOSE_DURATION: 75,
                        MARGIN_TO_EDGE: 32,
                        ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67,
                        TOUCH_EVENT_WAIT_MS: 30
                    };
                ! function (t) {
                    t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL"
                }(n || (n = {})),
                function (t) {
                    t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END"
                }(s || (s = {}))
            }
        },
        e = {};

    function i(n) {
        var s = e[n];
        if (void 0 !== s) return s.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n](o, o.exports, i), o.exports
    }
    i.d = (t, e) => {
        for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    (() => {
        const t = i(4265),
            e = i(671),
            n = i(7617),
            s = i(7560),
            o = i(2423),
            r = i(6279),
            a = i(6879),
            l = i(3446),
            d = i(5015),
            u = i(7876),
            c = i(1341),
            h = i(7719),
            p = i(5659),
            E = i(5270),
            f = i(837),
            m = i(3150),
            T = i(8918),
            g = i(6743),
            I = i(5190);
        var v, A;

        function C(t, e = document) {
            return e.querySelectorAll(t)
        }! function (t) {
            t.INTERACTED = "gdm--interacted", t.JS = "js", t.NO_JS = "no-js"
        }(v || (v = {})),
        function (t) {
            t.FOOTER = ".glue-footer", t.HEADER = ".glue-header", t.PAGE_COVER = ".page-cover--chameleon", t.SCROLL_LINK = "#content a[href]:not(.glue-jumplinks__link)", t.SOCIAL = ".glue-social"
        }(A || (A = {})), n.default.register("MDCTextField", s.MDCTextField), (0, n.default)(), window.customElements.define(o.GdmAccordionSelector.ROOT, o.GdmAccordion), window.customElements.define(r.GdmCaptionSelector.ROOT, r.GdmCaption), window.customElements.define(a.GdmCarouselSelector.ROOT, a.GdmCarousel), window.customElements.define(l.GdmEvaluationsSelector.ROOT, l.GdmEvaluations), window.customElements.define(d.GdmFilterSelector.ROOT, d.GdmFilter), window.customElements.define(h.GdmJumplinksSelector.ROOT, h.GdmJumplinks), window.customElements.define(E.GdmNewsletterSelector.ROOT, E.GdmNewsletter), window.customElements.define(c.GdmPaginationSelector.ROOT, c.GdmPagination), window.customElements.define(m.GdmVideoSelector.VIDEO_EMBED, m.GdmVideoEmbed), window.customElements.define(T.GdmVisualListSelector.ROOT, T.GdmVisualList), window.customElements.define(m.GdmVideoSelector.YOUTUBE, m.GdmYouTube), document.addEventListener("DOMContentLoaded", (function () {
            document.body.classList.remove(v.NO_JS), document.body.classList.add(v.JS), I.init(), p.ModalManager.register(), g.observe();
            const i = C(A.PAGE_COVER);
            for (const t of i) new f.PageCover(t);
            const n = C(A.SCROLL_LINK);
            new u.GdmScroll(n);
            const s = C(A.SOCIAL);
            for (const t of s) new e.Social(t);

            function o() {
                document.documentElement.classList.add(v.INTERACTED), document.removeEventListener(t.EventType.POINTERDOWN, o), document.removeEventListener(t.EventType.KEYDOWN, o)
            }
            document.addEventListener(t.EventType.POINTERDOWN, o), document.addEventListener(t.EventType.KEYDOWN, o)
        }))
    })()
})();