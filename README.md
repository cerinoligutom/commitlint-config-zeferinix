# commitlint-config-zeferinix

Shareable `commitlint` config enforcing [Conventional Commits](https://www.conventionalcommits.org/) thru extension of [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional). Use with [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli).

Valid Types:

| Type      | Description                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| build     | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)             |
| chore     | Changes to the build process or auxiliary tools and libraries such as documentation generation                  |
| ci        | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)     |
| **css**   | Changes that affect css styling                                                                                 |
| docs      | Documentation only changes                                                                                      |
| feat      | A new feature                                                                                                   |
| fix       | A bug fix                                                                                                       |
| **infra** | Changes to any infrastructure configuration files and/or scripts (example scopes: aws, heroku, azure, nginx)    |
| perf      | A code change that improves performance                                                                         |
| refactor  | A code change that neither fixes a bug nor adds a feature                                                       |
| revert    | [Read here](https://www.conventionalcommits.org/en/v1.0.0/#how-does-conventional-commits-handle-revert-commits) |
| style     | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)          |
| test      | Adding missing tests or correcting existing tests                                                               |

**Note:** Descriptions taken directly from [Angular's Commit Message Type Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) except for types that are in **bold** characters as they are new types added by this config.

## License

MIT License

Copyright (c) 2020 Cerino O. Ligutom III

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
