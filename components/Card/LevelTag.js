import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';

function getLevelTextFromLevel(level) {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (level === 1) {
    if (userLanguage === 'zh-TW' || userLanguage === 'jp') {
      return '初級';
    }
    return 'Basic';
  }

  if (level === 2) {
    if (userLanguage === 'zh-TW' || userLanguage === 'jp') {
      return '中級';
    }
    return 'Int';
  }

  if (level === 3) {
    if (userLanguage === 'zh-TW' || userLanguage === 'jp') {
      return '中高級';
    }
    return 'Upper Int';
  }

  if (level === 4) {
    if (userLanguage === 'zh-TW' || userLanguage === 'jp') {
      return '高級';
    }
    return 'Advanced';
  }

  return '';
}

const LevelTag = ({
  level,
}) => (
  <Tag
    backgroundColor="#37C597"
    color="white"
    label={getLevelTextFromLevel(level)}
  />
);

LevelTag.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelTag;
