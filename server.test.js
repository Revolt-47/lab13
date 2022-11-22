const request = require("supertest");
const app = require("./routes/User");
const mongoose = require('mongoose');

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect('mongodb://localhost:27017/lab13');
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("Test the root path",()=>{
    test("Post method",()=>{
        const response = request(app).post("http://localhost:3001/User")
        .send({
            Name : "Lala",
            Email : "123",
            Age : 12,
            Contact : 123
        })
        expect(response.StatusCode).toBe(200);
    })
})

describe("Test delete",()=>{
    test("delete method",()=>{
        const response = request(app).delete("http;//localhost:3001/:id")
        .send({
            id : "637c8495b6aa4305038c4732"
        })
        expect(response.StatusCode).toBe(200);
    })
})

describe("Find method",()=>{
    test("find method",()=>{
        const response = request(app).delete("http;//localhost:3001/find")
        .send({
            name : "123"
        })
        expect(response.StatusCode).toBe(200);
    })
})