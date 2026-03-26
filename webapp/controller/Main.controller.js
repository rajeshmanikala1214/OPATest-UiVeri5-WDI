sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("my.app.controller.Main", {
        onInit: function () {
            var oData = {
                Products: [
                    { ID: "BT-01", Name: "Laptop Pro" },
                    { ID: "BT-02", Name: "Wireless Mouse" },
                    { ID: "BT-03", Name: "Mechanical Keyboard" }
                ]
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onSearch: function (oEvent) {
            MessageToast.show("Searching for: " + oEvent.getParameter("query"));
        },

        onItemPress: function (oEvent) {
            var sItem = oEvent.getSource().getTitle();
            MessageToast.show("Navigating to " + sItem);
        },

        onAddProduct: function () {
            MessageToast.show("Opening Add Product Dialog");
        }
    });
});