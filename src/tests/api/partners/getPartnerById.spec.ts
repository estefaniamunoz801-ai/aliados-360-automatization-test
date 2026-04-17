import { test, expect, APIResponse } from '@playwright/test';
import { PartnersService } from '../../../services/partners.service';
import { getPartnerByIdData } from '../../../data/partners';

test.describe("Get Partner By ID", () => {
  let partnersService: PartnersService;

  test.beforeEach(async ({ request }) => {
    partnersService = new PartnersService(request);
  });

  // SUCCESS SCENARIOS
  //test to get a partner with a valid id
  test("should get a partner with a valid id", async () => {
    const existingPartner = getPartnerByIdData.existingPartner;

    const response = await test.step("send a GET request to get a partner with a valid id", async () => {
      return await partnersService.getPartnerById(existingPartner.id);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(existingPartner.expectedName);
    });

  });


  // FAILURE SCENARIOS
  //test to get a partner with a non-existing id
  test("should not get a partner with a non-existing id", async () => {
    const nonExistingId = getPartnerByIdData.nonExistingId;

    const response = await test.step("send a GET request to get a partner with a non-existing id", async () => {
      return await partnersService.getPartnerById(nonExistingId);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(404);
      expect(response.body.message).toContain("Partner not found");
    });

  });


});