// const db = require( "./db" );
// const { students } = require( "./db" );

// const Query = {
//     test: () => 'Test Success, GraphQL server is up & running !!',
//     students: () => db.students.list(),
//     studentById: ( root, args, context, info ) => {
//         //args will contain parameter passed in query
//         return db.students.get( args.id );
//     },
// };
// module.exports = { Query };
const db = require( './db' );
const Query = {
    //resolver function for greeting
    greeting: () => {
        return "hello from  TutorialsPoint !!!";
    },

    //resolver function for students returns list
    students: () => db.students.list(),

    // resolver function for studentbyId
    studentById: ( root, args, context, info ) => {
        //args will contain parameter passed in query
        return db.students.get( args.id );
    }
};

//for each single student object returned,resolver is invoked

const Student = {
    fullName: ( root, args, context, info ) => {
        return root.firstName + ":" + root.lastName;
    }
};

module.exports = { Query, Student };