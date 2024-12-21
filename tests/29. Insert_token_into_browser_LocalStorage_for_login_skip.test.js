import { test, expect, request } from '@playwright/test';

const loginPayLoad = {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"};

let Token

test.beforeAll( async()=>
{
    const apiContext = await request.newContext(); 
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        
    {
        data:loginPayLoad
    });
    expect(loginResponse.ok()).toBeTruthy(); 
    const loginResponseJson = await loginResponse.json();
    Token = loginResponseJson.token;
    console.log("Token =", Token)
    });
    
test('Token insert in Local Storage', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value); 
    }, Token );
    await page.goto("https://rahulshettyacademy.com/client");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);  

});

/* 
test('Token insert in Local Storage', async ({ page }) => {:

Ardham: test ane function use chesi, Token insert in Local Storage ani oka test case ni define chesthunam.
Explanation: Ee test lo, mana main goal Token ane value ni browser's Local Storage lo insert cheyyadam.
await page.addInitScript(value => { window.localStorage.setItem('token', value); }, Token );:

Ardham: E line lo, await ane keyword use chesi, page.addInitScript method ni call chesthunam.
Explanation:
page.addInitScript: Ee method valla, Token ane value ni browser lo load aithe appudey localStorage lo token key tho set cheyyadam jarugutundi.
window.localStorage.setItem('token', value);: localStorage lo token ane key create chesthundhi, and dani value ga Token ni store chesthundhi.
Token as a parameter: Ee Token value, beforeAll block lo mana API response nundi vachindhi. E Token ni localStorage lo insert chesthunam.
await page.goto("https://rahulshettyacademy.com/client");:

Ardham: E step lo, manam https://rahulshettyacademy.com/client ane URL ki page ni navigate chesthunam.
Explanation:
Ee URL ki navigate ayyaka, token already localStorage lo store avuthundhi, so login page ni skip chesi direct ga dashboard page open avuthundhi.
Simple Flow:

First, manam Token ni localStorage lo store chesthunam.
Taruvatha, https://rahulshettyacademy.com/client page ni visit chesthunam, and Token valla, login process bypass ayyi direct ga client dashboard page open avuthundhi.
Idi main logic and flow ee lines lo. Ila cheste, appudappudu login process ni skip chesi test cases ni fast ga execute cheyyavachu.
*/