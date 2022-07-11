const express = require("express");
const { faker } = require ('@faker-js/faker');
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        id : faker.datatype.uuid()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const createBoth = ({ 
        user : createUser(), 
        company : createCompany(),
    });
    res.json({createBoth});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );