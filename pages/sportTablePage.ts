import { waitForDisappeared, waitForDisplayed } from '../utils/helper';

const sportMenuButton = '//ul[contains(@data-track-module,"nav-primary")]/descendant::a[text()="Sport"]';
const premierLeagueTable = '//div[contains(@data-track-module,"nav-secondary")]/descendant::a[contains(text(),"Premier League")]';
const tablesLink = '//div[@id="content"]//a[contains(text(),"Tables")]';
const competitionTable = '//div[contains(@class,"competitionTable")]';

export class sportTablePage {

    async clickPremierLeagueTable() {
        const sportMenu = await $(sportMenuButton);
        const premierLeague = await $(premierLeagueTable);
        const tables = await $(tablesLink);
        await waitForDisplayed(sportMenu);   
        await sportMenu.click();  
        await premierLeague.click();  
        await waitForDisplayed(tables);   
    }

    async clickViewAllTables() {
        const tables = await $(tablesLink);
        const competitions = await $(competitionTable);
        await browser.execute('window.scrollTo(0, 200)'); /*scroll down slightly To avoid element click intercepted errors*/
        await tables.click();  
        await waitForDisplayed(competitions);  
    }

    async getPosPTS(teamName: any[]) {
       let positionAndpointsTeam: Array<string> = [];     
       for (let i = 0; i < teamName.length; i++) {
         const position = 
            `//div[contains(@class,'competitionTable')]/descendant::td[contains(@class,'team-short')][text()='${teamName[i].team}']/parent::tr/descendant::td[contains(@class,'pos')]`;

        const points = await $(
            `//div[contains(@class,'competitionTable')]/descendant::td[contains(@class,'team-short')][text()='${teamName[i].team}']/parent::tr/descendant::td[contains(@class,'score-pts')]`
        );

        const pos = await $(position);
        const teamPos = await pos.getText();

        const pointsTeam = await $(points);
        const teamPoint = await pointsTeam.getText();

        positionAndpointsTeam.push(teamPos)
        positionAndpointsTeam.push(teamPoint)
        
        console.log("Pos & PTS: " +`${teamName[i].team}` +" "+positionAndpointsTeam);
        positionAndpointsTeam.length = 0;
       }
    }
}