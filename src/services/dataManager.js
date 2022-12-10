
/**
 * @typedef {Object} logement
 * @property {String} id
 * @property {String} title
 * @property {String} cover image principale page d'accueil
 * @property {Array.<String>} pictures
 * @property {String} description
 * @property {hostObject} host
 * @property {String} rating
 * @property {String} location
 * @property {Array.<String>} equipments
 * @property {Array.<String>} tags
 *
 * @typedef {Object} hostObject
 * @typedef {String} name
 * @typedef {String} picture
 *
 * @typedef {Object} logementMainPage
 * @typedef {String} cover
 * @typedef {String} id
 * @typedef {String} title
 */

/**
 * @type {Array.<logement> | undefined}
 * */
let data;

/**
 * [async description]
 *
 * @return  {Promise.<logementMainPage>}  [return description]
 */
async function getLogements() {
    // const api = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!data) {
        const response = await fetch("/logement.json");
        data = await response.json();
    }
    return data.map((logement) => {
        return {
            cover: logement.cover,
            id: logement.id,
            title: logement.title,
        };
    });
}

/**
 * [getOneLogement description]
 *
 * @param   {String}  id  l'id du logement
 *
 * @return  {logement}      [return description]
 */
function getOneLogement(id){

}

export {
    getLogements,
    getOneLogement
};
