const express = require('express');
const roomacle = express();
const inputSite = express();

const portRoomacle = 3000;
const portInputSite = 3001;


const PW = 'password';


roomacle.listen(portRoomacle, () => console.log('roomacle listening at Port ' + portRoomacle));
roomacle.use(express.static('roomacle'));
roomacle.use(express.json({ limit: '10mb' }));

inputSite.listen(portInputSite, () => console.log('InputSite listening at Port ' + portInputSite));
inputSite.use(express.static('input'));
inputSite.use(express.json({ limit: '10mb' }));

const Datastore = require('nedb');

const timings = new Datastore('./databases/timings.db');
timings.loadDatabase();

const meetings = new Datastore('./databases/meetings.db');
meetings.loadDatabase();

const persons = new Datastore('./databases/persons.db');
persons.loadDatabase();

const announcements = new Datastore('./databases/announcements.db');
announcements.loadDatabase();

const setup = new Datastore('./databases/setup.db');
setup.loadDatabase();

const testdb = new Datastore('./databases/test.db');
testdb.loadDatabase();


function recieve(request, response) {
    const data = request.body;
    console.log(data.type);
    if (data.type == "timings") {
        timings.find({}).sort({ tStart: 1 }).exec(function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Send timings");
                response.json(docs);
            }
        });
    } else if (data.type == "meetings") {
        meetings.find({}).sort({ std_start: 1 }).exec(function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Send meetings");
                response.json(docs);
            }
        });
    } else if (data.type == "persons") {
        persons.find({}).sort({ name: 1 }).exec(function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Send persons");
                response.json(docs);
            }
        });
    } else if (data.type == "announcements") {
        announcements.find({}).sort({ pinned: -1, date: -1, time: -1 }).exec(function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Send announcements");
                response.json(docs);
            }
        });
    } else if (data.type == "setup") {
        setup.find({}).exec(function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Send setup");
                response.json(docs);
            }
        });
    } else {
        console.log("Wrong data.type!")
        response.end();
    }

}

roomacle.post('/recieve', (request, response) => {
    console.log('Recieve roomacle, Port ' + portRoomacle + ':');
    recieve(request, response);
});

inputSite.post('/recieve', (request, response) => {
    console.log('Recieve inputSite, Port ' + portInputSite + ':');
    recieve(request, response);
});

inputSite.post('/send', (request, response) => {
    console.log('Send inputSite, Port ' + portInputSite + ':');
    const data = request.body;
    console.log(request);
    if (data != "") {
        if (data.timings == "") {
            console.log("No timings recieved");
        } else {
            console.log("Got timings: ");
            console.log(data.timings);
            timings.remove({}, { multi: true }, function (err, numRemoved) {

            });
            timings.insert(data.timings);
            timings.loadDatabase();
        }

        if (data.meetings == "") {
            console.log("No meetings recieved");
        } else {
            console.log("Got meetings: ");
            console.log(data.meetings);
            meetings.remove({}, { multi: true }, function (err, numRemoved) {

            });
            meetings.insert(data.meetings);
            meetings.loadDatabase();
        }

        if (data.persons == "") {
            console.log("No persons recieved");
        } else {
            console.log("Got persons: ");
            console.log(data.persons);
            persons.remove({}, { multi: true }, function (err, numRemoved) {

            });
            persons.insert(data.persons);
            persons.loadDatabase();
        }

        if (data.announcements == "") {
            console.log("No announcements recieved");
        } else {
            console.log("Got announcements: ");
            console.log(data.announcements);
            announcements.remove({}, { multi: true }, function (err, numRemoved) {

            });
            announcements.insert(data.announcements);
            announcements.loadDatabase();
        }

        if (data.setup == "") {
            console.log("No setup recieved");
        } else {
            console.log("Got setup: ");
            console.log(data.setup);
            setup.remove({}, { multi: true }, function (err, numRemoved) {

            });
            setup.insert(data.setup);
            setup.loadDatabase();
        }
    } else {
        console.log("Recieved no data.")
    }
    response.json(data);
});

inputSite.post('/pw', (request, response) => {
    console.log('Recieve inputSite, Port ' + portInputSite + ':');
    const data = request.body;
    console.log(data);
    if (data.input == PW) {
        console.log('Correct Password');
        response.json('correct password');
    } else {
        console.log('Wrong Password');
        response.json('wrong password');
    }
    response.end();
});
