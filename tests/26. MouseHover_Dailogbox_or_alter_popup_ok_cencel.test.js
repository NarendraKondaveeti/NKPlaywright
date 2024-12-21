import { test, expect } from '@playwright/test';

test("Popup validations",async({page})=>
    {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.pause()
    // page.on('dialog', dialog => dialog.accept());
    // await page.locator("#confirmbtn").click(); 
    await page.pause()
    page.on('dialog', dia => dia.dismiss());
    await page.locator("#confirmbtnfghj").click(); 



    await page.locator("#mousehover").hover();

    });

/* ikkada page.on('dialog', dia => dia.dismiss()); line ki ardham:

page.on('dialog', ...):

Ikkada page lo dialog (alert, confirm, prompt) event jarigina appudu, danini detect chesi, 
manam define chesina function ni trigger chesthundi.

dia => dia.dismiss():
dia ane variable ki dialog object ni pass chesthundi.
=> ane arrow function, JavaScript lo simple gaa function ni rayataniki use chestham.

dia.dismiss() ane method ni call chesi, dialog ni close chesedi. 
Ante, OK or Cancel button click cheyyakunda alert or prompt ni close chesedi.

Ardham:page lo edaina dialog (alert, confirm, prompt) kanipisthe, 
dia ane variable ki a dialog object ni pass chesthundi. 
A dialog ni dia.dismiss() method to close chestundi,
ante OK or Cancel click cheyakunda, a dialog ni close chesedi.

Udaharanam:
Oka webpage lo alert('This is an alert!'); ani JavaScript alert vachi, adhi automatic ga close avuthundi, 
user edaina button click cheyyakunda.

Mukhyamga:
dia: Dialog object ni represent chesthundi.
=>: Arrow function syntax.
dia.dismiss(): Dialog ni close cheyyadaniki method.
Ilaaga, page.on('dialog', dia => dia.dismiss()); line valla, webpage lo jarige dialog ni automatic ga dismiss cheyyadaniki use chestharu 

=====================================================

await page.locator("#mousehover").hover(); line ki ardham Telugu lo:

Ardham:
#mousehover ane CSS selector tho match avuthunna element ni hover() method tho mouse ni dani mida hover (move) cheyyadam jaruguthundi.

Breakdown:
await:

await keyword asynchronous operation ni wait cheyyadaniki use chestham. Ante, hover() operation complete avagane next line execute avuthundi.
page.locator("#mousehover"):

Ikkada page.locator ani method tho, #mousehover ane ID ki sammandhinchina element ni select chestham.
hover():

hover() method ni use chesi, mouse pointer ni a element mida move cheyyadam (hover) jaruguthundi. Regular gaa manam mouse to e element mida velina appudu jaruguthundi.
Example Context:
Oka webpage lo #mousehover ane ID unna button or div mida hover cheyyali ante, ila hover() method use chestharu. Ee action ki sammandhinchina edaina CSS effects, like dropdown menu open avadam, background color change avadam, ilanti avi jaruguthayi.

Mukhyanga:
page.locator("#mousehover"): Page lo #mousehover ID unna element ni locate chesthundi.
hover(): A element mida mouse ni hover cheyyadam jaruguthundi.
Idi element mida mouse ni automatic ga place cheyyadaniki use chestharu

*/