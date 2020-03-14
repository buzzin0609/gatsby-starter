import { Link } from '@reach/router';
import { lighten } from 'polished';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GoBell, GoCalendar } from 'react-icons/go';
import * as colors from '../design-tokens/colors';
import { pin } from '../design-tokens/positioning';
import Box from '../elements/Box';
import Flex from '../elements/Flex';
import Grid from '../elements/Grid';
import Typography from '../elements/Typography';
import { isPage } from '../utils/navigation';

interface Props {}

const links = [
  {
    text: 'Link',
    icon: GoBell,
    link: '/link',
  },
  {
    text: 'Link',
    icon: GoCalendar,
    link: '/link',
  },
  {
    text: 'Link',
    icon: GoBell,
    link: '/link',
  },
  {
    text: 'Link',
    icon: FaUser,
    link: '/link',
  },
];

function MainMenu({}: Props) {
  return (
    <Box
      background={colors.primary}
      css={`
        position: fixed;
        width: 100%;
        ${pin(0, 'bottom', 'left')}
      `}
    >
      <Grid cols={'1fr 1fr 1fr 1fr'} component={'nav'}>
        {links.map(link => (
          <Link
            to={link.link}
            key={link.text}
            css={`
              text-decoration: none;
            `}
          >
            <Flex
              background={
                isPage(link.link)
                  ? lighten(0.1, colors.primary)
                  : colors.primary
              }
              p={5}
              flexDirection={'column'}
              alignItems={'center'}
              color={'white'}
            >
              <Box component={link.icon} mb={5} />
              <Typography fontSize={12}>{link.text}</Typography>
            </Flex>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default MainMenu;
