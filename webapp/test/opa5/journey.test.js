sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Main"
], function (opaTest) {
	"use strict";

	QUnit.module("Main Journey");

	opaTest("Should see the initial page", function (Given, When, Then) {
		Given.iStartMyApp();
		Then.onTheMainPage.iShouldSeeTheAppHeader();
	});

	opaTest("Should filter the list on search", function (Given, When, Then) {
		Given.iStartMyApp(); // 🔥 REQUIRED
		When.onTheMainPage.iSearchFor("Laptop");
		Then.onTheMainPage.iShouldSeeOnlyFilteredResults();
	});
});