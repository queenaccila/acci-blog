import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import slugify from "slugify";

// CLI -> node NewPost.js

// Define the template folder paths
const TEMPLATES = {
    general: "./src/content/templates/General.mdx",
    art: "./src/content/templates/Art.mdx",
    photo: "./src/content/templates/Photo.mdx",
    video: "./src/content/templates/Video.mdx",
    inboxAnon: "./src/content/templates/Inbox-Anon.mdx",
    inboxUser: "./src/content/templates/Inbox-User.mdx",
    inboxAnonImg: "./src/content/templates/Inbox-Anon-Img.mdx",
    inboxUserImg: "./src/content/templates/Inbox-User-Img.mdx",
};

async function main() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the post title:",
            validate: (input) => input.trim() !== "" || "Title cannot be empty",
        },
        {
            type: "list",
            name: "type",
            message: "Select the post type:",
            choices: ["general", "art", "video", "inboxAnon", "inboxUser", "inboxAnonImg", "inboxUserImg"],
        },
        {
            type: "input",
            name: "slug",
            message: "Enter the post slug (identifier):",
            validate: (input) => input.trim() !== "" || "Slug cannot be empty",
            filter: (input) => slugify(input.trim(), { lower: true }),
        },
    ]);

    const { title, type, slug } = answers;

    // Generate date
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 01–12
    const date = now.toISOString();

    // Automatically generate folder path: ./content/posts/YYYY/MM
    const folderPath = path.join("./src/content/posts", String(year), month);

    // Read template
    const templatePath = TEMPLATES[type];
    if (!fs.existsSync(templatePath)) {
        console.error(`Template for type "${type}" does not exist!`);
        process.exit(1);
    }

    let content = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders
    content = content.replace(/\{\{TITLE\}\}/g, title);
    content = content.replace(/\{\{SLUG\}\}/g, slug);
    content = content.replace(/\{\{DATE\}\}/g, date);

    // Ensure folder exists
    fs.mkdirSync(folderPath, { recursive: true });

    // Write the new MDX file
    const filePath = path.join(folderPath, `${slug}.mdx`);
    fs.writeFileSync(filePath, content);

    console.log(`Created new MDX post! ${filePath}`);
}

main();
