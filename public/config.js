/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
  apiKey: "AIzaSyC36N-mC0X0AH_KWmRhEvznWMsFC7_v5UI",
  authDomain: "qwerty-e2961.firebaseapp.com",
  databaseURL: "https://qwerty-e2961.firebaseio.com",
  projectId: "qwerty-e2961",
  storageBucket: "qwerty-e2961.appspot.com",
  messagingSenderId: "719100001866"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';
//var database = firebase.database();
