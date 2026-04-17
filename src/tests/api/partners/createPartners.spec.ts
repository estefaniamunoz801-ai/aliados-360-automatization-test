import { test, expect, APIResponse } from '@playwright/test';
import { PartnersService } from '../../../services/partners.service';
import { createPartnerData } from '../../../data/partners';

test.describe("Create Partner", () => {
  let partnersService: PartnersService;

  test.beforeEach(async ({ request }) => {
    partnersService = new PartnersService(request);
  });

  // SUCCESS SCENARIOS
  //test to create a partner with valid data
  test("should create a partner with valid data", async () => {
    const requestData = createPartnerData.validRequest;

    const response = await test.step("send a POST request to create a partner", async () => {
      return await partnersService.createPartner(requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(201);
    });

    await test.step("validate response body", async () => {
      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe(requestData.name);
      expect(response.body.active).toBe(true);
    });

  });

  // FAILURE SCENARIOS
  //test to create a partner with an empty name
  test("should not create a partner with an empty name", async () => {
    const invalidRequests = createPartnerData.invalidRequests;

    const response = await test.step("send a POST request to create a partner with invalid data", async () => {
      return await partnersService.createPartner(invalidRequests.emptyName);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
    });

  });

  //test to create a partner with a only spaces name (blank name)
  test("should not create a partner with a only spaces name", async () => {
    const invalidRequests = createPartnerData.invalidRequests;

    const response = await test.step("send a POST request to create a partner with invalid data", async () => {
      return await partnersService.createPartner(invalidRequests.blankName);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
    });

  });

  //test to create a partner with a null name
  test("should not create a partner with a null name", async () => {
    const invalidRequests = createPartnerData.invalidRequests;

    const response = await test.step("send a POST request to create a partner with invalid data", async () => {
      return await partnersService.createPartner(invalidRequests.nullName);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
    });

  });

  //test to create a partner with an undefined name
  test("should not create a partner with an undefined name", async () => {
    const invalidRequests = createPartnerData.invalidRequests;

    const response = await test.step("send a POST request to create a partner with invalid data", async () => {
      return await partnersService.createPartner(invalidRequests.undefinedName);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
    });

  });


});
