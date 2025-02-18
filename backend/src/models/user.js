// const db = require('../database/db');

// const createUser = async (userData) => {
//   const { firstName, lastName, email, schoolEmail, phone, gender, password, userType } = userData;
//   const emailField = userType === "recruiter" ? schoolEmail : email;

//   const query = `INSERT INTO CANDIDATE (FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, GENDER, PASSWORD) VALUES (?, ?, ?, ?, ?, ?)`;
//   try {
//     const [result] = await db.execute(query, [firstName, lastName, emailField, phone, gender, password]);
//     return result;
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error;
//   }
// };

// const findUserByEmail = async (email) => {
//   const query = `SELECT * FROM CANDIDATE WHERE EMAIL = ?`;
//   try {
//     const [rows] = await db.execute(query, [email]);
//     return rows.length ? rows[0] : null;
//   } catch (error) {
//     console.error('Error finding user by email:', error);
//     throw error;
//   }
// };

// module.exports = { createUser, findUserByEmail };







// const db = require('../database/db');

// const createUser = async (userData) => {
//   const { firstName, lastName, email, schoolEmail, phone, gender, password, userType } = userData;
//   const emailField = userType === "recruiter" ? schoolEmail : email;

//   // Check if user already exists
//   const existingUser = await findUserByEmail(emailField);
//   if (existingUser) {
//     console.log('User already exists');
//     throw new Error('User already exists.');
//   }

//   let query;
//   let values;

//   if (userType === "candidate") {
//     query = `INSERT INTO CANDIDATE (FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, GENDER, PASSWORD) VALUES (?, ?, ?, ?, ?, ?)`;
//     values = [firstName, lastName, emailField, phone, gender, password];
//   } else if (userType === "recruiter") {
//     query = `INSERT INTO RECRUITER (FIRST_NAME, LAST_NAME, SCHOOL_EMAIL, PHONE_NUMBER, PASSWORD) VALUES (?, ?, ?, ?, ?)`;
//     values = [firstName, lastName, emailField, phone, password];
//   }

//   try {
//     const [result] = await db.execute(query, values);
//     return result;
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw new Error('Database error. Please try again.');
//   }
// };

// const findUserByEmail = async (email) => {
//   try {
//     const [candidateRows] = await db.execute(
//       'SELECT "candidate" AS userType FROM CANDIDATE WHERE EMAIL = ? LIMIT 1',
//       [email]
//     );
//     if (candidateRows.length) return candidateRows[0];

//     const [recruiterRows] = await db.execute(
//       'SELECT "recruiter" AS userType FROM RECRUITER WHERE SCHOOL_EMAIL = ? LIMIT 1',
//       [email]
//     );
//     if (recruiterRows.length) return recruiterRows[0];

//     return null;
//   } catch (error) {
//     console.error('Error finding user by email:', error);
//     throw new Error('Database error. Please try again.');
//   }
// };

// module.exports = { createUser, findUserByEmail };







const db = require('../database/db');

const findUserByEmail = async (email, userType) => {
  try {
    const query = userType === 'recruiter'
      ? 'SELECT * FROM RECRUITER WHERE SCHOOL_EMAIL = ? LIMIT 1'
      : 'SELECT * FROM CANDIDATE WHERE EMAIL = ? LIMIT 1';

    const [rows] = await db.execute(query, [email]);
    return rows.length ? rows[0] : null;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw new Error('Database error. Please try again.');
  }
};

const createUser = async (userData) => {
  const { firstName, lastName, email, schoolEmail, phone, gender, password, userType } = userData;
  const emailField = userType === "recruiter" ? schoolEmail : email;

  let query;
  let values;

  if (userType === "candidate") {
    query = `INSERT INTO CANDIDATE (FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, GENDER, PASSWORD) VALUES (?, ?, ?, ?, ?, ?)`;
    values = [firstName, lastName, emailField, phone, gender, password];
  } else if (userType === "recruiter") {
    query = `INSERT INTO RECRUITER (FIRST_NAME, LAST_NAME, SCHOOL_EMAIL, PHONE_NUMBER, PASSWORD) VALUES (?, ?, ?, ?, ?)`;
    values = [firstName, lastName, emailField, phone, password];
  }

  try {
    const [result] = await db.execute(query, values);
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Database error. Please try again.');
  }
};

module.exports = { findUserByEmail, createUser };
