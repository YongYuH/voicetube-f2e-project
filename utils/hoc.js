import React from 'react';

export const withCondition = conditionRenderingFn => Component => props => (
  conditionRenderingFn(props) ? null : <Component {...props} />
);

export const withEither = (conditionalRenderingFn, EitherComponent) => BaseComponent => props => (
  conditionalRenderingFn(props) ? <EitherComponent {...props} /> : <BaseComponent {...props} />
);
