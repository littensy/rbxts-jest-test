import { runCLI } from "@rbxts/jest";

runCLI(script, {}, [script.Parent!]).expect();
