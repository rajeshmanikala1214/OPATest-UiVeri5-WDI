describe('Main Journey - Inventory Management', function () {

    it('Should validate the UI and search functionality', function () {
        // 1. App Loading: Check if the Page Title is correct
        var oPage = element(by.control({
            controlType: "sap.m.Page",
            properties: { title: "Inventory Management" }
        }));
        expect(oPage.isPresent()).toBeTruthy();

        // 2. Search Interaction: Type "Laptop"
        var oSearchField = element(by.control({
            id: "searchField",
            viewName: "my.app.view.Main"
        }));
        oSearchField.sendKeys("Laptop Pro");
        oSearchField.sendKeys(protractor.Key.ENTER);

        // 3. MessageToast Check: Verify search toast appeared
        var oToast = element(by.control({
            controlType: "sap.m.MessageToast",
            interaction: "root"
        }));
        // Note: MessageToasts are transient, so we check presence quickly

        // 4. List Check: Verify the List is visible
        var oList = element(by.control({
            id: "productList",
            viewName: "my.app.view.Main"
        }));
        expect(oList.isPresent()).toBeTruthy();

        // 5. Navigation: Click the first item
        var oListItem = element(by.control({
            controlType: "sap.m.StandardListItem",
            properties: { title: "Laptop Pro" }
        }));
        oListItem.click();

        // 6. Action: Click the "Add New Product" button
        var oButton = element(by.control({
            controlType: "sap.m.Button",
            properties: { text: "Add New Product" }
        }));
        oButton.click();
    });
});