import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Ui/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn()},

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Secondary Clisk me',
    disabled: true
  },
};

export const Red: Story = {
    args: {
      label: 'Secondary Clisk me',
      className: "bg-red-500 hover:bg-red-900"
    },
  };

