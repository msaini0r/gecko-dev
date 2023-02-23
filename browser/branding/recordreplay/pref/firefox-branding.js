/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("extensions.activeThemeID", "firefox-alpenglow@mozilla.org");

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_welcome_url.additional", "");
// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours
// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 86400);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "https://replay.io");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "https://replay.io");

// Adding a trailing # to support appending targeted help from "Learn more" links
pref('replay.support.baseURL', 'https://docs.replay.io/#');
pref("startup.homepage_welcome_url", "https://app.replay.io/browser/welcome");
pref("replay.newtab.url", "https://app.replay.io/browser/new-tab");

pref('app.feedback.baseURL', 'https://docs.replay.io/docs/join-our-community-bb2ffb6d98104dd589ba2194c0a52c22');

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 2);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 5);

// Disable search suggestions
pref("browser.urlbar.suggest.searches",             false);
pref("browser.urlbar.suggest.topsites",             false);
pref("browser.urlbar.suggest.engines",              false);
pref("browser.urlbar.suggest.quicksuggest",         false);

// Telemetry
pref('replay.telemetry.url', 'https://telemetry.replay.io');
pref('replay.telemetry.enabled', true);

// Authentication Flow
pref('devtools.recordreplay.ext-auth', true);
