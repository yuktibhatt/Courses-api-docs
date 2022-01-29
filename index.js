const express= require('express');

const app = express()

//swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses =[
    {
        id: "11",
        name : "Learn React Js",
        price: 299
    },
    {
        id: "22",
        name : "Learn Angular Js",
        price: 499
    },
    {
        id: "33",
        name : "Learn Django",
        price: 399
    },
];

app.get("/", (req, res) => {
    res.send("Hello there.. ");
});

app.get("/api/v1/lco", (req, res) => {
    res.send("hello from lco docs");
});

app.get("/api/v1/lcoobject", (req, res) => {
    res.send({ id: "55", name: "Learn Backend", price: 999});
});

app.get("/api/v1/courses", (req, res) => {
    res.send(courses);
});
app.get("/api/v1/mycourse/:courseId", (req, res) => {
    const myCourse = courses.find(course => course.id === req.params.courseId )
    res.send(myCourse);
});






app.listen(4000, () => console.log(`Server is running at port 4000..`));
