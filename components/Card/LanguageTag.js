import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';

function getCaptionLanguageFromUserLanguage(captions) {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (userLanguage === 'zh-TW' && captions.includes('cht')) {
    return '中文';
  }

  if (userLanguage === 'jp' && captions.includes('ja')) {
    return '日本語';
  }

  if (userLanguage === 'vi' && captions.includes('vi')) {
    return 'Tiếng Việt';
  }

  return '';
}

const LanguageTag = ({
  captions,
}) => (
  <Tag
    backgroundColor="#419bf9"
    color="white"
    label={getCaptionLanguageFromUserLanguage(captions)}
  />
);

LanguageTag.propTypes = {
  captions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LanguageTag;
