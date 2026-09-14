import { test, Locator, Page, FileChooser, Download } from "@playwright/test"

export class BasePage {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    /**
    * This method is use to hit url on the web browser
    *  @param It's take one parameter of String
    *  @return It's not return anythings
     */
    async hitURL(url: string) {
        this.page.goto(url);
    }
    ///////////            
    //                     Click                 //////
    /////////

    /** 
    * This method is use to click on Element
    * @param It's take one parameter of the webElement
    * @return nothing
    */
    async click(element: Locator): Promise<void> {
        await element.click();
    }

    /** 
    This Method is use to double click on the specific Element 
    @param  element- It's Take one parameter of the webElement
    @return nothing
   */
    async doubleClick(element: Locator): Promise<void> {
        await element.dblclick();
    }
    /**
     * This method is use to right click on the element
     * @param element- It's Take one parameter of the webElement
     * @return nothing
     */
    async rightClick(element: Locator): Promise<void> {
        await element.click({ button: 'right' });
    }
    /**
     * This method is use to force click on the element
     * @param element  It's Take one parameter of the webElement
     * @return nothing
     */
    async forceClick(element: Locator): Promise<void> {
        element.click({ force: true });
    }
    /**
     * This method is use to click on the element using by index
     * @param element - It's take webElement
     * @param indexNumber It's take index Number
     */
    async clickByIndex(element: Locator, indexNumber: number) {
        await element.nth(indexNumber).click();
    }
    //=====================<Fill Action>======================== 


    /**
     * This Method Is Use To fill Value in the Text Box
     * @param It's Take two parameter first webElement and second String for Value
     * @return nothing 
     */
    async fillValue(element: Locator, value: string): Promise<void> {
        await element.fill(value);
    }
    /**
     * This method is use to fill value in the text box by typing
     * @param element It's take webElement
     * @param value -It's Take Value of string
     * @return It's return void
     */
    async typeValue(element: Locator, value: string): Promise<void> {
        await element.pressSequentially(value);
    }
    /**
     * This method is use to fill value with already exit value
     * @param element It's Take webElement
     * @param value -It's Take Value of string
     */
    async typeValueWithAlreadyText(element: Locator, value: string): Promise<void> {
        await element.pressSequentially(value);
    }
    /**
     * This Method is Use for clear Already exit Value in the input Box
     * @param element -It's Take webElement
     */
    async clear(element: Locator): Promise<void> {
        await element.clear();
    }

    // ===================<KEYBOARD ACTIONS>=======================

    /**
     * This method is use to press Enter button
     * @param element -It's Take  location of webElement
     */
    async pressEnter(element: Locator): Promise<void> {
        await element.press('Enter');
    }
    /**
     * This method is use to press tab button 
     * @param element It's Take  location of webElement
     */
    async pressTab(element: Locator): Promise<void> {
        element.press('Tab');
    }

    // ==========================================
    // ELEMENT INFO
    // ==========================================

    /**
     * This Method is use for get Text not matter element visible or not on Web Page 
     * @param element -It's Take  location of webElement
     * @returns It's return of String or null
     */
    async getText(element: Locator): Promise<string | null> {
        return await element.textContent();
    }
    /**
     * This method is use to find all texts of the element on web page
     * @param element - It's Take  location of webElement
     * @returns - It's return of string  array
     */
    async getAllTexts(element: Locator): Promise<string[]> {
        return await element.allInnerTexts();
    }

    /**
     * This method is use to get value of attribute
     * @param element It's Take  location of webElement
     * @param attribute It's Take name of Attribute
     * @returns It's Return of string value
     */
    async getAttribute(element: Locator, attribute: string): Promise<string | null> {
        return await element.getAttribute(attribute);
    }
    /**
     * This method is use to get value of input value in the input box
     * @param element It's Take  location of webElement
     * @returns It's return of string value
     */
    async getInput(element: Locator): Promise<string> {
        return await element.inputValue();
    }
    /**
     * This method is use to count element on the webPage according given your locator
     * @param element It's Take  location of webElement
     * @returns It's return of number value
     */
    async getCountElement(element: Locator): Promise<number> {
        return await element.count();
    }


