import { IconProps } from '@mui/material/Icon';

import IconFromLink from 'lib/icons';

export type TigerLogoWhiteProps = Omit<IconProps, 'color'>;
const TigerLogoWhite = (props: TigerLogoWhiteProps) => <IconFromLink src="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/assets/TigerLogo_White.svg" alt="tiger logo white" {...props} />;

export default TigerLogoWhite;
