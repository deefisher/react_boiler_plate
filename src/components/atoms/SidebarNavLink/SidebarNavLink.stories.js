import { Projects } from 'grommet-icons';
import React from 'react';
import SidebarNavLink from './SidebarNavLink';

export const DefaultSidebarNavLink = (props) => <SidebarNavLink icon={<Projects />} {...props} />;
export const HoverSidebarNavLink = (props) => <DefaultSidebarNavLink {...props} />;
HoverSidebarNavLink.parameters = { pseudo: { hover: true } };

const SidebarNavLinkStory = {
    title: 'Atoms/SidebarNavLink',
    component: SidebarNavLink,
};

export default SidebarNavLinkStory;
