!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() :
        "function" == typeof define && define.amd ? define([], e) :
            "object" == typeof exports ? exports.jekyllTabs = e() :
                t.jekyllTabs = e()
}(self, (() => {
    return t = {
        918: t => {
            t.exports = {
                getChildPosition: t => {
                    const e = t.parentNode;
                    for (let o = 0; o < e.children.length; o++)
                        if (e.children[o] === t) return o
                },
                findElementsWithTextContent: (t, e) => {
                    const o = document.querySelectorAll(t),
                        a = [];
                    for (let t = 0; t < o.length; t++) {
                        const n = o[t];
                        n.textContent.trim() === e.trim() && a.push(n)
                    }
                    return a
                },
                createElementFromHTML: t => {
                    const e = document.createElement("template");
                    return e.innerHTML = t.trim(), e.content.firstChild
                },
                addClass: (t, e, o) => {
                    t.className = t.className ? `${t.className} ${e}` : e,
                        setTimeout((() => {
                            t.className = t.className.replace(e, "").trim()
                        }), o)
                }
            }
        },
        613: (t, e, o) => {
            const {
                activateTabFromUrl: a,
                updateUrlWithActiveTab: n,
                handleTabClicked: s,
                addCopyToClipboardButtons: r,
                syncTabsWithSameLabels: l,
                appendToastMessageHTML: i
            } = o(925);
            t.exports = {
                init: (t = {}) => {
                    const e = {
                        syncTabsWithSameLabels: !1,
                        activateTabFromUrl: !1,
                        addCopyToClipboardButtons: !1,
                        copyToClipboardSettings: {
                            buttonHTML: "<button>Copy</button>",
                            showToastMessageOnCopy: !1,
                            toastMessage: "Code copied to clipboard",
                            toastDuration: 3e3
                        }
                    };
                    const o = {
                        ...e,
                        ...t,
                        copyToClipboardSettings: {
                            ...e.copyToClipboardSettings,
                            ...t.copyToClipboardSettings
                        }
                    };
                    const c = document.querySelectorAll("ul.tab > li > a");
                    Array.prototype.forEach.call(c, (t => {
                        t.addEventListener("click", (e => {
                            e.preventDefault(), s(t), o.activateTabFromUrl && n(t), o.syncTabsWithSameLabels && l(t)
                        }), !1)
                    }));
                    if (o.addCopyToClipboardButtons) {
                        const t = o.copyToClipboardSettings;
                        r(t), t.showToastMessageOnCopy && i(t.toastMessage)
                    }
                    o.activateTabFromUrl && a()
                }
            }
        },
        925: (t, e, o) => {
            const {
                getChildPosition: a,
                createElementFromHTML: n,
                findElementsWithTextContent: s,
                addClass: r
            } = o(918);
            const l = t => {
                const e = t.querySelectorAll("ul > li");
                Array.prototype.forEach.call(e, (t => {
                    t.classList.remove("active")
                }))
            };
            const i = t => {
                const e = t.parentNode,
                    o = e.parentNode,
                    n = a(e);
                if (e.className.includes("active")) return;
                const s = o.getAttribute("data-tab");
                if (!s) return;
                const r = document.getElementById(s);
                l(o), l(r), r.querySelectorAll("ul.tab-content > li")[n].classList.add("active"), e.classList.add("active")
            };
            const c = (t, e) => {
                if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t);
                else {
                    const e = document.createElement("textarea");
                    e.value = t, e.style.position = "absolute", e.style.left = "-999999px", document.body.prepend(e), e.select();
                    try {
                        document.execCommand("copy")
                    } catch (t) {
                        console.error(t)
                    } finally {
                        e.remove()
                    }
                }
                "function" == typeof e && e()
            };
            const d = t => {
                r(document.getElementById("jekyll-tabs-copy-to-clipboard-message"), "show", t)
            };
            t.exports = {
                removeActiveClasses: l,
                handleTabClicked: i,
                copyToClipboard: c,
                addCopyToClipboardButtons: ({
                    buttonHTML: t,
                    showToastMessageOnCopy: e,
                    toastDuration: o
                }) => {
                    const a = document.querySelectorAll("ul.tab-content > li pre");
                    for (let s = 0; s < a.length; s++) {
                        const r = a[s],
                            l = r.parentNode,
                            c = n(t);
                        let p;
                        l.style.position = "relative", c.style.position = "absolute", c.style.top = "0px", c.style.right = "0px", l.appendChild(c),
                            e && (p = () => {
                                d(o)
                            }), c.addEventListener("click", (() => {
                                c(r.innerText, p)
                            }))
                    }
                },
                activateTabFromUrl: () => {
                    const t = window.location.hash?.substring(1);
                    if (!t) return;
                    const e = document.getElementById(t);
                    if (!e) return;
                    const o = new URLSearchParams(window.location.search).get("active_tab");
                    if (!o) return;
                    const a = e.querySelector("li#" + o + " > a");
                    a && i(a)
                },
                updateUrlWithActiveTab: t => {
                    const e = t.parentNode,
                        o = e.parentNode,
                        a = new URLSearchParams(window.location.search);
                    a.set("active_tab", e.id);
                    const n = window.location.pathname + "?" + a.toString() + "#" + o.id;
                    history.replaceState(null, "", n)
                },
                syncTabsWithSameLabels: t => {
                    const e = s("a", t.textContent);
                    for (let o = 0; o < e.length; o++) e[o] !== t && i(e[o])
                },
                appendToastMessageHTML: t => {
                    const e = document.createElement("div");
                    e.id = "jekyll-tabs-copy-to-clipboard-message", e.textContent = t,
                        document.getElementsByTagName("body")[0].appendChild(e)
                }
            }
        }
    }, e = {},
    function o(a) {
        var n = e[a];
        if (void 0 !== n) return n.exports;
        var s = e[a] = {
            exports: {}
        };
        return t[a](s, s.exports, o), s.exports
    }(613);
var t, e
}));

window.addEventListener('load', function () {
    jekyllTabs.init();
});
