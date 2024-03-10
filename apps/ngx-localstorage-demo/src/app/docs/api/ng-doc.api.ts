import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
  title: 'API Reference',
  scopes: [
    {
      name: 'ngx-localstorage',
      route: 'ngx-localstorage',
      include: 'libs/ngx-localstorage/src/index.ts'
    }
  ]
};

export default Api;
