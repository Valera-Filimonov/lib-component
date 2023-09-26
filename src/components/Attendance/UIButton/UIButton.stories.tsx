import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIButton from './UIButton';

export default {
  title: 'ReactComponentLibrary/Attendance/UIButton',
  component: UIButton,
} as ComponentMeta<typeof UIButton>;

const Template: ComponentStory<typeof UIButton> = (args) => <UIButton {...args} />;

export const UIButtonHelloWorld = Template.bind({});
UIButtonHelloWorld.args = {
  label: 'Подключиться',
};
