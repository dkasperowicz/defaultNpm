import {greeter} from "../src/index"
import {expect} from "chai";
import "mocha";

describe("Greeter function", () =>
{
	it("Should return 'Hello Dawid'", () =>
	{
		const result = greeter("Dawid");

		expect(result).to.equal("Hello Dawid");
	});

	it("Should return 'Hello Kasperowicz'", () =>
	{
		const result = greeter("Kasperowicz");

		expect(result).to.equal("Hello Kasperowicz");
	});

	it("Should return 'Hello Dawid Kasperowicz'", () =>
	{
		const result = greeter("Dawid Kasperowicz");

		expect(result).to.equal("Hello Dawid Kasperowicz");
	});

	it("Should return 'Hello Kasperowicz, Dawid'", () =>
	{
		const result = greeter("Kasperowicz, Dawid");

		expect(result).to.equal("Hello Kasperowicz, Dawid");
	});
});