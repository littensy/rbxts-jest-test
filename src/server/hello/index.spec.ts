import { describe, expect, it } from "@rbxts/jest-globals";
import { hello } from "./index";

describe("hello", () => {
	it("should return hello", () => {
		expect(hello()).toEqual(expect.stringContaining("hel"));
	});

	it("should not return heplo", () => {
		expect(() => {
			expect(hello()).toEqual(expect.stringContaining("hep"));
		}).toThrow();
	});
});
