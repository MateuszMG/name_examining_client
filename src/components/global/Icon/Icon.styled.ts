import { BsFillPersonFill } from 'react-icons/bs';
import { FaPowerOff } from 'react-icons/fa';
import { MdOutlineContentCopy } from 'react-icons/md';
import styled, { css } from 'styled-components';

interface IconProps {
  fontSize?: string;
}

const iconStyles = css<IconProps>(
  ({ fontSize, theme: { colors } }) => css`
    cursor: pointer;
    color: ${colors.primary};
    font-size: ${fontSize || '24px'};
    transition: 0.3s;

    &:hover {
      color: ${colors.fontPrimary};
    }
  `,
);

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
`;

export const CopyIcon = styled(MdOutlineContentCopy)`
  ${iconStyles}
`;

export const LogoutIcon = styled(FaPowerOff)`
  ${iconStyles}
`;

export const PersonIcon = styled(BsFillPersonFill)`
  ${iconStyles}
`;
