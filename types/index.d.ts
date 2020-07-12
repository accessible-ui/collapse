import * as React from 'react'
import type {PortalizeProps} from 'react-portalize'
export declare function useDisclosure(): DisclosureContextValue
/**
 * This component creates the context for your disclosure target and trigger
 * and contains some configuration options.
 */
export declare function Disclosure({
  id,
  open,
  defaultOpen,
  onChange,
  children,
}: DisclosureProps): JSX.Element
export declare namespace Disclosure {
  var displayName: string
}
/**
 * A React hook for creating a headless disclosure target to [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/examples/disclosure/disclosure-faq.html).
 *
 * @param target A React ref or HTML element
 * @param options Configuration options
 */
export declare function useTarget<T extends HTMLElement>(
  target: React.RefObject<T> | T | null,
  options?: UseTargetOptions
): {
  readonly 'aria-hidden': string
  readonly id: string | undefined
  readonly className: string | undefined
  readonly style: {
    visibility: string
  } & React.CSSProperties
}
/**
 * This component wraps any React element and turns it into a
 * disclosure target.
 */
export declare function Target({
  closeOnEscape,
  portal,
  openClass,
  closedClass,
  openStyle,
  closedStyle,
  preventScroll,
  children,
}: TargetProps):
  | React.ReactElement<
      any,
      | string
      | ((
          props: any
        ) => React.ReactElement<
          any,
          string | any | (new (props: any) => React.Component<any, any, any>)
        > | null)
      | (new (props: any) => React.Component<any, any, any>)
    >
  | React.FunctionComponentElement<PortalizeProps>
export declare namespace Target {
  var displayName: string
}
/**
 * A React hook for creating a headless close button to [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/examples/disclosure/disclosure-faq.html).
 * In addition to providing accessibility props to your component, this
 * hook will add events for interoperability between actual <button> elements
 * and fake ones e.g. <a> and <div> to the target element.
 *
 * @param target A React ref or HTML element
 * @param options Configuration options
 */
export declare function useCloseButton<
  T extends HTMLElement,
  E extends React.MouseEvent<T, MouseEvent>
>(
  target: React.RefObject<T> | T | null,
  {onClick}?: UseCloseButtonOptions<E>
): {
  readonly 'aria-controls': string | undefined
  readonly 'aria-expanded': string
  readonly 'aria-label': 'Close'
} & {
  readonly onClick: (event: E) => void
  readonly role: 'button'
  readonly tabIndex: 0
}
/**
 * This is a convenience component that wraps any React element and adds
 * an onClick handler which closes the disclosure.
 */
export declare function CloseButton({
  children,
}: CloseButtonProps): React.ReactElement<
  any,
  | string
  | ((
      props: any
    ) => React.ReactElement<
      any,
      string | any | (new (props: any) => React.Component<any, any, any>)
    > | null)
  | (new (props: any) => React.Component<any, any, any>)
>
export declare namespace CloseButton {
  var displayName: string
}
/**
 * A React hook for creating a headless disclosure trigger to [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/examples/disclosure/disclosure-faq.html).
 * In addition to providing accessibility props to your component, this
 * hook will add events for interoperability between actual <button> elements
 * and fake ones e.g. <a> and <div> to the target element
 *
 * @param target A React ref or HTML element
 * @param options Configuration options
 */
export declare function useTrigger<
  T extends HTMLElement,
  E extends React.MouseEvent<T, MouseEvent>
>(
  target: React.RefObject<T> | T | null,
  options?: UseTriggerOptions<E>
): {
  readonly 'aria-controls': string | undefined
  readonly 'aria-expanded': string
  readonly className: string | undefined
  readonly style: React.CSSProperties | undefined
} & {
  readonly onClick: (event: E) => void
  readonly role: 'button'
  readonly tabIndex: 0
}
/**
 * This component wraps any React element and adds an `onClick` handler
 * which toggles the open state of the disclosure target.
 */
