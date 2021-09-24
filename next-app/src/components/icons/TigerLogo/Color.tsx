import { IconProps } from '@mui/material/Icon';

import IconFromLink from 'lib/icons';

export type TigerLogoColorProps = Omit<IconProps, 'color'>;
const TigerLogoColor = (props: TigerLogoColorProps) => <IconFromLink src="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/assets/TigerLogo_Color.svg" alt="tiger logo color" {...props} />;

export default TigerLogoColor;
