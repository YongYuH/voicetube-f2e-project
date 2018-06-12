import fetch from 'isomorphic-unfetch';

const getWithQuery = ({ url }) => (
  fetch(url)
    .then(r => r.json())
);

export default getWithQuery;
