import { Given, When, Then } from '@cucumber/cucumber';
import { sportTablePage } from '../../pages/sportTablePage';

const sportTable = new sportTablePage();

Given(/^User Navigate to the Daily Mail Page$/, {}, async () => {  
    await browser.url('https://www.dailymail.co.uk');    
});

When(/^user click on Sport menu and scroll down to the Premier League table$/, {}, async () => {   
    await sportTable .clickPremierLeagueTable();
});

When(/^user click on the View all tables$/, {}, async () => {   
    await sportTable .clickViewAllTables();
});

When(/^Position & Points for a given team is retrieved$/, {}, async datatable => { 
    const input = datatable.hashes();  
    await sportTable.getPosPTS(input); //prints pos & pts for a given team, can accept multiple team names. Update data table in feature file to add one or more team names
});