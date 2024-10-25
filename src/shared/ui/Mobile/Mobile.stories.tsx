import { Mobile, MobileProps } from "@shared/ui/Mobile";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Shared/Mobile",
  component: Mobile,
} as Meta<MobileProps>;

const Template: StoryFn<MobileProps> = (args) => <Mobile {...args} />;

export const Default = Template.bind({});
Default.args = {
  isIndependent: false,
  children: <div>Mobile is not Independent Mode</div>,
};

export const Independent = Template.bind({});
Independent.args = {
  isIndependent: true,
  children: <div>Mobile is Independent Mode</div>,
};
