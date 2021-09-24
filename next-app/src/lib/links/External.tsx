import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

export type ExternalLinkProps =
  { children: ReactNode }
  & Pick<Required<ComponentPropsWithRef<'a'>>, 'href'>
  & Omit<ComponentPropsWithRef<'a'>, 'rel' | 'target'>;
const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(({ href, children, ...props }, ref) => (
  <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
));
ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
