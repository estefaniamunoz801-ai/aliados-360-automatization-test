import { test, expect, APIResponse } from '@playwright/test';
import { PartnersService } from '../../../services/partners.service';
import { createPartnerData } from '../../../data/partners';

test.describe("Create Partner", () => {
  let partnersService: PartnersService;

  test.beforeEach(async ({ request }) => {
    partnersService = new PartnersService(request);
  });

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

  //test to create a partner with invalid data
  test("should not create a partner with invalid data", async () => {
    const invalidRequests = createPartnerData.invalidRequests;

    const response = await test.step("send a POST request to create a partner with invalid data", async () => {
      return await partnersService.createPartner(invalidRequests.emptyName);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
    });

    await test.step("validate error message in response body", async () => {      
      expect(response.body).toHaveProperty("InvalidPartnerNameError");
      expect(response.body.InvalidPartnerNameError).toContain("Partner name is required");
    });
    
  });

});

