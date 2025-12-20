import {test, expect} from "@playwright/test"

test("Page Fixture", async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    //await page.waitForTimeout(12000)
    await page.waitForLoadState('load');
    let title = await page.title()
    console.log(title)

    await page.locator("text='CRM/SFA'").click()
    await page.waitForLoadState('load');
    await page.locator("text='Leads'").click()
    await page.waitForLoadState('load');
    
    //await page.locator("text='Create Lead'").nth(1).click(); // Index starts at 0
    
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    //await page.waitForTimeout(8000)
    await page.waitForLoadState('load');
    await page.locator("#createLeadForm_companyName").fill("Tech_Mahindra")
    await page.locator("#createLeadForm_firstName").fill("Sairmayee")
    await page.locator("#createLeadForm_lastName").fill("K")
    await page.locator("#createLeadForm_personalTitle").fill("Mrs")
    await page.locator("#createLeadForm_generalProfTitle").fill("Project_Manager")
    await page.locator("#createLeadForm_annualRevenue").fill("12345")
    await page.locator("#createLeadForm_departmentName").fill("Quality Assurance")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("2016808888")
    await page.locator('[name="submitButton"]').click()

    //await page.waitForTimeout(12000)
    await page.waitForLoadState('load');
    let subtitle = await page.title()
    console.log(subtitle)

//    await page.locator("#viewLead_companyName_sp")

    // await expect(page.locator("#viewLead_companyName_sp")).toHaveValue("Tech_Mahindra")
    // await expect(page.locator("#viewLead_firstName_sp")).toHaveValue("Sairmayee")
    // await expect(page.locator("#viewLead_lastName_sp")).toHaveValue("Kodela")
    // await expect(page.locator("#viewLead_statusId_sp")).toHaveValue("Assigned")


    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Tech_Mahindra")
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Sairmayee")
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText("K")
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned")
    

    



}) 