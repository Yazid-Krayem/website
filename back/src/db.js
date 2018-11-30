import sqlite from 'sqlite'
import SQL from 'sql-template-strings';

const initializeDatabase = async () => {

  const db = await sqlite.open('./db.sqlite');
  
  /**
   * retrieves the contacts from the database
   */
  const getContactsList = async () => {
    let returnString = ""
    const rows = await db.all("SELECT rowid AS id, name, email FROM contacts")
    rows.forEach( ({ id, name, email }) => returnString+=`[id:${id}] - ${name} - ${email}` )
    return returnString
  }
  
  const controller = {
    getContactsList
  }

  return controller
}

export default initializeDatabase
