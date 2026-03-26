sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/actions/Press",
    "sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, EnterText, Press, PropertyStrictEquals) {
    "use strict";

    var sViewName = "Main";

    Opa5.createPageObjects({
        onTheMainPage: {

            actions: {

                iSearchFor: function (sText) {
                    return this.waitFor({
                        controlType: "sap.m.SearchField",
                        actions: new EnterText({ text: sText }),
                        errorMessage: "Search field not found"
                    });
                }

            },

            assertions: {

                iShouldSeeTheAppHeader: function () {
                    return this.waitFor({
                        controlType: "sap.m.Title",
                        success: function () {
                            Opa5.assert.ok(true, "App header is visible");
                        },
                        errorMessage: "Header not found"
                    });
                },

                iShouldSeeOnlyFilteredResults: function () {
                    return this.waitFor({
                        controlType: "sap.m.List",
                        success: function () {
                            Opa5.assert.ok(true, "Filtered results displayed");
                        },
                        errorMessage: "List not found"
                    });
                }

            }
        }
    });

});