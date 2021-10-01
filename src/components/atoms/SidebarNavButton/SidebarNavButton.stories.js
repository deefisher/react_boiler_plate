import { Projects } from 'grommet-icons';
import React from 'react';
import SidebarNavButton from './SidebarNavButton';

export const DefaultSidebarNavButton = (props) => <SidebarNavButton icon={<Projects />} {...props} />;
export const HoverSidebarNavButton = (props) => <DefaultSidebarNavButton {...props} />;
HoverSidebarNavButton.parameters = { pseudo: { hover: true } };

const SidebarNavButtonStory = {
    title: 'Atoms/SidebarNavButton',
    component: SidebarNavButton,
};

export default SidebarNavButtonStory;
