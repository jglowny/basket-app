import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Ui/Text',
  component: Text,
//   tags: ['autodocs'],

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
  },
};

