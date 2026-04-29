import { test, expect, APIResponse } from "@playwright/test";

test.describe("API Routing", () => {

    test("should return 404 when endpoint does not exist", async ({ request }) => {

        let response: APIResponse;
        let invalidEndpoint = "/invalid/partners"

        await test.step("send request to a non-existing endpoint", async () => {
            response = await request.post(invalidEndpoint, { data: { test: "data" } });
        });

        await test.step("validate HTTP status code", async () => {
            expect(response.status()).toBe(404);
        });

    });

});
