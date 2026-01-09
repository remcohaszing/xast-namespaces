import type { Element } from 'xast'

export const input = (
  <ns:parent xmlns:ns="https://ns.example">
    <ns:child ns:attr="value" />
  </ns:parent>
) as Element
