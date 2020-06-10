import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import querystring from 'querystring';
import { getHrefWithLang } from 'modules/lang';
import withTranslations from 'website-core/client/translations';
import _signup from 'website-core/client/signup';


import {
  Wrapper,
  Container,
  Copy,
  CtaTitle,
  Section,
  SignupButton,
  SalesButton,
  ButtonsWrapper,
  HighlightedWord,
} from './styled';

class Auth0Banner extends Component {
  state = {
    signup: () => { },
  }

  componentDidMount() {
    this.setState({
      signup: _signup,
    });
  }

  render() {
    const { signup } = this.state;
    const {
      t,
      eventTheme,
      lang,
    } = this.props;
    const metadata = { place: 'banner', type: 'button', text: 'talk to sales' };
    return (
      <Section isDark={eventTheme.isDefault}>
        <Container className="hero-bottom">
          <Wrapper>
            <Copy>
              <CtaTitle isDark={eventTheme.isDefault}>
                Never Compromise <br />
                on {' '}
                <HighlightedWord
                  txtColor={eventTheme.highlightColor}
                >
                  Identity
                </HighlightedWord>
              </CtaTitle>
            </Copy>
            <ButtonsWrapper className="hero-cta">
              <SignupButton
                className="btn btn-lg"
                onClick={signup}
                overrideColor={eventTheme.isDefault ? eventTheme.highlightColor : null}
              >
                {t('banner_try_auth0')}
              </SignupButton>
              <SalesButton
                className="btn btn-lg"
                onClick={() => window.metricsLib.track('click:contact-sales', { trackData: { ...metadata } }, () => window.location.assign(getHrefWithLang(lang, `/contact-us?${querystring.stringify(metadata)}`)))}
                isDefault={eventTheme.isDefault}
              >
                {t('header_talk_to_sales')}
              </SalesButton>
            </ButtonsWrapper>
          </Wrapper>
        </Container>
      </Section>
    );
  }
}

Auth0Banner.propTypes = {
  t: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
    highlightColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(() => { })(withTranslations(Auth0Banner));
