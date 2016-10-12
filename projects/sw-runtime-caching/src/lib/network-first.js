/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

import CacheWrapper from './cache-wrapper';
import assert from '../../../../lib/assert';

export default async ({event, configuration}={}) => {
  assert.isInstance({event}, FetchEvent);

  const cacheWrapper = new CacheWrapper({configuration});
  let response;
  try {
    response = await cacheWrapper.fetchAndCache({event});
    if (response) {
      return response;
    }
  } catch(error) {
    // no-op
  }

  return await cacheWrapper.match({request: event.request});
};
