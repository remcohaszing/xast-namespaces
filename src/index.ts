import { Attributes, Element, Root } from 'xast';

/**
 * A Unist representation of an XML attribute with namespace information.
 */
export interface NamespacedAttribute {
  /**
   * Mark the object as an attribute node.
   */
  type: 'attribute';

  /**
   * The full name of the attribute. This includes the local name and namespace.
   *
   * For example:
   * - Given the attribute `foo="value"`, the name is `foo`.
   * - Given the attribute `foo:bar="value"`, the name is `foo:bar`.
   *
   * **Note**: It’s recommended to use `localName` and `namespaceURI` instead.
   */
  name: string;

  /**
   * The local name of the attribute.
   *
   * For example:
   * - Given the attribute `foo="value"`, the local name is `foo`.
   * - Given the attribute `foo:bar="value"`, the local name is `bar`.
   */
  localName: string;

  /**
   * The namespace of the attribute.
   *
   * For example:
   * - Given the element `foo="value"`, the namespace is `undefined`.
   * - Given the element `foo:bar="value"`, the namespace is `foo`.
   *
   * **Note**: It’s recommended to use `namespaceURI` instead.
   */
  namespace?: string;

  /**
   * The namespace URI of the attribute.
   *
   * Despite the commonly used name, the namespace URI can be any string.
   *
   * The namespace URI can be determined by any of the ancestor element namespace configurations. If
   * an attribute doesn’t have an explicit namespace, it doesn’t have a namespace URI either.
   */
  namespaceURI?: string;

  /**
   * The value of the attribute.
   *
   * For example:
   * - Given the attribute `foo="value"`, the value is `value`.
   * - Given the attribute `foo:bar="value"`, the value is `value`.
   */
  value: Attributes[string];
}

/**
 * A XAST compatible representation of an XML element with namespace information.
 */
export interface NamespacedElement extends Element {
  /**
   * The local name of the element.
   *
   * For example:
   * - Given the element `<foo />`, the local name is `foo`.
   * - Given the element `<foo:bar />`, the local name is `bar`.
   */
  localName: string;

  /**
   * The namespace name of the element.
   *
   * For example:
   * - Given the element `<foo />`, the namespace is `foo`.
   * - Given the element `<foo:bar />`, the namespace is `bar`.
   *
   * **Note**: It’s recommended to use `localName` and `namespaceURI` instead.
   */
  namespace?: string;

  /**
   * The namespace URI of the element.
   *
   * Despite the commonly used name, the namespace URI can be any string.
   *
   * The namespace URI can be determined by any of the ancestor element namespace configurations. If
   * an element doesn’t have an explicit namespace, the default namespace is used, which can be set
   * using the `xmlns` attribute.
   *
   * For example:
   * - Given the element `<foo />`, the namespace URI is `undefined`.
   * - Given the element `<foo xmlns="https://example.com" />`, the namespace URI is
   * `https://example.com`.
   * - Given the element `<foo:bar xmlns:foo="https://example.com" />`, the namespace URI is
   * `https://example.com`.
   */
  namespaceURI?: string;

  /**
   * A mapping of namespace names to namespace URIs in the context of position of the element in the
   * XML tree.
   *
   * Because XML namespace are cascaded from their ancestors, this is needed to determine which
   * namespaces name represents which namespace URI in the current context.
   *
   * The default namespace is represented by an empty string.
   */
  namespaces: Record<string, string>;

  /**
   * @inheritdoc
   */
  children: (Exclude<Element['children'][number], Element> | NamespacedElement)[];

  /**
   * An array of attributes with their namespace information.
   */
  namespacedAttributes: NamespacedAttribute[];
}

/**
 * Split an XML name into a namespace and local name.
 *
 * @param name - The string to split.
 * @returns A tuple of namespace and local name.
 */
function splitNamespace(name: string): [string | undefined, string] {
  const split = name.split(':');
  if (split.length === 1) {
    return [, split[0]];
  }
  const [namespace, ...localName] = split;
  return [namespace, localName.join(':')];
}

/**
 * Recursively attach namespaces to each element in an XML element tree.
 *
 * @param element - The element to attach namespace information onto.
 * @param parentNamespaces - The namespaces that are inherited from the parent element.
 * @returns A copy of the node, but with namespace data attached.
 */
function attachNamespacesRecursive(
  element: Element,
  parentNamespaces?: Record<string, string>,
): NamespacedElement {
  const namespaces = { ...parentNamespaces };

  const getNamespaceURI = (ns?: string, defaultURI?: string): string | undefined => {
    if (ns && Object.hasOwnProperty.call(namespaces, ns)) {
      return namespaces[ns];
    }
    return defaultURI;
  };

  const attributes = element.attributes ? Object.entries(element.attributes) : [];

  for (const [name, value] of attributes) {
    if (value == null) {
      continue;
    }
    const [ns, loc] = splitNamespace(name);
    if (ns === 'xmlns') {
      namespaces[loc] = value;
    } else if (!ns && loc === 'xmlns') {
      namespaces[''] = value;
    }
  }

  const namespacedAttributes = attributes.map<NamespacedAttribute>(([name, value]) => {
    const [ns, loc] = splitNamespace(name);
    return {
      type: 'attribute',
      name,
      value,
      namespace: ns,
      localName: loc,
      namespaceURI: getNamespaceURI(ns),
    };
  });

  const [namespace, localName] = splitNamespace(element.name);

  return {
    ...element,
    localName,
    namespace,
    namespaceURI: getNamespaceURI(namespace, namespaces['']),
    namespaces,
    namespacedAttributes,
    children: element.children.map((child) =>
      child.type === 'element' ? attachNamespacesRecursive(child, namespaces) : child,
    ),
  };
}

/**
 * Attach XML namespace data to a xast tree.
 *
 * @param tree - The document tree to attach namespace data to. If a xast root is passed, its
 * element child will be used.
 * @returns A copy of the tree, but with namespace data attached.
 */
export function attachNamespaces(tree: Element | Root): NamespacedElement {
  return attachNamespacesRecursive(
    // For valid XML, the root always has one single element.
    tree.type === 'root'
      ? (tree.children.find((child) => child.type === 'element') as Element)
      : tree,
  );
}
