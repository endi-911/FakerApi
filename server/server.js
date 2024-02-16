import express from "express"
import {faker} from "@faker-js/faker"

const app = express();
const port = 8000;

const createUser = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    }
})

app.get("/api/users/new", (req,res) => {
    const newUser = createUser();
    res.json(newUser)
})

app.get("/api/companies/new", (req,res) => {
    const newCompany = createCompany();
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
        user: newUser,
        company: newCompany
    }
    res.json(responseObject)
})

app.listen(port, () => console.log(`express running on port ${port}`));