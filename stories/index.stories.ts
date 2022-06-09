import { html, TemplateResult } from '@skhemata/skhemata-base';
import {} from '@storybook/addon-controls';
import '../skhemata-footer.js';

const configData = {
  title: 'Get Started',
  subtitle: 'Ready to',
  button: {
    label: 'GET STARTED',
    link: '#',
  },
  copyright: '© 2021 Thrinacia Inc. All Rights Reserved.',
  menus: [
    {
      title: 'Menu Title',
      submenu: [
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
      ],
    },
    {
      title: 'Menu Title',
      submenu: [
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
      ],
    },
    {
      title: 'Menu Title',
      submenu: [
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
      ],
    },
    {
      title: 'Menu Title',
      submenu: [
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
        { label: 'Label Name', link: '#' },
      ],
    },
  ],
  socialMedia: [
    { type: 'twitter', link: '#' },
    { type: 'linkedin', link: '#' },
    { type: 'facebook', link: '#' },
    { type: 'instagram', link: '#' },
  ],
};

export default {
  title: 'General/SkhemataFooter',
  component: 'skhemata-footer',
  argTypes: {
    configData: {
      name: 'config-data',
      data: { type: 'object' },
      control: { type: 'object' },
      description:
        'Configurable data object. Limit max 4 menu columns, Limit max 5 submenu items',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'object' },
        defaultValue: { summary: 'null' },
      },
    },
    backgroundColor: {
      name: '--skhemata-footer-background',
      control: 'color',
      description: 'CSS property variable',
      table: {
        category: 'CSS Properties',
      },
    },
    footerButtonColor: {
      name: '--skhemata-footer-button-background',
      control: 'color',
      description: 'CSS property variable for footer background color',
      table: {
        category: 'CSS Properties',
      },
    },
    footerTitleColor: {
      name: '--skhemata-footer-title-color',
      control: 'color',
      description: 'CSS property variable for footer title color',
      table: {
        category: 'CSS Properties',
      },
    },
    footerTextColor: {
      name: '--skhemata-footer-text-color',
      control: 'color',
      description: 'CSS property variable for footer text color',
      table: {
        category: 'CSS Properties',
      },
    },
    footerLinkColor: {
      name: '--skhemata-footer-text-color',
      control: 'color',
      description: 'CSS property variable for footer link color',
      table: {
        category: 'CSS Properties',
        default: 'null',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        // eslint-disable-next-line no-template-curly-in-string
        code: `<skhemata-footer config-data="${JSON.stringify(
          configData,
          null,
          2
        )}"></skhemata-footer>`,
      },
    },
    widgetCode: `
      <skhemata-footer config-data='{"title":"Get Started","subtitle":"Ready to","button":{"label":"GET STARTED","link":"#"},"copyright":"© 2021 Thrinacia Inc. All Rights Reserved.","menus":[{"title":"Menu Title","submenu":[{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"}]},{"title":"Menu Title","submenu":[{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"}]},{"title":"Menu Title","submenu":[{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"}]},{"title":"Menu Title","submenu":[{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"},{"label":"Label Name","link":"#"}]}],"socialMedia":[{"type":"twitter","link":"#"},{"type":"linkedin","link":"#"},{"type":"facebook","link":"#"},{"type":"instagram","link":"#"}]}'></skhemata-footer>

      <script type="module" src="https://cdn.jsdelivr.net/npm/@skhemata/skhemata-footer@latest/build/index.js"></script> 
    `,
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  configData?: object;
  backgroundColor?: string;
  footerButtonColor?: string;
  footerTitleColor?: string;
  footerTextColor?: string;
  footerLinkColor?: string;
}

const Template: Story<ArgTypes> = ({
  backgroundColor,
  footerButtonColor,
  footerTitleColor,
  footerTextColor,
  footerLinkColor,
}: ArgTypes) => html`
  <skhemata-footer
    style="
      --skhemata-footer-background: ${backgroundColor || 'rgb(57, 68, 75)'};
      --skhemata-footer-button-background: ${footerButtonColor ||
    'rgb(0, 179, 167)'};
      --skhemata-footer-title-color: ${footerTitleColor ||
    'rgb(255, 255, 255)'};
      --skhemata-footer-text-color: ${footerTextColor || 'rgb(122, 122, 122)'};
      --skhemata-footer-link-color: ${footerLinkColor || 'rgb(255, 255, 255)'};
    "
    .configData=${configData}
  >
  </skhemata-footer>
`;

export const Regular = Template.bind({});
Regular.args = {
  configData: {
    title: 'Get Started',
    subtitle: 'Ready to',
    button: {
      label: 'GET STARTED',
      link: '#',
    },
    copyright: '© 2021 Thrinacia Inc. All Rights Reserved.',
    menus: [
      {
        title: 'Menu Title',
        submenu: [
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
        ],
      },
      {
        title: 'Menu Title',
        submenu: [
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
        ],
      },
      {
        title: 'Menu Title',
        submenu: [
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
        ],
      },
      {
        title: 'Menu Title',
        submenu: [
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
          { label: 'Label Name', link: '#' },
        ],
      },
    ],
    socialMedia: [
      { type: 'twitter', link: '#' },
      { type: 'linkedin', link: '#' },
      { type: 'facebook', link: '#' },
      { type: 'instagram', link: '#' },
    ],
  },
  backgroundColor: 'rgb(57, 68, 75)',
  footerButtonColor: 'rgb(0, 179, 167)',
  footerTitleColor: 'rgb(255, 255, 255)',
  footerTextColor: 'rgb(122, 122, 122)',
  footerLinkColor: 'rgb(255, 255, 255)',
};
