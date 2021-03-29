import { browser, by, element } from 'protractor'

/* This page object file encapsulates web driver implementation to retrieve the message with the `getTitleText` function */
export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl)
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root mat-toolbar span')).getText()
  }
}
