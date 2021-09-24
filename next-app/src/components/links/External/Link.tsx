import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { ReactNode, forwardRef } from 'react';

export type LinkProps =
  { children: ReactNode }
  & Pick<Required<MuiLinkProps>, 'href'>
  & Omit<MuiLinkProps, 'component' | 'rel' | 'target'>;
const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ href, children, ...props }, ref) => (
  <MuiLink ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </MuiLink>
));
Link.displayName = 'MuiExternalLink';

export default Link;