export declare function Trigger({
  openClass,
  closedClass,
  openStyle,
  closedStyle,
  children,
}: TriggerProps): React.ReactElement<
  any,
  | string
  | ((
      props: any
    ) => React.ReactElement<
      any,
      string | any | (new (props: any) => React.Component<any, any, any>)
    > | null)
  | (new (props: any) => React.Component<any, any, any>)
>
export declare namespace Trigger {
  var displayName: string
}
export interface DisclosureContextValue {
  /**
   * The open state of the disclosure
   */
  isOpen: boolean
  /**
   * Opens the disclosure
   */
  open: () => void
  /**
   * Closes the disclosure
   */
  close: () => void
  /**
   * Toggles the open state of the disclosure
   */
  toggle: () => void
  /**
   * A unique ID for the disclosure target
   */
  id?: string
}
export interface DisclosureProps {
  /**
   * This creates a controlled disclosure component where the open state of the
   * disclosure is controlled by this property.
   */
  open?: boolean
  /**
   * This sets the default open state of the disclosure. By default the disclosure
   * is closed.
   * @default false
   */
  defaultOpen?: boolean
  /**
   * By default this component creates a unique id for you, as it is required
   * for certain aria attributes. Supplying an id here overrides the auto id feature.
   */
  id?: string
  /**
   * This callback is invoked any time the `open` state of the disclosure changes.
   */
  onChange?: (open: boolean) => void
  /**
   * By default this component creates a unique id for you, as it is required for
   * certain aria attributes. Supplying an id here overrides the auto id feature.
   */
  children: React.ReactNode
}
export interface UseTriggerOptions<E = React.MouseEvent<any, MouseEvent>> {
  /**
   * Adds this class name to props when the disclosure is open
   */
  openClass?: string
  /**
   * Adds this class name to props when the disclosure is closed
   */
  closedClass?: string
  /**
   * Adds this style to props when the disclosure is open
   */
  openStyle?: React.CSSProperties
  /**
   * Adds this style to props when the disclosure is closed
   */
  closedStyle?: React.CSSProperties
  /**
   * Adds an onClick handler in addition to the default one that
   * toggles the disclosure's open state.
   */
  onClick?: (e: E) => any
}
export interface TriggerProps extends Omit<UseTriggerOptions<any>, 'onClick'> {
  children: JSX.Element | React.ReactElement
}
export interface UseTargetOptions {
  /**
   * Adds this class name to props when the disclosure is open
   */
  openClass?: string
  /**
   * Adds this class name to props when the disclosure is closed
   */
  closedClass?: string
  /**
   * Adds this style to props when the disclosure is open
   */
  openStyle?: React.CSSProperties
  /**
   * Adds this style to props when the disclosure is closed
   */
  closedStyle?: React.CSSProperties
  /**
   * Prevents the `window` from scrolling when the target is
   * focused after opening.
   */
  preventScroll?: boolean
  /**
   * When `true`, this closes the target element when the `Escape`
   * key is pressed.
   * @default true
   */
  closeOnEscape?: boolean
}
export interface TargetProps extends UseTargetOptions {
  /**
   * When `true` this will render the disclosure into a React portal with the
   * id `#portals`. You can render it into any portal by providing its query
   * selector here, e.g. `#foobar`, `[data-portal=true]`, or `.foobar`.
   * @default false
   */
  portal?:
    | boolean
    | undefined
    | null
    | string
    | Omit<PortalizeProps, 'children'>
  /**
   * The child is cloned by this component and has aria attributes injected into its
   * props as well events.
   */
  children: JSX.Element | React.ReactElement
}
export interface UseCloseButtonOptions<E = React.MouseEvent<any, MouseEvent>> {
  /**
   * Adds an onClick handler in addition to the default one that
   * closes the disclosure.
   */
  onClick?: (e: E) => any
}
export interface CloseButtonProps {
  /**
   * The child is cloned by this component and has aria attributes injected into its
   * props as well events.
   */
  children: JSX.Element | React.ReactElement
}