    // ==========================================
    // DROPDOWN
    // ==========================================


    /**
     * This Method Is Use to select Value in the Drop Down using By Indexing
     * @param element It's Take  location of webElement
     * @param indexValue It's Take number of index
     */
    async selectByIndexing(element: Locator, indexValue: number): Promise<void> {
        await element.selectOption({ index: indexValue });
    }
    /**
     * This Method Is use to select Value from the Drop Down using By  Value of Attribute value
     * @param element It's Take  location of webElement
     * @param valueAttributeValue It's Take value of Attribute Value
     */

    async selectByText(element: Locator, valueOfAttributeValue: string): Promise<void> {
        await element.selectOption({ value: valueOfAttributeValue });
    }
    /**
     * This Method is Use to select value from drop Down using By Level Value
     * @param element It's Take  location of webElement
     * @param optionValue It's Take value of Option Attribute Value
     */
    async selectByLabel(element: Locator, optionValue: string): Promise<void> {
        await element.selectOption({ label: optionValue });
    }

    // ==========================================
    // CHECKBOX & RADIO
    // ==========================================

    async check(element: Locator): Promise<void> {
        return await element.check();
    }

    async unCheck(element: Locator): Promise<void> {
        return await element.uncheck();
    }

    async radioButton(element: Locator): Promise<void> {
        return await element.check();
    }
    // ==========================================
    // MOUSE ACTIONS
    // ==========================================

    /*
   @ This Method Is Use for Mouse Hover on the Element 
   */
    async mouseHover(element: Locator): Promise<void> {
        await element.hover();
    }

    async dragAndDrop(sorce: string, target: string): Promise<void> {
        await this.page.locator(sorce).dragTo(this.page.locator(target));
    }

    async uploadFile(element: Locator, filePath: string) {
        await element.setInputFiles(filePath);
    }
    

    async uploadMultipleFiles(element: Locator, filePath: string[]) {
        await element.setInputFiles(filePath);
    }

    async removeUploadedFiles(element: Locator) {
        await element.setInputFiles([]);
    }

