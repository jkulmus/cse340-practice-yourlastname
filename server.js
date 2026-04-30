// Imports
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Declare Important Variables
 */
const PORT = process.env.PORT || 3000;

 // Corret for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Setup Express Server
 */
const app = express();

/**
 * Configure Express middleware
 */
// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

/**
 * Declare Routes
 */
app.get("/", (req, res) => {
    res.render("home", { title: "Welcome Home" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Me" });
});

app.get("/products", (req, res) => {
    res.render("products", { title: "Our Products" });
});

app.get("/student", (req, res) => {
    const student = {
        name: "Student Name",
        id: "123456",
        email: "name@example.com",
        address: "123 University Way"
    };

    res.render('student', {
        title: "Student Profile",
        student
    });
});

/**
 * Start server
 */
app.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}`);
});