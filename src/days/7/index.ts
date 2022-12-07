import { readFileSync } from "fs";
import { InputHandler } from "./InputHandler";

const input = readFileSync(process.argv[2], "utf8");
new InputHandler().processInput(input);
