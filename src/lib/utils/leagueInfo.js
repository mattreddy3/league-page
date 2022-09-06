/*   STEP 1   */
export const leagueID = "854978776533184512" // your league ID
export const leagueName = "The Very Big 12" // your league name
export const dues = 200 // (optional) used in template constitution page
export const dynasty = false // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>If you want to change your manager page, please send me your team information in the following information (using mine as an example):</p>
<code>
    name: "Matt Reddy",<br>
    location: "Barcelona", // (optional)<br>
    bio: "Just a guy with a manbun now",<br>
    fantasyStart: 2005, // (optional) when did the manager start playing fantasy football<br>
    favoriteTeam: "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE<br>
    rival: {<br>
      name: "Red Herring", // Can be anything (usually your rival's name)<br>
      link: 99, // manager array number within this array, or null to link back to all managers page<br>
    },<br>
    favoritePlayer: 6797, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)<br>
    valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)<br>
    rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)<br>
    philosophy: "Your fantasy team's philosophy",<br>
    tradingScale: 10, // 1 - 10<br>
    preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template<br>
  }<br>
</code>
</ul>

<p>Any issues or feature requests on this site, please submit here: <a href="https://github.com/mattreddy3/league-page/issues">https://github.com/mattreddy3/league-page/issues</a></p>
`

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    roster: 1, // ID of the roster that the manager manages (look at the order of the power rankings graph)
    name: "Matt Reddy",
    tookOver: null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    location: "Barcelona", // (optional)
    bio: "Just a guy with a manbun now",
    photo: "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    fantasyStart: 2005, // (optional) when did the manager start playing fantasy football
    favoriteTeam: "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    rival: {
      name: "Red Herring", // Can be anything (usually your rival's name)
      link: 99, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    favoritePlayer: 6797, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    philosophy: "Your fantasy team's philosophy",
    tradingScale: 10, // 1 - 10
    preferredContact: "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  // {
  //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //   "name": "Your Name",
  //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //   "location": "Brooklyn", // (optional)
  //   "bio": "Lorem ipsum...",
  //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //   "rival": {
  //     name: "Rival", // Can be anything (usually your rival's name)
  //     link: 6, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //   },
  //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //   "philosophy": "Your fantasy team's philosophy",
  //   "tradingScale": 10, // 1 - 10
  //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //   "name": "Your Name",
  //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //   "location": "Brooklyn", // (optional)
  //   "bio": "Lorem ipsum...",
  //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //   "rival": {
  //     name: "Rival", // Can be anything (usually your rival's name)
  //     link: 6, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //   },
  //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //   "philosophy": "Your fantasy team's philosophy",
  //   "tradingScale": 10, // 1 - 10
  //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  // },
]

/*   !!  !!  IMPORTANT  !!  !! */
/*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */

// {
//   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   "name": "Your Name",
//   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//   "location": "Brooklyn", // (optional)
//   "bio": "Lorem ipsum...",
//   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   "rival": {
//     name: "Rival", // Can be anything (usually your rival's name)
//     link: 6, // manager array number within this array, or null to link back to all managers page
//     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   },
//   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//   "philosophy": "Your fantasy team's philosophy", // (optional)
//   "tradingScale": 10, // 1 - 10 (optional)
//   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
// },
