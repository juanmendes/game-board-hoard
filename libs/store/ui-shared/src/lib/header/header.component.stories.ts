import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { Meta, moduleMetadata } from '@storybook/angular';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
    //...
  ],
} as Meta<HeaderComponent>;

export const Primary = {
  render: (args: HeaderComponent) => ({
    props: args,
  }),
  args: {
    title: '',
  },
};
