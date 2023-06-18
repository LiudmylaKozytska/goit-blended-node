const { log } = require("console");
const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);

const usersPath = path.join(__dirname, "..", "db", "users.json");
// console.log(usersPath);

class FileOperations {
  constructor(usersPath) {
    this.usersPath = usersPath;
  }

  async read() {
    return await fs.readFile(this.usersPath, "utf-8");
  }

  display = async () => {
    console.log(await this.read());
  };

  async create(data) {
    return await fs.writeFile(this.usersPath, JSON.stringify(data, null, 2));
  }

  async update(data) {
    const users = JSON.parse(await this.read());
    users.push(data);
    return this.create(users);
  }

  async remove() {
    return await fs.unlink(this.usersPath);
  }
}

const file = new FileOperations(usersPath);

// file.display();

const data = [
  { id: "1", name: "Luda" },
  {
    id: "2",
    name: "Yaroslav",
  },
  {
    id: "3",
    name: "Inna",
  },
];

// file.create(data);

// file.update({
//   id: "4",
//   name: "Andrii",
// });

// file.remove();

async function tryCatchHandler(clb) {
  try {
    await clb();
  } catch (error) {
    console.log("Luda", error.message);
  }
}

// tryCatchHandler(file.display.call(file));

tryCatchHandler(file.display);