    async clickAndUploadFile(element: Locator, filePath: string) {
        let fileChooserPromise: Promise<FileChooser> = this.page.waitForEvent("filechooser");
        await element.click();
        let fileChooser: FileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath);
    }

    async clickAndDownloadFile(element: Locator, filePath: string) {
        let fileDownloadPromise: Promise<Download> =
            this.page.waitForEvent("download");
        await element.click();
        let download: Download = await fileDownloadPromise;
        await download.saveAs(filePath);
    }

    //=========================
    //  Wait Methods
    //========================

    async waitforTimeout(durationofSecond: number): Promise<void> {
        await this.page.waitForTimeout(durationofSecond * 1000);

    }

    async waitforElementInvisibilty(element: Locator): Promise<void> {
        await element.waitFor({ state: "hidden" });
    }

    async waitforElementVisibilty(element: Locator): Promise<void> {
        await element.waitFor({ state: "visible" });
    }
    async waitforElement(locator: string): Promise<void> {
        await this.page.waitForSelector(locator);

    }


    async waitforPageLoad(locator: string): Promise<void> {
        await this.page.waitForLoadState();

    }

    async waitforPopup(element: Locator, locator: string): Promise<Page> {
        let popupWindowPromise = this.page.waitForEvent("popup");
        element.click();
        let popup = await popupWindowPromise;
        return popup;
    }
    ////  wait popup


    //==========================
    // MULTIPLE ELEMENTS
    //==========================

    async clickAll(element: Locator): Promise<void> {
        const elements = element;
        const count = await element.count();
        for (let i = 0; i < count; i++) {
            await elements.nth(i).click();
        }
    }

    async getTextByIndex(element: Locator, index: number): Promise<string> {
        return await element.nth(index).innerText();
    }

    async getAttributeByIndex(element: Locator, index: number, attributeName: string): Promise<string | null> {
        return await element.nth(index).getAttribute(attributeName);
    }

    async getAllPages() {
        this.page.context().pages();
    }

    async getPagesCount(): Promise<number> {
        return this.page.context().pages().length;
    }

    async getInputValue(element: Locator): Promise<string> {
        return await element.inputValue();
    }



    /*
    @ This Method is Use for get InnerText from only visible Element on Web Page
    */
    async getInnerText(element: Locator): Promise<string> {
        return await element.innerText();
    }


    /*
    @ This Method is use to check box checked or not  
    */
    // async isChecked(element: Locator): Promise<boolean> {
    //     return await element.isChecked();
    // }
    // async isEditable(element: Locator): Promise<boolean> {
    //     return await element.isEditable();
    // }

    // async isEnabled(element: Locator): Promise<boolean> {
    //     return await element.isEnabled();
    // }
    // async isVisible(element: Locator): Promise<boolean> {
    //     return await element.isVisible();
    //}

    async takeVisiblePageScreenshot(location: string): Promise<void> {
        await this.page.screenshot({ path: location, fullPage: false });
    }

    async takeScreenshotForSpecificElement(element: Locator, location: string): Promise<void> {
        await element.screenshot({ path: location });
    }



    async takeFullPageScreenshot(location: string): Promise<void> {
        await this.page.screenshot({ path: location, fullPage: true });
    }

    async genericCount(element: Locator): Promise<Number> {
        return await element.count();
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }
    async close(): Promise<void> {
        await this.page.close();
    }


    async firstElement(element: Locator): Promise<void> {
        element.first();
    }
    async nthElement(element: Locator, elementIndexing: number): Promise<void> {
        element.nth(elementIndexing);
    }
    async alertAccept(): Promise<void> {
        this.page.on('dialog', (dialogAccept) => {
            dialogAccept.accept();
        })
    }
    async alertDismiss(): Promise<void> {
        this.page.on('dialog', (dialogDismiss) => {
            dialogDismiss.dismiss();
        })
    }
    async getAlertMessage(): Promise<void> {
        this.page.on('dialog', (dialogGetErrorMessage) => {
            dialogGetErrorMessage.accept();
        })
    }

    async alertGetDefaultValue(): Promise<void> {
        this.page.on('dialog', (dialogDefaulValue) => {
            dialogDefaulValue.defaultValue();
        })
    }
    async typeValueInAlertBox(): Promise<void> {
        this.page.on('dialog', (valueTypeInAlertBox) => {
            valueTypeInAlertBox.type();
        })
    }
    async gotoForword(): Promise<void> {
        await this.page.goForward();
    }
    async gotoBackword(): Promise<void> {
        await this.page.goBack();
    }

    //
    //==========================<SCROLL>=================
    //

    async scrollByAmount(x: number, y: number): Promise<void> {
        this.page.evaluate(({ x, y }) => window.scrollBy(x, y), { x, y });
    }

    async scrollToButtom(): Promise<void> {
        this.page.evaluate(() => window.scrollTo(0, 0));
    }



    async scrollToTop(): Promise<void> {
        this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }
    /**
     * @returns nothing
     * @param element of locator
     */

    async scrollToElement(element: Locator): Promise<void> {
        await element.scrollIntoViewIfNeeded();
    }


    async switchToWindowByIndex(index: number): Promise<Page> {
        let pages: Page[] = this.page.context().pages();
        let newPage:Page = pages[index]!;
        return newPage;
    }

    async switchToWindowByURL(URL_parts: string): Promise<Page> {
        let pages: Page[] = this.page.context().pages();
        for (let value of pages) {
            if (value.url().includes(URL_parts)) {
                await value.bringToFront();
                return value;
            }
        }
        throw new Error("Page not found ");
    }

    async switchToWindowByTitle(Title_parts: string): Promise<Page> {
        let pages: Page[] = this.page.context().pages();
        for (let value of pages) {
            if ((await value.title()).includes(Title_parts)) {
                await value.bringToFront();
                return value;
            }
        }
        throw new Error("Page not found");
    }
}