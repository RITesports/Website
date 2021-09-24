import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode, forwardRef } from 'react';

export type LinkProps =
  { children: ReactNode }
  & Pick<NextLinkProps, 'href'>
  & Omit<MuiLinkProps, 'component' | 'href' | 'rel' | 'target'>;
const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ href, children, ...props }, ref) => (
  <NextLink href={href} passHref>
    <MuiLink ref={ref} {...props}>
      {children}
    </MuiLink>
  </NextLink>
));
Link.displayName = 'MuiInternalLink';

export default Link;
