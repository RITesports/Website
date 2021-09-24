import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

export type InternalLinkProps =
  { children: ReactNode }
  & Pick<LinkProps, 'href'>
  & Omit<ComponentPropsWithRef<'a'>, 'href' | 'rel' | 'target'>;
const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>(({ href, children, ...props }, ref) => (
  <Link href={href}>
    <a ref={ref} {...props}>
      {children}
    </a>
  </Link>
));
InternalLink.displayName = 'InternalLink';

export default InternalLink;
