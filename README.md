## OBB AngularJS modules

Collection of general-purpose in-house AngularJS modules for OpenBizBox apps.

The modules use **ES6** and must be required with **webpack**. 
Components are included with a glob pattern by using `require.context` that is available in webpack only.

### Usage

To include all modules the `angular-obb/index.js` must be required and the `obb` module set as dependency:
```
require('angular-obb');
angular.module('app', ['obb']);
```

Modules can be required selectively too:
```
require('angular-obb/bootstrap');
require('angular-obb/fonts');

angular.module('app', ['obb.bootstrap', 'obb.fonts']);
```

### Roadmap

- Code coverage with tests

### Style guides

- Commit messages: [conventional-changelog](https://github.com/ajoslin/conventional-changelog/blob/master/conventions/angular.md)
