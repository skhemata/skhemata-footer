// import { html, css, property } from 'lit-element';
import {
  html,
  css,
  property,
  CSSResult,
  SkhemataBase,
} from '@skhemata/skhemata-base';

import { FontAwesomeIcon } from '@riovir/wc-fontawesome';

import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// eslint-disable-next-line import/extensions
import { SkhemataFooterStyle } from './style/SkhemataFooterStyle';

export class SkhemataFooter extends SkhemataBase {
  static get scopedElements() {
    return {
      'fa-icon': FontAwesomeIcon,
    };
  }

  static get styles() {
    return <CSSResult[]>[
      ...super.styles,
      SkhemataFooterStyle,
      css`
        footer {
          background: var(
            --skhemata-footer-background,
            rgb(57, 68, 75)
          ) !important;
        }
        .skhemata-footer-action-button {
          background: var(
            --skhemata-footer-button-background,
            rgb(0, 179, 167)
          ) !important;
        }
        .skhemata-footer-title {
          color: var(
            --skhemata-footer-title-color,
            rgb(255, 255, 255)
          ) !important;
        }
        .skhemata-footer-text,
        .skhemata-social-media {
          color: var(
            --skhemata-footer-text-color,
            rgb(122, 122, 122)
          ) !important;
        }

        .skhemata-social-media {
          margin-left: 1rem;
          border-radius: 50%;
          border: 1px solid
            var(--skhemata-footer-text-color, rgb(122, 122, 122)) !important;
          padding: 4px 5px;
        }

        .skhemata-footer-link:hover {
          color: var(
            --skhemata-footer-link-color,
            rgb(255, 255, 255)
          ) !important;
        }

        .skhemata-social-media:hover {
          color: var(
            --skhemata-footer-link-color,
            rgb(255, 255, 255)
          ) !important;
          border: 1px solid
            var(--skhemata-footer-link-color, rgb(255, 255, 255)) !important;
        }
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  checkMedia(media: any) {
    let template;
    switch (media.type) {
      case 'twitter':
        template = html`<a class="skhemata-social-media" href="${media.link}"
          ><fa-icon .icon=${faTwitter}></fa-icon
        ></a>`;
        break;
      case 'linkedin':
        template = html`<a class="skhemata-social-media" href="${media.link}"
          ><fa-icon .icon=${faLinkedin}></fa-icon
        ></a>`;
        break;
      case 'facebook':
        template = html`<a class="skhemata-social-media" href="${media.link}"
          ><fa-icon .icon=${faFacebook}></fa-icon
        ></a>`;
        break;
      case 'instagram':
        template = html`<a class="skhemata-social-media" href="${media.link}"
          ><fa-icon .icon=${faInstagram}></fa-icon
        ></a>`;
        break;
      default:
        template = html``;
    }
    return template;
  }

  @property({ type: Object, attribute: 'config-data' })
  configData: any;

  render() {
    return html`
      <footer class="footer skhemata-footer is-full">
        <div class="container">
          <div class="columns footer-top">
            <div class="column is-one-third has-text-centered-mobile">
              <div>
                <div
                  class="subtitle is-size-2 is-size-4-mobile has-text-white skhemata-footer-title"
                >
                  ${this.configData.subtitle}
                </div>
                <div
                  class="title is-size-1 is-size-3-mobile has-text-weight-bold has-text-white skhemata-footer-title"
                >
                  ${this.configData.title}
                </div>
                <a href="${this.configData.button.link}">
                  <button
                    class="button is-primary custom-is-primary custom-cta-2 skhemata-footer-action-button skhemata-footer-title"
                  >
                    ${this.configData.button.label}
                  </button>
                </a>
              </div>
            </div>
            <div class="column has-text-centered-mobile">
              <div
                class="columns is-multiline has-text-centered-mobile is-centered is-mobile "
              >
                ${this.configData.menus.map((menu: any, index: number) =>
                  index < 4
                    ? html`<div
                        class="column is-one-third-mobile has-text-grey"
                      >
                        <h5
                          class="title is-5 has-text-white skhemata-footer-title"
                        >
                          ${menu.title}
                        </h5>

                        <ul class="footer-links has-text-centered-mobile">
                          ${menu.submenu.map((submenu: any, subIndex: number) =>
                            subIndex < 5
                              ? html`<a
                                    class="is-full has-text-grey skhemata-footer-text skhemata-footer-link"
                                    href="${submenu.link}"
                                    >${submenu.label}</a
                                  ><br />`
                              : html``
                          )}
                        </ul>
                      </div>`
                    : html``
                )}
              </div>
            </div>
          </div>
          <div class="columns custom-footer-bottom is-vcentered has-text-grey">
            <div
              class="column has-text-left custom-footer-subtext has-text-centered-mobile left-col skhemata-footer-text"
            >
              ${this.configData.copyright}
            </div>
            <div
              class="column has-text-right has-text-centered-mobile right-col"
            >
              <div class="custom-footer-social">
                <div class="custom-footer-social">
                  ${this.configData.socialMedia.map(
                    (media: any) => html`${this.checkMedia(media)}`
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
