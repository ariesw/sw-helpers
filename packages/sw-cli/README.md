# sw-cli

A CLI tool to generate a service worker and file manifest making use of the sw-lib module.

## Installation

`npm install --save-dev sw-cli`

## Demo

Browse sample source code in the [demo directory](https://github.com/GoogleChrome/sw-helpers/tree/master/packages/sw-cli/demo), or
[try it out](https://googlechrome.github.io/sw-helpers/sw-cli/demo/) directly.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### 

[packages/sw-cli/src/bin/index.js:18-18](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/bin/index.js#L18-L18 "Source code on GitHub")

Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### 

[packages/sw-cli/src/cli/index.js:17-17](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L17-L17 "Source code on GitHub")

Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### SWCli

[packages/sw-cli/src/cli/index.js:39-547](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L39-L547 "Source code on GitHub")

This class is a wrapper to make test easier. This is used by
./bin/index.js to pass in the args when the CLI is used.

#### printHelpText

[packages/sw-cli/src/cli/index.js:74-78](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L74-L78 "Source code on GitHub")

Prints the help text to the terminal.

#### handleFlag

[packages/sw-cli/src/cli/index.js:86-105](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L86-L105 "Source code on GitHub")

If there is no command given to the CLI then the flags will be passed
to this function in case a relevant action can be taken.

**Parameters**

-   `flags` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The available flags from the command line.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** returns a promise once handled.

#### handleCommand

[packages/sw-cli/src/cli/index.js:115-125](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L115-L125 "Source code on GitHub")

If a command is given in the command line args, this method will handle
the appropriate action.

**Parameters**

-   `command` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The command name.
-   `args` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The arguments given to this command.
-   `flags` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The flags supplied with the command line.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A promise for the provided task.

#### generateSW

[packages/sw-cli/src/cli/index.js:132-181](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L132-L181 "Source code on GitHub")

This method will generate a working Service Worker with a file manifest.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** The promise returned here will be used to exit the
node process cleanly or not.

#### \_getRootOfWebApp

[packages/sw-cli/src/cli/index.js:190-244](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/cli/index.js#L190-L244 "Source code on GitHub")

This method requests the root directory of the web app.
The user can opt to type in the directory OR select from a list of
directories in the current path.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** Promise the resolves with the name of the root
directory if given.

### 

[packages/sw-cli/src/lib/log-helper.js:16-16](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/lib/log-helper.js#L16-L16 "Source code on GitHub")

Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### LogHelper

[packages/sw-cli/src/lib/log-helper.js:27-59](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/lib/log-helper.js#L27-L59 "Source code on GitHub")

Log helper is just a wrapper around the console to print slightly
nicer / colored messages and could be extended to filter based on log
level.

#### warn

[packages/sw-cli/src/lib/log-helper.js:32-38](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/lib/log-helper.js#L32-L38 "Source code on GitHub")

Print a warning message to the console (Colored yellow).

**Parameters**

-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Message to print to the console
-   `runtimeInfo`  

#### error

[packages/sw-cli/src/lib/log-helper.js:44-50](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/lib/log-helper.js#L44-L50 "Source code on GitHub")

Print an error message to the console (Colored red).

**Parameters**

-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Message to print to the console
-   `err`  

#### info

[packages/sw-cli/src/lib/log-helper.js:56-58](https://github.com/GoogleChrome/sw-helpers/blob/b592cf16d1ab0d89981f6f6b579b02b711856fd0/packages/sw-cli/src/lib/log-helper.js#L56-L58 "Source code on GitHub")

Print an info message to the console (Colored dim).

**Parameters**

-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Message to print to the console