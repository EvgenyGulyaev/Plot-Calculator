const { REACT_APP_STAGE: envType } = process.env;
const config = {};

switch (envType) {
  case 'production':
    config.id = 'YXTAA6-5PK3QU3X2U';
    config.url = `http://api.wolframalpha.com/v2/query?appid=YXTAA6-5PK3QU3X2U`;
    break;

  default:
    config.id = 'YXTAA6-5PK3QU3X2U';
    config.url = `http://api.wolframalpha.com/v2/query?appid=YXTAA6-5PK3QU3X2U`;
    break;
}

export default config;
