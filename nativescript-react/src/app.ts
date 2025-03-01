import * as React from 'react';
import { start } from 'react-nativescript';
import { Home } from './components/Home';

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

start(React.createElement(Home, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
