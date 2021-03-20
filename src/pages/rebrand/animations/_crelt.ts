// https://github.com/marijnh/crelt
// Copyright (C) 2020 by Marijn Haverbeke <marijnh@gmail.com>
// Licensed under the MIT LICENSE

type Child = string | Node | null | undefined | readonly Child[]

export function crelt(elt: string | HTMLElement, attrs: { [attr: string]: any }, ...children: Child[]): HTMLElement
export function crelt(elt: string | HTMLElement, ...children: Child[]): HTMLElement
export function crelt() {
  var elt = arguments[0]
  if (typeof elt == 'string') elt = document.createElement(elt)
  var i = 1,
    next = arguments[1]
  if (next && typeof next == 'object' && next.nodeType == null && !Array.isArray(next)) {
    for (var name in next)
      if (Object.prototype.hasOwnProperty.call(next, name)) {
        var value = next[name]
        if (typeof value == 'string') elt.setAttribute(name, value)
        else if (value != null) elt[name] = value
      }
    i++
  }
  for (; i < arguments.length; i++) add(elt, arguments[i])
  return elt
}

function add(elt: HTMLElement, child: HTMLElement) {
  if (typeof child == 'string') {
    elt.appendChild(document.createTextNode(child))
  } else if (child == null) {
  } else if (child.nodeType != null) {
    elt.appendChild(child)
  } else if (Array.isArray(child)) {
    for (var i = 0; i < child.length; i++) add(elt, child[i])
  } else {
    throw new RangeError('Unsupported child node: ' + child)
  }
}
