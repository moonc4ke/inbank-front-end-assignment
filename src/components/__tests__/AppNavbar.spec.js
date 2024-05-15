import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AppNavbar from '@/components/AppNavbar.vue';
import { RouterLinkStub } from '@vue/test-utils';

describe('AppNavbar', () => {
  it('renders the component properly', () => {
    const wrapper = mount(AppNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('renders the Inbank logo', () => {
    const wrapper = mount(AppNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('alt')).toBe('Inbank logo');
    expect(img.attributes('src')).toBe('/src/assets/inbank_logo.svg');
  });

  it('contains a RouterLink to the homepage', () => {
    const wrapper = mount(AppNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const routerLink = wrapper.findComponent(RouterLinkStub);
    expect(routerLink.exists()).toBe(true);
    expect(routerLink.props('to')).toBe('/');
  });

  it('applies the correct classes to the div', () => {
    const wrapper = mount(AppNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const div = wrapper.find('div');
    expect(div.classes()).toContain('m-4');
    expect(div.classes()).toContain('xl:mx-10');
    expect(div.classes()).toContain('ml:py-6');
  });

  it('applies the correct classes to the img', () => {
    const wrapper = mount(AppNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const img = wrapper.find('img');
    expect(img.classes()).toContain('w-28');
    expect(img.classes()).toContain('h-auto');
    expect(img.classes()).toContain('xl:w-44');
  });
});
